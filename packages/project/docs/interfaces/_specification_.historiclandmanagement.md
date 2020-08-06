[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HistoricLandManagement](_specification_.historiclandmanagement.md)

# Interface: HistoricLandManagement

**`example`** 

```js
{
 "preYear1980": "irrigation (pre 1980s)"
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

• **preYear1980**: *"upland non-irrigated (pre 1980s)" | "irrigation (pre 1980s)" | "lowland non-irrigated (pre 1980s)"*

*Defined in [specification.ts:137](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L137)*

A description of how the land was managed before 1980.

**`example`** <caption>When the land was not irrigated upland before 1980:</caption>

```js
"preYear1980": "upland non-irrigated (pre 1980s)"
```

**`example`** <caption>When the land was irrigated before 1980:</caption>

```js
"preYear1980": "irrigation (pre 1980s)"
```

**`example`** <caption>When the land was not irrigated lowland before 1980:</caption>

```js
"preYear1980": "lowland non-irrigated (pre 1980s)"
```
