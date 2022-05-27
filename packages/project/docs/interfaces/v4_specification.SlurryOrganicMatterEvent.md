[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / SlurryOrganicMatterEvent

# Interface: SlurryOrganicMatterEvent

[v4-specification](../modules/v4_specification.md).SlurryOrganicMatterEvent

Slurry organic matter (OMAD) and manure event details.

**`example`**

```js
{
 "date": "2000-10-01",
 "type": "beef slurry",
 "gallonsPerAcre": 2,
 "percentNitrogen": 9,
 "carbonNitrogenRatio": 30,
 "percentMoisture": 0,
}
```

## Hierarchy

- [`OrganicMatterEvent`](v4_specification.OrganicMatterEvent.md)

  ↳ **`SlurryOrganicMatterEvent`**

## Table of contents

### Properties

- [carbonNitrogenRatio](v4_specification.SlurryOrganicMatterEvent.md#carbonnitrogenratio)
- [date](v4_specification.SlurryOrganicMatterEvent.md#date)
- [externalId](v4_specification.SlurryOrganicMatterEvent.md#externalid)
- [gallonsPerAcre](v4_specification.SlurryOrganicMatterEvent.md#gallonsperacre)
- [id](v4_specification.SlurryOrganicMatterEvent.md#id)
- [name](v4_specification.SlurryOrganicMatterEvent.md#name)
- [percentMoisture](v4_specification.SlurryOrganicMatterEvent.md#percentmoisture)
- [percentNitrogen](v4_specification.SlurryOrganicMatterEvent.md#percentnitrogen)
- [type](v4_specification.SlurryOrganicMatterEvent.md#type)

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

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[carbonNitrogenRatio](v4_specification.OrganicMatterEvent.md#carbonnitrogenratio)

#### Defined in

[v4-specification.ts:2215](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L2215)

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

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[date](v4_specification.OrganicMatterEvent.md#date)

#### Defined in

[v4-specification.ts:1744](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1744)

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

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[externalId](v4_specification.OrganicMatterEvent.md#externalid)

#### Defined in

[v4-specification.ts:1759](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1759)

___

### gallonsPerAcre

• **gallonsPerAcre**: `number`

Amount of organic matter applied per acre (gallons per acre).

**`minimum`** 0

**`maximum`** 200

**`example`** When the amount of organic matter or manure applied to the crop per acre was 10 gals/acre:

```js
"gallonsPerAcre": 10
```

#### Defined in

[v4-specification.ts:2143](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L2143)

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

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[id](v4_specification.OrganicMatterEvent.md#id)

#### Defined in

[v4-specification.ts:1774](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L1774)

___

### name

• `Optional` **name**: `string`

The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":

```js
"name": "Joe's manure"
```

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[name](v4_specification.OrganicMatterEvent.md#name)

#### Defined in

[v4-specification.ts:2176](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L2176)

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

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[percentMoisture](v4_specification.OrganicMatterEvent.md#percentmoisture)

#### Defined in

[v4-specification.ts:2233](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L2233)

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

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[percentNitrogen](v4_specification.OrganicMatterEvent.md#percentnitrogen)

#### Defined in

[v4-specification.ts:2196](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L2196)

___

### type

• **type**: ``"beef slurry"`` \| ``"chicken - broiler slurry"`` \| ``"chicken - layer slurry"`` \| ``"dairy slurry"`` \| ``"swine manure, slurry"``

The organic matter or manure classification type.

**`example`** When the amount of organic matter or manure type used was beef slurry:

```js
"type": "beef slurry"
```

#### Defined in

[v4-specification.ts:2129](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v4-specification.ts#L2129)
