[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvents](_specification_.cropevents.md)

# Interface: CropEvents

Crop management details and events

**`example`** 

```js
{
 "killEvents": [
   // ...
 ]
 "harvestEvents": [
   // ...
 ]
 "tillageEvents": [
   // ...
 ]
 "fertilizerEvents": [
   // ...
 ]
 "organicMatterEvents": [
   // ...
 ]
 "irrigationEvents": [
   // ...
 ]
 "limingEvents": [
   // ...
 ]
 "grazingEvents": [
   // ...
 ]
 "burningEvent": {
   // ...
 }
}
```

## Hierarchy

* **CropEvents**

  ↳ [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

  ↳ [PerennialCrop](_specification_.perennialcrop.md)

  ↳ [AnnualCrop](_specification_.annualcrop.md)

## Index

### Properties

* [burningEvent](_specification_.cropevents.md#optional-burningevent)
* [fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)
* [grazingEvents](_specification_.cropevents.md#optional-grazingevents)
* [harvestEvents](_specification_.cropevents.md#optional-harvestevents)
* [irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)
* [killEvents](_specification_.cropevents.md#optional-killevents)
* [limingEvents](_specification_.cropevents.md#optional-limingevents)
* [organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)
* [tillageEvents](_specification_.cropevents.md#optional-tillageevents)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Defined in [specification.ts:311](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L311)*

**`default`** 

{
 "type": "no burning"
}

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:285](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L285)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:301](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L301)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestEvents

• **harvestEvents**? : *[AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md) | [CropManagementEvent](_specification_.cropmanagementevent.md)[]*

*Defined in [specification.ts:277](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L277)*

A list of harvest events, if applicable. When it is not applicable it can be defined as null.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Defined in [specification.ts:293](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L293)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` killEvents

• **killEvents**? : *[KillEvent](_specification_.killevent.md)[]*

*Defined in [specification.ts:267](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L267)*

A list of kill events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:297](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L297)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:289](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L289)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` tillageEvents

• **tillageEvents**? : *[TillageEvent](_specification_.tillageevent.md)[]*

*Defined in [specification.ts:281](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L281)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.
