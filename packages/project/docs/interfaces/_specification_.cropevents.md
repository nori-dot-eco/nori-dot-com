[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvents](_specification_.cropevents.md)

# Interface: CropEvents

Crop management details and events

**`example`** 

```js
{
 harvestOrKillEvents": [
   // ...
 ]
 tillageEvents": [
   // ...
 ]
 fertilizerEvents": [
   // ...
 ]
 organicMatterEvents": [
   // ...
 ]
 irrigationEvents": [
   // ...
 ]
 limingEvents": [
   // ...
 ]
 grazingEvents": [
   // ...
 ]
 burningEvent": {
   // ...
 }
}
```

## Hierarchy

* **CropEvents**

  ↳ [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

  ↳ [AnnualCrop](_specification_.annualcrop.md)

## Index

### Properties

* [burningEvent](_specification_.cropevents.md#optional-burningevent)
* [fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)
* [grazingEvents](_specification_.cropevents.md#optional-grazingevents)
* [harvestOrKillEvents](_specification_.cropevents.md#optional-harvestorkillevents)
* [irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)
* [limingEvents](_specification_.cropevents.md#optional-limingevents)
* [organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)
* [tillageEvents](_specification_.cropevents.md#optional-tillageevents)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Defined in [specification.ts:226](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L226)*

**`default`** 

{
 "type": "no burning"
}

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:200](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L200)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:216](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L216)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestOrKillEvents

• **harvestOrKillEvents**? : *[HarvestOrKillEvent](_specification_.harvestorkillevent.md)[]*

*Defined in [specification.ts:192](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L192)*

A list of harvest or kill events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Defined in [specification.ts:208](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L208)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:212](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L212)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:204](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L204)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` tillageEvents

• **tillageEvents**? : *[TillageEvent](_specification_.tillageevent.md)[]*

*Defined in [specification.ts:196](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L196)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.
