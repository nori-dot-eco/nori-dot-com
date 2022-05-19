/**
 * A mock logger for unit tests that involve the ErrorCollector.
 *
 * @example
 */
export class Logger {
  error(message: string, originalException: Error): void {
    console.log(message, originalException);
  }
}
