import { parseError } from './utils';
import type { UnparsedError } from './utils';

import type { ErrorCode, ErrorType } from '.';

interface Logger {
  error(message: string, originalException: Error): void;
}
interface ErrorConstructorArgs {
  originalException?: Error;
  context?: Record<string, unknown>;
}
interface NonContextualErrorConstructorArgs extends ErrorConstructorArgs {
  message: string;
}
interface ContextualErrorConstructorArgs extends ErrorConstructorArgs {
  errorKey: UnparsedError;
}

export class ContextualError implements Error {
  public readonly name: string;

  public readonly type: ErrorType;

  public readonly errorKey: UnparsedError;

  public readonly code: ErrorCode;

  public readonly context?: Record<string, unknown>;

  public readonly originalException?: Error;

  #message: string;

  constructor(
    args: NonContextualErrorConstructorArgs | ContextualErrorConstructorArgs
  ) {
    if ('message' in args) {
      this.#message = args.message;
    } else {
      const { message, code, type } = parseError({ error: args.errorKey });
      this.#message = message;
      this.code = code;
      this.type = type;
      this.errorKey = args.errorKey;
    }
    this.context = args.context;
    this.originalException = args.originalException;
  }

  public set message(value: string) {
    this.#message = value;
  }

  public get message(): string {
    if (this.context) {
      return `${this.#message}: ${JSON.stringify(this.context)} [${
        this.originalException?.message ?? ''
      }]`;
    }
    return this.#message;
  }
}

export class ErrorCollector {
  public errors: Error[];

  public logger: Logger;

  constructor(logger: Logger) {
    this.errors = [];
    this.logger = logger;
  }

  collectContextualError(error: ContextualError): void {
    this.logger.error('Collected error while parsing data!', error);
    this.errors.push(error);
  }

  collectKeyedError(
    errorKey: UnparsedError,
    context?: Record<string, unknown>,
    exception?: Error
  ): void {
    this.collectContextualError(
      new ContextualError({
        context,
        originalException: exception,
        errorKey,
      })
    );
  }
}
