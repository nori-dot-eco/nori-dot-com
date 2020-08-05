[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [OrganicMatterEvent](_specification_.organicmatterevent.md)

# Interface: OrganicMatterEvent

Organic matter (OMAD) and manure event details.

**`example`** 

```js
{
 "date": "10/01/2000",
 "type": "alfalfa meal",
 "amountPerAcre": 2, // tons
 "percentNitrogen": 9,
 "carbonNitrogenRatio": 30,
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **OrganicMatterEvent**

## Index

### Properties

* [amountPerAcre](_specification_.organicmatterevent.md#amountperacre)
* [carbonNitrogenRatio](_specification_.organicmatterevent.md#carbonnitrogenratio)
* [date](_specification_.organicmatterevent.md#date)
* [name](_specification_.organicmatterevent.md#optional-name)
* [percentNitrogen](_specification_.organicmatterevent.md#percentnitrogen)
* [type](_specification_.organicmatterevent.md#type)

## Properties

###  amountPerAcre

• **amountPerAcre**: *number*

*Defined in [specification.ts:1204](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L1204)*

Amount of organic matter or manure applied per acre.

**`minimum`** 0

**`maximum`** 200 // todo confirm max

**`example`** <caption>When the amount of organic matter or manure applied to the crop per acre was 2 tons</caption>

```js
"percentNitrogen": 2
```

___

###  carbonNitrogenRatio

• **carbonNitrogenRatio**: *number*

*Defined in [specification.ts:1237](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L1237)*

The carbon to nitrogen ratio in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`nullable`** during import (when defined as null, a default value will be assigned)

**`minimum`** 0

**`example`** <caption>When the carbon to nitrogen ration of the organic matter or manure was 30</caption>

```js
"carbonNitrogenRatio": 30
```

___

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:878](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L878)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000</caption>

```js
"date": "01/01/2000"
```

___

### `Optional` name

• **name**? : *string*

*Defined in [specification.ts:1157](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L1157)*

The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`example`** <caption>When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure"</caption>

```js
"name": "Joe's manure"
```

___

###  percentNitrogen

• **percentNitrogen**: *number*

*Defined in [specification.ts:1221](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L1221)*

The nitrogen percent makeup in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`minimum`** 0

**`maximum`** 100

**`nullable`** during import (when defined as null, a default value will be assigned)

**`example`** <caption>When the organic matter or manure contains 9% nitrogen</caption>

```js
"percentNitrogen": 9
```

___

###  type

• **type**: *"Alfalfa Meal" | "Beef Manure, Solid" | "Beef Slurry" | "Blood, Dried" | "Bone Meal" | "Chicken - Broiler (litter), Solid" | "Chicken - Broiler Slurry" | "Chicken - Layer Slurry" | "Chicken - Layer, Solid" | "Compost or Composted Manure, Solid" | "Dairy Manure, Solid" | "Dairy Slurry" | "Farmyard Manure, Solid" | "Feather Meal" | "Fish Emulsion" | "Fish Scrap" | "Guano" | "Horse Manure, Solid" | "Other Manure, Solid" | "Sheep Manure, Solid" | "Soybean Meal" | "Swine Manure, Slurry" | "Swine Manure, Solid"*

*Defined in [specification.ts:1168](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L1168)*

The organic matter or manure classification type.

**`example`** <caption>When the amount of organic matter or manure type used was alfalfa meal</caption>

```js
"type": "alfalfa meal"
```
