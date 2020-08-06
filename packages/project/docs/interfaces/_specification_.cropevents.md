[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvents](_specification_.cropevents.md)

# Interface: CropEvents

Crop management details and events.

**`example`** <caption>When a crop has associated management events:</caption>

```js
{
 "killEvent": {
   // ... KillEvent
 },
 "soilOrCropDisturbanceEvents": [
   // ... SoilOrCropDisturbanceEvents
 ],
 "fertilizerEvents": [
   // ... FertilizerEvents
 ],
 "organicMatterEvents": [
   // ... OrganicMatterEvents
 ],
 "irrigationEvents": [
   // ... IrrigationEvents
 ],
 "limingEvents": [
   // ... LimingEvents
 ],
 "grazingEvents": [
   // ... GrazingEvents
 ],
 "burningEvent": {
   // ... BurningEvent
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
* [limingEvents](_specification_.cropevents.md#optional-limingevents)
* [organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)
* [soilOrCropDisturbanceEvents](_specification_.cropevents.md#soilorcropdisturbanceevents)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Defined in [specification.ts:819](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L819)*

A burning event, if applicable.

**`default`** { "type": "no burning" }

**`example`** <caption>When burning occurred after harvesting:</caption>

```js
"burningEvent": {
 "type": "after harvesting"
}
```

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:729](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L729)*

A list of fertilizer events, if applicable.

**`example`** <caption>When some fertilizer events occurred:</caption>

```js
"fertilizerEvents": [
 {
   "date": "10/01/2000",
   "productName": "Joe's fertilizer",
   "type": "mixed blends",
   "lbsOfNPerAcre": 10
 }
 // ... other fertilizer events
]
```

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:804](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L804)*

A list of grazing events, if applicable.

**`example`** <caption>When some grazing events occurred:</caption>

```js
"grazingEvents": [
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

*Defined in [specification.ts:767](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L767)*

A list of irrigation events, if applicable.

**`example`** <caption>When some irrigation events occurred:</caption>

```js
"irrigationEvents": [
 {
   "volume": 1,
   "date": "01/01/2000",
 }
 // ... other irrigation events
]
```

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:785](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L785)*

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`example`** <caption>When some liming events occurred:</caption>

```js
"limingEvents": [
 {
   "date": "01/01/2000",
   "type": "crushed limestone",
   "tonsPerAcre": 10,
 }
 //...other liming events
]
```

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:750](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L750)*

A list of organic matter and manure application events, if applicable.

**`example`** <caption>When some organic matter was applied:</caption>

```js
"organicMatterEvents": [
 {
   "date": "10/01/2000",
   "type": "alfalfa meal",
   "amountPerAcre": 2, // tons
   "percentNitrogen": 9,
   "carbonNitrogenRatio": 30,
   "percentMoisture": 0,
 }
 // ... other organic matter or manure events
]
```

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Defined in [specification.ts:710](https://github.com/nori-dot-eco/nori-dot-com/blob/fc37482/packages/project/src/specification.ts#L710)*

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`example`** <caption>When some soil or crop disturbance events occurred:</caption>

```js
"soilOrCropDisturbanceEvents": [
 {
   "date": "10/01/2000",
   "type": "mow",
 }
 // ... other soul and crop disturbance events
]
```
