[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvent](_specification_.cropevent.md)

# Interface: CropEvent

A crop event that happened on a particular date

## Hierarchy

* **CropEvent**

  ↳ [CropManagementEvent](_specification_.cropmanagementevent.md)

  ↳ [SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)

  ↳ [FertilizerEvent](_specification_.fertilizerevent.md)

  ↳ [OrganicMatterEvent](_specification_.organicmatterevent.md)

## Index

### Properties

* [date](_specification_.cropevent.md#date)

## Properties

###  date

• **date**: *string*

*Defined in [specification.ts:747](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L747)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$
