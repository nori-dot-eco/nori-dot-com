import type { TokenApiResponse } from '../index';
import { Auth, Token } from '../index';

import { CREDENTIALS, mockTokenEndpoint } from './utils';

jest.mock('node-fetch');

describe('Auth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('will create a soil metrics GGIT API client', () => {
      expect(new Auth()).toBeInstanceOf<ClassType<Auth>>(Auth);
    });
  });

  describe('properties', () => {
    describe('`method`', () => {
      it('should return the API method name', () => {
        expect(new Auth().method).toStrictEqual<Auth['method']>('auth');
      });
    });

    describe('`token`', () => {
      it('should return the Token class', () => {
        expect(new Auth().token).toBeInstanceOf<ClassType<Auth['token']>>(
          Token
        );
      });
    });
  });

  describe('Token', () => {
    describe('constructor', () => {
      it('will create a soil metrics GGIT API client', () => {
        expect(new Token({ method: new Auth().method })).toBeInstanceOf<
          ClassType<Token>
        >(Token);
      });
    });

    describe('properties', () => {
      describe('`endpoint`', () => {
        it('should return the API method name', () => {
          expect(
            new Token({ method: new Auth().method }).endpoint
          ).toStrictEqual<Token['endpoint']>('token');
        });
      });
    });

    describe('fetch', () => {
      it('will not throw an error when configuring if the credentials are valid', async () => {
        const { expectedResponse } = mockTokenEndpoint<TokenApiResponse>();
        await expect(
          new Token({ method: new Auth().method }).fetch(CREDENTIALS)
        ).resolves.toStrictEqual<ResolvedReturnType<Token['fetch']>>(
          expectedResponse
        );
      });
      it('will throw an error when configuring if the credentials are invalid', async () => {
        const { expectedResponse } = mockTokenEndpoint<string>({
          throws: true,
        });
        await expect(
          new Token({ method: new Auth().method }).fetch({
            email: 'foo@nori.com',
            password: '',
          })
        ).rejects.toStrictEqual(expectedResponse);
      });
    });
  });
});
