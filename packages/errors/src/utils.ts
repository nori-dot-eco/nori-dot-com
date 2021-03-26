import { Errors } from './index';

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type ErrorType = keyof typeof Errors;
export type ErrorCode = KeysOfUnion<typeof Errors[ErrorType]>;
export type UnparsedError = `${ErrorType}:${ErrorCode}`;
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
    (Errors as any)[type]?.[code]?.message ?? defaultErrorMessage;
  return { message, type, code };
};
