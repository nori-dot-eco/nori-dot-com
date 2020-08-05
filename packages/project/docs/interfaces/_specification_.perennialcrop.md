[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [PerennialCrop](_specification_.perennialcrop.md)

# Interface: PerennialCrop

Perennial crop details

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
* [tillageEvents](_specification_.perennialcrop.md#optional-tillageevents)
* [type](_specification_.perennialcrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:541](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L541)*

**`default`** { "type": "no burning" }

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:519](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L519)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:535](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L535)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestEvents

• **harvestEvents**? : *[AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md) | [CropManagementEvent](_specification_.cropmanagementevent.md)[]*

*Inherited from [HarvestableCropEvents](_specification_.harvestablecropevents.md).[harvestEvents](_specification_.harvestablecropevents.md#optional-harvestevents)*

*Defined in [specification.ts:469](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L469)*

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

*Defined in [specification.ts:527](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L527)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](_specification_.killevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[killEvent](_specification_.cropevents.md#optional-killevent)*

*Defined in [specification.ts:511](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L511)*

A kill event, if applicable. When it is not applicable it can be excluded

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:531](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L531)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

###  name

• **name**: *string*

*Defined in [specification.ts:647](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L647)*

The name of the crop.

You can find a list of accepted crops [here](go.nori.com/inputs)

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:523](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L523)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  plantingDate

• **plantingDate**: *string*

*Inherited from [PlantedCrop](_specification_.plantedcrop.md).[plantingDate](_specification_.plantedcrop.md#plantingdate)*

*Defined in [specification.ts:425](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L425)*

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop was planted on January 1st of year 2000</caption>

```js
"plantingDate": "01/01/2000"
```

___

### `Optional` tillageEvents

• **tillageEvents**? : *[TillageEvent](_specification_.tillageevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[tillageEvents](_specification_.cropevents.md#optional-tillageevents)*

*Defined in [specification.ts:515](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L515)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.

___

###  type

• **type**: *"perennial"*

*Defined in [specification.ts:655](https://github.com/nori-dot-eco/nori-dot-com/blob/3e2e111/packages/project/src/specification.ts#L655)*

**`default`** "perennial"

The crop type

You can find a list of acceptable crop types per crop `name` [here](go.nori.com/inputs)
