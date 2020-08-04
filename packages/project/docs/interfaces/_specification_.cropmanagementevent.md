[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropManagementEvent](_specification_.cropmanagementevent.md)

# Interface: CropManagementEvent

Harvest event details

**`example`** 

```js
{
 "date": "10/01/2000",
 "grainFruitTuber": "n/a",
 "residueRemoved": "n/a",
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **CropManagementEvent**

  ↳ [AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md)

## Index

### Properties

* [date](_specification_.cropmanagementevent.md#date)
* [grainFruitTuber](_specification_.cropmanagementevent.md#grainfruittuber)
* [residueRemoved](_specification_.cropmanagementevent.md#residueremoved)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:461](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L461)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  grainFruitTuber

• **grainFruitTuber**: *"yes" | "no"*

*Defined in [specification.ts:513](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L513)*

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

*Defined in [specification.ts:546](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L546)*

**`minimum`** 0

**`maximum`** 100

Crop residue removed

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
