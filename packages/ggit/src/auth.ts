import { Fetch } from './index';
import type { Options, ApiEndpoint, ApiMethod, Method, Email } from './index';

/**
 *
 * @example
 */
export interface UnparsedTokenApiRequestBody {
  email: Email;
  password: string;
}

export type TokenApiRequestBody = string;

/**
 *
 * @example
 */
export interface TokenApiCall {
  response: TokenApiResponse;
  request: TokenApiRequest;
}

/**
 *
 * @example
 */
export interface TokenApiRequest extends Options<TokenApiCall> {
  body: TokenApiRequestBody;
}

/**
 *
 * @example
 */
export interface TokenApiResponse {
  jwtToken: string;
  id: string;
  tokenExpirationTime: number;
}

export class Auth implements ApiMethod {
  readonly method: Method = 'auth';

  #token: Token;

  constructor() {
    this.#token = new Token({ method: this.method });
  }

  get token(): Token {
    return this.#token;
  }
}

export class Token implements ApiEndpoint {
  readonly endpoint = 'token';

  #apiFetcher: Fetch<TokenApiCall>;

  #headers: Options<TokenApiCall>['headers'] = {
    'Content-Type': 'application/json',
  };

  constructor({ method }: { method: Auth['method'] }) {
    this.#apiFetcher = new Fetch({
      method,
      endpoint: this.endpoint,
    });
  }

  async fetch({
    email,
    password,
  }: {
    email: UnparsedTokenApiRequestBody['email'];
    password: UnparsedTokenApiRequestBody['password'];
  }): Promise<TokenApiResponse> {
    return this.#apiFetcher.fetch({
      body: JSON.stringify({ email, password }),
      headers: this.#headers,
    });
  }
}
