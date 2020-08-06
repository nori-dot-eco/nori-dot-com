[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [PerennialCrop](_specification_.perennialcrop.md)

# Interface: PerennialCrop

Perennial crop details.

**`example`** 

```js
{
 "name": "annual rye",
 "type": "perennial",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

* [CropEvents](_specification_.cropevents.md)

* [HarvestableCropEvents](_specification_.harvestablecropevents.md)

* [PlantedCrop](_specification_.plantedcrop.md)

  ↳ **PerennialCrop**

## Index

### Properties

* [burningEvent](_specification_.perennialcrop.md#optional-burningevent)
* [fertilizerEvents](_specification_.perennialcrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.perennialcrop.md#optional-grazingevents)
* [harvestEvents](_specification_.perennialcrop.md#optional-harvestevents)
* [irrigationEvents](_specification_.perennialcrop.md#optional-irrigationevents)
* [killEvent](_specification_.perennialcrop.md#optional-killevent)
* [limingEvents](_specification_.perennialcrop.md#optional-limingevents)
* [name](_specification_.perennialcrop.md#name)
* [organicMatterEvents](_specification_.perennialcrop.md#optional-organicmatterevents)
* [plantingDate](_specification_.perennialcrop.md#plantingdate)
* [soilOrCropDisturbanceEvents](_specification_.perennialcrop.md#soilorcropdisturbanceevents)
* [type](_specification_.perennialcrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:685](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L685)*

A burning event, if applicable. When it is not applicable it can be defined as null.

**`default`** { "type": "no burning" }

**`example`** <caption>When burning occurred after harvesting</caption>

```js
{
 "type": "after harvesting"
}
```

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:593](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L593)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some fertilizer events occurred</caption>

         ```js
         [
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

*Defined in [specification.ts:670](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L670)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some grazing events occurred</caption>

```js
[
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

• **harvestEvents**? : *[AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md) | [CropManagementEvent](_specification_.cropmanagementevent.md)[]*

*Inherited from [HarvestableCropEvents](_specification_.harvestablecropevents.md).[harvestEvents](_specification_.harvestablecropevents.md#optional-harvestevents)*

*Defined in [specification.ts:504](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L504)*

A list of harvest events, if applicable. When it is not applicable it can be defined as null.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

**`example`** <caption>When an annual crop had a harvest event</caption>

```js
 "harvestEvents": [
   {
     "date": "10/01/2000",
     "yield": 100,
     "yieldUnit": "bu/ac",
     "grainFruitTuber": "n/a",
     "residueRemoved": "n/a",
   }
 ]
```

**`example`** <caption>When an annual crop had a harvest event</caption>

```js
 "harvestEvents": [
   {
     "date": "10/01/2000",
     "yield": 100,
     "yieldUnit": "bu/ac",
     "grainFruitTuber": "n/a",
     "residueRemoved": "n/a",
   }
 ]
```

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:633](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L633)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some irrigation events occurred</caption>

```js
[
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

*Defined in [specification.ts:555](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L555)*

A kill event, if applicable. When it is not applicable it can be excluded.

**`example`** <caption>When the crop was killed on October 1st of 2000</caption>

         ```js
         {
          "date": "10/01/2000",
          // "residueRemoved": 5, // todo will it ever be anything other than 0%?
         }
         ```

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:651](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L651)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

**`example`** <caption>When some liming events occurred</caption>

```js
[
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

*Defined in [specification.ts:796](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L796)*

The name of the crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** 

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:613](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L613)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some organic matter was applied</caption>

```js
[
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

*Defined in [specification.ts:444](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L444)*

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`.

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop was planted on January 1st of year 2000</caption>

```js
"plantingDate": "01/01/2000"
```

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[soilOrCropDisturbanceEvents](_specification_.cropevents.md#soilorcropdisturbanceevents)*

*Defined in [specification.ts:574](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L574)*

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events). When it is not applicable it can be defined as null.

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`example`** <caption>When some soil or crop disturbance events occurred</caption>

```js
[
 {
   "date": "10/01/2000",
   "type": "mow",
 }
 // ... other soul and crop disturbance events
]
```

___

###  type

• **type**: *"perennial"*

*Defined in [specification.ts:810](https://github.com/nori-dot-eco/nori-dot-com/blob/27840fb/packages/project/src/specification.ts#L810)*

The crop type.

You can find a list of acceptable crop types per crop `name` [here](https://go.nori.com/inputs).

**`default`** "perennial"

**`example`** 

```js
"type": "perennial"
```
