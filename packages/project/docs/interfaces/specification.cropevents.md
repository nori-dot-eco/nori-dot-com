[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / CropEvents

# Interface: CropEvents

[specification](../modules/specification.md).CropEvents

Crop management details and events.

**`example`** When a crop has associated management events:

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

- **`CropEvents`**

  ↳ [`OrchardOrVineyardCrop`](specification.OrchardOrVineyardCrop.md)

  ↳ [`PerennialCrop`](specification.PerennialCrop.md)

  ↳ [`CoverCrop`](specification.CoverCrop.md)

  ↳ [`AnnualCrop`](specification.AnnualCrop.md)

## Table of contents

### Properties

- [burningEvent](specification.CropEvents.md#burningevent)
- [fertilizerEvents](specification.CropEvents.md#fertilizerevents)
- [grazingEvents](specification.CropEvents.md#grazingevents)
- [irrigationEvents](specification.CropEvents.md#irrigationevents)
- [limingEvents](specification.CropEvents.md#limingevents)
- [organicMatterEvents](specification.CropEvents.md#organicmatterevents)
- [soilOrCropDisturbanceEvents](specification.CropEvents.md#soilorcropdisturbanceevents)

## Properties

### burningEvent

• `Optional` **burningEvent**: [`BurningEvent`](specification.BurningEvent.md)

A burning event, if applicable.

**`nullable`** if no burning ever occurred, explicitly specify `burningEvent` as `null`

**`default`** { "type": "no burning" }

**`example`** When burning occurred after harvesting:

```js
"burningEvent": {
 "type": "after harvesting"
}
```

**`example`** When no burning occurred:

```js
"burningEvent": null
```

#### Defined in

[specification.ts:1024](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1024)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](specification.FertilizerEvent.md)[]

A list of fertilizer events, if applicable.

**`example`** When some fertilizer events occurred:

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

#### Defined in

[specification.ts:920](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L920)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](specification.GrazingEvent.md)[]

A list of grazing events, if applicable

**`nullable`** during import (explicitly specify null if grazing did not occur, otherwise exclude the property or use an empty array `[]`)

**`example`** When some grazing events occurred:

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

#### Defined in

[specification.ts:1001](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1001)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](specification.IrrigationEvent.md)[]

A list of irrigation events, if applicable.

**`example`** When some irrigation events occurred:

```js
"irrigationEvents": [
 {
   "volume": 1,
   "date": "01/01/2000",
 }
 // ... other irrigation events
]
```

#### Defined in

[specification.ts:960](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L960)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](specification.LimingEvent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`nullable`** during import (explicitly specify null if no liming events occurred, otherwise exclude the property or use an empty array `[]`)

**`example`** When some liming events occurred:

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

#### Defined in

[specification.ts:980](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L980)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](specification.SlurryOrganicMatterEvent.md))[]

A list of organic matter and manure application events, if applicable.

**`nullable`** during import (explicitly specify null if no organic matter events occurred, otherwise exclude the property or use an empty array `[]`)

**`example`** When some organic matter was applied:

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

#### Defined in

[specification.ts:943](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L943)

___

### soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](specification.SoilOrCropDisturbanceEvent.md)[]

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`example`** When some soil or crop disturbance events occurred:

```js
"soilOrCropDisturbanceEvents": [
 {
   "date": "10/01/2000",
   "type": "mow",
 }
 // ... other soul and crop disturbance events
]
```

#### Defined in

[specification.ts:901](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L901)
