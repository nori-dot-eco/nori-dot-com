[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / HistoricCRPLandManagement

# Interface: HistoricCRPLandManagement

[specification](../modules/specification.md).HistoricCRPLandManagement

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

* [*HistoricLandManagement*](specification.historiclandmanagement.md)

  ↳ **HistoricCRPLandManagement**

## Table of contents

### Properties

- [crp](specification.historiccrplandmanagement.md#crp)
- [crpEndYear](specification.historiccrplandmanagement.md#crpendyear)
- [crpStartYear](specification.historiccrplandmanagement.md#crpstartyear)
- [crpType](specification.historiccrplandmanagement.md#crptype)
- [postCRPManagement](specification.historiccrplandmanagement.md#postcrpmanagement)
- [postCRPTillage](specification.historiccrplandmanagement.md#postcrptillage)
- [preCRPManagement](specification.historiccrplandmanagement.md#precrpmanagement)
- [preCRPTillage](specification.historiccrplandmanagement.md#precrptillage)
- [preYear1980](specification.historiccrplandmanagement.md#preyear1980)

## Properties

### crp

• **crp**: *yes*

Whether the field participated in CRP or not.

**`default`** "yes"

**`example`** <caption>When the field participated in CRP:</caption>

```js
"crp": "yes"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:345](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L345)

___

### crpEndYear

• **crpEndYear**: *number*

The CRP end year

**`minimum`** 1980

**`maximum`** 2000

**`example`** <caption>When CRP enrollment ended in 2000:</caption>

```js
"crpEndYear": 2000
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:390](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L390)

___

### crpStartYear

• **crpStartYear**: *number*

The CRP start year

**`minimum`** 1980

**`maximum`** 2000

**`example`** <caption>When CRP enrollment started in 1980:</caption>

```js
"crpStartYear": 1980
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:376](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L376)

___

### crpType

• **crpType**: *100% grass* \| *grass / legume mixture*

The type of CRP the field participated in. Only applicable if [crp](#crp) is set to yes.

**`example`** <caption>When the field participated in 100% grass CRP:</caption>

```js
"crpType": "100% grass"
```

**`example`** <caption>When the field participated in grass/legume mixture CRP:</caption>

```js
"crpType": "grass / legume mixture"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:362](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L362)

___

### postCRPManagement

• **postCRPManagement**: *irrigated: annual crops in rotation* \| *irrigated: annual crops with hay/pasture in rotation* \| *irrigated: continuous hay* \| *irrigated: orchard or vineyard* \| *non-irrigated: annual crops in rotation* \| *non-irrigated: continuous hay* \| *non-irrigated: livestock grazing* \| *non-irrigated: fallow-grain* \| *non-irrigated: orchard or vineyard*

How was the field managed after CRP

To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`example`** 

```js
"postCRPManagement": "non-irrigated: livestock grazing"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:436](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L436)

___

### postCRPTillage

• **postCRPTillage**: *intensive tillage* \| *reduced tillage* \| *no till*

How was the field managed after tillage

**`example`** 

```js
"postCRPTillage": "intensive tillage"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:456](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L456)

___

### preCRPManagement

• **preCRPManagement**: *irrigated: annual crops in rotation* \| *irrigated: annual crops with hay/pasture in rotation* \| *irrigated: continuous hay* \| *irrigated: orchard or vineyard* \| *non-irrigated: annual crops in rotation* \| *non-irrigated: continuous hay* \| *non-irrigated: livestock grazing* \| *non-irrigated: fallow-grain* \| *non-irrigated: orchard or vineyard*

How was the field managed before the field entered into CRP

To find applicable values per field location, see [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQQnIlyxCENwJvw5Luyg2Ikbn_X0FvMTNr2J6n5Y2xwcR6oi4OA2jNW-B2DrslTKtrmQxg03byZ_aRV/pubhtml)

**`example`** 

```js
"preCRPManagement": "irrigated: annual crops in rotation"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:403](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L403)

___

### preCRPTillage

• **preCRPTillage**: *intensive tillage* \| *reduced tillage* \| *no till*

How was the field tilled before the field entered into CRP

**`example`** 

```js
"preCRPTillage": "intensive tillage"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:423](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L423)

___

### preYear1980

• **preYear1980**: *upland non-irrigated* \| *irrigation* \| *lowland non-irrigated* \| *livestock grazing*

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

Inherited from: [HistoricLandManagement](specification.historiclandmanagement.md).[preYear1980](specification.historiclandmanagement.md#preyear1980)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:223](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L223)
