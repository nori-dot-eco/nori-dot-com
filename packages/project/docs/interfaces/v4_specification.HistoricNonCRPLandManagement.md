[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / HistoricNonCRPLandManagement

# Interface: HistoricNonCRPLandManagement

[v4-specification](../modules/v4_specification.md).HistoricNonCRPLandManagement

Land management details for when a field did not participate in CRP

**`example`**

```js
{
 "crp": false,
 "preYear1980": "irrigation",
 "tillageForYears1980To2000": "intensive tillage",
 "year1980To2000": "irrigated: annual crops in rotation",
}
```

## Hierarchy

- [`HistoricLandManagement`](v4_specification.HistoricLandManagement.md)

  ↳ **`HistoricNonCRPLandManagement`**

## Table of contents

### Properties

- [crp](v4_specification.HistoricNonCRPLandManagement.md#crp)
- [preYear1980](v4_specification.HistoricNonCRPLandManagement.md#preyear1980)
- [tillageForYears1980To2000](v4_specification.HistoricNonCRPLandManagement.md#tillageforyears1980to2000)
- [year1980To2000](v4_specification.HistoricNonCRPLandManagement.md#year1980to2000)

## Properties

### crp

• **crp**: ``false``

Whether the field participated in CRP or not.

**`default`** false

**`example`** When the field did not participate in CRP:

```js
"crp": false
```

#### Defined in

[v4-specification.ts:605](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L605)

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

[v4-specification.ts:570](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L570)

___

### tillageForYears1980To2000

• **tillageForYears1980To2000**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

The type of soil or crop disturbance events used on the field between 1980 and 2000.

**`example`** When the land used intensive tillage from years 1980-2000:

```js
"tillageForYears1980To2000": "intensive tillage"
```

**`example`** When the land used reduced tillage from years 1980-2000:

```js
"tillageForYears1980To2000": "reduced tillage"
```

**`example`** When the land used no till from years 1980-2000:

```js
"tillageForYears1980To2000": "no till"
```

#### Defined in

[v4-specification.ts:628](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L628)

___

### year1980To2000

• **year1980To2000**: ``"irrigated: annual crops in rotation"`` \| ``"irrigated: annual crops with hay/pasture in rotation"`` \| ``"irrigated: continuous hay"`` \| ``"irrigated: orchard or vineyard"`` \| ``"non-irrigated: annual crops in rotation"`` \| ``"non-irrigated: continuous hay"`` \| ``"non-irrigated: livestock grazing"`` \| ``"non-irrigated: fallow-grain"`` \| ``"non-irrigated: annual crops with hay/pasture in rotation"`` \| ``"non-irrigated: orchard or vineyard"``

A description of how the land was managed between 1980 and 2000.

**`example`**

```js
"year1980To2000": "irrigated: annual crops in rotation"
```

#### Defined in

[v4-specification.ts:642](https://github.com/nori-dot-eco/nori-dot-com/blob/8cfa392/packages/project/src/v4-specification.ts#L642)
