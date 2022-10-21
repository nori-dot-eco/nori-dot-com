[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / AnnualCropHarvestEvent

# Interface: AnnualCropHarvestEvent

[v3-specification](../modules/v3_specification.md).AnnualCropHarvestEvent

An annual crop's harvest event details.

**`Example`**

<caption>An annual harvest event that yielded 100 bu/ac that took place on October 1st of 2000:</caption>

```js
{
 "date": "10/01/2000",
 "yield": 100,
 "yieldUnit": "bu/ac",
 "grainFruitTuber": "n/a",
 "residueRemoved": 0,
}
```

## Hierarchy

- [`CropManagementEvent`](v3_specification.CropManagementEvent.md)

  ↳ **`AnnualCropHarvestEvent`**

## Table of contents

### Properties

- [date](v3_specification.AnnualCropHarvestEvent.md#date)
- [grainFruitTuber](v3_specification.AnnualCropHarvestEvent.md#grainfruittuber)
- [residueRemoved](v3_specification.AnnualCropHarvestEvent.md#residueremoved)
- [yield](v3_specification.AnnualCropHarvestEvent.md#yield)
- [yieldUnit](v3_specification.AnnualCropHarvestEvent.md#yieldunit)

## Properties

### date

• **date**: `string`

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`Nullable`**

during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`Pattern`**

^02/(?:[01]\d|2\d)/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)/(?:[0-2]\d|3[01])/(?:20)\d{2}|(?:0[469]|11)/(?:[0-2]\d|30)/(?:20)\d{2}|02/(?:[0-1]\d|2[0-8])/(?:20)\d{2}$

**`Example`**

<caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

**`Validation Rules`**

["cropEventDateIsOnOrAfterContainingCropYear"]

**`Error Message`**

#### Inherited from

[CropManagementEvent](v3_specification.CropManagementEvent.md).[date](v3_specification.CropManagementEvent.md#date)

#### Defined in

[v3-specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1279)

___

### grainFruitTuber

• **grainFruitTuber**: ``"no"`` \| ``"yes"``

Whether the crop was harvest for grain, fruit or tuber.

**`Nullable`**

during import (specify null if you are unsure)

**`Example`**

<caption>Select “yes” if the crop was harvested for grain, fruit, or tuber:</caption>

```js
"grainFruitTuber": "yes"
```

**`Example`**

<caption>Select “no” if the crop was harvested before maturity for silage or haylage:</caption>

```js
"grainFruitTuber": "no"
```

#### Inherited from

[CropManagementEvent](v3_specification.CropManagementEvent.md).[grainFruitTuber](v3_specification.CropManagementEvent.md#grainfruittuber)

#### Defined in

[v3-specification.ts:1357](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1357)

___

### residueRemoved

• `Optional` **residueRemoved**: `number`

Crop residue removed.

**`Default`**

0

**`Minimum`**

0

**`Maximum`**

100

**`Example`**

<caption>Enter 0% if the crop was only harvested for grain / fruit / tuber or if it otherwise does not apply:</caption>

```js
"residueRemoved": 0
```

**`Example`**

<caption>Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest:</caption>

```js
"residueRemoved": 5
```

**`Example`**

<caption>Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage:</caption>

```js
"residueRemoved": 10
```

#### Inherited from

[CropManagementEvent](v3_specification.CropManagementEvent.md).[residueRemoved](v3_specification.CropManagementEvent.md#residueremoved)

#### Defined in

[v3-specification.ts:1385](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1385)

___

### yield

• `Optional` **yield**: `number`

The crop yield.

The current version of quantification does not consider yield when producing estimates. As such, we will default to 0 when left out.

**`Default`**

0

**`Example`**

<caption>When 100 lbs of the crop specified was harvested (using the herein specified `yieldUnit`:</caption>

```js
"yield": 100
```

#### Defined in

[v3-specification.ts:1419](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1419)

___

### yieldUnit

• `Optional` **yieldUnit**: ``"bu/ac"`` \| ``"cwt/ac"`` \| ``"tons/ac"`` \| ``"lbs/ac"``

The crop yield units.

The current version of quantification does not consider yield when producing estimates.

**`Default`**

"lbs/ac"

**`Example`**

<caption>When the unit of the yield is submitted in lbs per acre:</caption>

```js
"yieldUnit": "lbs/ac"
```

#### Defined in

[v3-specification.ts:1434](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1434)
