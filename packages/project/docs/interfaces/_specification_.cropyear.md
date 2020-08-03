[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropYear](_specification_.cropyear.md)

# Interface: CropYear

Crop management details grouped by a planting year.

**`example`** <caption>For crop management practices in 2000</caption>

```js
{
 "plantingYear": 2000,
 "crops": [
   // ... crops that were planted in year 2000
 ],
 "renewOrClear": "yes"
 // ...CropEvents
}
```

## Hierarchy

* **CropYear**

## Index

### Properties

* [crops](_specification_.cropyear.md#crops)
* [plantingYear](_specification_.cropyear.md#plantingyear)

## Properties

###  crops

• **crops**: *[[AnnualCrop](_specification_.annualcrop.md) | [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md) | [PerennialCrop](_specification_.perennialcrop.md), [AnnualCrop](_specification_.annualcrop.md) | [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md) | [PerennialCrop](_specification_.perennialcrop.md), [AnnualCrop](_specification_.annualcrop.md) | [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md) | [PerennialCrop](_specification_.perennialcrop.md)]*

*Defined in [specification.ts:170](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L170)*

**`items.maximum`** 3

**`items.minimum`** 1

A list of crops for a given planting year.

___

###  plantingYear

• **plantingYear**: *number*

*Defined in [specification.ts:163](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L163)*

**`minimum`** 2000

The planting year that the herein defined `crops` property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.
