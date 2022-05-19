import FormData = require('form-data');

import { Fetch, Client } from './index';
import type {
  ApiEndpoint,
  ApiMethod,
  CallbackUri,
  Email,
  Method,
  TokenApiResponse,
  Options,
} from './index';

export type DaycentV1ApiFormDataNames = '' | 'Id' | 'email' | 'callbackUrl';

/**
 *
 * @example
 */
export interface DaycentV1ApiResponse {
  message: string;
  error: string;
}

/**
 *
 * @example
 */
export interface DaycentV1ApiRequestBody extends FormData {
  append(
    name: DaycentV1ApiFormDataNames,
    value: string | Blob,
    fileName?: string
  ): void;
}

/**
 *
 * @example
 */
export interface DaycentV1ApiCall {
  response: DaycentV1ApiResponse;
  request: DaycentV1ApiRequest;
}

/**
 *
 * @example
 */
export interface DaycentV1ApiRequest extends Options<DaycentV1ApiCall> {
  body: DaycentV1ApiRequestBody;
}

export class DaycentV1 implements ApiEndpoint {
  readonly endpoint = 'daycentv1';

  #apiFetcher: Fetch<DaycentV1ApiCall>;

  constructor({ method }: { method: Upload['method'] }) {
    this.#apiFetcher = new Fetch({
      method,
      endpoint: this.endpoint,
    });
  }

  async fetch({
    file,
    email,
    callbackUrl,
    fileName,
    jwt,
  }: {
    file: Buffer;
    email?: Email;
    callbackUrl: CallbackUri;
    fileName: string;
    jwt: TokenApiResponse;
  }): Promise<DaycentV1ApiResponse> {
    const form = new FormData();
    form.append('', file, fileName);
    form.append('Id', jwt.id);
    form.append('email', email || '');
    form.append('callbackUrl', callbackUrl);
    return this.#apiFetcher.fetch({
      body: form,
      headers: Client.buildAuthorizationHeader({ jwtToken: jwt.jwtToken }),
    });
  }
}

export class Upload implements ApiMethod {
  readonly method: Method = 'upload';

  #daycentV1: DaycentV1;

  constructor() {
    this.#daycentV1 = new DaycentV1({
      method: this.method,
    });
  }

  get daycentV1(): DaycentV1 {
    return this.#daycentV1;
  }
}
