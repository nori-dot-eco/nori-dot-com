[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / CropYear

# Interface: CropYear

[v3-specification](../modules/v3_specification.md).CropYear

Crop management details grouped by a planting year.

**`Example`**

<caption>For crop management practices in 2000:</caption>

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

- [crops](v3_specification.CropYear.md#crops)
- [plantingYear](v3_specification.CropYear.md#plantingyear)

## Properties

### crops

• **crops**: [(AnnualCrop \| CoverCrop \| OrchardOrVineyardCrop \| PerennialCrop)?, (AnnualCrop \| CoverCrop \| OrchardOrVineyardCrop \| PerennialCrop)?, (AnnualCrop \| CoverCrop \| OrchardOrVineyardCrop \| PerennialCrop)?]

A list of crops for a given planting year.

Due to a limitation at COMET farm, the maximum number of crops per [plantingYear](#plantingYear) is 3. If there are more than 3 crops for a planting year reach out to [Nori support](mailto:support@nori.com)

**`Max Items`**

3

**`Example`**

<caption>When 3 crops (an annual, perennial and orchard) were planted in year 2000:</caption>

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

#### Defined in

[v3-specification.ts:752](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v3-specification.ts#L752)

___

### plantingYear

• **plantingYear**: `number`

The planting year that the herein defined [crops](#crops) property is associated with. Note that a requirement to run quantification is that all crop management practices be mapped to a particular planting year as early as year 2000.

**`Minimum`**

2000

**`Maximum`**

2099

**`Example`**

<caption>When the herein defined crops were planted in year 2000:</caption>

```js
"plantingYear": 2000
```

#### Defined in

[v3-specification.ts:717](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v3-specification.ts#L717)
