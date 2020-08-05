[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [KillEvent](_specification_.killevent.md)

# Interface: KillEvent

Details surrounding the crop "kill" event.

**`example`** 

```js
{
 "date": "10/01/2000",
 // "residueRemoved": 5, // todo potentially needs to be "n/a"
}
```

## Hierarchy

* [CropEvent](_specification_.cropevent.md)

  ↳ **KillEvent**

## Index

### Properties

* [date](_specification_.killevent.md#date)

## Properties

###  date

• **date**: *string*

*Inherited from [CropEvent](_specification_.cropevent.md).[date](_specification_.cropevent.md#date)*

*Defined in [specification.ts:878](https://github.com/nori-dot-eco/nori-dot-com/blob/72b033e/packages/project/src/specification.ts#L878)*

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop event occurred on January 1st of 2000</caption>

```js
"date": "01/01/2000"
```
