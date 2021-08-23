import { parseError } from './utils';
import type { UnparsedError } from './utils';

interface Logger {
  error(message: string, originalException: Error): void;
}
export class ContextualError implements Error {
  public name: string;

  public context?: Record<string, unknown>;

  public originalException?: Error;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  _message: string;

  constructor(
    message: string,
    context?: Record<string, unknown>,
    originalException?: Error
  ) {
    this._message = message;
    this.context = context;
    this.originalException = originalException;
  }

  public set message(value: string) {
    this._message = value;
  }

  public get message(): string {
    if (this.context) {
      return `${this._message}: ${JSON.stringify(this.context)} [${
        this.originalException?.message || ''
      }]`;
    }
    return this._message;
  }
}

export class ErrorCollector {
  public errors: Error[];

  public logger: Logger;

  constructor(logger: Logger) {
    this.errors = [];
    this.logger = logger;
  }

  static buildContextualError(
    errorKey: UnparsedError,
    context?: Record<string, unknown>,
    exception?: Error
  ): ContextualError {
    const { message } = parseError({ error: errorKey });
    return new ContextualError(message, context, exception);
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
      ErrorCollector.buildContextualError(errorKey, context, exception)
    );
  }
}
