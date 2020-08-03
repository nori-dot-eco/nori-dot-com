[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropYear](_specification_.cropyear.md)

# Interface: CropYear

Crop management details grouped by a planting year.

## Hierarchy

* **CropYear**

## Index

### Properties

* [crops](_specification_.cropyear.md#crops)
* [plantingYear](_specification_.cropyear.md#plantingyear)

## Properties

###  crops

• **crops**: *[Crop](_specification_.crop.md)[]*

*Defined in [specification.ts:127](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L127)*

A list of crops (maximum 3) for a given planting year.

**`items.maximum`** 3

___

###  plantingYear

• **plantingYear**: *number*

*Defined in [specification.ts:122](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L122)*

The planting year that the herein defined `crops` property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.

**`minimum`** 2000
