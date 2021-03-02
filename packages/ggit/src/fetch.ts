import FormData = require('form-data');
import fetch from 'node-fetch';
import type { HeadersInit, RequestInit } from 'node-fetch';

import type {
  ApiCall,
  Endpoint,
  HttpMethod,
  Method,
  Uri,
  Url,
  TokenApiResponse,
} from './index';

export interface Options extends RequestInit {
  method: HttpMethod;
  redirect: 'follow';
  headers: HeadersInit & {
    authorization?: `Bearer ${TokenApiResponse['jwtToken']}`;
    'Content-Type'?: 'application/json';
  };
  body: string | FormData;
}

export class Fetch<ApiType extends ApiCall> {
  #url: Url = 'https://api.soilmetrics.eco/api';

  #method: Method;

  #endpoint: Endpoint;

  #httpMethod: Options['method'] = 'POST';

  constructor({ method, endpoint }: { method: Method; endpoint: Endpoint }) {
    this.#method = method;
    this.#endpoint = endpoint;
  }

  get uri(): Uri {
    return `${this.#url}/${this.#method}/${this.#endpoint}` as const;
  }

  async fetch({
    body,
    headers,
  }: {
    body: ApiType['request']['body'];
    headers: ApiType['request']['headers'];
  }): Promise<ApiType['response']> {
    try {
      const options = this.buildOptions({
        body,
        headers,
      });
      const response = await fetch(this.uri, options);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(JSON.stringify(data));
      }
      return data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error making request', e);
      throw e;
    }
  }

  private buildOptions({
    body,
    headers,
  }: {
    body: ApiType['request']['body'];
    headers: ApiType['request']['headers'];
  }): ApiType['request'] {
    return {
      method: this.#httpMethod,
      body,
      headers,
    } as ApiType['request'];
  }
}
