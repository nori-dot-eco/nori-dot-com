[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / CropEvents

# Interface: CropEvents

[v3-specification](../modules/v3_specification.md).CropEvents

Crop management details and events.

**`Example`**

<caption>When a crop has associated management events:</caption>

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

  ↳ [`OrchardOrVineyardCrop`](v3_specification.OrchardOrVineyardCrop.md)

  ↳ [`PerennialCrop`](v3_specification.PerennialCrop.md)

  ↳ [`CoverCrop`](v3_specification.CoverCrop.md)

  ↳ [`AnnualCrop`](v3_specification.AnnualCrop.md)

## Table of contents

### Properties

- [burningEvent](v3_specification.CropEvents.md#burningevent)
- [fertilizerEvents](v3_specification.CropEvents.md#fertilizerevents)
- [grazingEvents](v3_specification.CropEvents.md#grazingevents)
- [irrigationEvents](v3_specification.CropEvents.md#irrigationevents)
- [limingEvents](v3_specification.CropEvents.md#limingevents)
- [organicMatterEvents](v3_specification.CropEvents.md#organicmatterevents)
- [soilOrCropDisturbanceEvents](v3_specification.CropEvents.md#soilorcropdisturbanceevents)

## Properties

### burningEvent

• `Optional` **burningEvent**: [`BurningEvent`](v3_specification.BurningEvent.md)

A burning event, if applicable.

**`Nullable`**

if no burning ever occurred, explicitly specify `burningEvent` as `null`

**`Default`**

**`Example`**

<caption>When burning occurred after harvesting:</caption>

```js
"burningEvent": {
 "type": "after harvesting"
}
```

**`Example`**

<caption>When no burning occurred:</caption>

```js
"burningEvent": null
```

#### Defined in

[v3-specification.ts:1004](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1004)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v3_specification.FertilizerEvent.md)[]

A list of fertilizer events, if applicable.

**`Example`**

<caption>When some fertilizer events occurred:</caption>

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

[v3-specification.ts:900](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L900)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v3_specification.GrazingEvent.md)[]

A list of grazing events, if applicable

**`Nullable`**

during import (explicitly specify null if grazing did not occur, otherwise exclude the property or use an empty array `[]`)

**`Example`**

<caption>When some grazing events occurred:</caption>

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

[v3-specification.ts:981](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L981)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v3_specification.IrrigationEvent.md)[]

A list of irrigation events, if applicable.

**`Example`**

<caption>When some irrigation events occurred:</caption>

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

[v3-specification.ts:940](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L940)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v3_specification.LimingEvent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`Nullable`**

during import (explicitly specify null if no liming events occurred, otherwise exclude the property or use an empty array `[]`)

**`Example`**

<caption>When some liming events occurred:</caption>

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

[v3-specification.ts:960](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L960)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v3_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v3_specification.SlurryOrganicMatterEvent.md))[]

A list of organic matter and manure application events, if applicable.

**`Nullable`**

during import (explicitly specify null if no organic matter events occurred, otherwise exclude the property or use an empty array `[]`)

**`Example`**

<caption>When some organic matter was applied:</caption>

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

[v3-specification.ts:923](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L923)

___

### soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v3_specification.SoilOrCropDisturbanceEvent.md)[]

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`Example`**

<caption>When some soil or crop disturbance events occurred:</caption>

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

[v3-specification.ts:881](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L881)
