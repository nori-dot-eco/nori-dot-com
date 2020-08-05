[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvents](_specification_.cropevents.md)

# Interface: CropEvents

Crop management details and events

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

*Defined in [specification.ts:546](https://github.com/nori-dot-eco/nori-dot-com/blob/6a6c60d/packages/project/src/specification.ts#L546)*

A burning event, if applicable. When it is not applicable it can be defined as null.

**`default`** { "type": "no burning" }

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:523](https://github.com/nori-dot-eco/nori-dot-com/blob/6a6c60d/packages/project/src/specification.ts#L523)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:539](https://github.com/nori-dot-eco/nori-dot-com/blob/6a6c60d/packages/project/src/specification.ts#L539)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Defined in [specification.ts:531](https://github.com/nori-dot-eco/nori-dot-com/blob/6a6c60d/packages/project/src/specification.ts#L531)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](_specification_.killevent.md)*

*Defined in [specification.ts:512](https://github.com/nori-dot-eco/nori-dot-com/blob/6a6c60d/packages/project/src/specification.ts#L512)*

A kill event, if applicable. When it is not applicable it can be excluded

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:535](https://github.com/nori-dot-eco/nori-dot-com/blob/6a6c60d/packages/project/src/specification.ts#L535)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:527](https://github.com/nori-dot-eco/nori-dot-com/blob/6a6c60d/packages/project/src/specification.ts#L527)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Defined in [specification.ts:519](https://github.com/nori-dot-eco/nori-dot-com/blob/6a6c60d/packages/project/src/specification.ts#L519)*

A list of soil or crop disturbance events events, if applicable. When it is not applicable it can be defined as null.

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`
