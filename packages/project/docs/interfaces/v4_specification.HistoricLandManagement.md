[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / HistoricLandManagement

# Interface: HistoricLandManagement

[v4-specification](../modules/v4_specification.md).HistoricLandManagement

**`example`**

```js
{
 "preYear1980": "irrigation"
}
```

## Hierarchy

- **`HistoricLandManagement`**

  ↳ [`HistoricNonCRPLandManagement`](v4_specification.HistoricNonCRPLandManagement.md)

  ↳ [`HistoricCRPLandManagement`](v4_specification.HistoricCRPLandManagement.md)

## Table of contents

### Properties

- [preYear1980](v4_specification.HistoricLandManagement.md#preyear1980)

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

[v4-specification.ts:462](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L462)
