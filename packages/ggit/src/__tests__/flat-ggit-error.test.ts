import { FlatGGITError, GGITErrorClassification } from '../flat-ggit-error';
import type { ErrorResponse } from '../output';

describe('ggit-error', () => {
  describe('fromErrorResponse', () => {
    describe('input validation errors', () => {
      it('should return one flat error when one input validation error is provided', () => {
        // Arrange
        // Note: this test uses error text, as this is the format we've seen for api build errors
        const expectedErrorName = 'expected error name';
        const expectedErrorText = 'expected error text';
        const errorResponse: ErrorResponse = {
          InputErrors: {
            InputValidationErrors: {
              ModelRun: {
                '@name': expectedErrorName,
                '#text': expectedErrorText,
              },
            },
          },
        };

        // Act
        const ggitErrors = FlatGGITError.fromErrorResponse(errorResponse);

        // Assert
        expect(ggitErrors).toBeDefined();
        expect(ggitErrors.length).toStrictEqual(1);
        expect(ggitErrors[0].errorClassification).toStrictEqual(
          GGITErrorClassification.INPUT_VALIDATION_ERROR
        );
        expect(ggitErrors[0].errorCollectionName).toStrictEqual(
          expectedErrorName
        );
        expect(ggitErrors[0].errorCollectionText).toStrictEqual(
          expectedErrorText
        );
        expect(ggitErrors[0].errorDetails).toStrictEqual(expectedErrorText);
      });
    });

    describe('api build errors', () => {
      it('should return one flat error when one api build error is provided', () => {
        // Arrange
        // Note: this test uses error text, as this is the format we've seen for api build errors
        const expectedErrorName = 'expected error name';
        const expectedErrorText = 'expected error text';
        const errorResponse: ErrorResponse = {
          InputErrors: {
            APIBuildErrors: {
              BuildError: {
                '@name': expectedErrorName,
                '#text': expectedErrorText,
              },
            },
          },
        };

        // Act
        const ggitErrors = FlatGGITError.fromErrorResponse(errorResponse);

        // Assert
        expect(ggitErrors).toBeDefined();
        expect(ggitErrors.length).toStrictEqual(1);
        expect(ggitErrors[0].errorClassification).toStrictEqual(
          GGITErrorClassification.API_BUILD_ERROR
        );
        expect(ggitErrors[0].errorCollectionName).toStrictEqual(
          expectedErrorName
        );
        expect(ggitErrors[0].errorCollectionText).toStrictEqual(
          expectedErrorText
        );
        expect(ggitErrors[0].errorDetails).toStrictEqual(expectedErrorText);
      });
    });

    describe('general errors', () => {
      it('should return one flat error when one general error is provided', () => {
        // Arrange
        const expectedErrorName = 'expected error name';
        const expectedErrorMessage = 'expected error message';
        const errorResponse: ErrorResponse = {
          AllErrors: {
            Errors: {
              ModelRun: {
                '@name': expectedErrorName,
                Error: [
                  {
                    '@index': '1',
                    '@message': expectedErrorMessage,
                  },
                ],
              },
            },
          },
        };

        // Act
        const ggitErrors = FlatGGITError.fromErrorResponse(errorResponse);

        // Assert
        expect(ggitErrors).toBeDefined();
        expect(ggitErrors.length).toStrictEqual(1);
        expect(ggitErrors[0].errorClassification).toStrictEqual(
          GGITErrorClassification.ERROR
        );
        expect(ggitErrors[0].errorCollectionName).toStrictEqual(
          expectedErrorName
        );
        expect(ggitErrors[0].errorMessage).toStrictEqual(expectedErrorMessage);
        expect(ggitErrors[0].errorDetails).toStrictEqual(expectedErrorMessage);
      });

      it('should return two flat errors when two general errors are provided', () => {
        // Arrange
        const expectedErrorName = 'expected error name';
        const expectedErrorMessage1 = 'expected error message1';
        const expectedErrorMessage2 = 'expected error message2';
        const errorResponse: ErrorResponse = {
          AllErrors: {
            Errors: {
              ModelRun: {
                '@name': expectedErrorName,
                Error: [
                  {
                    '@index': '1',
                    '@message': expectedErrorMessage1,
                  },
                  {
                    '@index': '2',
                    '@message': expectedErrorMessage2,
                  },
                ],
              },
            },
          },
        };

        // Act
        const ggitErrors = FlatGGITError.fromErrorResponse(errorResponse);

        // Assert
        expect(ggitErrors).toBeDefined();
        expect(ggitErrors.length).toStrictEqual(2);
        expect(
          ggitErrors.filter(
            (error) => error.errorMessage === expectedErrorMessage1
          ).length
        ).toStrictEqual(1);
        expect(
          ggitErrors.filter(
            (error) => error.errorMessage === expectedErrorMessage2
          ).length
        ).toStrictEqual(1);
        expect(
          ggitErrors.filter(
            (error) =>
              error.errorClassification === GGITErrorClassification.ERROR
          ).length
        ).toStrictEqual(2);
      });

      it('should return two flat errors when two error collections with one error each are provided', () => {
        // Arrange
        const expectedErrorName1 = 'expected error name1';
        const expectedErrorMessage1 = 'expected error message1';
        const expectedErrorName2 = 'expected error name2';
        const expectedErrorMessage2 = 'expected error message2';
        const errorResponse: ErrorResponse = {
          AllErrors: {
            Errors: {
              ModelRun: [
                {
                  '@name': expectedErrorName1,
                  Error: [
                    {
                      '@index': '1',
                      '@message': expectedErrorMessage1,
                    },
                  ],
                },
                {
                  '@name': expectedErrorName2,
                  Error: [
                    {
                      '@index': '2',
                      '@message': expectedErrorMessage2,
                    },
                  ],
                },
              ],
            },
          },
        };

        // Act
        const ggitErrors = FlatGGITError.fromErrorResponse(errorResponse);

        // Assert
        expect(ggitErrors).toBeDefined();
        expect(ggitErrors.length).toStrictEqual(2);

        const firstError = ggitErrors.find(
          (error) => error.errorCollectionName === expectedErrorName1
        );
        expect(firstError).toBeDefined();
        expect(firstError.errorCollectionName).toStrictEqual(
          expectedErrorName1
        );
        expect(firstError.errorMessage).toStrictEqual(expectedErrorMessage1);
        expect(firstError.errorClassification).toStrictEqual(
          GGITErrorClassification.ERROR
        );

        const secondError = ggitErrors.find(
          (error) => error.errorCollectionName === expectedErrorName2
        );
        expect(secondError).toBeDefined();
        expect(secondError.errorCollectionName).toStrictEqual(
          expectedErrorName2
        );
        expect(secondError.errorMessage).toStrictEqual(expectedErrorMessage2);
        expect(secondError.errorClassification).toStrictEqual(
          GGITErrorClassification.ERROR
        );
      });
    });

    describe('no errors', () => {
      it('should return an empty array of flatGGITErrors when an empty error response is provided', () => {
        // Arrange
        const errorResponse: ErrorResponse = {};

        // Act
        const ggitErrors = FlatGGITError.fromErrorResponse(errorResponse);

        // Assert
        expect(ggitErrors).toBeDefined();
        expect(ggitErrors.length).toStrictEqual(0);
      });

      it('should return an empty array of flatGGITErrors when no errors are returned', () => {
        // Arrange
        const errorResponse: ErrorResponse = {
          InputErrors: {
            InputValidationErrors: {
              ModelRun: [],
            },
          },
        };

        // Act
        const ggitErrors = FlatGGITError.fromErrorResponse(errorResponse);

        // Assert
        expect(ggitErrors).toBeDefined();
        expect(ggitErrors.length).toStrictEqual(0);
      });
    });
  });
});
