import { Errors } from './index';

type ObjectPaths<T extends object> = {
  [P in keyof T]: T[P] extends object
    ?
        | `${string & P}${keyof T[P] extends 'message'
            ? never
            : `:${string & keyof T[P]}`}`
    : `${string & P}`;
}[T extends any[] ? number & keyof T : keyof T];
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type ErrorType = keyof typeof Errors;
export type ErrorCode = KeysOfUnion<(typeof Errors)[ErrorType]>;
export type UnparsedError = ObjectPaths<typeof Errors>;
export type ErrorMessage = string;

export const parseError = ({
  error,
}: {
  error: UnparsedError;
}): {
  message: ErrorMessage;
  type: ErrorType;
  code: ErrorCode;
} => {
  const [type, code] = error.split(':') as [ErrorType, ErrorCode];
  const defaultErrorMessage = Errors.unknownErrorCode.unknownErrorType.message;
  const message: ErrorMessage =
    (Errors[type] as any)?.[code]?.message ?? defaultErrorMessage;
  return { message, type, code };
};

/** Return the http error for an error which has a `message` value that matches the provided `message` argument. */
export const getApiErrorByMessage = ({
  message,
}: {
  message: string;
}): (typeof Errors)['apiError'][keyof (typeof Errors)['apiError']]['http'] => {
  const error = Object.values(Errors.apiError).find(
    (e) => e.message === message
  );
  return error?.http;
};
