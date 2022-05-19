import fetch from 'node-fetch';

import type { TokenApiResponse } from '../index';

export const CREDENTIALS = {
  email: 'foo@nori.com',
  password: 'bar',
} as const;

export const mockTokenEndpoint = <
  ExpectedResponseType extends TokenApiResponse | string
>({ throws }: { throws?: boolean } = {}): {
  mockFetch: jest.MockedFunction<typeof fetch>;
  expectedResponse: ExpectedResponseType;
} => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
  const expectedResponse = (
    throws
      ? JSON.stringify({
          status: 401,
          ok: false,
          json: jest.fn(() => {
            return Promise.resolve({});
          }),
        })
      : {
          id: '',
          jwtToken: '',
          tokenExpirationTime: 0,
        }
  ) as ExpectedResponseType;
  mockFetch.mockImplementationOnce((): Promise<any> => {
    if (throws) {
      return Promise.reject<Partial<ResolvedReturnType<typeof fetch>>>(
        expectedResponse
      );
    }
    return Promise.resolve<Partial<ResolvedReturnType<typeof fetch>>>({
      status: 200,
      ok: true,
      json: jest.fn(() => {
        return Promise.resolve(expectedResponse);
      }),
    });
  });
  return {
    mockFetch,
    expectedResponse,
  };
};

export const mockDaycentV1Endpoint = (): jest.MockedFunction<typeof fetch> => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
  mockFetch.mockImplementationOnce((): Promise<any> => {
    return Promise.resolve<Partial<ResolvedReturnType<typeof fetch>>>({
      status: 200,
      ok: true,
      json: jest.fn(() => {
        return Promise.resolve({
          message:
            "Uploaded 1 file(s) successfully. 0 file(s) were skipped due to validation errors.   To see the queue check the 'Runs' tab.",
          error: '',
        });
      }),
    });
  });
  return mockFetch;
};
