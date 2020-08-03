[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [AnnualCrop](_specification_.annualcrop.md)

# Interface: AnnualCrop

Crop management details and events for annual and cover crops

**`example`** 

```js
{
 "name": "corn",
 "type": "annual crop",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

* [CropEvents](_specification_.cropevents.md)

* [PlantedCrop](_specification_.plantedcrop.md)

  ↳ **AnnualCrop**

## Index

### Properties

* [burningEvent](_specification_.annualcrop.md#optional-burningevent)
* [fertilizerEvents](_specification_.annualcrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.annualcrop.md#optional-grazingevents)
* [harvestEvents](_specification_.annualcrop.md#optional-harvestevents)
* [irrigationEvents](_specification_.annualcrop.md#optional-irrigationevents)
* [killEvents](_specification_.annualcrop.md#optional-killevents)
* [limingEvents](_specification_.annualcrop.md#optional-limingevents)
* [name](_specification_.annualcrop.md#name)
* [organicMatterEvents](_specification_.annualcrop.md#optional-organicmatterevents)
* [plantingDate](_specification_.annualcrop.md#plantingdate)
* [tillageEvents](_specification_.annualcrop.md#optional-tillageevents)
* [type](_specification_.annualcrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:276](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L276)*

**`default`** 

{
 "type": "no burning"
}

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:250](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L250)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:266](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L266)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestEvents

• **harvestEvents**? : *[HarvestEvent](_specification_.harvestevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[harvestEvents](_specification_.cropevents.md#optional-harvestevents)*

*Defined in [specification.ts:242](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L242)*

A list of harvest events, if applicable. When it is not applicable it can be defined as null.

Straw / Stover harvest exception: If the hay or stover was removed
separately after grain / fruit / tuber harvest, do NOT add this as
a second harvest. Instead, enter the percent of the remaining residue
that was removed on the grain harvest, regardless of removal date.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:258](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L258)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` killEvents

• **killEvents**? : *[KillEvent](_specification_.killevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[killEvents](_specification_.cropevents.md#optional-killevents)*

*Defined in [specification.ts:232](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L232)*

A list of kill events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:262](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L262)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

###  name

• **name**: *string*

*Defined in [specification.ts:385](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L385)*

The name of the crop. You can find a list of accepted crops [here](go.nori.com/inputs)

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:254](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L254)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  plantingDate

• **plantingDate**: *string*

*Inherited from [PlantedCrop](_specification_.plantedcrop.md).[plantingDate](_specification_.plantedcrop.md#plantingdate)*

*Defined in [specification.ts:186](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L186)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

### `Optional` tillageEvents

• **tillageEvents**? : *[TillageEvent](_specification_.tillageevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[tillageEvents](_specification_.cropevents.md#optional-tillageevents)*

*Defined in [specification.ts:246](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L246)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.

___

###  type

• **type**: *"annual crop" | "annual cover"*

*Defined in [specification.ts:389](https://github.com/nori-dot-eco/nori-dot-com/blob/dae8aba/packages/project/src/specification.ts#L389)*

The crop type
