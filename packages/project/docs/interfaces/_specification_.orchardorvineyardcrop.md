[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

# Interface: OrchardOrVineyardCrop

Crop management details and events for orchard and vineyard crops

**`example`** 

```js
{
 "type": "orchard",
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
* [fertilizerEvents](_specification_.orchardorvineyardcrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.orchardorvineyardcrop.md#optional-grazingevents)
* [harvestEvents](_specification_.orchardorvineyardcrop.md#optional-harvestevents)
* [irrigationEvents](_specification_.orchardorvineyardcrop.md#optional-irrigationevents)
* [killEvent](_specification_.orchardorvineyardcrop.md#optional-killevent)
* [limingEvents](_specification_.orchardorvineyardcrop.md#optional-limingevents)
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

*Defined in [specification.ts:547](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L547)*

A burning event, if applicable. When it is not applicable it can be defined as null.

**`default`** { "type": "no burning" }

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:524](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L524)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:540](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L540)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestEvents

• **harvestEvents**? : *[AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md) | [CropManagementEvent](_specification_.cropmanagementevent.md)[]*

*Inherited from [HarvestableCropEvents](_specification_.harvestablecropevents.md).[harvestEvents](_specification_.harvestablecropevents.md#optional-harvestevents)*

*Defined in [specification.ts:471](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L471)*

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

*Defined in [specification.ts:532](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L532)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](../modules/_specification_.md#killevent)*

*Inherited from [CropEvents](_specification_.cropevents.md).[killEvent](_specification_.cropevents.md#optional-killevent)*

*Defined in [specification.ts:513](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L513)*

A kill event, if applicable. When it is not applicable it can be excluded

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:536](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L536)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:528](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L528)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  plantingDate

• **plantingDate**: *string*

*Inherited from [PlantedCrop](_specification_.plantedcrop.md).[plantingDate](_specification_.plantedcrop.md#plantingdate)*

*Defined in [specification.ts:427](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L427)*

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** <caption>When the crop was planted on January 1st of year 2000</caption>

```js
"plantingDate": "01/01/2000"
```

___

###  prune

• **prune**: *"yes" | "no"*

*Defined in [specification.ts:609](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L609)*

Indicates if the crop was pruned

**`default`** "no"

**`example`** <caption>When the crop was pruned</caption>

```js
"pruned": "yes"
```

**`example`** <caption>When the crop was not pruned</caption>

```js
"pruned": "no"
```

___

###  renewOrClear

• **renewOrClear**: *"yes" | "no"*

*Defined in [specification.ts:628](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L628)*

Indicates if the crop was renewed or cleared

**`default`** "no"

**`example`** <caption>When the crop was renewed</caption>

```js
"renewOrClear": "yes"
```

**`example`** <caption>When the crop was not renewed</caption>

```js
"renewOrClear": "no"
```

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[soilOrCropDisturbanceEvents](_specification_.cropevents.md#soilorcropdisturbanceevents)*

*Defined in [specification.ts:520](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L520)*

A list of soil or crop disturbance events events, if applicable. When it is not applicable it can be defined as null.

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`

___

###  type

• **type**: *"orchard" | "vineyard"*

*Defined in [specification.ts:590](https://github.com/nori-dot-eco/nori-dot-com/blob/de97c4c/packages/project/src/specification.ts#L590)*

The crop type

You can find a list of acceptable crop types per crop `name` [here](go.nori.com/inputs)

Note: if a crop ever changes types during the lifetime of the field (i.e. from an annual crop to a perennial), define the crop as a new crop in the a new `CropYear` object and assign it the `plantingYear` that the crop switched types. In addition, if the crop is switching types, a harvest or kill event must be defined to signal the end of the life of this crop being the initial crop `type`.

**`example`** <caption>When the crop is an orchard</caption>

```js
"type": "orchard"
```

**`example`** <caption>When the crop is a vineyard</caption>

```js
"type": "vineyard"
```
