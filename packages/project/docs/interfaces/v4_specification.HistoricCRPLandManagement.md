[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / HistoricCRPLandManagement

# Interface: HistoricCRPLandManagement

[v4-specification](../modules/v4_specification.md).HistoricCRPLandManagement

Details surrounding how the field was managed before year 2000

Note that the state the field exists within restricts the allowed values per object property. To find applicable values per location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`Example`**

```js
{
 // HistoricCRPLandManagement:
 "crp": true,
 "crpType": "100% grass",
 "crpStartYear": 1980,
 "crpEndYear": 2000,
 "preCRPManagement": "irrigated: annual crops in rotation",
 "preCRPTillage": "intensive tillage",
 "postCRPManagement": "livestock grazing",
 "postCRPTillage": "intensive tillage",
 // HistoricLandManagement:
 "preYear1980": "irrigation"
}
```

## Hierarchy

- [`HistoricLandManagement`](v4_specification.HistoricLandManagement.md)

  ↳ **`HistoricCRPLandManagement`**

## Table of contents

### Properties

- [crp](v4_specification.HistoricCRPLandManagement.md#crp)
- [crpEndYear](v4_specification.HistoricCRPLandManagement.md#crpendyear)
- [crpStartYear](v4_specification.HistoricCRPLandManagement.md#crpstartyear)
- [crpType](v4_specification.HistoricCRPLandManagement.md#crptype)
- [postCRPManagement](v4_specification.HistoricCRPLandManagement.md#postcrpmanagement)
- [postCRPTillage](v4_specification.HistoricCRPLandManagement.md#postcrptillage)
- [preCRPManagement](v4_specification.HistoricCRPLandManagement.md#precrpmanagement)
- [preCRPTillage](v4_specification.HistoricCRPLandManagement.md#precrptillage)
- [preYear1980](v4_specification.HistoricCRPLandManagement.md#preyear1980)

## Properties

### crp

• **crp**: ``true``

Whether the field participated in CRP or not.

**`Default`**

```ts
true
```

**`Example`**

<caption>When the field participated in CRP:</caption>

```js
"crp": true
```

#### Defined in

[v4-specification.ts:694](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L694)

___

### crpEndYear

• **crpEndYear**: `number`

The CRP end year

**`Minimum`**

1980

**`Maximum`**

2000

**`Example`**

<caption>When CRP enrollment ended in 2000:</caption>

```js
"crpEndYear": 2000
```

#### Defined in

[v4-specification.ts:733](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L733)

___

### crpStartYear

• **crpStartYear**: `number`

The CRP start year

**`Minimum`**

1980

**`Maximum`**

2000

**`Example`**

<caption>When CRP enrollment started in 1980:</caption>

```js
"crpStartYear": 1980
```

#### Defined in

[v4-specification.ts:721](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L721)

___

### crpType

• **crpType**: ``"100% grass"`` \| ``"grass/legume mixture"``

The type of CRP the field participated in. Only applicable if [crp](#crp) is set to true.

**`Example`**

<caption>When the field participated in 100% grass CRP:</caption>

```js
"crpType": "100% grass"
```

**`Example`**

<caption>When the field participated in grass/legume mixture CRP:</caption>

```js
"crpType": "grass/legume mixture"
```

#### Defined in

[v4-specification.ts:709](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L709)

___

### postCRPManagement

• **postCRPManagement**: ``"irrigated: annual crops in rotation"`` \| ``"irrigated: annual crops with hay/pasture in rotation"`` \| ``"irrigated: continuous hay"`` \| ``"irrigated: orchard or vineyard"`` \| ``"non-irrigated: annual crops in rotation"`` \| ``"non-irrigated: continuous hay"`` \| ``"non-irrigated: livestock grazing"`` \| ``"non-irrigated: fallow-grain"`` \| ``"non-irrigated: orchard or vineyard"``

How was the field managed after CRP

To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`Example`**

```js
"postCRPManagement": "non-irrigated: livestock grazing"
```

#### Defined in

[v4-specification.ts:776](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L776)

___

### postCRPTillage

• **postCRPTillage**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

How was the field managed after tillage

**`Example`**

```js
"postCRPTillage": "intensive tillage"
```

#### Defined in

[v4-specification.ts:795](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L795)

___

### preCRPManagement

• **preCRPManagement**: ``"irrigated: annual crops in rotation"`` \| ``"irrigated: annual crops with hay/pasture in rotation"`` \| ``"irrigated: continuous hay"`` \| ``"irrigated: orchard or vineyard"`` \| ``"non-irrigated: annual crops in rotation"`` \| ``"non-irrigated: continuous hay"`` \| ``"non-irrigated: livestock grazing"`` \| ``"non-irrigated: fallow-grain"`` \| ``"non-irrigated: orchard or vineyard"``

How was the field managed before the field entered into CRP

To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`Example`**

```js
"preCRPManagement": "irrigated: annual crops in rotation"
```

#### Defined in

[v4-specification.ts:745](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L745)

___

### preCRPTillage

• **preCRPTillage**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

How was the field tilled before the field entered into CRP

**`Example`**

```js
"preCRPTillage": "intensive tillage"
```

#### Defined in

[v4-specification.ts:764](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L764)

___

### preYear1980

• **preYear1980**: ``"upland non-irrigated"`` \| ``"irrigation"`` \| ``"lowland non-irrigated"`` \| ``"livestock grazing"``

A description of how the land was managed before 1980.

**`Example`**

<caption>When the land was not upland (referring to any land that is not low or marsh-like) irrigated before 1980:</caption>

```js
"preYear1980": "upland non-irrigated"
```

**`Example`**

<caption>When the land was irrigated before 1980:</caption>

```js
"preYear1980": "irrigation"
```

**`Example`**

<caption>When the land was not lowland (referring to land that is low and subject to flooding) irrigated before 1980:</caption>

```js
"preYear1980": "lowland non-irrigated"
```

**`Example`**

<caption>When the land employed livestock grazing before 1980:</caption>

```js
"preYear1980": "lowland non-irrigated"
```

#### Inherited from

[HistoricLandManagement](v4_specification.HistoricLandManagement.md).[preYear1980](v4_specification.HistoricLandManagement.md#preyear1980)

#### Defined in

[v4-specification.ts:582](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L582)
