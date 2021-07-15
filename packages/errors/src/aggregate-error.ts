export class AggregateNoriError extends AggregateError {
  constructor({
    errors,
    message,
  }: {
    errors?: { message: string; details?: string }[];
    message?: string;
  } = {}) {
    super(errors ?? [], message);
  }

  collect(
    error: ConstructorParameters<typeof AggregateNoriError>[0]['errors'][number]
  ): void {
    this.errors.push(error);
  }
}
