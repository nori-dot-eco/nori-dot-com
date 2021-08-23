/**
 * A mock logger for unit tests that involve the ErrorCollector.
 */
export class Logger {
  error(message: string, originalException: Error): void {
    console.log(message, originalException);
  }
}
