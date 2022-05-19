import { parseError } from './utils';
import type { UnparsedError, ErrorType } from './utils';

interface Logger {
  error(message: string, originalException: ContextualError): void;
}
interface ErrorConstructorArguments {
  originalException?: Error;
  context?: Record<string, unknown>;
}
interface NonContextualErrorConstructorArguments
  extends ErrorConstructorArguments {
  message: string;
}
interface ContextualErrorConstructorArguments
  extends ErrorConstructorArguments {
  errorKey: UnparsedError;
}

export class ContextualError extends Error {
  public readonly code: UnparsedError;

  public readonly type: ErrorType;

  constructor(
    args:
      | NonContextualErrorConstructorArguments
      | ContextualErrorConstructorArguments
  ) {
    super();
    const originalMessage = args.originalException?.message ?? '';
    const context = args.context;
    const code: UnparsedError =
      'errorKey' in args
        ? args.errorKey
        : 'unknownErrorCode:unknownErrorType';
    const errorKey = 'errorKey' in args ? args.errorKey : undefined;
    const title =
      'message' in args
        ? args.message
        : parseError({ error: errorKey }).message;
    this.code = code;
    this.type =
      'message' in args
        ? undefined
        : parseError({ error: errorKey }).type;
    super.message =
      typeof context !== 'undefined'
        ? `${title}: ${JSON.stringify(context)} [${originalMessage}]`
        : title;
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
