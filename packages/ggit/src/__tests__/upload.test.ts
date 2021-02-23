import * as fs from 'fs';
import * as path from 'path';

import { Client } from '../index';

import { CREDENTIALS, mockDaycentV1Endpoint, mockTokenEndpoint } from './utils';

jest.mock('node-fetch');

describe('Upload', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('DaycentV1', () => {
    describe('fetch', () => {
      it('should send data to upload to the API', async () => {
        mockTokenEndpoint();
        const client = await new Client().configure(CREDENTIALS);
        expect(client.jwt).toStrictEqual<Client['jwt']>({
          id: expect.any(String),
          jwtToken: expect.any(String),
          tokenExpirationTime: expect.any(Number),
        });
        mockDaycentV1Endpoint();
        await expect(
          client.upload.daycentV1.fetch({
            file: fs.readFileSync(path.join(__dirname, './example-input.json')),
            email: CREDENTIALS.email,
            callbackUrl: 'https://foobar.nori.com/api/v1',
            fileName: 'example-input.json',
            jwt: client.jwt,
          })
        ).resolves.toStrictEqual<
          ResolvedReturnType<typeof client.upload.daycentV1.fetch>
        >({
          message:
            "Uploaded 1 file(s) successfully. 0 file(s) were skipped due to validation errors.   To see the queue check the 'Runs' tab.",
          error: '',
        });
      });
    });
  });
});
