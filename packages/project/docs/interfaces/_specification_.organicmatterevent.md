[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [OrganicMatterEvent](_specification_.organicmatterevent.md)

# Interface: OrganicMatterEvent

Organic matter (OMAD) and manure event details

**`example`** 

```js
{
 "date": "10/01/2000",
 "type": "surface broadcast", // todo use example allowed type
 "amountPerAcre": 100, // todo reasonable example
 "percentNitrogen": 1, // todo reasonable example
 "carbonNitrogenRatio": 1, // todo reasonable example
}
```

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

*Defined in [specification.ts:490](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L490)*

Amount of organic matter or manure applied per acre

___

###  carbonNitrogenRatio

• **carbonNitrogenRatio**: *number | null*

*Defined in [specification.ts:498](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L498)*

The carbon to nitrogen ratio in the organic matter or manure

___

###  date

• **date**: *string*

*Defined in [specification.ts:482](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L482)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the organic matter or manure application happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  percentNitrogen

• **percentNitrogen**: *number | null*

*Defined in [specification.ts:494](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L494)*

The nitrogen percent makeup in the organic matter or manure

___

###  type

• **type**: *string*

*Defined in [specification.ts:486](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L486)*

The organic matter or manure classification type
