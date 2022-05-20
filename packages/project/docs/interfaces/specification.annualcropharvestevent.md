[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / AnnualCropHarvestEvent

# Interface: AnnualCropHarvestEvent

[specification](../modules/specification.md).AnnualCropHarvestEvent

An annual crop's harvest event details.

**`example`** An annual harvest event that yielded 100 bu/ac that took place on October 1st of 2000:

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

- [`CropManagementEvent`](specification.CropManagementEvent.md)

  ↳ **`AnnualCropHarvestEvent`**

## Table of contents

### Properties

- [date](specification.AnnualCropHarvestEvent.md#date)
- [grainFruitTuber](specification.AnnualCropHarvestEvent.md#grainfruittuber)
- [residueRemoved](specification.AnnualCropHarvestEvent.md#residueremoved)
- [yield](specification.AnnualCropHarvestEvent.md#yield)
- [yieldUnit](specification.AnnualCropHarvestEvent.md#yieldunit)

## Properties

### date

• **date**: `string`

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the crop event occurred on January 1st of 2000:

```js
"date": "01/01/2000"
```

**`validationrules`** ["cropEventDateIsOnOrAfterContainingCropYear"]

**`errormessage`**
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}

#### Inherited from

[CropManagementEvent](specification.CropManagementEvent.md).[date](specification.CropManagementEvent.md#date)

#### Defined in

[specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1279)

___

### grainFruitTuber

• **grainFruitTuber**: ``"no"`` \| ``"yes"``

Whether the crop was harvest for grain, fruit or tuber.

**`nullable`** during import (specify null if you are unsure)

**`example`** Select “yes” if the crop was harvested for grain, fruit, or tuber:

```js
"grainFruitTuber": "yes"
```

**`example`** Select “no” if the crop was harvested before maturity for silage or haylage:

```js
"grainFruitTuber": "no"
```

#### Inherited from

[CropManagementEvent](specification.CropManagementEvent.md).[grainFruitTuber](specification.CropManagementEvent.md#grainfruittuber)

#### Defined in

[specification.ts:1357](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1357)

___

### residueRemoved

• `Optional` **residueRemoved**: `number`

Crop residue removed.

**`default`** 0

**`minimum`** 0

**`maximum`** 100

**`example`** Enter 0% if the crop was only harvested for grain / fruit / tuber or if it otherwise does not apply:

```js
"residueRemoved": 0
```

**`example`** Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest:

```js
"residueRemoved": 5
```

**`example`** Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage:

```js
"residueRemoved": 10
```

#### Inherited from

[CropManagementEvent](specification.CropManagementEvent.md).[residueRemoved](specification.CropManagementEvent.md#residueremoved)

#### Defined in

[specification.ts:1385](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1385)

___

### yield

• `Optional` **yield**: `number`

The crop yield.

The current version of quantification does not consider yield when producing estimates. As such, we will default to 0 when left out.

**`default`** 0

**`example`** When 100 lbs of the crop specified was harvested (using the herein specified `yieldUnit`:

```js
"yield": 100
```

#### Defined in

[specification.ts:1419](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1419)

___

### yieldUnit

• `Optional` **yieldUnit**: ``"bu/ac"`` \| ``"cwt/ac"`` \| ``"tons/ac"`` \| ``"lbs/ac"``

The crop yield units.

The current version of quantification does not consider yield when producing estimates.

**`default`** "lbs/ac"

**`example`** When the unit of the yield is submitted in lbs per acre:

```js
"yieldUnit": "lbs/ac"
```

#### Defined in

[specification.ts:1434](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1434)
