[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HistoricCRPLandManagement](_specification_.historiccrplandmanagement.md)

# Interface: HistoricCRPLandManagement

Details surrounding how the field was managed before year 2000

Note that the state the field exists within restricts the allowed values per object property.

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
 "preYear1980": "irrigation (pre 1980s)"
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

*Defined in [specification.ts:253](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L253)*

Whether the field participated in CRP or not.

**`default`** "yes"

**`example`** <caption>When the field participated in CRP:</caption>

```js
"crp": "yes"
```

___

###  crpEndYear

• **crpEndYear**: *number*

*Defined in [specification.ts:298](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L298)*

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

*Defined in [specification.ts:284](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L284)*

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

*Defined in [specification.ts:270](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L270)*

The type of CRP the field participated in. Only applicable if `crp` is set to yes.

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

• **postCRPManagement**: *string*

*Defined in [specification.ts:331](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L331)*

How was the field managed after CRP

**`example`** 

```js
"postCRPManagement": "livestock grazing"
```

___

###  postCRPTillage

• **postCRPTillage**: *string*

*Defined in [specification.ts:342](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L342)*

How was the field managed after tillage

**`example`** 

```js
"postCRPTillage": "intensive tillage"
```

___

###  preCRPManagement

• **preCRPManagement**: *string*

*Defined in [specification.ts:309](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L309)*

How was the field managed before the field entered into CRP

**`example`** 

```js
"preCRPManagement": "irrigated: annual crops in rotation"
```

___

###  preCRPTillage

• **preCRPTillage**: *string*

*Defined in [specification.ts:320](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L320)*

How was the field tilled before the field entered into CRP

**`example`** 

```js
"preCRPTillage": "intensive tillage"
```

___

###  preYear1980

• **preYear1980**: *"upland non-irrigated (pre 1980s)" | "irrigation (pre 1980s)" | "lowland non-irrigated (pre 1980s)"*

*Inherited from [HistoricLandManagement](_specification_.historiclandmanagement.md).[preYear1980](_specification_.historiclandmanagement.md#preyear1980)*

*Defined in [specification.ts:137](https://github.com/nori-dot-eco/nori-dot-com/blob/724a4be/packages/project/src/specification.ts#L137)*

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
