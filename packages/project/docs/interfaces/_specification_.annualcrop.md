[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [AnnualCrop](_specification_.annualcrop.md)

# Interface: AnnualCrop

Crop management details and events for annual and cover crops

## Hierarchy

* [CropEvents](_specification_.cropevents.md)

  ↳ **AnnualCrop**

## Index

### Properties

* [burningEvent](_specification_.annualcrop.md#optional-burningevent)
* [fertilizerEvents](_specification_.annualcrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.annualcrop.md#optional-grazingevents)
* [harvestOrKillEvents](_specification_.annualcrop.md#optional-harvestorkillevents)
* [irrigationEvents](_specification_.annualcrop.md#optional-irrigationevents)
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

*Defined in [specification.ts:183](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L183)*

**`default`** 

{
 "type": "no burning"
}

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:157](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L157)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:173](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L173)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestOrKillEvents

• **harvestOrKillEvents**? : *[HarvestOrKillEvent](_specification_.harvestorkillevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[harvestOrKillEvents](_specification_.cropevents.md#optional-harvestorkillevents)*

*Defined in [specification.ts:149](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L149)*

A list of harvest or kill events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:165](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L165)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:169](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L169)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

###  name

• **name**: *string | null*

*Defined in [specification.ts:215](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L215)*

The name of the crop. You can find a list of accepted crops [here](go.nori.com/inputs)

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:161](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L161)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  plantingDate

• **plantingDate**: *string*

*Defined in [specification.ts:225](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L225)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

### `Optional` tillageEvents

• **tillageEvents**? : *[TillageEvent](_specification_.tillageevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[tillageEvents](_specification_.cropevents.md#optional-tillageevents)*

*Defined in [specification.ts:153](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L153)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.

___

###  type

• **type**: *"annual crop" | "annual cover" | "perennial"*

*Defined in [specification.ts:219](https://github.com/nori-dot-eco/nori-dot-com/blob/fd385e2/packages/project/src/specification.ts#L219)*

The crop type
