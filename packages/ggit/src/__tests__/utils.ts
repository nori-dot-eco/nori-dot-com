import fetch from 'node-fetch';

export const CREDENTIALS = {
  email: 'foo@nori.com',
  password: 'bar',
} as const;

export const mockTokenEndpoint = ({
  throws,
}: { throws?: boolean } = {}): jest.MockedFunction<typeof fetch> => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
  mockFetch.mockImplementationOnce(
    (): Promise<any> => {
      if (throws) {
        return Promise.resolve<Partial<ResolvedReturnType<typeof fetch>>>({
          status: 401,
          ok: false,
          json: jest.fn(() => {
            return Promise.resolve({});
          }),
        });
      } else {
        return Promise.resolve<Partial<ResolvedReturnType<typeof fetch>>>({
          status: 200,
          ok: true,
          json: jest.fn(() => {
            return Promise.resolve({
              id: '',
              jwtToken: '',
              tokenExpirationTime: 0,
            });
          }),
        });
      }
    }
  );
  return mockFetch;
};

export const mockDaycentV1Endpoint = (): jest.MockedFunction<typeof fetch> => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
  mockFetch.mockImplementationOnce(
    (): Promise<any> => {
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
    }
  );
  return mockFetch;
};
