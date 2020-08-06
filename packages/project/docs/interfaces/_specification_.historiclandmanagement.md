[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HistoricLandManagement](_specification_.historiclandmanagement.md)

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

• **preYear1980**: *"upland non-irrigated" | "irrigation" | "lowland non-irrigated"*

*Defined in [specification.ts:137](https://github.com/nori-dot-eco/nori-dot-com/blob/a4e8923/packages/project/src/specification.ts#L137)*

A description of how the land was managed before 1980.

**`example`** <caption>When the land was not irrigated upland before 1980:</caption>

```js
"preYear1980": "upland non-irrigated"
```

**`example`** <caption>When the land was irrigated before 1980:</caption>

```js
"preYear1980": "irrigation"
```

**`example`** <caption>When the land was not irrigated lowland before 1980:</caption>

```js
"preYear1980": "lowland non-irrigated"
```
