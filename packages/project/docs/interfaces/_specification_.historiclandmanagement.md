[@nori-dot-com/project](../README.md) › ["specification"](../modules/_specification_.md) › [HistoricLandManagement](_specification_.historiclandmanagement.md)

# Interface: HistoricLandManagement

**`example`** 

```js
{
 "preYear1980": "irrigation"
}
```

## Hierarchy

* **HistoricLandManagement**

  ↳ [HistoricNonCRPLandManagement](_specification_.historicnoncrplandmanagement.md)

  ↳ [HistoricCRPLandManagement](_specification_.historiccrplandmanagement.md)

## Index

### Properties

* [preYear1980](_specification_.historiclandmanagement.md#preyear1980)

## Properties

###  preYear1980

• **preYear1980**: *"upland non-irrigated" | "irrigation" | "lowland non-irrigated" | "livestock grazing"*

*Defined in [specification.ts:223](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L223)*

A description of how the land was managed before 1980.

**`example`** <caption>When the land was not upland (referring to any land that is not low or marsh-like) irrigated before 1980:</caption>

```js
"preYear1980": "upland non-irrigated"
```

**`example`** <caption>When the land was irrigated before 1980:</caption>

```js
"preYear1980": "irrigation"
```

**`example`** <caption>When the land was not lowland (referring to land that is low and subject to flooding) irrigated before 1980:</caption>

```js
"preYear1980": "lowland non-irrigated"
```

**`example`** <caption>When the land employed livestock grazing before 1980:</caption>

```js
"preYear1980": "lowland non-irrigated"
```
