import type { DaycentV1ApiCall, TokenApiCall } from './index';

export type Method = 'auth' | 'upload';

export type Url = 'https://api.soilmetrics.eco/api';

export type HttpMethod = `POST`;

export type Endpoint = 'token' | 'daycentv1';

export type Email = `${string}@${string}.${string}`;

export type CallbackUri = `https://${string}.${string}${'/'}${string}`;

export type Uri = `${Url}/${Method}/${Endpoint}`;

export type ApiCall = DaycentV1ApiCall | TokenApiCall;

export abstract class ApiEndpoint {
  readonly endpoint: Endpoint;
}

export abstract class ApiMethod {
  readonly method: Method;
}
