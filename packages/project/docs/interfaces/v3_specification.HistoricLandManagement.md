[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / HistoricLandManagement

# Interface: HistoricLandManagement

[v3-specification](../modules/v3_specification.md).HistoricLandManagement

**`example`**

```js
{
 "preYear1980": "irrigation"
}
```

## Hierarchy

- **`HistoricLandManagement`**

  ↳ [`HistoricNonCRPLandManagement`](v3_specification.HistoricNonCRPLandManagement.md)

  ↳ [`HistoricCRPLandManagement`](v3_specification.HistoricCRPLandManagement.md)

## Table of contents

### Properties

- [preYear1980](v3_specification.HistoricLandManagement.md#preyear1980)

## Properties

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

#### Defined in

v3-specification.ts:290
