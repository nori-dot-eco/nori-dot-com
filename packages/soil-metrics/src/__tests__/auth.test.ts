import { Auth, Token } from '../index';

describe('Auth', () => {
  describe('Token', () => {
    describe('method', () => {
      it('should return the API method name', () => {
        expect(new Token({ method: new Auth().method }).endpoint).toStrictEqual<
          Token['endpoint']
        >('token');
      });
    });
  });
});
