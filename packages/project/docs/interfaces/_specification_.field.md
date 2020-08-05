[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [Field](_specification_.field.md)

# Interface: Field

A field defining annual crop management practices. Fields are defined by geographic boundaries that contain crop management practices that are identical across the whole of that boundary.

**`example`** 

```js
{
 "regenerativeStartYear": 2015,
 "fieldName": "Pumpkin Pines",
 "acres": 100,
 "geojson": {
   // exmaple GeoJSON:
   "type": "Polygon",
    "coordinates": [
        [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
    ]
 },
 "cropYears": [
   // a list of annual crop management practices
 ]
 "historicLangManagement": {
   // ...HistoricLandManagement
 }
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

*Defined in [specification.ts:301](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L301)*

The number of acres that use the herein defined crop management practices (via `cropYears`).

**`nullable`** during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)

**`example`** <caption>When the field's legal area is 100 acres</caption>

```js
"acres": 100
```

___

###  cropYears

• **cropYears**: *[CropYear](_specification_.cropyear.md)[]*

*Defined in [specification.ts:334](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L334)*

A list of crop management details grouped by the crop planting year.

**`example`** <caption>When a field has management information for planting year 2000</caption>

```js
"cropYears": [
 {
   "plantingYear": 2000,
   "crops": [
     // ...(AnnualCrop | OrchardOrVineyardCrop | PerennialCrop)[] (crops that were planted in year 2000)
   ],
 }
]
```

___

###  fieldName

• **fieldName**: *string*

*Defined in [specification.ts:288](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L288)*

The name of the field

**`example`** <caption>When a field is named "Pumpkin Pines"</caption>

```js
"fieldName": "Pumpkin Pines"
```

___

###  geojson

• **geojson**: *GeoJSON*

*Defined in [specification.ts:316](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L316)*

The geographic boundaries (defined as GeoJSON) associated with crop management practices.

**`example`** <caption>When a field boundary is defined as a simple polygon</caption>

```js
"geojson": {
 "type": "Polygon", "coordinates": [
   [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
 ]
}
```

___

###  historicLangManagement

• **historicLangManagement**: *[HistoricLandManagement](_specification_.historiclandmanagement.md)*

*Defined in [specification.ts:277](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L277)*

Details surrounding how the field was managed before year 2000

**`example`** 

```js
"historicLangManagement": {
 // ...HistoricLandManagement
}
```

___

###  regenerativeStartYear

• **regenerativeStartYear**: *number*

*Defined in [specification.ts:264](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L264)*

The year that regenerative practices started

**`example`** <caption>When regenerative practices started in year 2015</caption>

```js
"regenerativeStartYear": 2015
```
