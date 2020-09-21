[@nori-dot-com/project](../README.md) › ["specification"](../modules/_specification_.md) › [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

# Interface: OrchardOrVineyardCrop

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

* [CropEvents](_specification_.cropevents.md)

* [HarvestableCropEvents](_specification_.harvestablecropevents.md)

* [PlantedCrop](_specification_.plantedcrop.md)

  ↳ **OrchardOrVineyardCrop**

## Index

### Properties

* [burningEvent](_specification_.orchardorvineyardcrop.md#optional-burningevent)
* [classification](_specification_.orchardorvineyardcrop.md#classification)
* [fertilizerEvents](_specification_.orchardorvineyardcrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.orchardorvineyardcrop.md#optional-grazingevents)
* [harvestEvents](_specification_.orchardorvineyardcrop.md#optional-harvestevents)
* [irrigationEvents](_specification_.orchardorvineyardcrop.md#optional-irrigationevents)
* [limingEvents](_specification_.orchardorvineyardcrop.md#optional-limingevents)
* [name](_specification_.orchardorvineyardcrop.md#optional-name)
* [organicMatterEvents](_specification_.orchardorvineyardcrop.md#optional-organicmatterevents)
* [plantingDate](_specification_.orchardorvineyardcrop.md#plantingdate)
* [prune](_specification_.orchardorvineyardcrop.md#prune)
* [renewOrClear](_specification_.orchardorvineyardcrop.md#reneworclear)
* [soilOrCropDisturbanceEvents](_specification_.orchardorvineyardcrop.md#soilorcropdisturbanceevents)
* [type](_specification_.orchardorvineyardcrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:830](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L830)*

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

___

###  classification

• **classification**: *"orchard" | "vineyard"*

*Defined in [specification.ts:904](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L904)*

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

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:726](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L726)*

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

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:807](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L807)*

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

___

### `Optional` harvestEvents

• **harvestEvents**? : *([AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md) | [CropManagementEvent](_specification_.cropmanagementevent.md))[]*

*Inherited from [HarvestableCropEvents](_specification_.harvestablecropevents.md).[harvestEvents](_specification_.harvestablecropevents.md#optional-harvestevents)*

*Defined in [specification.ts:653](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L653)*

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

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:766](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L766)*

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

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:786](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L786)*

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

___

### `Optional` name

• **name**? : *string*

*Inherited from [PlantedCrop](_specification_.plantedcrop.md).[name](_specification_.plantedcrop.md#optional-name)*

*Defined in [specification.ts:600](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L600)*

The name/alias that the crop is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** 

```js
"name": "Joe's corn"
```

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *([SolidOrganicMatterEvent](_specification_.solidorganicmatterevent.md) | [SlurryOrganicMatterEvent](_specification_.slurryorganicmatterevent.md))[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:749](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L749)*

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

___

###  plantingDate

• **plantingDate**: *string*

*Inherited from [PlantedCrop](_specification_.plantedcrop.md).[plantingDate](_specification_.plantedcrop.md#plantingdate)*

*Defined in [specification.ts:615](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L615)*

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop was planted on January 1st of year 2000:</caption>

```js
"plantingDate": "01/01/2000"
```

___

###  prune

• **prune**: *"yes" | "no"*

*Defined in [specification.ts:922](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L922)*

Indicates if the crop was pruned.

**`example`** <caption>When the crop was pruned:</caption>

```js
"prune": "yes"
```

**`example`** <caption>When the crop was not pruned:</caption>

```js
"prune": "no"
```

___

###  renewOrClear

• **renewOrClear**: *"yes" | "no"*

*Defined in [specification.ts:939](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L939)*

Indicates if the crop was renewed or cleared.

**`example`** <caption>When the crop was renewed:</caption>

```js
"renewOrClear": "yes"
```

**`example`** <caption>When the crop was not renewed:</caption>

```js
"renewOrClear": "no"
```

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[soilOrCropDisturbanceEvents](_specification_.cropevents.md#soilorcropdisturbanceevents)*

*Defined in [specification.ts:707](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L707)*

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

___

###  type

• **type**: *"almond" | "avocados" | "cherries" | "english walnuts" | "grape, raisin" | "grape, table" | "grape, wine (<1390 gdd)" | "grape, wine (>1950 gdd)" | "grape, wine (1391-1670 gdd)" | "grape, wine (1671-1950 gdd)" | "grapefruit" | "lemons & limes" | "olives" | "oranges" | "peaches and nectarines" | "pistachios" | "tangerines & mandarins"*

*Defined in [specification.ts:866](https://github.com/nori-dot-eco/nori-dot-com/blob/8162438/packages/project/src/specification.ts#L866)*

The COMET equivalent type of the orchard or vineyard crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** <caption>When the crop planted is "oranges":</caption>

```js
"type": "oranges"
```
