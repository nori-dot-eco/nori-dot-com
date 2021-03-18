[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / CropYear

# Interface: CropYear

[specification](../modules/specification.md).CropYear

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

## Table of contents

### Properties

- [crops](specification.cropyear.md#crops)
- [plantingYear](specification.cropyear.md#plantingyear)

## Properties

### crops

• **crops**: [[*AnnualCrop*](specification.annualcrop.md) \| [*CoverCrop*](specification.covercrop.md) \| [*OrchardOrVineyardCrop*](specification.orchardorvineyardcrop.md) \| [*PerennialCrop*](specification.perennialcrop.md), (AnnualCrop \| CoverCrop \| OrchardOrVineyardCrop \| PerennialCrop)?, (AnnualCrop \| CoverCrop \| OrchardOrVineyardCrop \| PerennialCrop)?]

A list of crops for a given planting year.

Due to a limitation at COMET farm, the maximum number of crops per [plantingYear](#plantingYear) is 3. If there are more than 3 crops for a planting year reach out to [Nori support](mailto:support@nori.com)

**`maxitems`** 3

**`minitems`** 1

**`example`** <caption>When 3 crops (an annual, perennial and orchard) were planted in year 2000:</caption>

```js
"crops": [
 {
   "type": "corn",
   "classification": "annual crop",
   "plantingDate": "01/01/2000"
   // ...CropEvents
 },
 {
   "type": "annual rye",
   "classification": "perennial",
   "plantingDate": "01/01/2000"
   // ...CropEvents
 },
 {
   "classification": "orchard",
   "prune": "yes",
   "renewOrClear": "yes",
   "plantingDate": "01/01/2000"
   // ...CropEvents
 }
]
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:663](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L663)

___

### plantingYear

• **plantingYear**: *number*

The planting year that the herein defined [crops](#crops) property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.

**`minimum`** 2000

**`maximum`** 2099

**`example`** <caption>When the herein defined crops were planted in year 2000:</caption>

```js
"plantingYear": 2000
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:627](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L627)
