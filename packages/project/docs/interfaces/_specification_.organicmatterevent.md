[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [OrganicMatterEvent](_specification_.organicmatterevent.md)

# Interface: OrganicMatterEvent

Organic matter (OMAD) and manure event details

**`example`** 

```js
{
 "date": "10/01/2000",
 "type": "surface broadcast", // todo get string from spreadsheet
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
* [percentNitrogen](_specification_.organicmatterevent.md#percentnitrogen)
* [type](_specification_.organicmatterevent.md#type)

## Properties

###  amountPerAcre

• **amountPerAcre**: *number*

*Defined in [specification.ts:731](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L731)*

**`minimum`** 0

**`maximum`** 200 // todo confirm max

Amount of organic matter or manure applied per acre

___

###  carbonNitrogenRatio

• **carbonNitrogenRatio**: *number*

*Defined in [specification.ts:749](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L749)*

**`nullable`** during import (when defined as null, a default value will be assigned)

The carbon to nitrogen ratio in the organic matter or manure

You can find a list of default values per `type` [here](go.nori.com/inputs)

___

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:461](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L461)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  percentNitrogen

• **percentNitrogen**: *number*

*Defined in [specification.ts:741](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L741)*

**`minimum`** 0

**`maximum`** 100

**`nullable`** during import (when defined as null, a default value will be assigned)

The nitrogen percent makeup in the organic matter or manure

You can find a list of default values per `type` [here](go.nori.com/inputs)

___

###  type

• **type**: *string*

*Defined in [specification.ts:723](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L723)*

The organic matter or manure classification type
