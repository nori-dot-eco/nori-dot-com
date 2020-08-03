[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [FertilizerEvent](_specification_.fertilizerevent.md)

# Interface: FertilizerEvent

Fertilizer event details

## Hierarchy

* **FertilizerEvent**

## Index

### Properties

* [date](_specification_.fertilizerevent.md#date)
* [lbsOfNPerAcre](_specification_.fertilizerevent.md#lbsofnperacre)
* [productName](_specification_.fertilizerevent.md#optional-productname)
* [type](_specification_.fertilizerevent.md#type)

## Properties

###  date

• **date**: *string*

*Defined in [specification.ts:298](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L298)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the fertilizer application happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  lbsOfNPerAcre

• **lbsOfNPerAcre**: *number*

*Defined in [specification.ts:314](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L314)*

**`nullable`** 

Amount of nitrogen applied in lbs/ac

___

### `Optional` productName

• **productName**? : *string*

*Defined in [specification.ts:302](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L302)*

The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.

___

###  type

• **type**: *string*

*Defined in [specification.ts:308](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L308)*

**`nullable`** 

The fertilizer classification type
