[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / Field

# Interface: Field

[specification](../modules/specification.md).Field

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

## Table of contents

### Properties

- [acres](specification.field.md#acres)
- [cropYears](specification.field.md#cropyears)
- [fieldName](specification.field.md#fieldname)
- [geojson](specification.field.md#geojson)
- [historicLandManagement](specification.field.md#historiclandmanagement)
- [regenerativeStartYear](specification.field.md#regenerativestartyear)

## Properties

### acres

• **acres**: *number*

The number of acres that use the herein defined crop management practices (via [cropYears](#cropYears)).

**`nullable`** during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)

**`example`** <caption>When the field's legal area is 100 acres:</caption>

```js
"acres": 100
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:561](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L561)

___

### cropYears

• **cropYears**: [*CropYear*](specification.cropyear.md)[]

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

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:596](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L596)

___

### fieldName

• **fieldName**: *string*

The name of the field.

**`example`** <caption>When a field is named "Pumpkin Pines":</caption>

```js
"fieldName": "Pumpkin Pines"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:548](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L548)

___

### geojson

• **geojson**: Geometry \| *Feature*<Geometry, { [name: string]: *any*;  }\> \| *FeatureCollection*<Geometry, { [name: string]: *any*;  }\>

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

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:578](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L578)

___

### historicLandManagement

• **historicLandManagement**: [*HistoricNonCRPLandManagement*](specification.historicnoncrplandmanagement.md) \| [*HistoricCRPLandManagement*](specification.historiccrplandmanagement.md)

Details surrounding how the field was managed before year 2000.

**`nullable`** during import (note: when historicLandManagement is defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

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

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:535](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L535)

___

### regenerativeStartYear

• **regenerativeStartYear**: *number*

The year that you most recently adopted regenerative agricultural practices

For more information on how to select a start year see [here](https://go.nori.com/enrollment-manual).

**`minimum`** 2010

**`example`** <caption>When regenerative practices started in year 2015:</caption>

```js
"regenerativeStartYear": 2015
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:501](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L501)
