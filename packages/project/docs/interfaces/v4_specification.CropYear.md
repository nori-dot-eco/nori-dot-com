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
 "dataSourceType": "GROWER_REPORTED",
}
```

## Table of contents

### Properties

- [crops](v4_specification.CropYear.md#crops)
- [dataSourceType](v4_specification.CropYear.md#datasourcetype)
- [plantingYear](v4_specification.CropYear.md#plantingyear)

## Properties

### crops

• **crops**: `CropTypes`[]

A list of crops for a given planting year.

Due to a limitation at COMET farm, the maximum number of crops per [plantingYear](#plantingYear) is 3. If there are more than 3 crops for a planting year reach out to [Nori support](mailto:support@nori.com)

**`Min Items`**

1

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

[v4-specification.ts:1228](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1228)

___

### dataSourceType

• `Optional` **dataSourceType**: `DataSourceType`

Enum indicating whether data is historical data reported by the grower,
or a projection of future data.

**`Nullable`**

Nullable for backwards compatibility

**`Example`**

<caption>When data is from a projection of future data:</caption>

```js
"dataSourceType": "PROJECTED"
```

#### Defined in

[v4-specification.ts:1242](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1242)

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

[v4-specification.ts:1197](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1197)
