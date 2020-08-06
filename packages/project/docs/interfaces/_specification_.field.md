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
 ],
 "historicLandManagement": {
   // ...HistoricNonCRPLandManagement or HistoricCRPLandManagement
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
* [historicLandManagement](_specification_.field.md#historiclandmanagement)
* [regenerativeStartYear](_specification_.field.md#regenerativestartyear)

## Properties

###  acres

• **acres**: *number*

*Defined in [specification.ts:479](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L479)*

The number of acres that use the herein defined crop management practices (via [cropYears](#cropYears)).

**`nullable`** during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)

**`example`** <caption>When the field's legal area is 100 acres:</caption>

```js
"acres": 100
```

___

###  cropYears

• **cropYears**: *[CropYear](_specification_.cropyear.md)[]*

*Defined in [specification.ts:514](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L514)*

A list of crop management details grouped by the crop planting year.

**`example`** <caption>When a field has management information for planting year 2000:</caption>

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

*Defined in [specification.ts:466](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L466)*

The name of the field.

**`example`** <caption>When a field is named "Pumpkin Pines":</caption>

```js
"fieldName": "Pumpkin Pines"
```

___

###  geojson

• **geojson**: *GeoJSON*

*Defined in [specification.ts:496](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L496)*

The geographic boundaries (defined as GeoJSON) associated with crop management practices.

For additional guidance and limitation of boundary files, [refer to the FAQ here](https://docs.google.com/document/d/1vnJKwFzU6drCjTD-eVXUK_59togcmROliyOU1y8Ne1U/edit?ts=5ed8f2d1#heading=h.fbiiknhrzhg8)

**`example`** <caption>When a field boundary is defined as a simple polygon:</caption>

```js
"geojson": {
 "type": "Polygon", "coordinates": [
   [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
 ]
}
```

___

###  historicLandManagement

• **historicLandManagement**: *[HistoricNonCRPLandManagement](_specification_.historicnoncrplandmanagement.md) | [HistoricCRPLandManagement](_specification_.historiccrplandmanagement.md)*

*Defined in [specification.ts:453](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L453)*

Details surrounding how the field was managed before year 2000.

**`example`** <caption>When the field did not participate in CRP (HistoricNonCRPLandManagement):</caption>

```js
"historicLandManagement": {
 "crp": "no",
 "preYear1980": "irrigation",
 "tillageForYears1980To2000": "intensive tillage",
 "year1980To2000": "irrigated: annual crops in rotation",
}
```

**`example`** <caption>When the field did participate in CRP (HistoricCRPLandManagement):</caption>

```js
"historicLandManagement":  {
 "crp": "yes",
 "crpType": "100% grass",
 "crpStartYear": 1980,
 "crpEndYear": 2000,
 "preCRPManagement": "irrigated: annual crops in rotation",
 "preCRPTillage": "intensive tillage",
 "postCRPManagement": "livestock grazing",
 "postCRPTillage": "intensive tillage",
 "preYear1980": "irrigation"
}
```

___

###  regenerativeStartYear

• **regenerativeStartYear**: *number*

*Defined in [specification.ts:421](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L421)*

The year that you most recently adopted regenerative agricultural practices

For more information on how to select a start year see [here](https://go.nori.com/enrollment-manual).

**`minimum`** 2010

**`example`** <caption>When regenerative practices started in year 2015:</caption>

```js
"regenerativeStartYear": 2015
```
