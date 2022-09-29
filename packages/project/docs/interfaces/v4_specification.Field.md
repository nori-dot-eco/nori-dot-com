[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / Field

# Interface: Field

[v4-specification](../modules/v4_specification.md).Field

A field defining annual crop management practices. Fields are defined by geographic boundaries that contain crop management practices that are identical across the whole of that boundary.

**`example`**

```js
{
 "regenerativeStartYear": 2015,
 "fieldName": "Pumpkin Pines",
 "legalAcres": 100,
 "assignmentOfAuthority": true,
 "landOwners": [{
   "name": "Lonny Long",
   "phone": "999 555-1212",
   "email": "lon@long.com"
  }],
 "parcelNumber": "",
 "legalPropertyDescription": "15 83 40 N 17.70 A OF W 33.67 A SW SE",
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
 },
 "externalId": "faec5e0b-8ce2-4161-93ff-4c9734f22334",
 "id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
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

- [assignmentOfAuthority](v4_specification.Field.md#assignmentofauthority)
- [cropYears](v4_specification.Field.md#cropyears)
- [earliestEvidenceYear](v4_specification.Field.md#earliestevidenceyear)
- [externalId](v4_specification.Field.md#externalid)
- [farmOperator](v4_specification.Field.md#farmoperator)
- [fieldName](v4_specification.Field.md#fieldname)
- [geojson](v4_specification.Field.md#geojson)
- [historicLandManagement](v4_specification.Field.md#historiclandmanagement)
- [id](v4_specification.Field.md#id)
- [landOwners](v4_specification.Field.md#landowners)
- [legalAcres](v4_specification.Field.md#legalacres)
- [legalPropertyDescription](v4_specification.Field.md#legalpropertydescription)
- [mailingAddress](v4_specification.Field.md#mailingaddress)
- [parcelNumber](v4_specification.Field.md#parcelnumber)
- [physicalEvidenceDoesNotCorroborateSwitchYear](v4_specification.Field.md#physicalevidencedoesnotcorroborateswitchyear)
- [practiceChangesAdopted](v4_specification.Field.md#practicechangesadopted)
- [regenerativeStartYear](v4_specification.Field.md#regenerativestartyear)

## Properties

### assignmentOfAuthority

• **assignmentOfAuthority**: `boolean`

assignmentOfAuthority - Is there an assignment of authority in place?
i.e. Is the field leased land?

**`example`** When the operation is on leased land:

```js
"assignmentOfAuthority": true
```

**`example`** When the operator is the land owner:

```js
"assignmentOfAuthority": true
```

#### Defined in

[v4-specification.ts:1035](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1035)

___

### cropYears

• **cropYears**: [`CropYear`](v4_specification.CropYear.md)[]

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

[v4-specification.ts:1104](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1104)

___

### earliestEvidenceYear

• **earliestEvidenceYear**: `number`

Earliest evidence is the first year a field has any digital or hard copy records of its practices
(instead of an external data set to infer practices) and is used to calculate the number of eligible years to issue NRTs.

**`example`** When earliest available detailed practice records date back to 2010:

```js
"earliestEvidenceYear": 2010
```

#### Defined in

[v4-specification.ts:937](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L937)

___

### externalId

• `Optional` **externalId**: `string`

Field identifier from external system.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`nullable`**

**`example`**

```js
"externalId": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
```

#### Defined in

[v4-specification.ts:1120](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1120)

___

### farmOperator

• `Optional` **farmOperator**: [`ContactInfo`](v4_specification.ContactInfo.md)

operator (lessee as shown on lease if land is leased)

**`nullable`** if ownwer is operator or if this information will be communicated directly to the verifier.

#### Defined in

[v4-specification.ts:1049](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1049)

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

[v4-specification.ts:1011](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1011)

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

[v4-specification.ts:1086](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1086)

___

### historicLandManagement

• **historicLandManagement**: [`HistoricNonCRPLandManagement`](v4_specification.HistoricNonCRPLandManagement.md) \| [`HistoricCRPLandManagement`](v4_specification.HistoricCRPLandManagement.md)

Details surrounding how the field was managed before year 2000.

**`nullable`** during import (note: when historicLandManagement is defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`example`** When the field did not participate in CRP (HistoricNonCRPLandManagement):

```js
"historicLandManagement": {
 "crp": false,
 "preYear1980": "irrigation",
 "tillageForYears1980To2000": "intensive tillage",
 "year1980To2000": "irrigated: annual crops in rotation",
}
```

**`example`** When the field did participate in CRP (HistoricCRPLandManagement):

```js
"historicLandManagement":  {
 "crp": true,
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

[v4-specification.ts:992](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L992)

___

### id

• `Optional` **id**: `string`

Nori's internal field identifier.

Used to synchronize repeated imports.

**`nullable`** External systems leave this blank for new projects.

**`example`**

```js
"id": "faec5e0b-8ce2-4161-93ff-4c9734f22334"
```

#### Defined in

[v4-specification.ts:1135](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1135)

___

### landOwners

• `Optional` **landOwners**: [`ContactInfo`](v4_specification.ContactInfo.md)[]

landOwners (as shown on deed, MUST LIST ALL OWNERS)

**`nullable`** If this information will be communicated directly to the verifier.

#### Defined in

[v4-specification.ts:1042](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1042)

___

### legalAcres

• **legalAcres**: `number`

legalAcres Number of acres in this parcel per your insurance policy.

**`example`** 152.8

#### Defined in

[v4-specification.ts:1017](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1017)

___

### legalPropertyDescription

• `Optional` **legalPropertyDescription**: `string`

legalPropertyDescription

**`nullable`**

**`example`** 15 83 40 N 17.70 A OF W 33.67 A SW SE

#### Defined in

[v4-specification.ts:1069](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1069)

___

### mailingAddress

• `Optional` **mailingAddress**: [`Address`](v4_specification.Address.md)

mailingAddress Mailing Address (where your property tax notice for lands in question is mailed to)

**`nullable`** If this information will be communicated directly to the verifier.

#### Defined in

[v4-specification.ts:1055](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1055)

___

### parcelNumber

• `Optional` **parcelNumber**: `string`

parcelNumber

**`nullable`**

#### Defined in

[v4-specification.ts:1061](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1061)

___

### physicalEvidenceDoesNotCorroborateSwitchYear

• `Optional` **physicalEvidenceDoesNotCorroborateSwitchYear**: `boolean`

Used to indicate that the available physical evidence does not corroborate the provided switch year.

**`example`** If the physical evidence of a switch to no-till was an undated photo of the no-till planter.
```js
"physicalEvidenceDoesNotCorroborateSwitchYear": true
````

#### Defined in

[v4-specification.ts:946](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L946)

___

### practiceChangesAdopted

• **practiceChangesAdopted**: [`PracticeChangesAdopted`](v4_specification.PracticeChangesAdopted.md)

Details of new practice changes.

```js
"practiceChangesAdopted": {
  "coverCropping": true
}
```

#### Defined in

[v4-specification.ts:958](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L958)

___

### regenerativeStartYear

• **regenerativeStartYear**: `number`

The year that you most recently adopted regenerative agricultural practices. aka Switch Year

For more information on how to select a start year see [here](https://go.nori.com/enrollment-manual).

**`minimum`** 2010

**`example`** When regenerative practices started in year 2015:

```js
"regenerativeStartYear": 2015
```

#### Defined in

[v4-specification.ts:925](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L925)
