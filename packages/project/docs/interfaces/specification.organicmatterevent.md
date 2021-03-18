[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / OrganicMatterEvent

# Interface: OrganicMatterEvent

[specification](../modules/specification.md).OrganicMatterEvent

Organic matter (OMAD) and manure event details.

**`example`** 

```js
{
 "date": "10/01/2000",
 "amountPerAcre": 2,
 "percentNitrogen": 9,
 "carbonNitrogenRatio": 30,
 "percentMoisture": 0,
}
```

## Hierarchy

* [*CropEvent*](specification.cropevent.md)

  ↳ **OrganicMatterEvent**

  ↳↳ [*SolidOrganicMatterEvent*](specification.solidorganicmatterevent.md)

  ↳↳ [*SlurryOrganicMatterEvent*](specification.slurryorganicmatterevent.md)

## Table of contents

### Properties

- [amountPerAcre](specification.organicmatterevent.md#amountperacre)
- [carbonNitrogenRatio](specification.organicmatterevent.md#carbonnitrogenratio)
- [date](specification.organicmatterevent.md#date)
- [name](specification.organicmatterevent.md#name)
- [percentMoisture](specification.organicmatterevent.md#percentmoisture)
- [percentNitrogen](specification.organicmatterevent.md#percentnitrogen)

## Properties

### amountPerAcre

• **amountPerAcre**: *number*

Amount of organic matter or manure applied per acre (in tons per acre for solid/dry organic matter or gallons per acre for slurry).

**`minimum`** 0

**`maximum`** 200

**`example`** <caption>When the amount of organic matter or manure applied to the crop per acre was 2 tons per acre for a solid/dry manure:</caption>

```js
"amountPerAcre": 2
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1655](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1655)

___

### carbonNitrogenRatio

• **carbonNitrogenRatio**: *number*

The carbon to nitrogen ratio in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`nullable`** during import

**`minimum`** 0

**`example`** <caption>When the carbon to nitrogen ration of the organic matter or manure was 30:</caption>

```js
"carbonNitrogenRatio": 30
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1694](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1694)

___

### date

• **date**: *string*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

Inherited from: [CropEvent](specification.cropevent.md).[date](specification.cropevent.md#date)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1194](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1194)

___

### name

• `Optional` **name**: *string*

The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** <caption>When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":</caption>

```js
"name": "Joe's manure"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1641](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1641)

___

### percentMoisture

• **percentMoisture**: *number*

The percent moisture of the organic matter or manure

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`nullable`** during import (explicitly specify null if you are unsure what the value is)

**`minimum`** 0

**`maximum`** 100

**`example`** <caption>When the percent moisture is 15:</caption>

```js
"percentMoisture": 15
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1712](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1712)

___

### percentNitrogen

• **percentNitrogen**: *number*

The nitrogen percent makeup in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`minimum`** 0

**`maximum`** 100

**`nullable`** during import (when defined as null, a default value will be assigned)

**`example`** <caption>When the organic matter or manure contains 9% nitrogen:</caption>

```js
"percentNitrogen": 9
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1675](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1675)
