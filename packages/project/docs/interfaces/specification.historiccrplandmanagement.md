[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / HistoricCRPLandManagement

# Interface: HistoricCRPLandManagement

[specification](../modules/specification.md).HistoricCRPLandManagement

Details surrounding how the field was managed before year 2000

Note that the state the field exists within restricts the allowed values per object property. To find applicable values per location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`example`**

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

- [`HistoricLandManagement`](specification.HistoricLandManagement.md)

  ↳ **`HistoricCRPLandManagement`**

## Table of contents

### Properties

- [crp](specification.HistoricCRPLandManagement.md#crp)
- [crpEndYear](specification.HistoricCRPLandManagement.md#crpendyear)
- [crpStartYear](specification.HistoricCRPLandManagement.md#crpstartyear)
- [crpType](specification.HistoricCRPLandManagement.md#crptype)
- [postCRPManagement](specification.HistoricCRPLandManagement.md#postcrpmanagement)
- [postCRPTillage](specification.HistoricCRPLandManagement.md#postcrptillage)
- [preCRPManagement](specification.HistoricCRPLandManagement.md#precrpmanagement)
- [preCRPTillage](specification.HistoricCRPLandManagement.md#precrptillage)
- [preYear1980](specification.HistoricCRPLandManagement.md#preyear1980)

## Properties

### crp

• **crp**: ``"yes"``

Whether the field participated in CRP or not.

**`default`** "yes"

**`example`** When the field participated in CRP:

```js
"crp": "yes"
```

#### Defined in

[specification.ts:412](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L412)

___

### crpEndYear

• **crpEndYear**: `number`

The CRP end year

**`minimum`** 1980

**`maximum`** 2000

**`example`** When CRP enrollment ended in 2000:

```js
"crpEndYear": 2000
```

#### Defined in

[specification.ts:457](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L457)

___

### crpStartYear

• **crpStartYear**: `number`

The CRP start year

**`minimum`** 1980

**`maximum`** 2000

**`example`** When CRP enrollment started in 1980:

```js
"crpStartYear": 1980
```

#### Defined in

[specification.ts:443](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L443)

___

### crpType

• **crpType**: ``"100% grass"`` \| ``"grass/legume mixture"``

The type of CRP the field participated in. Only applicable if [crp](#crp) is set to yes.

**`example`** When the field participated in 100% grass CRP:

```js
"crpType": "100% grass"
```

**`example`** When the field participated in grass/legume mixture CRP:

```js
"crpType": "grass/legume mixture"
```

#### Defined in

[specification.ts:429](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L429)

___

### postCRPManagement

• **postCRPManagement**: ``"irrigated: annual crops in rotation"`` \| ``"irrigated: annual crops with hay/pasture in rotation"`` \| ``"irrigated: continuous hay"`` \| ``"irrigated: orchard or vineyard"`` \| ``"non-irrigated: annual crops in rotation"`` \| ``"non-irrigated: continuous hay"`` \| ``"non-irrigated: livestock grazing"`` \| ``"non-irrigated: fallow-grain"`` \| ``"non-irrigated: orchard or vineyard"``

How was the field managed after CRP

To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`example`**

```js
"postCRPManagement": "non-irrigated: livestock grazing"
```

#### Defined in

[specification.ts:503](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L503)

___

### postCRPTillage

• **postCRPTillage**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

How was the field managed after tillage

**`example`**

```js
"postCRPTillage": "intensive tillage"
```

#### Defined in

[specification.ts:523](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L523)

___

### preCRPManagement

• **preCRPManagement**: ``"irrigated: annual crops in rotation"`` \| ``"irrigated: annual crops with hay/pasture in rotation"`` \| ``"irrigated: continuous hay"`` \| ``"irrigated: orchard or vineyard"`` \| ``"non-irrigated: annual crops in rotation"`` \| ``"non-irrigated: continuous hay"`` \| ``"non-irrigated: livestock grazing"`` \| ``"non-irrigated: fallow-grain"`` \| ``"non-irrigated: orchard or vineyard"``

How was the field managed before the field entered into CRP

To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`example`**

```js
"preCRPManagement": "irrigated: annual crops in rotation"
```

#### Defined in

[specification.ts:470](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L470)

___

### preCRPTillage

• **preCRPTillage**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

How was the field tilled before the field entered into CRP

**`example`**

```js
"preCRPTillage": "intensive tillage"
```

#### Defined in

[specification.ts:490](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L490)

___

### preYear1980

• **preYear1980**: ``"upland non-irrigated"`` \| ``"irrigation"`` \| ``"lowland non-irrigated"`` \| ``"livestock grazing"``

A description of how the land was managed before 1980.

**`example`** When the land was not upland (referring to any land that is not low or marsh-like) irrigated before 1980:

```js
"preYear1980": "upland non-irrigated"
```

**`example`** When the land was irrigated before 1980:

```js
"preYear1980": "irrigation"
```

**`example`** When the land was not lowland (referring to land that is low and subject to flooding) irrigated before 1980:

```js
"preYear1980": "lowland non-irrigated"
```

**`example`** When the land employed livestock grazing before 1980:

```js
"preYear1980": "lowland non-irrigated"
```

#### Inherited from

[HistoricLandManagement](specification.HistoricLandManagement.md).[preYear1980](specification.HistoricLandManagement.md#preyear1980)

#### Defined in

[specification.ts:290](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L290)
