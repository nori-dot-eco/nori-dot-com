[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)

# Interface: SoilOrCropDisturbanceEvent

Soil or crop disturbance event event details

**`example`** 

```js
{
 "date": "10/01/2000",
 "type": "mow",
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **SoilOrCropDisturbanceEvent**

## Index

### Properties

* [date](_specification_.soilorcropdisturbanceevent.md#date)
* [name](_specification_.soilorcropdisturbanceevent.md#optional-name)
* [termination](_specification_.soilorcropdisturbanceevent.md#termination)
* [type](_specification_.soilorcropdisturbanceevent.md#type)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:747](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L747)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

___

### `Optional` name

• **name**? : *string*

*Defined in [specification.ts:901](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L901)*

The name/alias that the soil or crop disturbance events practice is known by. This property is used in the to-be-deprecated supplier intake sheet.

___

###  termination

• **termination**: *"winter killed" | "broad-spectrum herbicide"*

*Defined in [specification.ts:917](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L917)*

___

###  type

• **type**: *"Reduced Tillage" | "Mulch Tillage" | "Ridge Tillage" | "Strip Tillage" | "No Tillage" | "Growing Season Cultivation" | "Mow" | "Crimp"*

*Defined in [specification.ts:908](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L908)*

The soil or crop disturbance events classification type

You can find a list of common equivalents [here](go.nori.com/inputs)
