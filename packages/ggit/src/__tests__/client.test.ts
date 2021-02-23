import { Client, createClient } from '../index';

import { CREDENTIALS, mockTokenEndpoint } from './utils';

jest.mock('node-fetch');

describe('Soil Metrics GGIT API', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('Client', () => {
    describe('constructor', () => {
      it('will create a soil metrics GGIT API client', () => {
        expect(new Client()).toBeInstanceOf(Client);
      });
    });

    describe('configure', () => {
      it('will not throw an error when configuring if the credentials are invalid', async () => {
        mockTokenEndpoint();
        await expect(
          new Client().configure(CREDENTIALS)
        ).resolves.toBeInstanceOf(Client);
      });
      it('will throw an error when configuring if the credentials are invalid', async () => {
        mockTokenEndpoint({ throws: true });
        await expect(new Client().configure(CREDENTIALS)).rejects.toStrictEqual(
          {}
        );
      });
    });

    describe('createClient', () => {
      it('will not throw an error when configuring if the credentials are invalid', async () => {
        mockTokenEndpoint();
        await expect(createClient(CREDENTIALS)).resolves.toBeInstanceOf(Client);
      });
      it('will throw an error when configuring if the credentials are invalid', async () => {
        mockTokenEndpoint({ throws: true });
        await expect(createClient(CREDENTIALS)).rejects.toStrictEqual({});
      });
    });
  });
});
