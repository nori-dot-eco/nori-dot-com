# `quantification`

Quantification utilities

## Usage

```ts
import { getQuantificationSummary } from '@nori-dot-com/quantification';
```

## CLI Usage

### Setup
```sh
$ yarn install
```

### For a multi-field results file.

```sh

$ yarn quantify multi results.json --maxGrandfatherableYears 4
```

### For an older single-field results file.

i.e. one that may have multiple polygons from the same boundary split out and run as separate fields.

```sh
$ yarn quantify single results.json --maxGrandfatherableYears 4
```