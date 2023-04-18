import { FlatGGITError } from './ggit-error';
import { Daycent, MapUnit, OutputFile, ErrorResponse } from './output';

export class ModeledGGITResponse {
    public readonly day: Daycent<MapUnit>;
    public readonly errors: FlatGGITError[];

    constructor(response: OutputFile<MapUnit> | ErrorResponse) {
        this.day = (response as OutputFile<MapUnit>)?.Day;
        this.errors = FlatGGITError.fromErrorResponse(response as ErrorResponse);
    }
}