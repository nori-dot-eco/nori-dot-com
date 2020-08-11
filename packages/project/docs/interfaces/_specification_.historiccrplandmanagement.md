[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HistoricCRPLandManagement](_specification_.historiccrplandmanagement.md)

# Interface: HistoricCRPLandManagement

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

* [HistoricLandManagement](_specification_.historiclandmanagement.md)

  ↳ **HistoricCRPLandManagement**

## Index

### Properties

* [crp](_specification_.historiccrplandmanagement.md#crp)
* [crpEndYear](_specification_.historiccrplandmanagement.md#crpendyear)
* [crpStartYear](_specification_.historiccrplandmanagement.md#crpstartyear)
* [crpType](_specification_.historiccrplandmanagement.md#crptype)
* [postCRPManagement](_specification_.historiccrplandmanagement.md#postcrpmanagement)
* [postCRPTillage](_specification_.historiccrplandmanagement.md#postcrptillage)
* [preCRPManagement](_specification_.historiccrplandmanagement.md#precrpmanagement)
* [preCRPTillage](_specification_.historiccrplandmanagement.md#precrptillage)
* [preYear1980](_specification_.historiccrplandmanagement.md#preyear1980)

## Properties

###  crp

• **crp**: *"yes"*

*Defined in [specification.ts:261](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L261)*

Whether the field participated in CRP or not.

**`default`** "yes"

**`example`** <caption>When the field participated in CRP:</caption>

```js
"crp": "yes"
```

___

###  crpEndYear

• **crpEndYear**: *number*

*Defined in [specification.ts:306](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L306)*

The CRP end year

**`minimum`** 1980

**`maximum`** 2000

**`example`** <caption>When CRP enrollment ended in 2000:</caption>

```js
"crpEndYear": 2000
```

___

###  crpStartYear

• **crpStartYear**: *number*

*Defined in [specification.ts:292](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L292)*

The CRP start year

**`minimum`** 1980

**`maximum`** 2000

**`example`** <caption>When CRP enrollment started in 1980:</caption>

```js
"crpStartYear": 1980
```

___

###  crpType

• **crpType**: *"100% grass" | "grass / legume mixture"*

*Defined in [specification.ts:278](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L278)*

The type of CRP the field participated in. Only applicable if [crp](#crp) is set to yes.

**`example`** <caption>When the field participated in 100% grass CRP:</caption>

```js
"crpType": "100% grass"
```

**`example`** <caption>When the field participated in grass/legume mixture CRP:</caption>

```js
"crpType": "grass / legume mixture"
```

___

###  postCRPManagement

• **postCRPManagement**: *"irrigated: annual crops in rotation" | "irrigated: annual crops with hay/pasture in rotation" | "irrigated: continuous hay" | "irrigated: orchard or vineyard" | "non-irrigated: annual crops in rotation" | "non-irrigated: continuous hay" | "non-irrigated: livestock grazing" | "non-irrigated: fallow-grain" | "non-irrigated: orchard or vineyard"*

*Defined in [specification.ts:352](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L352)*

How was the field managed after CRP

To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`example`** 

```js
"postCRPManagement": "livestock grazing"
```

___

###  postCRPTillage

• **postCRPTillage**: *"intensive tillage" | "reduced tillage" | "no till"*

*Defined in [specification.ts:372](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L372)*

How was the field managed after tillage

**`example`** 

```js
"postCRPTillage": "intensive tillage"
```

___

###  preCRPManagement

• **preCRPManagement**: *"irrigated: annual crops in rotation" | "irrigated: annual crops with hay/pasture in rotation" | "irrigated: continuous hay" | "irrigated: orchard or vineyard" | "non-irrigated: annual crops in rotation" | "non-irrigated: continuous hay" | "non-irrigated: livestock grazing" | "non-irrigated: fallow-grain" | "non-irrigated: orchard or vineyard"*

*Defined in [specification.ts:319](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L319)*

How was the field managed before the field entered into CRP

To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`example`** 

```js
"preCRPManagement": "irrigated: annual crops in rotation"
```

___

###  preCRPTillage

• **preCRPTillage**: *"intensive tillage" | "reduced tillage" | "no till"*

*Defined in [specification.ts:339](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L339)*

How was the field tilled before the field entered into CRP

**`example`** 

```js
"preCRPTillage": "intensive tillage"
```

___

###  preYear1980

• **preYear1980**: *"upland non-irrigated" | "irrigation" | "lowland non-irrigated" | "livestock grazing"*

*Inherited from [HistoricLandManagement](_specification_.historiclandmanagement.md).[preYear1980](_specification_.historiclandmanagement.md#preyear1980)*

*Defined in [specification.ts:140](https://github.com/nori-dot-eco/nori-dot-com/blob/5f1e21f/packages/project/src/specification.ts#L140)*

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
