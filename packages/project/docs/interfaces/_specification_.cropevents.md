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

*Defined in [specification.ts:547](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L547)*

A burning event, if applicable. When it is not applicable it can be defined as null.

**`default`** { "type": "no burning" }

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:524](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L524)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:540](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L540)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Defined in [specification.ts:532](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L532)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](../modules/_specification_.md#killevent)*

*Defined in [specification.ts:513](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L513)*

A kill event, if applicable. When it is not applicable it can be excluded

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:536](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L536)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:528](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L528)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Defined in [specification.ts:520](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L520)*

A list of soil or crop disturbance events events, if applicable. When it is not applicable it can be defined as null.

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`
