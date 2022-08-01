import * as V3 from '../src/v3-specification';
import { convertFromV3ToV4 } from '../src/utils/convertFromV3ToV4';

import * as CornSoy from '../CornSoy.json';
import * as OMADIrrigation from '../OMADIrrigation.json';

const v4 = convertFromV3ToV4({ v3: CornSoy as any as V3.Project, options: {
    synthesizeInternalIds: true,
    synthesizeExternalIds: true,
}});
// TODO Use a replacer to serialize the dates without time
const asJson = JSON.stringify(v4, null, 2).replace('T00:00:00.000Z', '');
console.log(asJson);