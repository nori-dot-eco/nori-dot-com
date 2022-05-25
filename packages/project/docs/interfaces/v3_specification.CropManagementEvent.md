[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / CropManagementEvent

# Interface: CropManagementEvent

[v3-specification](../modules/v3_specification.md).CropManagementEvent

Crop management event details.

**`example`**

```js
{
 "date": "10/01/2000",
 "grainFruitTuber": "n/a",
 "residueRemoved": 0,
}
```

## Hierarchy

- [`CropEvent`](v3_specification.CropEvent.md)

  ↳ **`CropManagementEvent`**

  ↳↳ [`AnnualCropHarvestEvent`](v3_specification.AnnualCropHarvestEvent.md)

## Table of contents

### Properties

- [date](v3_specification.CropManagementEvent.md#date)
- [grainFruitTuber](v3_specification.CropManagementEvent.md#grainfruittuber)
- [residueRemoved](v3_specification.CropManagementEvent.md#residueremoved)

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

[CropEvent](v3_specification.CropEvent.md).[date](v3_specification.CropEvent.md#date)

#### Defined in

[v3-specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L1279)

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

#### Defined in

[v3-specification.ts:1357](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L1357)

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

#### Defined in

[v3-specification.ts:1385](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L1385)
