import type { TokenApiResponse } from '../index';
import { Client, createClient, Auth, Upload } from '../index';

import { CREDENTIALS, mockTokenEndpoint } from './utils';

jest.mock('node-fetch');

describe('Soil Metrics GGIT API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Client', () => {
    describe('constructor', () => {
      it('will create a soil metrics GGIT API client', () => {
        expect(new Client()).toBeInstanceOf<ClassType<Client>>(Client);
      });
    });

    describe('properties', () => {
      describe('jwt', () => {
        describe('before the client is configured', () => {
          it('will return undefined', () => {
            expect(new Client().jwt).toStrictEqual<Client['jwt']>(undefined);
          });
        });

        describe('after the client is configured', () => {
          it('will return the jwt response', async () => {
            const { expectedResponse } = mockTokenEndpoint<TokenApiResponse>();
            const client = await new Client().configure(CREDENTIALS);
            expect(client.jwt).toStrictEqual<Client['jwt']>(expectedResponse);
          });
        });
      });

      describe('auth', () => {
        it('will return the auth instance', () => {
          expect(new Client().auth).toBeInstanceOf<ClassType<Auth>>(Auth);
        });
      });

      describe('upload', () => {
        it('will return the upload instance', () => {
          expect(new Client().upload).toBeInstanceOf<ClassType<Upload>>(Upload);
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

      describe('configure', () => {
        it('will not throw an error when configuring if the credentials are valid', async () => {
          mockTokenEndpoint();
          await expect(
            new Client().configure(CREDENTIALS)
          ).resolves.toBeInstanceOf<ClassType<Client>>(Client);
        });
        it('will throw an error when configuring if the credentials are invalid', async () => {
          mockTokenEndpoint({ throws: true });
          await expect(
            new Client().configure({
              email: 'foo@nori.com',
              password: '',
            })
          ).rejects.toStrictEqual('{"status":401,"ok":false}');
        });
      });

      describe('createClient', () => {
        it('will not throw an error when configuring if the credentials are valid', async () => {
          mockTokenEndpoint();
          await expect(createClient(CREDENTIALS)).resolves.toBeInstanceOf<
            ClassType<Client>
          >(Client);
        });
        it('will throw an error when configuring if the credentials are invalid', async () => {
          mockTokenEndpoint({ throws: true });
          await expect(
            createClient({
              email: 'foo@nori.com',
              password: '',
            })
          ).rejects.toStrictEqual('{"status":401,"ok":false}');
        });
      });
    });
  });
});
