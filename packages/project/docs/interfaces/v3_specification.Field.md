[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / Field

# Interface: Field

[v3-specification](../modules/v3_specification.md).Field

A field defining annual crop management practices. Fields are defined by geographic boundaries that contain crop management practices that are identical across the whole of that boundary.

**`Example`**

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

**`Error Message`**

```js
{
"required": "projectDataError:fieldRequiredPropertyMissing",
"additionalProperties": "projectDataError:fieldUnknownAdditionalProperty",
"_": "projectDataError:fieldUnknownError"
}
```

## Table of contents

### Properties

- [acres](v3_specification.Field.md#acres)
- [cropYears](v3_specification.Field.md#cropyears)
- [fieldName](v3_specification.Field.md#fieldname)
- [geojson](v3_specification.Field.md#geojson)
- [historicLandManagement](v3_specification.Field.md#historiclandmanagement)
- [regenerativeStartYear](v3_specification.Field.md#regenerativestartyear)

## Properties

### acres

• **acres**: `number`

The number of acres that use the herein defined crop management practices (via [cropYears](#cropYears)).

**`Nullable`**

during import (note: when acres is defined as null in an import file it will instead be inferred from the geojson)

**`Example`**

<caption>When the field's legal area is 100 acres:</caption>

```js
"acres": 100
```

#### Defined in

[v3-specification.ts:651](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v3-specification.ts#L651)

___

### cropYears

• **cropYears**: [`CropYear`](v3_specification.CropYear.md)[]

A list of crop management details grouped by the crop planting year.

**`Example`**

<caption>When a field has management information for planting year 2000:</caption>

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

[v3-specification.ts:686](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v3-specification.ts#L686)

___

### fieldName

• **fieldName**: `string`

The name of the field.

**`Example`**

<caption>When a field is named "Pumpkin Pines":</caption>

```js
"fieldName": "Pumpkin Pines"
```

**`Error Message`**

```js
{
"type": "projectDataError:fieldNameTypeError",
"_": "projectDataError:fieldNameUnknownError"
}
```

#### Defined in

[v3-specification.ts:638](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v3-specification.ts#L638)

___

### geojson

• **geojson**: `GeoJSON`

The geographic boundaries (defined as GeoJSON) associated with crop management practices.

For additional guidance and limitation of boundary files, [refer to the FAQ here](https://docs.google.com/document/d/1vnJKwFzU6drCjTD-eVXUK_59togcmROliyOU1y8Ne1U/edit?ts=5ed8f2d1#heading=h.fbiiknhrzhg8)

**`Example`**

<caption>When a field boundary is defined as a simple polygon:</caption>

```js
"geojson": {
 "type": "Polygon", "coordinates": [
   [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
 ]
}
```

#### Defined in

[v3-specification.ts:668](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v3-specification.ts#L668)

___

### historicLandManagement

• **historicLandManagement**: [`HistoricNonCRPLandManagement`](v3_specification.HistoricNonCRPLandManagement.md) \| [`HistoricCRPLandManagement`](v3_specification.HistoricCRPLandManagement.md)

Details surrounding how the field was managed before year 2000.

**`Nullable`**

during import (note: when historicLandManagement is defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`Example`**

<caption>When the field did not participate in CRP (HistoricNonCRPLandManagement):</caption>

```js
"historicLandManagement": {
 "crp": "no",
 "preYear1980": "irrigation",
 "tillageForYears1980To2000": "intensive tillage",
 "year1980To2000": "irrigated: annual crops in rotation",
}
```

**`Example`**

<caption>When the field did participate in CRP (HistoricCRPLandManagement):</caption>

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

[v3-specification.ts:617](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v3-specification.ts#L617)

___

### regenerativeStartYear

• **regenerativeStartYear**: `number`

The year that you most recently adopted regenerative agricultural practices

For more information on how to select a start year see [here](https://go.nori.com/enrollment-manual).

**`Minimum`**

2010

**`Example`**

<caption>When regenerative practices started in year 2015:</caption>

```js
"regenerativeStartYear": 2015
```

#### Defined in

[v3-specification.ts:583](https://github.com/nori-dot-eco/nori-dot-com/blob/1017fe3/packages/project/src/v3-specification.ts#L583)
