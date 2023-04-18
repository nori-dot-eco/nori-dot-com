import { FlatGGITError } from './ggit-error';
import { MapUnit, OutputFile, ErrorResponse } from './output';

export class ModeledGGITResponse {
    public readonly daycent: OutputFile<MapUnit>;
    public readonly errors: FlatGGITError[];

    constructor(response: OutputFile<MapUnit> | ErrorResponse) {
        this.daycent = (response as OutputFile<MapUnit>);
        this.errors = FlatGGITError.fromErrorResponse(response as ErrorResponse);
    }
}