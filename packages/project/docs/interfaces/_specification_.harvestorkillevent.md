[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HarvestOrKillEvent](_specification_.harvestorkillevent.md)

# Interface: HarvestOrKillEvent

Harvest/kill event details

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`example`** 

```js
{
 "date": "10/01/2000",
 "yield": 100,
 "yieldUnit": "bu/ac", // todo confirm yield unit is allowed
 "grainFruitTuber": "n/a",
 "residueRemoved": "n/a",
}
```

## Hierarchy

* **HarvestOrKillEvent**

## Index

### Properties

* [date](_specification_.harvestorkillevent.md#date)
* [grainFruitTuber](_specification_.harvestorkillevent.md#grainfruittuber)
* [residueRemoved](_specification_.harvestorkillevent.md#residueremoved)
* [yield](_specification_.harvestorkillevent.md#optional-yield)
* [yieldUnit](_specification_.harvestorkillevent.md#optional-yieldunit)

## Properties

###  date

• **date**: *string*

*Defined in [specification.ts:368](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L368)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the harvest or kill event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  grainFruitTuber

• **grainFruitTuber**: *"yes" | "no" | "n/a"*

*Defined in [specification.ts:384](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L384)*

Whether the crop was harvest for grain, fruit or tuber
• Select “yes” if the crop was harvested for grain, fruit, or tuber
• Select “no” if the crop was harvested before maturity for silage or haylage
• Select "n/a" if this does not apply

___

###  residueRemoved

• **residueRemoved**: *number | "n/a"*

*Defined in [specification.ts:393](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L393)*

Residue removed
• Enter 0% if the crop was only harvested for grain / fruit / tuber
• Enter the % of the remaining crop removed if the hay or stover was removed separately after grain / fruit / tuber harvest
• Enter the total % biomass removed at harvest if the crop was harvested before maturity for silage or haylage
• Enter 'n/a' if it does not apply

___

### `Optional` yield

• **yield**? : *number*

*Defined in [specification.ts:372](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L372)*

The crop yield

___

### `Optional` yieldUnit

• **yieldUnit**? : *string*

*Defined in [specification.ts:376](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L376)*

The crop yield units
