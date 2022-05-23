[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / OrganicMatterEvent

# Interface: OrganicMatterEvent

[v4-specification](../modules/v4_specification.md).OrganicMatterEvent

Organic matter (OMAD) and manure event details.

**`example`**

```js
{
 "date": "2000-10-01",
 "tonsPerAcre": 2,
 "percentNitrogen": 9,
 "carbonNitrogenRatio": 30,
 "percentMoisture": 0,
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`OrganicMatterEvent`**

  ↳↳ [`SolidOrganicMatterEvent`](v4_specification.SolidOrganicMatterEvent.md)

  ↳↳ [`SlurryOrganicMatterEvent`](v4_specification.SlurryOrganicMatterEvent.md)

## Table of contents

### Properties

- [carbonNitrogenRatio](v4_specification.OrganicMatterEvent.md#carbonnitrogenratio)
- [date](v4_specification.OrganicMatterEvent.md#date)
- [externalId](v4_specification.OrganicMatterEvent.md#externalid)
- [id](v4_specification.OrganicMatterEvent.md#id)
- [name](v4_specification.OrganicMatterEvent.md#name)
- [percentMoisture](v4_specification.OrganicMatterEvent.md#percentmoisture)
- [percentNitrogen](v4_specification.OrganicMatterEvent.md#percentnitrogen)

## Properties

### carbonNitrogenRatio

• **carbonNitrogenRatio**: `number`

The carbon to nitrogen ratio in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`nullable`** during import

**`minimum`** 0

**`example`** When the carbon to nitrogen ration of the organic matter or manure was 30:

```js
"carbonNitrogenRatio": 30
```

#### Defined in

[v4-specification.ts:2107](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L2107)

___

### date

• **date**: `Date`

The date the crop event happened (formatted as ISO8061 date: YYYY-MM-DD and YYYY > 2000 and YYYY < 2100).

Dates for liming and burning can be approximate or the first day of the crop year.

**`example`** When the crop event occurred on January 1st of 2000:

```js
"date": "2000-01-01"
```

**`validationrules`** ["cropEventDateIsOnOrAfterContainingCropYear"]

**`format`** date

**`errormessage`**
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[date](v4_specification.CropEvent.md#date)

#### Defined in

[v4-specification.ts:1636](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L1636)

___

### externalId

• `Optional` **externalId**: `string`

External crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`nullable`**

**`example`**

```js
"externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[externalId](v4_specification.CropEvent.md#externalid)

#### Defined in

[v4-specification.ts:1651](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L1651)

___

### id

• `Optional` **id**: `string`

Nori's internal crop event identifier.

Used to synchronize repeated imports.

**`nullable`** External systems leave this blank for new projects.

**`example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[id](v4_specification.CropEvent.md#id)

#### Defined in

[v4-specification.ts:1666](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L1666)

___

### name

• `Optional` **name**: `string`

The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":

```js
"name": "Joe's manure"
```

#### Defined in

[v4-specification.ts:2068](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L2068)

___

### percentMoisture

• **percentMoisture**: `number`

The percent moisture of the organic matter or manure

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`nullable`** during import (explicitly specify null if you are unsure what the value is)

**`minimum`** 0

**`maximum`** 100

**`example`** When the percent moisture is 15:

```js
"percentMoisture": 15
```

#### Defined in

[v4-specification.ts:2125](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L2125)

___

### percentNitrogen

• **percentNitrogen**: `number`

The nitrogen percent makeup in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`minimum`** 0

**`maximum`** 100

**`nullable`** during import (when defined as null, a default value will be assigned)

**`example`** When the organic matter or manure contains 9% nitrogen:

```js
"percentNitrogen": 9
```

#### Defined in

[v4-specification.ts:2088](https://github.com/nori-dot-eco/nori-dot-com/blob/a06cfe9/packages/project/src/v4-specification.ts#L2088)
