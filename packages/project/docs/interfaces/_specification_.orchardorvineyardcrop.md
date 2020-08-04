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

* [PlantedCrop](_specification_.plantedcrop.md)

  ↳ **OrchardOrVineyardCrop**

## Index

### Properties

* [burningEvent](_specification_.orchardorvineyardcrop.md#optional-burningevent)
* [fertilizerEvents](_specification_.orchardorvineyardcrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.orchardorvineyardcrop.md#optional-grazingevents)
* [harvestEvents](_specification_.orchardorvineyardcrop.md#optional-harvestevents)
* [irrigationEvents](_specification_.orchardorvineyardcrop.md#optional-irrigationevents)
* [killEvents](_specification_.orchardorvineyardcrop.md#optional-killevents)
* [limingEvents](_specification_.orchardorvineyardcrop.md#optional-limingevents)
* [organicMatterEvents](_specification_.orchardorvineyardcrop.md#optional-organicmatterevents)
* [plantingDate](_specification_.orchardorvineyardcrop.md#plantingdate)
* [prune](_specification_.orchardorvineyardcrop.md#prune)
* [renewOrClear](_specification_.orchardorvineyardcrop.md#reneworclear)
* [tillageEvents](_specification_.orchardorvineyardcrop.md#optional-tillageevents)
* [type](_specification_.orchardorvineyardcrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:311](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L311)*

**`default`** 

{
 "type": "no burning"
}

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:285](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L285)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:301](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L301)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestEvents

• **harvestEvents**? : *[AnnualCropHarvestEvent](_specification_.annualcropharvestevent.md) | [CropManagementEvent](_specification_.cropmanagementevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[harvestEvents](_specification_.cropevents.md#optional-harvestevents)*

*Defined in [specification.ts:277](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L277)*

A list of harvest events, if applicable. When it is not applicable it can be defined as null.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:293](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L293)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` killEvents

• **killEvents**? : *[KillEvent](_specification_.killevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[killEvents](_specification_.cropevents.md#optional-killevents)*

*Defined in [specification.ts:267](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L267)*

A list of kill events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:297](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L297)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:289](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L289)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  plantingDate

• **plantingDate**: *string*

*Inherited from [PlantedCrop](_specification_.plantedcrop.md).[plantingDate](_specification_.plantedcrop.md#plantingdate)*

*Defined in [specification.ts:221](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L221)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

If a crop is ever replanted, define the crop again and add it to a new `CropYear` object with the new `plantingYear`

___

###  prune

• **prune**: *"yes" | "no"*

*Defined in [specification.ts:368](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L368)*

**`default`** "no"

Indicates if the crop was pruned

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

*Defined in [specification.ts:386](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L386)*

**`default`** "no"

Indicates if the crop was renewed or cleared

**`example`** <caption>When the crop was renewed</caption>

```js
"renewOrClear": "yes"
```

**`example`** <caption>When the crop was not renewed</caption>

```js
"renewOrClear": "no"
```

___

### `Optional` tillageEvents

• **tillageEvents**? : *[TillageEvent](_specification_.tillageevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[tillageEvents](_specification_.cropevents.md#optional-tillageevents)*

*Defined in [specification.ts:281](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L281)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.

___

###  type

• **type**: *"orchard" | "vineyard"*

*Defined in [specification.ts:350](https://github.com/nori-dot-eco/nori-dot-com/blob/b3777b5/packages/project/src/specification.ts#L350)*

The crop type

You can find a list of acceptable crop types per crop `name` [here](go.nori.com/inputs)

Note: if a crop ever changes types during the lifetime of the field (i.e. from an annual crop to a perennial), define the crop as a new crop in the a new `CropYear` object and assign it the `plantingYear` that the crop switched types.

**`example`** <caption>When the crop is an orchard</caption>

```js
"type": "orchard"
```

**`example`** <caption>When the crop is a vineyard</caption>

```js
"type": "vineyard"
```
