[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / SolidOrganicMatterEvent

# Interface: SolidOrganicMatterEvent

[v3-specification](../modules/v3_specification.md).SolidOrganicMatterEvent

Solid/dry organic matter (OMAD) and manure event details.

**`Example`**

```js
{
 "date": "10/01/2000",
 "type": "alfalfa meal",
 "amountPerAcre": 2, // in tons
 "percentNitrogen": 9,
 "carbonNitrogenRatio": 30,
 "percentMoisture": 0,
}
```

## Hierarchy

- [`OrganicMatterEvent`](v3_specification.OrganicMatterEvent.md)

  ↳ **`SolidOrganicMatterEvent`**

## Table of contents

### Properties

- [amountPerAcre](v3_specification.SolidOrganicMatterEvent.md#amountperacre)
- [carbonNitrogenRatio](v3_specification.SolidOrganicMatterEvent.md#carbonnitrogenratio)
- [date](v3_specification.SolidOrganicMatterEvent.md#date)
- [name](v3_specification.SolidOrganicMatterEvent.md#name)
- [percentMoisture](v3_specification.SolidOrganicMatterEvent.md#percentmoisture)
- [percentNitrogen](v3_specification.SolidOrganicMatterEvent.md#percentnitrogen)
- [type](v3_specification.SolidOrganicMatterEvent.md#type)

## Properties

### amountPerAcre

• **amountPerAcre**: `number`

Amount of organic matter or manure applied per acre (in tons per acre for solid/dry organic matter or gallons per acre for slurry).

**`Minimum`**

0

**`Maximum`**

200

**`Example`**

<caption>When the amount of organic matter or manure applied to the crop per acre was 2 tons per acre for a solid/dry manure:</caption>

```js
"amountPerAcre": 2
```

#### Inherited from

[OrganicMatterEvent](v3_specification.OrganicMatterEvent.md).[amountPerAcre](v3_specification.OrganicMatterEvent.md#amountperacre)

#### Defined in

[v3-specification.ts:1720](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v3-specification.ts#L1720)

___

### carbonNitrogenRatio

• **carbonNitrogenRatio**: `number`

The carbon to nitrogen ratio in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`Todo`**

In the future, when this value is defined as undefined, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`Nullable`**

during import

**`Minimum`**

0

**`Example`**

<caption>When the carbon to nitrogen ration of the organic matter or manure was 30:</caption>

```js
"carbonNitrogenRatio": 30
```

#### Inherited from

[OrganicMatterEvent](v3_specification.OrganicMatterEvent.md).[carbonNitrogenRatio](v3_specification.OrganicMatterEvent.md#carbonnitrogenratio)

#### Defined in

[v3-specification.ts:1759](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v3-specification.ts#L1759)

___

### date

• **date**: `string`

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`Nullable`**

during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`Pattern`**

^02/(?:[01]\d|2\d)/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)/(?:[0-2]\d|3[01])/(?:20)\d{2}|(?:0[469]|11)/(?:[0-2]\d|30)/(?:20)\d{2}|02/(?:[0-1]\d|2[0-8])/(?:20)\d{2}$

**`Example`**

<caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

**`Validation Rules`**

["cropEventDateIsOnOrAfterContainingCropYear"]

**`Error Message`**

```js
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}
```

#### Inherited from

[OrganicMatterEvent](v3_specification.OrganicMatterEvent.md).[date](v3_specification.OrganicMatterEvent.md#date)

#### Defined in

[v3-specification.ts:1291](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v3-specification.ts#L1291)

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

[OrganicMatterEvent](v3_specification.OrganicMatterEvent.md).[name](v3_specification.OrganicMatterEvent.md#name)

#### Defined in

[v3-specification.ts:1706](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v3-specification.ts#L1706)

___

### percentMoisture

• **percentMoisture**: `number`

The percent moisture of the organic matter or manure

**`Todo`**

In the future, when this value is defined as undefined, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`Nullable`**

during import (explicitly specify null if you are unsure what the value is)

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

[OrganicMatterEvent](v3_specification.OrganicMatterEvent.md).[percentMoisture](v3_specification.OrganicMatterEvent.md#percentmoisture)

#### Defined in

[v3-specification.ts:1777](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v3-specification.ts#L1777)

___

### percentNitrogen

• **percentNitrogen**: `number`

The nitrogen percent makeup in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`Todo`**

In the future, when this value is defined as undefined, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`Minimum`**

0

**`Maximum`**

100

**`Nullable`**

during import (when defined as undefined, a default value will be assigned)

**`Example`**

<caption>When the organic matter or manure contains 9% nitrogen:</caption>

```js
"percentNitrogen": 9
```

#### Inherited from

[OrganicMatterEvent](v3_specification.OrganicMatterEvent.md).[percentNitrogen](v3_specification.OrganicMatterEvent.md#percentnitrogen)

#### Defined in

[v3-specification.ts:1740](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v3-specification.ts#L1740)

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

[v3-specification.ts:1642](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v3-specification.ts#L1642)
