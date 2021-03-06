[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / CropManagementEvent

# Interface: CropManagementEvent

[specification](../modules/specification.md).CropManagementEvent

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

* [*CropEvent*](specification.cropevent.md)

  ↳ **CropManagementEvent**

  ↳↳ [*AnnualCropHarvestEvent*](specification.annualcropharvestevent.md)

## Table of contents

### Properties

- [date](specification.cropmanagementevent.md#date)
- [grainFruitTuber](specification.cropmanagementevent.md#grainfruittuber)
- [residueRemoved](specification.cropmanagementevent.md#residueremoved)

## Properties

### date

• **date**: *string*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

Inherited from: [CropEvent](specification.cropevent.md).[date](specification.cropevent.md#date)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1194](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1194)

___

### grainFruitTuber

• **grainFruitTuber**: *no* \| *yes*

Whether the crop was harvest for grain, fruit or tuber.

**`nullable`** during import (specify null if you are unsure)

**`example`** <caption>Select “yes” if the crop was harvested for grain, fruit, or tuber:</caption>

```js
"grainFruitTuber": "yes"
```

**`example`** <caption>Select “no” if the crop was harvested before maturity for silage or haylage:</caption>

```js
"grainFruitTuber": "no"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1272](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1272)

___

### residueRemoved

• `Optional` **residueRemoved**: *number*

Crop residue removed.

**`default`** 0

**`minimum`** 0

**`maximum`** 100

**`example`** <caption>Enter 0% if the crop was only harvested for grain / fruit / tuber or if it otherwise does not apply:</caption>

```js
"residueRemoved": 0
```

**`example`** <caption>Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest:</caption>

```js
"residueRemoved": 5
```

**`example`** <caption>Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage:</caption>

```js
"residueRemoved": 10
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1300](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1300)
