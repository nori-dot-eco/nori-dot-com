[@nori-dot-com/project](../README.md) › ["specification"](../modules/_specification_.md) › [SlurryOrganicMatterEvent](_specification_.slurryorganicmatterevent.md)

# Interface: SlurryOrganicMatterEvent

Slurry organic matter (OMAD) and manure event details.

**`example`** 

```js
{
 "date": "10/01/2000",
 "type": "beef slurry",
 "amountPerAcre": 2, //  in gallons
 "percentNitrogen": 9,
 "carbonNitrogenRatio": 30,
 "percentMoisture": 0,
}
```

## Hierarchy

  ↳ [OrganicMatterEvent](_specification_.organicmatterevent.md)

  ↳ **SlurryOrganicMatterEvent**

## Index

### Properties

* [amountPerAcre](_specification_.slurryorganicmatterevent.md#amountperacre)
* [carbonNitrogenRatio](_specification_.slurryorganicmatterevent.md#carbonnitrogenratio)
* [date](_specification_.slurryorganicmatterevent.md#date)
* [name](_specification_.slurryorganicmatterevent.md#optional-name)
* [percentMoisture](_specification_.slurryorganicmatterevent.md#percentmoisture)
* [percentNitrogen](_specification_.slurryorganicmatterevent.md#percentnitrogen)
* [type](_specification_.slurryorganicmatterevent.md#type)

## Properties

###  amountPerAcre

• **amountPerAcre**: *number*

*Inherited from [SolidOrganicMatterEvent](_specification_.solidorganicmatterevent.md).[amountPerAcre](_specification_.solidorganicmatterevent.md#amountperacre)*

*Defined in [specification.ts:1644](https://github.com/nori-dot-eco/nori-dot-com/blob/ab25034/packages/project/src/specification.ts#L1644)*

Amount of organic matter or manure applied per acre (in tons per acre for solid/dry organic matter or gallons per acre for slurry).

**`minimum`** 0

**`maximum`** 200

**`example`** <caption>When the amount of organic matter or manure applied to the crop per acre was 2 tons per acre for a solid/dry manure:</caption>

```js
"amountPerAcre": 2
```

___

###  carbonNitrogenRatio

• **carbonNitrogenRatio**: *number*

*Inherited from [SolidOrganicMatterEvent](_specification_.solidorganicmatterevent.md).[carbonNitrogenRatio](_specification_.solidorganicmatterevent.md#carbonnitrogenratio)*

*Defined in [specification.ts:1683](https://github.com/nori-dot-eco/nori-dot-com/blob/ab25034/packages/project/src/specification.ts#L1683)*

The carbon to nitrogen ratio in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`nullable`** during import

**`minimum`** 0

**`example`** <caption>When the carbon to nitrogen ration of the organic matter or manure was 30:</caption>

```js
"carbonNitrogenRatio": 30
```

___

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:1160](https://github.com/nori-dot-eco/nori-dot-com/blob/ab25034/packages/project/src/specification.ts#L1160)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

___

### `Optional` name

• **name**? : *string*

*Inherited from [SolidOrganicMatterEvent](_specification_.solidorganicmatterevent.md).[name](_specification_.solidorganicmatterevent.md#optional-name)*

*Defined in [specification.ts:1630](https://github.com/nori-dot-eco/nori-dot-com/blob/ab25034/packages/project/src/specification.ts#L1630)*

The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** <caption>When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":</caption>

```js
"name": "Joe's manure"
```

___

###  percentMoisture

• **percentMoisture**: *number*

*Inherited from [SolidOrganicMatterEvent](_specification_.solidorganicmatterevent.md).[percentMoisture](_specification_.solidorganicmatterevent.md#percentmoisture)*

*Defined in [specification.ts:1701](https://github.com/nori-dot-eco/nori-dot-com/blob/ab25034/packages/project/src/specification.ts#L1701)*

The percent moisture of the organic matter or manure

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`nullable`** during import (explicitly specify null if you are unsure what the value is)

**`minimum`** 0

**`maximum`** 100

**`example`** <caption>When the percent moisture is 15:</caption>

```js
"percentMoisture": 15
```

___

###  percentNitrogen

• **percentNitrogen**: *number*

*Inherited from [SolidOrganicMatterEvent](_specification_.solidorganicmatterevent.md).[percentNitrogen](_specification_.solidorganicmatterevent.md#percentnitrogen)*

*Defined in [specification.ts:1664](https://github.com/nori-dot-eco/nori-dot-com/blob/ab25034/packages/project/src/specification.ts#L1664)*

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

___

###  type

• **type**: *"beef slurry" | "chicken - broiler slurry" | "chicken - layer slurry" | "dairy slurry" | "swine manure, slurry"*

*Defined in [specification.ts:1592](https://github.com/nori-dot-eco/nori-dot-com/blob/ab25034/packages/project/src/specification.ts#L1592)*

The organic matter or manure classification type.

**`example`** <caption>When the amount of organic matter or manure type used was beef slurry:</caption>

```js
"type": "beef slurry"
```
