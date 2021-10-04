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

export class ContextualError extends Error {
  readonly #type: ErrorType;

  readonly #errorKey: UnparsedError;

  readonly #code: ErrorCode;

  readonly #context?: Record<string, unknown>;

  readonly #originalException?: Error;

  constructor(
    args: NonContextualErrorConstructorArgs | ContextualErrorConstructorArgs
  ) {
    super();
    if ('message' in args) {
      super.message =
        typeof args.context !== 'undefined'
          ? `${args.message}: ${JSON.stringify(args.context)} [${
              args.originalException?.message ?? ''
            }]`
          : args.message;
    } else {
      const { message, code, type } = parseError({ error: args.errorKey });
      super.message =
        typeof args.context !== 'undefined'
          ? `${message}: ${JSON.stringify(args.context)} [${
              args.originalException?.message ?? ''
            }]`
          : message;
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
