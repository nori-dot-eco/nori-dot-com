[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / HistoricCRPLandManagement

# Interface: HistoricCRPLandManagement

[v4-specification](../modules/v4_specification.md).HistoricCRPLandManagement

Details surrounding how the field was managed before year 2000

Note that the state the field exists within restricts the allowed values per object property. To find applicable values per location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`example`**

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

**`default`** true

**`example`** When the field participated in CRP:

```js
"crp": true
```

#### Defined in

[v4-specification.ts:584](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L584)

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

[v4-specification.ts:629](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L629)

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

[v4-specification.ts:615](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L615)

___

### crpType

• **crpType**: ``"100% grass"`` \| ``"grass/legume mixture"``

The type of CRP the field participated in. Only applicable if [crp](#crp) is set to true.

**`example`** When the field participated in 100% grass CRP:

```js
"crpType": "100% grass"
```

**`example`** When the field participated in grass/legume mixture CRP:

```js
"crpType": "grass/legume mixture"
```

#### Defined in

[v4-specification.ts:601](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L601)

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

[v4-specification.ts:675](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L675)

___

### postCRPTillage

• **postCRPTillage**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

How was the field managed after tillage

**`example`**

```js
"postCRPTillage": "intensive tillage"
```

#### Defined in

[v4-specification.ts:695](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L695)

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

[v4-specification.ts:642](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L642)

___

### preCRPTillage

• **preCRPTillage**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

How was the field tilled before the field entered into CRP

**`example`**

```js
"preCRPTillage": "intensive tillage"
```

#### Defined in

[v4-specification.ts:662](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L662)

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

[HistoricLandManagement](v4_specification.HistoricLandManagement.md).[preYear1980](v4_specification.HistoricLandManagement.md#preyear1980)

#### Defined in

[v4-specification.ts:462](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L462)
