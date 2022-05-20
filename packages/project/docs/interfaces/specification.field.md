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

**`errormessage`**
{
"required": "projectDataError:fieldRequiredPropertyMissing",
"additionalProperties": "projectDataError:fieldUnknownAdditionalProperty",
"_": "projectDataError:fieldUnknownError"
}

## Table of contents

### Properties

- [acres](specification.Field.md#acres)
- [cropYears](specification.Field.md#cropyears)
- [fieldName](specification.Field.md#fieldname)
- [geojson](specification.Field.md#geojson)
- [historicLandManagement](specification.Field.md#historiclandmanagement)
- [regenerativeStartYear](specification.Field.md#regenerativestartyear)

## Properties

### acres

• **acres**: `number`

The number of acres that use the herein defined crop management practices (via [cropYears](#cropYears)).

**`nullable`** during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)

**`example`** When the field's legal area is 100 acres:

```js
"acres": 100
```

#### Defined in

[specification.ts:641](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L641)

___

### cropYears

• **cropYears**: [`CropYear`](specification.CropYear.md)[]

A list of crop management details grouped by the crop planting year.

**`example`** When a field has management information for planting year 2000:

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

#### Defined in

[specification.ts:676](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L676)

___

### fieldName

• **fieldName**: `string`

The name of the field.

**`example`** When a field is named "Pumpkin Pines":

```js
"fieldName": "Pumpkin Pines"
```

**`errormessage`**
{
"type": "projectDataError:fieldNameTypeError",
"_": "projectDataError:fieldNameUnknownError"
}

#### Defined in

[specification.ts:628](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L628)

___

### geojson

• **geojson**: `GeoJSON`

The geographic boundaries (defined as GeoJSON) associated with crop management practices.

For additional guidance and limitation of boundary files, [refer to the FAQ here](https://docs.google.com/document/d/1vnJKwFzU6drCjTD-eVXUK_59togcmROliyOU1y8Ne1U/edit?ts=5ed8f2d1#heading=h.fbiiknhrzhg8)

**`example`** When a field boundary is defined as a simple polygon:

```js
"geojson": {
 "type": "Polygon", "coordinates": [
   [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
 ]
}
```

#### Defined in

[specification.ts:658](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L658)

___

### historicLandManagement

• **historicLandManagement**: [`HistoricNonCRPLandManagement`](specification.HistoricNonCRPLandManagement.md) \| [`HistoricCRPLandManagement`](specification.HistoricCRPLandManagement.md)

Details surrounding how the field was managed before year 2000.

**`nullable`** during import (note: when historicLandManagement is defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`example`** When the field did not participate in CRP (HistoricNonCRPLandManagement):

```js
"historicLandManagement": {
 "crp": "no",
 "preYear1980": "irrigation",
 "tillageForYears1980To2000": "intensive tillage",
 "year1980To2000": "irrigated: annual crops in rotation",
}
```

**`example`** When the field did participate in CRP (HistoricCRPLandManagement):

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

#### Defined in

[specification.ts:609](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L609)

___

### regenerativeStartYear

• **regenerativeStartYear**: `number`

The year that you most recently adopted regenerative agricultural practices

For more information on how to select a start year see [here](https://go.nori.com/enrollment-manual).

**`minimum`** 2010

**`example`** When regenerative practices started in year 2015:

```js
"regenerativeStartYear": 2015
```

#### Defined in

[specification.ts:575](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L575)
