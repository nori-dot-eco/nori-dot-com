[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / HistoricNonCRPLandManagement

# Interface: HistoricNonCRPLandManagement

[specification](../modules/specification.md).HistoricNonCRPLandManagement

Land management details for when a field did not participate in CRP

**`example`**

```js
{
 "crp": "no",
 "preYear1980": "irrigation",
 "tillageForYears1980To2000": "intensive tillage",
 "year1980To2000": "irrigated: annual crops in rotation",
}
```

## Hierarchy

- [`HistoricLandManagement`](specification.HistoricLandManagement.md)

  ↳ **`HistoricNonCRPLandManagement`**

## Table of contents

### Properties

- [crp](specification.HistoricNonCRPLandManagement.md#crp)
- [preYear1980](specification.HistoricNonCRPLandManagement.md#preyear1980)
- [tillageForYears1980To2000](specification.HistoricNonCRPLandManagement.md#tillageforyears1980to2000)
- [year1980To2000](specification.HistoricNonCRPLandManagement.md#year1980to2000)

## Properties

### crp

• **crp**: ``"no"``

Whether the field participated in CRP or not.

**`default`** "no"

**`example`** When the field did not participate in CRP:

```js
"crp": "no"
```

#### Defined in

[specification.ts:325](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L325)

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

[specification.ts:348](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L348)

___

### year1980To2000

• **year1980To2000**: ``"irrigated: annual crops in rotation"`` \| ``"irrigated: annual crops with hay/pasture in rotation"`` \| ``"irrigated: continuous hay"`` \| ``"irrigated: orchard or vineyard"`` \| ``"non-irrigated: annual crops in rotation"`` \| ``"non-irrigated: continuous hay"`` \| ``"non-irrigated: livestock grazing"`` \| ``"non-irrigated: fallow-grain"`` \| ``"non-irrigated: annual crops with hay/pasture in rotation"`` \| ``"non-irrigated: orchard or vineyard"``

A description of how the land was managed between 1980 and 2000.

**`example`**

```js
"year1980To2000": "irrigated: annual crops in rotation"
```

#### Defined in

[specification.ts:362](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L362)
