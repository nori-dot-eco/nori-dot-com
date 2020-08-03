[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [OrganicMatterEvent](_specification_.organicmatterevent.md)

# Interface: OrganicMatterEvent

Organic matter (OMAD) and manure event details

## Hierarchy

* **OrganicMatterEvent**

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

*Defined in [specification.ts:334](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L334)*

Amount of organic matter or manure applied per acre

___

###  carbonNitrogenRatio

• **carbonNitrogenRatio**: *number | null*

*Defined in [specification.ts:342](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L342)*

The carbon to nitrogen ratio in the organic matter or manure

___

###  date

• **date**: *string*

*Defined in [specification.ts:326](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L326)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the organic matter or manure application happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  percentNitrogen

• **percentNitrogen**: *number | null*

*Defined in [specification.ts:338](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L338)*

The nitrogen percent makeup in the organic matter or manure

___

###  type

• **type**: *string*

*Defined in [specification.ts:330](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L330)*

The organic matter or manure classification type
