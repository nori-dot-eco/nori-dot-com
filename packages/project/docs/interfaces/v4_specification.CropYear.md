[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / CropYear

# Interface: CropYear

[v4-specification](../modules/v4_specification.md).CropYear

Crop management details grouped by a planting year.

**`Example`**

<caption>For crop management practices in 2000:</caption>

```js
{
 "plantingYear": 2000,
 "crops": [
   // ... crops that were planted in year 2000
 ],
 "dataTimeFrame": GROWER_REPORTED,
}
```

## Table of contents

### Properties

- [crops](v4_specification.CropYear.md#crops)
- [dataTimeFrame](v4_specification.CropYear.md#datatimeframe)
- [plantingYear](v4_specification.CropYear.md#plantingyear)

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
   // ...CropEvents
 },
 {
   "type": "annual rye",
   "classification": "perennial",
   // ...CropEvents
 },
 {
   "classification": "orchard",
   // ...CropEvents
 }
]
```

#### Defined in

[v4-specification.ts:1206](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L1206)

___

### dataTimeFrame

• `Optional` **dataTimeFrame**: `DataTimeFrame`

Enum indicating whether data is historical data reported by the grower,
or a projection of future data.

**`Nullable`**

Currently this is only for Bayer, nullable for backwards compatibility

**`Example`**

<caption>When data is from a projection of future data:</caption>

```js
"dataTimeFrame": "PROJECTED"
```

#### Defined in

[v4-specification.ts:1224](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L1224)

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

[v4-specification.ts:1176](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v4-specification.ts#L1176)
