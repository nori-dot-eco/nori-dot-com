import type { ModelRunErrorCollection, ErrorResponse } from './output';

export enum GGITErrorClassification {
  INPUT_VALIDATION_ERROR = 'InputValidationError',
  API_BUILD_ERROR = 'APIBuildError',
  ERROR = 'Error',
}

export class FlatGGITError {
  private static readonly defaultErrorDetails =
    'An unexpected error has occurred';

  public readonly errorDetails: string;

  public readonly errorMessage?: string;

  public readonly errorCollectionText?: string;

  public readonly errorCollectionName: string;

  public readonly errorClassification: GGITErrorClassification;

  private constructor({
    errorDetails,
    errorMessage,
    errorCollectionText,
    errorCollectionName,
    errorClassification,
  }: {
    errorDetails: string;
    errorMessage?: string;
    errorCollectionText?: string;
    errorCollectionName: string;
    errorClassification: GGITErrorClassification;
  }) {
    this.errorDetails = errorDetails;
    this.errorMessage = errorMessage;
    this.errorCollectionText = errorCollectionText;
    this.errorCollectionName = errorCollectionName;
    this.errorClassification = errorClassification;
  }

  public static fromErrorResponse(
    errorResponse: ErrorResponse
  ): FlatGGITError[] {
    return [
      FlatGGITError.flattenGGITErrorCollections(
        GGITErrorClassification.INPUT_VALIDATION_ERROR,
        errorResponse.InputErrors?.InputValidationErrors?.ModelRun
      ),
      FlatGGITError.flattenGGITErrorCollections(
        GGITErrorClassification.API_BUILD_ERROR,
        errorResponse.InputErrors?.APIBuildErrors?.BuildError
      ),
      FlatGGITError.flattenGGITErrorCollections(
        GGITErrorClassification.ERROR,
        errorResponse.AllErrors?.Errors?.ModelRun
      ),
    ].flat();
  }

  private static flattenGGITErrorCollections(
    errorClassification: GGITErrorClassification,
    errorCollections?: ModelRunErrorCollection | ModelRunErrorCollection[]
  ): FlatGGITError[] {
    return [errorCollections ?? []].flat().flatMap((modelRunCollection) => {
      return [modelRunCollection.Error].flat().map((error) => {
        const errorDetails =
          error?.['@message'] ??
          modelRunCollection['#text'] ??
          FlatGGITError.defaultErrorDetails;
        return new FlatGGITError({
          errorDetails,
          errorMessage: error?.['@message'],
          errorCollectionText: modelRunCollection['#text'],
          errorCollectionName: modelRunCollection['@name'],
          errorClassification,
        });
      });
    });
  }
}
