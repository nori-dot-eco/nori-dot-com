[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / CropEvents

# Interface: CropEvents

[specification](../modules/specification.md).CropEvents

Crop management details and events.

**`example`** <caption>When a crop has associated management events:</caption>

```js
{
 "soilOrCropDisturbanceEvents": [
   // ... SoilOrCropDisturbanceEvents
 ],
 "fertilizerEvents": [
   // ... FertilizerEvents
 ],
 "organicMatterEvents": [
   // ... (SolidOrganicMatterEvent | SlurryOrganicMatterEvent)[]
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

  ↳ [*OrchardOrVineyardCrop*](specification.orchardorvineyardcrop.md)

  ↳ [*PerennialCrop*](specification.perennialcrop.md)

  ↳ [*CoverCrop*](specification.covercrop.md)

  ↳ [*AnnualCrop*](specification.annualcrop.md)

## Table of contents

### Properties

- [burningEvent](specification.cropevents.md#burningevent)
- [fertilizerEvents](specification.cropevents.md#fertilizerevents)
- [grazingEvents](specification.cropevents.md#grazingevents)
- [irrigationEvents](specification.cropevents.md#irrigationevents)
- [limingEvents](specification.cropevents.md#limingevents)
- [organicMatterEvents](specification.cropevents.md#organicmatterevents)
- [soilOrCropDisturbanceEvents](specification.cropevents.md#soilorcropdisturbanceevents)

## Properties

### burningEvent

• `Optional` **burningEvent**: [*BurningEvent*](specification.burningevent.md)

A burning event, if applicable.

**`nullable`** if no burning ever occurred, explicitly specify `burningEvent` as `null`

**`default`** { "type": "no burning" }

**`example`** <caption>When burning occurred after harvesting:</caption>

```js
"burningEvent": {
 "type": "after harvesting"
}
```

**`example`** <caption>When no burning occurred:</caption>

```js
"burningEvent": null
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:925](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L925)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [*FertilizerEvent*](specification.fertilizerevent.md)[]

A list of fertilizer events, if applicable.

**`example`** <caption>When some fertilizer events occurred:</caption>

```js
"fertilizerEvents": [
 {
   "date": "10/01/2000",
   "name": "Joe's fertilizer",
   "type": "mixed blends",
   "lbsOfNPerAcre": 10
 }
 // ... other fertilizer events
]
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:821](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L821)

___

### grazingEvents

• `Optional` **grazingEvents**: [*GrazingEvent*](specification.grazingevent.md)[]

A list of grazing events, if applicable

**`nullable`** during import (explicitly specify null if grazing did not occur, otherwise exclude the property or use an empty array `[]`)

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

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:902](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L902)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [*IrrigationEvent*](specification.irrigationevent.md)[]

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

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:861](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L861)

___

### limingEvents

• `Optional` **limingEvents**: [*LimingEvent*](specification.limingevent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`nullable`** during import (explicitly specify null if no liming events occurred, otherwise exclude the property or use an empty array `[]`)

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

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:881](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L881)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([*SolidOrganicMatterEvent*](specification.solidorganicmatterevent.md) \| [*SlurryOrganicMatterEvent*](specification.slurryorganicmatterevent.md))[]

A list of organic matter and manure application events, if applicable.

**`nullable`** during import (explicitly specify null if no organic matter events occurred, otherwise exclude the property or use an empty array `[]`)

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

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:844](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L844)

___

### soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: [*SoilOrCropDisturbanceEvent*](specification.soilorcropdisturbanceevent.md)[]

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

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:802](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L802)
