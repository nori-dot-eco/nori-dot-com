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
- [source](v4_specification.OrganicMatterEvent.md#source)

## Properties

### carbonNitrogenRatio

• `Optional` **carbonNitrogenRatio**: `number`

The carbon to nitrogen ratio in the organic matter or manure.

**`nullable`** A default based on the selected type will be used if not specified here.

**`minimum`** 0

**`example`** When the C:N ratio was 18.6:

```js
"carbonNitrogenRatio": 18.6
```

#### Defined in

[v4-specification.ts:2256](https://github.com/nori-dot-eco/nori-dot-com/blob/a61be63/packages/project/src/v4-specification.ts#L2256)

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

[v4-specification.ts:1783](https://github.com/nori-dot-eco/nori-dot-com/blob/a61be63/packages/project/src/v4-specification.ts#L1783)

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

[v4-specification.ts:1798](https://github.com/nori-dot-eco/nori-dot-com/blob/a61be63/packages/project/src/v4-specification.ts#L1798)

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

[v4-specification.ts:1813](https://github.com/nori-dot-eco/nori-dot-com/blob/a61be63/packages/project/src/v4-specification.ts#L1813)

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

[v4-specification.ts:2225](https://github.com/nori-dot-eco/nori-dot-com/blob/a61be63/packages/project/src/v4-specification.ts#L2225)

___

### percentMoisture

• `Optional` **percentMoisture**: `number`

The percent moisture of the organic matter or manure

**`nullable`** A default based on the selected type will be used if not specified here.

**`minimum`** 0

**`maximum`** 100

**`example`** When the percent moisture is 15:

```js
"percentMoisture": 15
```

#### Defined in

[v4-specification.ts:2272](https://github.com/nori-dot-eco/nori-dot-com/blob/a61be63/packages/project/src/v4-specification.ts#L2272)

___

### percentNitrogen

• `Optional` **percentNitrogen**: `number`

The nitrogen percent makeup in the organic matter or manure.

**`minimum`** 0

**`maximum`** 100

**`nullable`** A default based on the selected type will be used if not specified here.

**`example`** When the organic matter or manure contains 9% nitrogen:

```js
"percentNitrogen": 9
```

#### Defined in

[v4-specification.ts:2241](https://github.com/nori-dot-eco/nori-dot-com/blob/a61be63/packages/project/src/v4-specification.ts#L2241)

___

### source

• `Optional` **source**: `string`

Source of the event

Optional field to indicate what system this data point originated from.

**`nullable`**

**`example`**

```js
"source": "CDL"
```

**`example`**

```js
"source": "FMS name"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[source](v4_specification.CropEvent.md#source)

#### Defined in

[v4-specification.ts:1834](https://github.com/nori-dot-eco/nori-dot-com/blob/a61be63/packages/project/src/v4-specification.ts#L1834)
