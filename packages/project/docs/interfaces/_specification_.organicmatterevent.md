[@nori-dot-com/project](../README.md) › ["specification"](../modules/_specification_.md) › [OrganicMatterEvent](_specification_.organicmatterevent.md)

# Interface: OrganicMatterEvent

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

* [CropEvent](_specification_.cropevent.md)

  ↳ **OrganicMatterEvent**

  ↳ [SolidOrganicMatterEvent](_specification_.solidorganicmatterevent.md)

  ↳ [SlurryOrganicMatterEvent](_specification_.slurryorganicmatterevent.md)

## Index

### Properties

* [amountPerAcre](_specification_.organicmatterevent.md#amountperacre)
* [carbonNitrogenRatio](_specification_.organicmatterevent.md#carbonnitrogenratio)
* [date](_specification_.organicmatterevent.md#date)
* [name](_specification_.organicmatterevent.md#optional-name)
* [percentMoisture](_specification_.organicmatterevent.md#percentmoisture)
* [percentNitrogen](_specification_.organicmatterevent.md#percentnitrogen)

## Properties

###  amountPerAcre

• **amountPerAcre**: *number*

*Defined in [specification.ts:1655](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L1655)*

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

*Defined in [specification.ts:1694](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L1694)*

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

*Defined in [specification.ts:1194](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L1194)*

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

*Defined in [specification.ts:1641](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L1641)*

The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** <caption>When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":</caption>

```js
"name": "Joe's manure"
```

___

###  percentMoisture

• **percentMoisture**: *number*

*Defined in [specification.ts:1712](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L1712)*

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

*Defined in [specification.ts:1675](https://github.com/nori-dot-eco/nori-dot-com/blob/22b6c8d/packages/project/src/specification.ts#L1675)*

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
