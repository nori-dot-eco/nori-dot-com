import { Fetch } from './index';
import type { Options, ApiEndpoint, ApiMethod, Method, Email } from './index';

export interface UnparsedTokenApiRequestBody {
  Email: Email;
  Password: string;
}

export type TokenApiRequestBody = string;

export interface TokenApiCall {
  response: TokenApiResponse;
  request: TokenApiRequest;
}

export interface TokenApiRequest extends Options {
  body: TokenApiRequestBody;
}

export interface TokenApiResponse {
  jwtToken: string;
  id: string;
  tokenExpirationTime: string;
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

  #headers: Options['headers'] = { 'Content-Type': 'application/json' };

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
    email: UnparsedTokenApiRequestBody['Email'];
    password: UnparsedTokenApiRequestBody['Password'];
  }): Promise<TokenApiResponse> {
    return this.#apiFetcher.fetch({
      body: JSON.stringify({ Email: email, Password: password }),
      headers: this.#headers,
    });
  }
}
