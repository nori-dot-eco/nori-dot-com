[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / CropEvents

# Interface: CropEvents

[v4-specification](../modules/v4_specification.md).CropEvents

Crop management details and events.

**`Example`**

<caption>When a crop has associated management events:</caption>

```js
{
 "plantingEvents": [{
   // ...plantingEvent
 }],
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
 "burningEvents": [
   // ... BurningEvents
 ],
 "pruningEvents": [
   // ... PruningEvents
 ],
 "harvestEvents": [
   // ... HarvestEvents
],
}
```

## Hierarchy

- **`CropEvents`**

  ↳ [`Crop`](v4_specification.Crop.md)

## Table of contents

### Properties

- [burningEvents](v4_specification.CropEvents.md#burningevents)
- [clearingAndRenewalEvents](v4_specification.CropEvents.md#clearingandrenewalevents)
- [fertilizerEvents](v4_specification.CropEvents.md#fertilizerevents)
- [grazingEvents](v4_specification.CropEvents.md#grazingevents)
- [harvestEvents](v4_specification.CropEvents.md#harvestevents)
- [irrigationEvents](v4_specification.CropEvents.md#irrigationevents)
- [limingEvents](v4_specification.CropEvents.md#limingevents)
- [organicMatterEvents](v4_specification.CropEvents.md#organicmatterevents)
- [plantingEvents](v4_specification.CropEvents.md#plantingevents)
- [pruningEvents](v4_specification.CropEvents.md#pruningevents)
- [soilOrCropDisturbanceEvents](v4_specification.CropEvents.md#soilorcropdisturbanceevents)

## Properties

### burningEvents

• `Optional` **burningEvents**: [`CropEvent`](v4_specification.CropEvent.md)[]

Burning events, if applicable.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Default`**

```ts
[]
```

**`Example`**

<caption>When burning occurred after harvesting:</caption>

```js
"burningEvents": [{
 "date": "2010-10-31"
}]
```

**`Example`**

<caption>When no burning occurred:</caption>

```js
"burningEvents": []
```

#### Defined in

[v4-specification.ts:1497](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1497)

___

### clearingAndRenewalEvents

• `Optional` **clearingAndRenewalEvents**: [`ClearingAndRenewalEvent`](v4_specification.ClearingAndRenewalEvent.md)[]

Clearing and renewal events for orchards and vineyards, if applicable.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When clearing occurred after harvesting:</caption>

```js
"clearingAndRenewalEvents": [{
 "date": "2010-10-31"
}]
```

**`Example`**

<caption>When no clearing or removal occurred:</caption>

```js
"clearingAndRenewalEvents": []
```

#### Defined in

[v4-specification.ts:1537](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1537)

___

### fertilizerEvents

• `Optional` **fertilizerEvents**: [`FertilizerEvent`](v4_specification.FertilizerEvent.md)[]

A list of fertilizer events, if applicable.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some fertilizer events occurred:</caption>

```js
"fertilizerEvents": [
 {
   "date": "2000-10-01",
   "name": "Joe's fertilizer",
   "type": "mixed blends",
   "lbsOfNPerAcre": 10
 }
 // ... other fertilizer events
]
```

#### Defined in

[v4-specification.ts:1394](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1394)

___

### grazingEvents

• `Optional` **grazingEvents**: [`GrazingEvent`](v4_specification.GrazingEvent.md)[]

A list of grazing events, if applicable

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some grazing events occurred:</caption>

```js
"grazingEvents": [
 {
  "date": "2000-01-01",
  "daysGrazed": "10",
  "percentResidueRemoved": "50"
 }
 // .. additional grazing events
]
```

#### Defined in

[v4-specification.ts:1476](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1476)

___

### harvestEvents

• `Optional` **harvestEvents**: [`HarvestEvent`](v4_specification.HarvestEvent.md)[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When crop had at least one harvest event:</caption>

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

#### Defined in

[v4-specification.ts:1557](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1557)

___

### irrigationEvents

• `Optional` **irrigationEvents**: [`IrrigationEvent`](v4_specification.IrrigationEvent.md)[]

A list of irrigation events, if applicable.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some irrigation events occurred:</caption>

```js
"irrigationEvents": [
 {
   "volume": 1,
   "date": "2000-10-01",
 }
 // ... other irrigation events
]
```

#### Defined in

[v4-specification.ts:1436](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1436)

___

### limingEvents

• `Optional` **limingEvents**: [`LimingEvent`](v4_specification.LimingEvent.md)[]

A list of liming events, if applicable. During quantification, liming events are aggregated into a single event.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some liming events occurred:</caption>

```js
"limingEvents": [
 {
   "date": "2000-01-01",
   "type": "crushed limestone",
   "tonsPerAcre": 10,
 }
 //...other liming events
]
```

#### Defined in

[v4-specification.ts:1456](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1456)

___

### organicMatterEvents

• `Optional` **organicMatterEvents**: ([`SolidOrganicMatterEvent`](v4_specification.SolidOrganicMatterEvent.md) \| [`SlurryOrganicMatterEvent`](v4_specification.SlurryOrganicMatterEvent.md))[]

A list of organic matter and manure application events, if applicable.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some organic matter was applied:</caption>

```js
"organicMatterEvents": [
 {
   "date": "2000-10-01",
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

[v4-specification.ts:1417](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1417)

___

### plantingEvents

• `Optional` **plantingEvents**: [`CropEvent`](v4_specification.CropEvent.md)[]

The planting event(s) if there were any for the current crop year otherwise empty array or omit property.

This will contain a single event for annuals and none for perennials outside of the planting year.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Max Items`**

1

**`Additional Items`**

false

**`Example`**

<caption>Planting on 2018-03-20</caption>

```js
"plantingEvents": [{
 "date": "2018-03-20"
}]
```

**`Example`**

<caption>Perennial planted in a prior year.</caption>

```js
"plantingEvents": []
```

#### Defined in

[v4-specification.ts:1351](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1351)

___

### pruningEvents

• `Optional` **pruningEvents**: [`CropEvent`](v4_specification.CropEvent.md)[]

Pruning events, if applicable.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When pruning occurred after harvesting:</caption>

```js
"pruningEvents": [{
 "date": "2010-10-31"
}]
```

**`Example`**

<caption>When no pruning occurred:</caption>

```js
"pruningEvents": []
```

#### Defined in

[v4-specification.ts:1517](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1517)

___

### soilOrCropDisturbanceEvents

• `Optional` **soilOrCropDisturbanceEvents**: [`SoilOrCropDisturbanceEvent`](v4_specification.SoilOrCropDisturbanceEvent.md)[]

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events).

All crops will need to define a soil or crop disturbance event <= the associated `PlantingEvent`.

**`Default`**

```ts
[]
```

**`Min Items`**

0

**`Additional Items`**

false

**`Example`**

<caption>When some soil or crop disturbance events occurred:</caption>

```js
"soilOrCropDisturbanceEvents": [
 {
   "date": "2000-10-01",
   "type": "mow",
 }
 // ... other soul and crop disturbance events
]
```

#### Defined in

[v4-specification.ts:1373](https://github.com/nori-dot-eco/nori-dot-com/blob/4c0d342/packages/project/src/v4-specification.ts#L1373)
