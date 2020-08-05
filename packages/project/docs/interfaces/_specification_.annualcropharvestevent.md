[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md)

# Interface: AnnualCropHarvestEvent

An annual crop's harvest event details

**`example`** 

```js
{
 "date": "10/01/2000",
 "yield": 100,
 "yieldUnit": "bu/ac",
 "grainFruitTuber": "n/a",
 "residueRemoved": "n/a",
}
```

## Hierarchy

  ↳ [CropManagementEvent](_specification_.cropmanagementevent.md)

  ↳ **AnnualCropHarvestEvent**

## Index

### Properties

* [date](_specification_.annualcropharvestevent.md#date)
* [grainFruitTuber](_specification_.annualcropharvestevent.md#grainfruittuber)
* [residueRemoved](_specification_.annualcropharvestevent.md#residueremoved)
* [yield](_specification_.annualcropharvestevent.md#optional-yield)
* [yieldUnit](_specification_.annualcropharvestevent.md#optional-yieldunit)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:747](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L747)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

___

###  grainFruitTuber

• **grainFruitTuber**: *"yes" | "no"*

*Inherited from [CropManagementEvent](_specification_.cropmanagementevent.md).[grainFruitTuber](_specification_.cropmanagementevent.md#grainfruittuber)*

*Defined in [specification.ts:801](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L801)*

Whether the crop was harvest for grain, fruit or tuber

**`example`** <caption>Select “yes” if the crop was harvested for grain, fruit, or tuber</caption>

```js
"grainFruitTuber": "yes"
```

**`example`** <caption>Select “no” if the crop was harvested before maturity for silage or haylage</caption>

```js
"grainFruitTuber": "no"
```

___

###  residueRemoved

• **residueRemoved**: *number | "n/a"*

*Inherited from [CropManagementEvent](_specification_.cropmanagementevent.md).[residueRemoved](_specification_.cropmanagementevent.md#residueremoved)*

*Defined in [specification.ts:834](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L834)*

Crop residue removed

**`minimum`** 0

**`maximum`** 100

**`example`** <caption>Enter 0% if the crop was only harvested for grain / fruit / tuber</caption>

```js
"residueRemoved": 0
```

**`example`** <caption>Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest</caption>

```js
"residueRemoved": 5
```

**`example`** <caption>Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage</caption>

```js
"residueRemoved": 10
```

**`example`** <caption>Enter 'n/a' if it does not apply</caption>

```js
"residueRemoved": "n/a"
```

___

### `Optional` yield

• **yield**? : *number*

*Defined in [specification.ts:859](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L859)*

The crop yield

The current version of quantification does not consider yield when producing estimates.

___

### `Optional` yieldUnit

• **yieldUnit**? : *"bu/ac" | "cwt/ac" | "tons/ac" | "lbs/ac"*

*Defined in [specification.ts:865](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L865)*

The crop yield units

The current version of quantification does not consider yield when producing estimates.
