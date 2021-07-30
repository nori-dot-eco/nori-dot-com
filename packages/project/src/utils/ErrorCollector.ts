import { UnparsedError } from '../../../errors/dist';

export interface ContextualError extends Error {
  name: string;
  context?: Record<string, unknown>;
  originalException?: Error;
  // set message(value: string);
  // get message(): string;
}

export interface ErrorCollector {
  errors: Error[];
  buildContextualError(
    errorKey: UnparsedError,
    context?: Record<string, unknown>,
    exception?: Error
  ): ContextualError;
  collectContextualError(error: ContextualError): void;
  collectKeyedError(
    errorKey: UnparsedError,
    context?: Record<string, unknown>,
    exception?: Error
  ): void;
}
