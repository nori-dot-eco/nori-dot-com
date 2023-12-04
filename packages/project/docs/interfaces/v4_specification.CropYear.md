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
 "dataSourceType": "grower reported",
}
```

## Table of contents

### Properties

- [crops](v4_specification.CropYear.md#crops)
- [dataSourceType](v4_specification.CropYear.md#datasourcetype)
- [plantingYear](v4_specification.CropYear.md#plantingyear)

## Properties

### crops

• **crops**: [`Crop`](v4_specification.Crop.md)[]

A list of crops for a given planting year.

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

[v4-specification.ts:1171](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1171)

___

### dataSourceType

• `Optional` **dataSourceType**: ``"grower reported"`` \| ``"projected"`` \| ``"historical extrapolation"``

Flag indicating whether data is historical data reported by the grower,
or a projection of future data.

**`Default`**

```ts
grower reported
```

**`Example`**

<caption>When data is from a projection of anticipated future practice:</caption>

```js
"dataSourceType": "projected"
```

**`Example`**

<caption>When historical data is extrapolated back based on more recent practice data:</caption>

```js
"dataSourceType": "historical extrapolation"
```

#### Defined in

[v4-specification.ts:1188](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1188)

___

### plantingYear

• **plantingYear**: `number`

The planting year that the herein defined [crops](#crops) property is associated with.
Note that a requirement to run quantification is that all crop management practices be
mapped to a particular planting year as early as year 2000. Specific crops planted in
1999 and terminated in 2000 are also relevant to the quantification model.

**`Minimum`**

1999

**`Maximum`**

2099

**`Example`**

<caption>When the herein defined crops were planted in year 2000:</caption>

```js
"plantingYear": 2000
```

#### Defined in

[v4-specification.ts:1144](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1144)
