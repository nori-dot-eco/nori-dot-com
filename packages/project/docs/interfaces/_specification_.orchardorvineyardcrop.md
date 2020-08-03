[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

# Interface: OrchardOrVineyardCrop

## Hierarchy

* [CropEvents](_specification_.cropevents.md)

  ↳ **OrchardOrVineyardCrop**

## Index

### Properties

* [burningEvent](_specification_.orchardorvineyardcrop.md#optional-burningevent)
* [fertilizerEvents](_specification_.orchardorvineyardcrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.orchardorvineyardcrop.md#optional-grazingevents)
* [harvestOrKillEvents](_specification_.orchardorvineyardcrop.md#optional-harvestorkillevents)
* [irrigationEvents](_specification_.orchardorvineyardcrop.md#optional-irrigationevents)
* [limingEvents](_specification_.orchardorvineyardcrop.md#optional-limingevents)
* [organicMatterEvents](_specification_.orchardorvineyardcrop.md#optional-organicmatterevents)
* [prune](_specification_.orchardorvineyardcrop.md#prune)
* [renewOrClear](_specification_.orchardorvineyardcrop.md#reneworclear)
* [tillageEvents](_specification_.orchardorvineyardcrop.md#optional-tillageevents)
* [type](_specification_.orchardorvineyardcrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:179](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L179)*

**`default`** 

{
 "type": "no burning"
}

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:153](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L153)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:169](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L169)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestOrKillEvents

• **harvestOrKillEvents**? : *[HarvestOrKillEvent](_specification_.harvestorkillevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[harvestOrKillEvents](_specification_.cropevents.md#optional-harvestorkillevents)*

*Defined in [specification.ts:145](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L145)*

A list of harvest or kill events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:161](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L161)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:165](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L165)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:157](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L157)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  prune

• **prune**: *"yes" | "no" | "n/a"*

*Defined in [specification.ts:190](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L190)*

Indicates if the crop was pruned. Only applicable if the crop is an orchard or vineyard. When it is not, use 'n/a'

___

###  renewOrClear

• **renewOrClear**: *"yes" | "no" | "n/a"*

*Defined in [specification.ts:194](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L194)*

Indicates if the crop was renewed or cleared. Only applicable if the crop is an orchard or vineyard. When it is not, use 'n/a'

___

### `Optional` tillageEvents

• **tillageEvents**? : *[TillageEvent](_specification_.tillageevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[tillageEvents](_specification_.cropevents.md#optional-tillageevents)*

*Defined in [specification.ts:149](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L149)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.

___

###  type

• **type**: *"orchard" | "vineyard"*

*Defined in [specification.ts:186](https://github.com/nori-dot-eco/nori-dot-com/blob/376c30c/packages/project/src/specification.ts#L186)*

The crop type
