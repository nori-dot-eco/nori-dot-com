[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md)

# Interface: AnnualCropHarvestEvent

An annual crop's harvest event details.

**`example`** <caption>An annual harvest event that yielded 100 bu/ac that took place on October 1st of 2000:</caption>

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

  ↳ [CropManagementEvent](_specification_.cropmanagementevent.md)

  ↳ **AnnualCropHarvestEvent**

## Index

### Properties

* [date](_specification_.annualcropharvestevent.md#date)
* [grainFruitTuber](_specification_.annualcropharvestevent.md#grainfruittuber)
* [residueRemoved](_specification_.annualcropharvestevent.md#optional-residueremoved)
* [yield](_specification_.annualcropharvestevent.md#optional-yield)
* [yieldUnit](_specification_.annualcropharvestevent.md#optional-yieldunit)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:1057](https://github.com/nori-dot-eco/nori-dot-com/blob/a4e8923/packages/project/src/specification.ts#L1057)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

___

###  grainFruitTuber

• **grainFruitTuber**: *"yes" | "no"*

*Inherited from [CropManagementEvent](_specification_.cropmanagementevent.md).[grainFruitTuber](_specification_.cropmanagementevent.md#grainfruittuber)*

*Defined in [specification.ts:1133](https://github.com/nori-dot-eco/nori-dot-com/blob/a4e8923/packages/project/src/specification.ts#L1133)*

Whether the crop was harvest for grain, fruit or tuber.

**`example`** <caption>Select “yes” if the crop was harvested for grain, fruit, or tuber:</caption>

```js
"grainFruitTuber": "yes"
```

**`example`** <caption>Select “no” if the crop was harvested before maturity for silage or haylage:</caption>

```js
"grainFruitTuber": "no"
```

___

### `Optional` residueRemoved

• **residueRemoved**? : *number*

*Inherited from [CropManagementEvent](_specification_.cropmanagementevent.md).[residueRemoved](_specification_.cropmanagementevent.md#optional-residueremoved)*

*Defined in [specification.ts:1161](https://github.com/nori-dot-eco/nori-dot-com/blob/a4e8923/packages/project/src/specification.ts#L1161)*

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

___

### `Optional` yield

• **yield**? : *number*

*Defined in [specification.ts:1196](https://github.com/nori-dot-eco/nori-dot-com/blob/a4e8923/packages/project/src/specification.ts#L1196)*

The crop yield.

The current version of quantification does not consider yield when producing estimates. As such, we will default to 0 when left out.

**`default`** 0

**`example`** <caption>When 100 lbs of the crop specified was harvested (using the herein specified `yieldUnit`:</caption>

```js
"yield": 100
```

___

### `Optional` yieldUnit

• **yieldUnit**? : *"bu/ac" | "cwt/ac" | "tons/ac" | "lbs/ac"*

*Defined in [specification.ts:1211](https://github.com/nori-dot-eco/nori-dot-com/blob/a4e8923/packages/project/src/specification.ts#L1211)*

The crop yield units.

The current version of quantification does not consider yield when producing estimates.

**`default`** 0

**`example`** <caption>When the unit of the yield is submitted in lbs per acre:</caption>

```js
"yieldUnit": "lbs/ac"
```
