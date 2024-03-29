[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / HistoricNonCRPLandManagement

# Interface: HistoricNonCRPLandManagement

[v3-specification](../modules/v3_specification.md).HistoricNonCRPLandManagement

Land management details for when a field did not participate in CRP

**`Example`**

```js
{
 "crp": "no",
 "preYear1980": "irrigation",
 "tillageForYears1980To2000": "intensive tillage",
 "year1980To2000": "irrigated: annual crops in rotation",
}
```

## Hierarchy

- [`HistoricLandManagement`](v3_specification.HistoricLandManagement.md)

  ↳ **`HistoricNonCRPLandManagement`**

## Table of contents

### Properties

- [crp](v3_specification.HistoricNonCRPLandManagement.md#crp)
- [preYear1980](v3_specification.HistoricNonCRPLandManagement.md#preyear1980)
- [tillageForYears1980To2000](v3_specification.HistoricNonCRPLandManagement.md#tillageforyears1980to2000)
- [year1980To2000](v3_specification.HistoricNonCRPLandManagement.md#year1980to2000)

## Properties

### crp

• **crp**: ``"no"``

Whether the field participated in CRP or not.

**`Default`**

```ts
"no"
```

**`Example`**

<caption>When the field did not participate in CRP:</caption>

```js
"crp": "no"
```

#### Defined in

[v3-specification.ts:316](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v3-specification.ts#L316)

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

[v3-specification.ts:284](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v3-specification.ts#L284)

___

### tillageForYears1980To2000

• **tillageForYears1980To2000**: ``"intensive tillage"`` \| ``"reduced tillage"`` \| ``"no till"``

The type of soil or crop disturbance events used on the field between 1980 and 2000.

**`Example`**

<caption>When the land used intensive tillage from years 1980-2000:</caption>

```js
"tillageForYears1980To2000": "intensive tillage"
```

**`Example`**

<caption>When the land used reduced tillage from years 1980-2000:</caption>

```js
"tillageForYears1980To2000": "reduced tillage"
```

**`Example`**

<caption>When the land used no till from years 1980-2000:</caption>

```js
"tillageForYears1980To2000": "no till"
```

#### Defined in

[v3-specification.ts:336](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v3-specification.ts#L336)

___

### year1980To2000

• **year1980To2000**: ``"irrigated: annual crops in rotation"`` \| ``"irrigated: annual crops with hay/pasture in rotation"`` \| ``"irrigated: continuous hay"`` \| ``"irrigated: orchard or vineyard"`` \| ``"non-irrigated: annual crops in rotation"`` \| ``"non-irrigated: continuous hay"`` \| ``"non-irrigated: livestock grazing"`` \| ``"non-irrigated: fallow-grain"`` \| ``"non-irrigated: annual crops with hay/pasture in rotation"`` \| ``"non-irrigated: orchard or vineyard"``

A description of how the land was managed between 1980 and 2000.

**`Example`**

```js
"year1980To2000": "irrigated: annual crops in rotation"
```

#### Defined in

[v3-specification.ts:349](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v3-specification.ts#L349)
