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

*Defined in [specification.ts:260](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L260)*

The date the fertilizer application happened (formatted as MM/DD/YYYY)

___

###  lbsOfNPerAcre

• **lbsOfNPerAcre**: *number*

*Defined in [specification.ts:275](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L275)*

**`nullable`** 
Amount of nitrogen applied in lbs/ac

___

### `Optional` productName

• **productName**? : *string*

*Defined in [specification.ts:265](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L265)*

**`nullable`** 
The name/alias that the fertilizer is known by. This property is used in the to-be-deprecated supplier intake sheet.

___

###  type

• **type**: *string*

*Defined in [specification.ts:270](https://github.com/nori-dot-eco/nori-dot-com/blob/ee6dedb/packages/project/src/specification.ts#L270)*

**`nullable`** 
The fertilizer classification type
