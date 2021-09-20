import { parseError } from './utils';
import type { UnparsedError } from './utils';

import type { ErrorCode, ErrorType } from '.';

interface Logger {
  error(message: string, originalException: ContextualError): void;
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
  readonly #name: string;

  readonly #type: ErrorType;

  readonly #errorKey: UnparsedError;

  readonly #code: ErrorCode;

  readonly #context?: Record<string, unknown>;

  readonly #originalException?: Error;

  readonly #message: string;

  constructor(
    args: NonContextualErrorConstructorArgs | ContextualErrorConstructorArgs
  ) {
    if ('message' in args) {
      this.#message = args.message;
    } else {
      const { message, code, type } = parseError({ error: args.errorKey });
      this.#message = message;
      this.#code = code;
      this.#type = type;
      this.#errorKey = args.errorKey;
    }
    this.#context = args.context;
    this.#originalException = args.originalException;
  }

  public get type(): ErrorType {
    return this.#type;
  }

  public get code(): ErrorCode {
    return this.#code;
  }

  public get name(): string {
    return this.#name;
  }

  public get message(): string {
    if (this.#context) {
      return `${this.#message}: ${JSON.stringify(this.#context)} [${
        this.#originalException?.message ?? ''
      }]`;
    }
    return this.#message;
  }
}

export class ErrorCollector {
  #errors: ContextualError[];

  readonly #logger: Logger;

  constructor(logger: Logger) {
    this.#errors = [];
    this.#logger = logger;
  }

  public collectContextualError({ error }: { error: ContextualError }): void {
    this.#logger.error('Collected error while parsing data!', error);
    this.#errors.push(error);
  }

  public get errors(): ContextualError[] {
    return this.#errors;
  }

  public collectKeyedError(
    errorKey: UnparsedError,
    context?: Record<string, unknown>,
    exception?: Error
  ): void {
    this.collectContextualError({
      error: new ContextualError({
        context,
        originalException: exception,
        errorKey,
      }),
    });
  }
}
