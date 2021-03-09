import type {
  TokenApiCall,
  Options,
  TokenApiResponse,
  UnparsedTokenApiRequestBody,
} from './index';
import { Upload, Auth } from './index';

export class Client {
  #auth: Auth;

  #upload: Upload;

  #jwt: TokenApiResponse;

  constructor() {
    this.#auth = new Auth();
    this.#upload = new Upload();
  }

  get jwt(): TokenApiResponse {
    return this.#jwt;
  }

  get auth(): Auth {
    return this.#auth;
  }

  get upload(): Upload {
    return this.#upload;
  }

  static buildAuthorizationHeader({
    jwtToken,
  }: {
    jwtToken: TokenApiResponse['jwtToken'];
  }): Options<TokenApiCall>['headers'] {
    return { authorization: `Bearer ${jwtToken}` as const };
  }

  async configure({
    email,
    password,
  }: {
    email: UnparsedTokenApiRequestBody['Email'];
    password: UnparsedTokenApiRequestBody['Password'];
  }): Promise<this> {
    this.#jwt = await this.#auth.token.fetch({ email, password });
    return this;
  }
}

export const createClient = async ({
  email,
  password,
}: {
  email: UnparsedTokenApiRequestBody['Email'];
  password: UnparsedTokenApiRequestBody['Password'];
}): Promise<Client> => {
  return new Client().configure({ email, password });
};
