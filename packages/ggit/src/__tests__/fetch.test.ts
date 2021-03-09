import FormData = require('form-data');

import type { TokenApiCall, DaycentV1ApiCall } from '../index';
import { Auth, Token, Fetch } from '../index';

describe('Fetch', () => {
  describe('constructor', () => {
    it('will create a soil metrics GGIT API client', () => {
      const { method } = new Auth();
      const { endpoint } = new Token({ method });
      expect(new Fetch({ method, endpoint })).toBeInstanceOf<
        ClassType<Fetch<TokenApiCall>>
      >(Fetch);
    });
  });

  describe('properties', () => {
    describe('`uri`', () => {
      it('should return the URI', () => {
        const { method } = new Auth();
        const { endpoint } = new Token({ method });
        expect(new Fetch({ method, endpoint }).uri).toStrictEqual<
          Fetch<TokenApiCall>['uri']
        >(`https://api.soilmetrics.eco/api/${method}/${endpoint}` as const);
      });
    });
  });

  describe('methods', () => {
    describe('buildOptions', () => {
      it('should be able to build fetch options', () => {
        const { method } = new Auth();
        const { endpoint } = new Token({ method });
        expect(
          new Fetch<DaycentV1ApiCall>({ method, endpoint })['buildOptions']({
            body: new FormData(),
            headers: {},
          })
        ).toStrictEqual({
          method: 'POST',
          body: new FormData(),
          headers: {},
        });
      });
    });
  });
});
