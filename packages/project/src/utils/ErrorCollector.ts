export class ErrorCollector {
  public errors: Error[];

  constructor() {
    this.errors = [];
  }

  collectError(error: Error): void {
    console.error('Collected error while parsing data!', error);
    this.errors.push(error);
  }
}
