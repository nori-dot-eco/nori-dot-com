[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HarvestEvent](_specification_.harvestevent.md)

# Interface: HarvestEvent

Harvest event details

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

* [CropEvent](_specification_.cropevent.md)

  ↳ **HarvestEvent**

## Index

### Properties

* [date](_specification_.harvestevent.md#date)
* [grainFruitTuber](_specification_.harvestevent.md#grainfruittuber)
* [residueRemoved](_specification_.harvestevent.md#residueremoved)
* [yield](_specification_.harvestevent.md#yield)
* [yieldUnit](_specification_.harvestevent.md#yieldunit)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:401](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L401)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  grainFruitTuber

• **grainFruitTuber**: *"yes" | "no"*

*Defined in [specification.ts:454](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L454)*

Whether the crop was harvest for grain, fruit or tuber
• Select “yes” if the crop was harvested for grain, fruit, or tuber
• Select “no” if the crop was harvested before maturity for silage or haylage
• Select "n/a" if this does not apply

___

###  residueRemoved

• **residueRemoved**: *number | "n/a"*

*Defined in [specification.ts:466](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L466)*

**`minimum`** 0

**`maximum`** 100

Residue removed
• Enter 0% if the crop was only harvested for grain / fruit / tuber
• Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest
• Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage
• Enter 'n/a' if it does not apply

___

###  yield

• **yield**: *number*

*Defined in [specification.ts:442](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L442)*

The crop yield

___

###  yieldUnit

• **yieldUnit**: *"bu/ac" | "cwt/ac" | "tons/ac" | "lbs/ac"*

*Defined in [specification.ts:446](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L446)*

The crop yield units
