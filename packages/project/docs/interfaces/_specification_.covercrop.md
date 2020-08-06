[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CoverCrop](_specification_.covercrop.md)

# Interface: CoverCrop

Crop management details and events for cover crops.

**`example`** <caption>A crop definition for a cover crop planted in year 2000:</caption>

```js
{
 "name": "corn", // todo reasonable example?
 "type": "annual cover",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

* [CropEvents](_specification_.cropevents.md)

* [PlantedCrop](_specification_.plantedcrop.md)

  ↳ **CoverCrop**

## Index

### Properties

* [burningEvent](_specification_.covercrop.md#optional-burningevent)
* [fertilizerEvents](_specification_.covercrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.covercrop.md#optional-grazingevents)
* [irrigationEvents](_specification_.covercrop.md#optional-irrigationevents)
* [killEvent](_specification_.covercrop.md#optional-killevent)
* [limingEvents](_specification_.covercrop.md#optional-limingevents)
* [name](_specification_.covercrop.md#name)
* [organicMatterEvents](_specification_.covercrop.md#optional-organicmatterevents)
* [plantingDate](_specification_.covercrop.md#plantingdate)
* [soilOrCropDisturbanceEvents](_specification_.covercrop.md#soilorcropdisturbanceevents)
* [type](_specification_.covercrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:802](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L802)*

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

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:710](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L710)*

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

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:787](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L787)*

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

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:750](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L750)*

A list of irrigation events, if applicable.

**`example`** <caption>When some irrigation events occurred:</caption>

```js
"irrigationEvents": [
 {
   "volume": 1,
   "depth": 100,
   "frequency": 7,
   "startDate": "01/01/2000",
   "endDate": "12/31/2000"
 }
 // ... other irrigation events
]
```

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](_specification_.killevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[killEvent](_specification_.cropevents.md#optional-killevent)*

*Defined in [specification.ts:672](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L672)*

A kill event, if applicable. When it is not applicable it can be excluded.

**`example`** <caption>When the crop was killed on October 1st of 2000:</caption>

```js
"killEvent": {
 "date": "10/01/2000",
 // "residueRemoved": 5, // todo will it ever be anything other than 0%?
}
```

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:768](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L768)*

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

###  name

• **name**: *string*

*Defined in [specification.ts:968](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L968)*

The name of the crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** <caption>When the cover crop was alfalfa:</caption>

```js
"type": "alfalfa"
```

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:730](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L730)*

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
 }
 // ... other organic matter or manure events
]
```

___

###  plantingDate

• **plantingDate**: *string*

*Inherited from [PlantedCrop](_specification_.plantedcrop.md).[plantingDate](_specification_.plantedcrop.md#plantingdate)*

*Defined in [specification.ts:583](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L583)*

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop was planted on January 1st of year 2000:</caption>

```js
"plantingDate": "01/01/2000"
```

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[soilOrCropDisturbanceEvents](_specification_.cropevents.md#soilorcropdisturbanceevents)*

*Defined in [specification.ts:691](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L691)*

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

• **type**: *"annual cover"*

*Defined in [specification.ts:983](https://github.com/nori-dot-eco/nori-dot-com/blob/8e3b66e/packages/project/src/specification.ts#L983)*

The crop type.

You can find a list of acceptable crop types per crop `name` [here](https://go.nori.com/inputs).

**`default`** "annual cover"

**`example`** 

```js
"type": "annual cover"
```