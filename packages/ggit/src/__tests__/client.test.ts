import type { TokenApiResponse } from '../index';
import { Client, Auth, Upload } from '../index';

import { CREDENTIALS, mockTokenEndpoint } from './utils';

jest.mock('node-fetch');

describe('Soil Metrics GGIT API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Client', () => {
    describe('constructor', () => {
      it('will create a soil metrics GGIT API client', () => {
        expect(
          new Client({
            jwt: {
              jwtToken: '',
              id: '',
              tokenExpirationTime: Date.now() / 1000,
            },
          })
        ).toBeInstanceOf<ClassType<Client>>(Client);
      });
    });

    describe('properties', () => {
      describe('jwt', () => {
        describe('after the client is configured', () => {
          it('will return the jwt response', () => {
            const { expectedResponse } = mockTokenEndpoint<TokenApiResponse>();
            const client = new Client({
              jwt: {
                jwtToken: '',
                id: '',
                tokenExpirationTime: Date.now() / 1000,
              },
            });
            expect(client.jwt).toStrictEqual<Client['jwt']>(expectedResponse);
          });
        });
      });

      describe('auth', () => {
        it('will return the auth instance', () => {
          expect(
            new Client({
              jwt: {
                jwtToken: '',
                id: '',
                tokenExpirationTime: Date.now() / 1000,
              },
            }).auth
          ).toBeInstanceOf<ClassType<Auth>>(Auth);
        });
      });

      describe('upload', () => {
        it('will return the upload instance', () => {
          expect(
            new Client({
              jwt: {
                jwtToken: '',
                id: '',
                tokenExpirationTime: Date.now() / 1000,
              },
            }).upload
          ).toBeInstanceOf<ClassType<Upload>>(Upload);
        });
      });
    });

    describe('methods', () => {
      describe('buildAuthorizationHeader', () => {
        it('will build the authorization header', () => {
          expect(
            Client.buildAuthorizationHeader({ jwtToken: '12345' })
          ).toStrictEqual<ReturnType<typeof Client.buildAuthorizationHeader>>({
            authorization: 'Bearer 12345' as const,
          });
        });
      });
    });

    describe('static methods', () => {
      describe('createWithCredentials', () => {
        it('will not throw an error when configuring if the credentials are valid', async () => {
          mockTokenEndpoint();
          await expect(
            Client.createWithCredentials(CREDENTIALS)
          ).resolves.toBeInstanceOf<ClassType<Client>>(Client);
        });

        it('will throw an error when configuring if the credentials are invalid', async () => {
          mockTokenEndpoint({ throws: true });
          await expect(
            Client.createWithCredentials({
              email: 'foo@nori.com',
              password: '',
            })
          ).rejects.toStrictEqual('{"status":401,"ok":false}');
        });
      });
    });
  });
});
