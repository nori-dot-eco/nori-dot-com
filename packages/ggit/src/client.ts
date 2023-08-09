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

  constructor({ jwt }: { jwt: TokenApiResponse }) {
    this.#auth = new Auth();
    this.#upload = new Upload();
    this.#jwt = jwt;
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

  static async createWithCredentials({
    email,
    password,
  }: {
    email: UnparsedTokenApiRequestBody['Email'];
    password: UnparsedTokenApiRequestBody['Password'];
  }): Promise<Client> {
    const jwt = await new Auth().token.fetch({ email, password });
    return new Client({ jwt });
  }
}
