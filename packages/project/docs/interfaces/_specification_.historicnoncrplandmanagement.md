[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HistoricNonCRPLandManagement](_specification_.historicnoncrplandmanagement.md)

# Interface: HistoricNonCRPLandManagement

Land management details for when a field did not participate in CRP

**`example`** 

```js
{
 "crp": "no",
 "preYear1980": "irrigation (pre 1980s)",
 "tillageForYears1980To2000": "intensive tillage",
 "year1980To2000": "irrigated: annual crops in rotation",
}
```

## Hierarchy

* [HistoricLandManagement](_specification_.historiclandmanagement.md)

  ↳ **HistoricNonCRPLandManagement**

## Index

### Properties

* [crp](_specification_.historicnoncrplandmanagement.md#crp)
* [preYear1980](_specification_.historicnoncrplandmanagement.md#preyear1980)
* [tillageForYears1980To2000](_specification_.historicnoncrplandmanagement.md#tillageforyears1980to2000)
* [year1980To2000](_specification_.historicnoncrplandmanagement.md#year1980to2000)

## Properties

###  crp

• **crp**: *"no"*

*Defined in [specification.ts:171](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L171)*

Whether the field participated in CRP or not.

**`default`** "no"

**`example`** <caption>When the field did not participate in CRP</caption>

```js
"crp": "no"
```

___

###  preYear1980

• **preYear1980**: *"upland non-irrigated (pre 1980s)" | "irrigation (pre 1980s)" | "lowland non-irrigated (pre 1980s)"*

*Inherited from [HistoricLandManagement](_specification_.historiclandmanagement.md).[preYear1980](_specification_.historiclandmanagement.md#preyear1980)*

*Defined in [specification.ts:137](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L137)*

A description of how the land was managed before 1980.

**`example`** <caption>When the land was not irrigated upland before 1980</caption>

```js
"preYear1980": "upland non-irrigated (pre 1980s)"
```

**`example`** <caption>When the land was irrigated before 1980</caption>

```js
"preYear1980": "irrigation (pre 1980s)"
```

**`example`** <caption>When the land was not irrigated lowland before 1980</caption>

```js
"preYear1980": "lowland non-irrigated (pre 1980s)"
```

___

###  tillageForYears1980To2000

• **tillageForYears1980To2000**: *"intensive tillage" | "reduced tillage" | "no till"*

*Defined in [specification.ts:194](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L194)*

The type of soil or crop disturbance events used on the field between 1980 and 2000.

**`example`** <caption>When the land used intensive tillage from years 1980-2000</caption>

```js
"tillageForYears1980To2000": "intensive tillage"
```

**`example`** <caption>When the land used reduced tillage from years 1980-2000</caption>

```js
"tillageForYears1980To2000": "reduced tillage"
```

**`example`** <caption>When the land used no till from years 1980-2000</caption>

```js
"tillageForYears1980To2000": "no till"
```

___

###  year1980To2000

• **year1980To2000**: *"irrigated: annual crops in rotation" | "irrigated: continuous hay" | "non-irrigated: annual crops with hay/pasture in rotation" | "non-irrigated: continuous hay" | "non-irrigated: livestock grazing" | "irrigated: annual crops with hay/pasture in rotation" | "non-irrigated: annual crops in rotation" | "non-irrigated: fallow-grain" | "irrigated: orchard or vineyard"*

*Defined in [specification.ts:203](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L203)*

A description of how the land was managed between 1980 and 2000.

**`example`**
