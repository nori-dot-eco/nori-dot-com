[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [Field](_specification_.field.md)

# Interface: Field

A field defining annual crop management practices. Fields are defined by geographic boundaries that contain crop management practices that are identical across the whole of that boundary.

**`example`** 

```js
{
 "fieldName": "Pumpkin Pines",
 "acres": 100,
 "geojson": {},
 "cropYears": [
   // a list of annual crop management practices
 ]
}
```

## Hierarchy

* **Field**

## Index

### Properties

* [acres](_specification_.field.md#acres)
* [cropYears](_specification_.field.md#cropyears)
* [fieldName](_specification_.field.md#fieldname)
* [geojson](_specification_.field.md#geojson)
* [historicLangManagement](_specification_.field.md#historiclangmanagement)
* [regenerativeStartYear](_specification_.field.md#regenerativestartyear)

## Properties

###  acres

• **acres**: *number*

*Defined in [specification.ts:241](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L241)*

 The number of acres that use the herein defined crop management practices (via `cropYears`).

**`nullable`** during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)

**`example`** <caption>When the field's legal area is 100 acres</caption>

```js
"acres": 100
```

___

###  cropYears

• **cropYears**: *[CropYear](_specification_.cropyear.md)[]*

*Defined in [specification.ts:249](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L249)*

A list of crop management details grouped by the crop planting year.

___

###  fieldName

• **fieldName**: *string*

*Defined in [specification.ts:228](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L228)*

The name of the field

**`example`** 

```js
"fieldName": "Pumpkin Pines"
```

___

###  geojson

• **geojson**: *GeoJSON*

*Defined in [specification.ts:245](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L245)*

The geographic boundaries (defined as GeoJSON) associated with crop management practices.

___

###  historicLangManagement

• **historicLangManagement**: *[HistoricLandManagement](_specification_.historiclandmanagement.md)*

*Defined in [specification.ts:217](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L217)*

Details surrounding how the field was managed before year 2000

___

###  regenerativeStartYear

• **regenerativeStartYear**: *number*

*Defined in [specification.ts:213](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L213)*

The year that regenerative practices started

**`example`** <caption>When regenerative practices started in year 2015</caption>

```js
"regenerativeStartYear": 2015
```
