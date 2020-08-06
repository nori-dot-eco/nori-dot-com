[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropYear](_specification_.cropyear.md)

# Interface: CropYear

Crop management details grouped by a planting year.

**`example`** <caption>For crop management practices in 2000:</caption>

```js
{
 "plantingYear": 2000,
 "crops": [
   // ... crops that were planted in year 2000
 ],
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

*Defined in [specification.ts:578](https://github.com/nori-dot-eco/nori-dot-com/blob/0d92544/packages/project/src/specification.ts#L578)*

A list of crops for a given planting year.

Due to a limitation at COMET farm, the maximum number of crops per [plantingYear](#plantingYear) is 3. If there are more than 3 crops for a planting year reach out to [Nori support](mailto:support@nori.com)

**`items.maximum`** 3

**`items.minimum`** 1

**`example`** <caption>When 3 crops (an annual, perennial and orchard) were planted in year 2000:</caption>

```js
"crops": [
 {
   "name": "corn",
   "type": "annual crop",
   "plantingDate": "01/01/2000"
   // ...CropEvents
 },
 {
   "name": "annual rye",
   "type": "perennial",
   "plantingDate": "01/01/2000"
   // ...CropEvents
 },
 {
   "type": "orchard",
   "prune": "yes",
   "renewOrClear": "yes",
   "plantingDate": "01/01/2000"
   // ...CropEvents
 }
]
```

___

###  plantingYear

• **plantingYear**: *number*

*Defined in [specification.ts:542](https://github.com/nori-dot-eco/nori-dot-com/blob/0d92544/packages/project/src/specification.ts#L542)*

The planting year that the herein defined [crops](#crops) property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.

**`minimum`** 2000

**`maximum`** 2099

**`example`** <caption>When the herein defined crops were planted in year 2000:</caption>

```js
"plantingYear": 2000
```
