[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / OrchardOrVineyardCrop

# Interface: OrchardOrVineyardCrop

[specification](../modules/specification.md).OrchardOrVineyardCrop

Crop management details and events for orchard and vineyard crops.

**`example`** <caption>A crop definition for an orchard that was pruned and renewed or cleared:</caption>

```js
{
 "type": "oranges",
 "classification": "orchard",
 "prune": "yes",
 "renewOrClear": "yes",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

* [*CropEvents*](specification.cropevents.md)

* [*HarvestableCropEvents*](specification.harvestablecropevents.md)

* [*PlantedCrop*](specification.plantedcrop.md)

  ↳ **OrchardOrVineyardCrop**

## Table of contents

### Properties

- [burningEvent](specification.orchardorvineyardcrop.md#burningevent)
- [classification](specification.orchardorvineyardcrop.md#classification)
- [fertilizerEvents](specification.orchardorvineyardcrop.md#fertilizerevents)
- [grazingEvents](specification.orchardorvineyardcrop.md#grazingevents)
- [harvestEvents](specification.orchardorvineyardcrop.md#harvestevents)
- [irrigationEvents](specification.orchardorvineyardcrop.md#irrigationevents)
- [limingEvents](specification.orchardorvineyardcrop.md#limingevents)
- [name](specification.orchardorvineyardcrop.md#name)
- [organicMatterEvents](specification.orchardorvineyardcrop.md#organicmatterevents)
- [plantingDate](specification.orchardorvineyardcrop.md#plantingdate)
- [prune](specification.orchardorvineyardcrop.md#prune)
- [renewOrClear](specification.orchardorvineyardcrop.md#reneworclear)
- [soilOrCropDisturbanceEvents](specification.orchardorvineyardcrop.md#soilorcropdisturbanceevents)
- [type](specification.orchardorvineyardcrop.md#type)

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

Inherited from: [CropEvents](specification.cropevents.md).[burningEvent](specification.cropevents.md#burningevent)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:925](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L925)

___

### classification

• **classification**: *orchard* \| *vineyard*

The crop classification.

You can find a list of acceptable crop classifications per crop `name` [here](https://go.nori.com/inputs).

Note: if a crop ever changes classifications during the lifetime of the field (i.e. From an annual crop to a perennial), define the crop as a new crop in the a new `CropYear` object and assign it the `plantingYear` that the crop switched types. In addition, if the crop is switching types, a harvest or kill event must be defined to signal the end of the life of this crop being the initial crop `type`.

**`example`** <caption>When the crop is an orchard:</caption>

```js
"classification": "orchard"
```

**`example`** <caption>When the crop is a vineyard:</caption>

```js
"classification": "vineyard"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:982](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L982)

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

Inherited from: [CropEvents](specification.cropevents.md).[fertilizerEvents](specification.cropevents.md#fertilizerevents)

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

Inherited from: [CropEvents](specification.cropevents.md).[grazingEvents](specification.cropevents.md#grazingevents)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:902](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L902)

___

### harvestEvents

• `Optional` **harvestEvents**: ([*AnnualCropHarvestEvent*](specification.annualcropharvestevent.md) \| [*CropManagementEvent*](specification.cropmanagementevent.md))[]

A list of harvest events, if applicable.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`example`** <caption>When crop had at least one harvest event:</caption>

```js
 "harvestEvents": [
   // ...list of AnnualCropHarvestEvents or CropManagementEvents
 ]
```

Inherited from: [HarvestableCropEvents](specification.harvestablecropevents.md).[harvestEvents](specification.harvestablecropevents.md#harvestevents)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:748](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L748)

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

Inherited from: [CropEvents](specification.cropevents.md).[irrigationEvents](specification.cropevents.md#irrigationevents)

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

Inherited from: [CropEvents](specification.cropevents.md).[limingEvents](specification.cropevents.md#limingevents)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:881](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L881)

___

### name

• `Optional` **name**: *string*

The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** 

```js
"name": "Joe's corn"
```

Inherited from: [PlantedCrop](specification.plantedcrop.md).[name](specification.plantedcrop.md#name)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:695](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L695)

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

Inherited from: [CropEvents](specification.cropevents.md).[organicMatterEvents](specification.cropevents.md#organicmatterevents)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:844](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L844)

___

### plantingDate

• **plantingDate**: *string*

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop was planted on January 1st of year 2000:</caption>

```js
"plantingDate": "01/01/2000"
```

Inherited from: [PlantedCrop](specification.plantedcrop.md).[plantingDate](specification.plantedcrop.md#plantingdate)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:710](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L710)

___

### prune

• **prune**: *no* \| *yes*

Indicates if the crop was pruned.

**`example`** <caption>When the crop was pruned:</caption>

```js
"prune": "yes"
```

**`example`** <caption>When the crop was not pruned:</caption>

```js
"prune": "no"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1000](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1000)

___

### renewOrClear

• **renewOrClear**: *no* \| *yes*

Indicates if the crop was renewed or cleared.

**`example`** <caption>When the crop was renewed:</caption>

```js
"renewOrClear": "yes"
```

**`example`** <caption>When the crop was not renewed:</caption>

```js
"renewOrClear": "no"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1017](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1017)

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

Inherited from: [CropEvents](specification.cropevents.md).[soilOrCropDisturbanceEvents](specification.cropevents.md#soilorcropdisturbanceevents)

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:802](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L802)

___

### type

• **type**: *almond* \| *avocados* \| *cherries* \| *english walnuts* \| *grape, raisin* \| *grape, table* \| *grape, wine (<1390 gdd)* \| *grape, wine (>1950 gdd)* \| *grape, wine (1391-1670 gdd)* \| *grape, wine (1671-1950 gdd)* \| *grapefruit* \| *lemons & limes* \| *olives* \| *oranges* \| *peaches and nectarines* \| *pistachios* \| *tangerines & mandarins*

The COMET equivalent type of the orchard or vineyard crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** <caption>When the crop planted is "oranges":</caption>

```js
"type": "oranges"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:961](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L961)
