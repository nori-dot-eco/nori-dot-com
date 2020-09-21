[@nori-dot-com/project](../README.md) › ["specification"](../modules/_specification_.md) › [IrrigationEvent](_specification_.irrigationevent.md)

# Interface: IrrigationEvent

Irrigation event details.

**`example`** 

```js
{
 "volume": 1,
 "date": "01/01/2000",
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **IrrigationEvent**

## Index

### Properties

* [date](_specification_.irrigationevent.md#date)
* [volume](_specification_.irrigationevent.md#volume)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:1156](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L1156)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

___

###  volume

• **volume**: *number*

*Defined in [specification.ts:1726](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L1726)*

The irrigation volume in inches. If volume is 0, simply do not define an irrigation event.

**`minimum`** 0

**`example`** <caption>When 1 inch of volume was applied:</caption>

```js
"volume": 1,
```
