[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvents](_specification_.cropevents.md)

# Interface: CropEvents

Crop management details and events.

**`example`** 

```js
{
 "killEvent": {
   // ...
 },
 "soilOrCropDisturbanceEvents": [
   // ...
 ],
 "fertilizerEvents": [
   // ...
 ],
 "organicMatterEvents": [
   // ...
 ],
 "irrigationEvents": [
   // ...
 ],
 "limingEvents": [
   // ...
 ],
 "grazingEvents": [
   // ...
 ],
 "burningEvent": {
   // ...
 },
}
```

## Hierarchy

* **CropEvents**

  ↳ [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

  ↳ [PerennialCrop](_specification_.perennialcrop.md)

  ↳ [CoverCrop](_specification_.covercrop.md)

  ↳ [AnnualCrop](_specification_.annualcrop.md)

## Index

### Properties

* [burningEvent](_specification_.cropevents.md#optional-burningevent)
* [fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)
* [grazingEvents](_specification_.cropevents.md#optional-grazingevents)
* [irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)
* [killEvent](_specification_.cropevents.md#optional-killevent)
* [limingEvents](_specification_.cropevents.md#optional-limingevents)
* [organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)
* [soilOrCropDisturbanceEvents](_specification_.cropevents.md#soilorcropdisturbanceevents)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Defined in [specification.ts:630](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L630)*

A burning event, if applicable. When it is not applicable it can be defined as null.

**`default`** { "type": "no burning" }

**`example`** <caption>When burning occurred after harvesting</caption>

```js
{
 "type": "after harvesting"
}
```

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:557](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L557)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some fertilizer events occurred</caption>

```js
[
// todo
]
```

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:615](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L615)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some grazing events occurred</caption>

```js
[
 {
  "restPeriod": 0,
  "utilization": 20,
  "startDate": "01/01/2000",
  "endDate": "12/31/2000"
 }
 // .. additional grazing events
]
```

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Defined in [specification.ts:583](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L583)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some irrigation events occurred</caption>

```js
[
// todo
]
```

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](_specification_.killevent.md)*

*Defined in [specification.ts:529](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L529)*

A kill event, if applicable. When it is not applicable it can be excluded.

**`example`** 

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:596](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L596)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

**`example`** <caption>When some liming events occurred</caption>

```js
[
// todo
]
```

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:570](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L570)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some organic matter was applied</caption>

```js
[
// todo
]
```

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Defined in [specification.ts:544](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L544)*

A list of soil or crop disturbance events events, if applicable. When it is not applicable it can be defined as null.

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`example`** <caption>When some soil or crop disturbance events occurred</caption>

```js
[
// todo
]
```
