[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / SlurryOrganicMatterEvent

# Interface: SlurryOrganicMatterEvent

[v4-specification](../modules/v4_specification.md).SlurryOrganicMatterEvent

Slurry organic matter (OMAD) and manure event details.

**`Example`**

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
- [source](v4_specification.SlurryOrganicMatterEvent.md#source)
- [type](v4_specification.SlurryOrganicMatterEvent.md#type)

## Properties

### carbonNitrogenRatio

• `Optional` **carbonNitrogenRatio**: `number`

The carbon to nitrogen ratio in the organic matter or manure.

**`Nullable`**

A default based on the selected type will be used if not specified here.

**`Minimum`**

0

**`Example`**

<caption>When the C:N ratio was 18.6:</caption>

```js
"carbonNitrogenRatio": 18.6
```

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[carbonNitrogenRatio](v4_specification.OrganicMatterEvent.md#carbonnitrogenratio)

#### Defined in

[v4-specification.ts:2317](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2317)

___

### date

• **date**: `string`

The date the crop event happened (formatted as ISO8061 date: YYYY-MM-DD and YYYY > 2000 and YYYY < 2100).

Dates for liming and burning can be approximate or the first day of the crop year.

**`Example`**

<caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "2000-01-01"
```

**`Validation Rules`**

["cropEventDateIsOnOrAfterContainingCropYear"]

**`Format`**

date

**`Error Message`**

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[date](v4_specification.OrganicMatterEvent.md#date)

#### Defined in

[v4-specification.ts:1844](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1844)

___

### externalId

• `Optional` **externalId**: `string`

External crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`Nullable`**

**`Example`**

```js
"externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[externalId](v4_specification.OrganicMatterEvent.md#externalid)

#### Defined in

[v4-specification.ts:1859](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1859)

___

### gallonsPerAcre

• **gallonsPerAcre**: `number`

Amount of organic matter applied per acre (gallons per acre).

**`Minimum`**

0

**`Maximum`**

200

**`Example`**

<caption>When the amount of organic matter or manure applied to the crop per acre was 10 gals/acre:</caption>

```js
"gallonsPerAcre": 10
```

#### Defined in

[v4-specification.ts:2253](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2253)

___

### id

• `Optional` **id**: `string`

Nori's internal crop event identifier.

Used to synchronize repeated imports.

**`Nullable`**

External systems pass null or omit the property for new projects.

**`Example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[id](v4_specification.OrganicMatterEvent.md#id)

#### Defined in

[v4-specification.ts:1874](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1874)

___

### name

• `Optional` **name**: `string`

The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`Todo`**

this property will be deprecated in the future

**`Example`**

<caption>When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":</caption>

```js
"name": "Joe's manure"
```

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[name](v4_specification.OrganicMatterEvent.md#name)

#### Defined in

[v4-specification.ts:2286](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2286)

___

### percentMoisture

• `Optional` **percentMoisture**: `number`

The percent moisture of the organic matter or manure

**`Nullable`**

A default based on the selected type will be used if not specified here.

**`Minimum`**

0

**`Maximum`**

100

**`Example`**

<caption>When the percent moisture is 15:</caption>

```js
"percentMoisture": 15
```

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[percentMoisture](v4_specification.OrganicMatterEvent.md#percentmoisture)

#### Defined in

[v4-specification.ts:2333](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2333)

___

### percentNitrogen

• `Optional` **percentNitrogen**: `number`

The nitrogen percent makeup in the organic matter or manure.

**`Minimum`**

0

**`Maximum`**

100

**`Nullable`**

A default based on the selected type will be used if not specified here.

**`Example`**

<caption>When the organic matter or manure contains 9% nitrogen:</caption>

```js
"percentNitrogen": 9
```

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[percentNitrogen](v4_specification.OrganicMatterEvent.md#percentnitrogen)

#### Defined in

[v4-specification.ts:2302](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2302)

___

### source

• `Optional` **source**: `string`

Source of the event

Optional field to indicate what system this data point originated from.

**`Nullable`**

**`Example`**

```js
"source": "CDL"
```

**`Example`**

```js
"source": "FMS name"
```

#### Inherited from

[OrganicMatterEvent](v4_specification.OrganicMatterEvent.md).[source](v4_specification.OrganicMatterEvent.md#source)

#### Defined in

[v4-specification.ts:1895](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L1895)

___

### type

• **type**: ``"beef slurry"`` \| ``"chicken - broiler slurry"`` \| ``"chicken - layer slurry"`` \| ``"dairy slurry"`` \| ``"swine manure, slurry"``

The organic matter or manure classification type.

**`Example`**

<caption>When the amount of organic matter or manure type used was beef slurry:</caption>

```js
"type": "beef slurry"
```

#### Defined in

[v4-specification.ts:2239](https://github.com/nori-dot-eco/nori-dot-com/blob/f3f67a7/packages/project/src/v4-specification.ts#L2239)
