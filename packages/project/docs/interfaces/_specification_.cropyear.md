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

*Defined in [specification.ts:123](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L123)*

A list of crops (maximum 3) for a given planting year.

**`items.maximum`** 3

___

###  plantingYear

• **plantingYear**: *number*

*Defined in [specification.ts:118](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L118)*

The planting year that the herein defined `crops` property is associated with. Note that a requirement to run quantification is that all crop practices be mapped to a particular planting year as early as year 2000.

**`minimum`** 2000
