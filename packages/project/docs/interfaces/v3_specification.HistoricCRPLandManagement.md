[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / HistoricCRPLandManagement

# Interface: HistoricCRPLandManagement

[v3-specification](../modules/v3_specification.md).HistoricCRPLandManagement

Details surrounding how the field was managed before year 2000

Note that the state the field exists within restricts the allowed values per object property. To find applicable values per location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`Example`**

```js
{
 // HistoricCRPLandManagement:
 "crp": "yes",
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

- [`HistoricLandManagement`](v3_specification.HistoricLandManagement.md)

  ↳ **`HistoricCRPLandManagement`**

## Table of contents

### Properties

- [crp](v3_specification.HistoricCRPLandManagement.md#crp)
- [crpEndYear](v3_specification.HistoricCRPLandManagement.md#crpendyear)
- [crpStartYear](v3_specification.HistoricCRPLandManagement.md#crpstartyear)
- [crpType](v3_specification.HistoricCRPLandManagement.md#crptype)
- [postCRPManagement](v3_specification.HistoricCRPLandManagement.md#postcrpmanagement)
- [postCRPTillage](v3_specification.HistoricCRPLandManagement.md#postcrptillage)
- [preCRPManagement](v3_specification.HistoricCRPLandManagement.md#precrpmanagement)
- [preCRPTillage](v3_specification.HistoricCRPLandManagement.md#precrptillage)
- [preYear1980](v3_specification.HistoricCRPLandManagement.md#preyear1980)

## Properties

### crp

• **crp**: ``"yes"``

Whether the field participated in CRP or not.

**`Default`**

"yes"

**`Example`**

<caption>When the field participated in CRP:</caption>

```js
"crp": "yes"
```

#### Defined in

[v3-specification.ts:418](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L418)

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

[v3-specification.ts:463](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L463)

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

[v3-specification.ts:449](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L449)

___

### crpType

• **crpType**: ``"100% grass"`` \| ``"grass/legume mixture"``

The type of CRP the field participated in. Only applicable if [crp](#crp) is set to yes.

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

[v3-specification.ts:435](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L435)

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

[v3-specification.ts:509](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L509)

___

### postCRPTillage

• **postCRPTillage**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

How was the field managed after tillage

**`Example`**

```js
"postCRPTillage": "intensive tillage"
```

#### Defined in

[v3-specification.ts:529](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L529)

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

[v3-specification.ts:476](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L476)

___

### preCRPTillage

• **preCRPTillage**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

How was the field tilled before the field entered into CRP

**`Example`**

```js
"preCRPTillage": "intensive tillage"
```

#### Defined in

[v3-specification.ts:496](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L496)

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

[HistoricLandManagement](v3_specification.HistoricLandManagement.md).[preYear1980](v3_specification.HistoricLandManagement.md#preyear1980)

#### Defined in

[v3-specification.ts:296](https://github.com/nori-dot-eco/nori-dot-com/blob/9000427/packages/project/src/v3-specification.ts#L296)
