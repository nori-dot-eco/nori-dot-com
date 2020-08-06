[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvent](_specification_.cropevent.md)

# Interface: CropEvent

A crop event that happened on a particular date.

**`example`** 

```js
{
 "date": "01/01/2000"
}
```

## Hierarchy

* **CropEvent**

  ↳ [CropManagementEvent](_specification_.cropmanagementevent.md)

  ↳ [KillEvent](_specification_.killevent.md)

  ↳ [SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)

  ↳ [FertilizerEvent](_specification_.fertilizerevent.md)

  ↳ [OrganicMatterEvent](_specification_.organicmatterevent.md)

## Index

### Properties

* [date](_specification_.cropevent.md#date)

## Properties

###  date

• **date**: *string*

*Defined in [specification.ts:1057](https://github.com/nori-dot-eco/nori-dot-com/blob/a4e8923/packages/project/src/specification.ts#L1057)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```
