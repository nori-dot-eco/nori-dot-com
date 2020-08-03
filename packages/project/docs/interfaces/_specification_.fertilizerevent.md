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

*Defined in [specification.ts:252](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L252)*

The date the fertilizer application happened (formatted as MM/DD/YYYY)

___

###  lbsOfNPerAcre

• **lbsOfNPerAcre**: *number*

*Defined in [specification.ts:267](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L267)*

**`nullable`** 
Amount of nitrogen applied in lbs/ac

___

### `Optional` productName

• **productName**? : *string*

*Defined in [specification.ts:257](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L257)*

**`nullable`** 
The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.

___

###  type

• **type**: *string*

*Defined in [specification.ts:262](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L262)*

**`nullable`** 
The fertilizer classification type
