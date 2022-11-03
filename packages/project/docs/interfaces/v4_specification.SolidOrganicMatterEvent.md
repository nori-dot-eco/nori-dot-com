[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / SolidOrganicMatterEvent

# Interface: SolidOrganicMatterEvent

[v4-specification](../modules/v4_specification.md).SolidOrganicMatterEvent

Solid/dry organic matter (OMAD) and manure event details.

**`Example`**

```js
{
 "date": "2000-10-01",
 "type": "alfalfa meal",
 "tonsPerAcre": 2,
 "percentNitrogen": 9,
 "carbonNitrogenRatio": 30,
 "percentMoisture": 0,
}
```

## Hierarchy

- [`OrganicMatterEvent`](v4_specification.OrganicMatterEvent.md)

  ↳ **`SolidOrganicMatterEvent`**

## Table of contents

### Properties

- [carbonNitrogenRatio](v4_specification.SolidOrganicMatterEvent.md#carbonnitrogenratio)
- [date](v4_specification.SolidOrganicMatterEvent.md#date)
- [externalId](v4_specification.SolidOrganicMatterEvent.md#externalid)
- [id](v4_specification.SolidOrganicMatterEvent.md#id)
- [name](v4_specification.SolidOrganicMatterEvent.md#name)
- [percentMoisture](v4_specification.SolidOrganicMatterEvent.md#percentmoisture)
- [percentNitrogen](v4_specification.SolidOrganicMatterEvent.md#percentnitrogen)
- [source](v4_specification.SolidOrganicMatterEvent.md#source)
- [tonsPerAcre](v4_specification.SolidOrganicMatterEvent.md#tonsperacre)
- [type](v4_specification.SolidOrganicMatterEvent.md#type)

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

[v4-specification.ts:2323](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L2323)

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

[v4-specification.ts:1850](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L1850)

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

[v4-specification.ts:1865](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L1865)

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

[v4-specification.ts:1880](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L1880)

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

[v4-specification.ts:2292](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L2292)

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

[v4-specification.ts:2339](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L2339)

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

[v4-specification.ts:2308](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L2308)

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

[v4-specification.ts:1901](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L1901)

___

### tonsPerAcre

• **tonsPerAcre**: `number`

Amount of organic matter or manure applied per acre (in tons per acre for solid/dry organic matter or gallons per acre for slurry).

**`Minimum`**

0

**`Maximum`**

200

**`Example`**

<caption>When the amount of organic matter or manure applied to the crop per acre was 2 tons per acre for a solid/dry manure:</caption>

```js
"tonsPerAcre": 2
```

#### Defined in

[v4-specification.ts:2214](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L2214)

___

### type

• **type**: ``"alfalfa meal"`` \| ``"beef manure, solid"`` \| ``"blood, dried"`` \| ``"bone meal"`` \| ``"chicken - broiler (litter), solid"`` \| ``"chicken - layer, solid"`` \| ``"compost or composted manure, solid"`` \| ``"dairy manure, solid"`` \| ``"farmyard manure, solid"`` \| ``"feather meal"`` \| ``"fish emulsion"`` \| ``"fish scrap"`` \| ``"guano"`` \| ``"horse manure, solid"`` \| ``"other manure, solid"`` \| ``"sheep manure, solid"`` \| ``"soybean meal"`` \| ``"swine manure, solid"``

The solid/dry organic matter or manure classification type.

**`Example`**

<caption>When the amount of organic matter or manure type used was alfalfa meal:</caption>

```js
"type": "alfalfa meal"
```

#### Defined in

[v4-specification.ts:2200](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v4-specification.ts#L2200)
