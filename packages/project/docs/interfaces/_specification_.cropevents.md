[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvents](_specification_.cropevents.md)

# Interface: CropEvents

Crop management details and events

**`example`** 

```js
{
 "killEvent": {
   // ...
 },
 "tillageEvents": [
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
* [tillageEvents](_specification_.cropevents.md#optional-tillageevents)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Defined in [specification.ts:398](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L398)*

**`default`** { "type": "no burning" }

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:376](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L376)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:392](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L392)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Defined in [specification.ts:384](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L384)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](_specification_.killevent.md)*

*Defined in [specification.ts:368](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L368)*

A kill event, if applicable. When it is not applicable it can be excluded

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:388](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L388)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:380](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L380)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` tillageEvents

• **tillageEvents**? : *[TillageEvent](_specification_.tillageevent.md)[]*

*Defined in [specification.ts:372](https://github.com/nori-dot-eco/nori-dot-com/blob/1de928d/packages/project/src/specification.ts#L372)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.
