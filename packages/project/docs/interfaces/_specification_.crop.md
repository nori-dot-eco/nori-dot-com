[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [Crop](_specification_.crop.md)

# Interface: Crop

Crop management details and events

## Hierarchy

* **Crop**

## Index

### Properties

* [burningEvent](_specification_.crop.md#burningevent)
* [fertilizerEvents](_specification_.crop.md#fertilizerevents)
* [grazingEvents](_specification_.crop.md#grazingevents)
* [harvestOrKillEvents](_specification_.crop.md#harvestorkillevents)
* [irrigationEvents](_specification_.crop.md#irrigationevents)
* [limingEvents](_specification_.crop.md#limingevents)
* [name](_specification_.crop.md#name)
* [organicMatterEvents](_specification_.crop.md#organicmatterevents)
* [plantingDate](_specification_.crop.md#plantingdate)
* [prune](_specification_.crop.md#prune)
* [renewOrClear](_specification_.crop.md#reneworclear)
* [tillageEvents](_specification_.crop.md#tillageevents)
* [type](_specification_.crop.md#type)

## Properties

###  burningEvent

• **burningEvent**: *[BurningEvent](_specification_.burningevent.md)*

*Defined in [specification.ts:188](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L188)*

**`nullable`** 
A burning event, if applicable. When it is not applicable it can be defined as null.

___

###  fertilizerEvents

• **fertilizerEvents**: *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:163](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L163)*

**`nullable`** 
A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

###  grazingEvents

• **grazingEvents**: *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:183](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L183)*

**`nullable`** 
A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

###  harvestOrKillEvents

• **harvestOrKillEvents**: *[HarvestOrKillEvent](_specification_.harvestorkillevent.md)[]*

*Defined in [specification.ts:153](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L153)*

**`nullable`** 
A list of harvest or kill events, if applicable. When it is not applicable it can be defined as null.

___

###  irrigationEvents

• **irrigationEvents**: *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Defined in [specification.ts:173](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L173)*

**`nullable`** 
A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

###  limingEvents

• **limingEvents**: *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:178](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L178)*

**`nullable`** 
A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

###  name

• **name**: *string | null*

*Defined in [specification.ts:126](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L126)*

The name of the crop. You can find a list of accepted crops [here](go.nori.com/inputs)

___

###  organicMatterEvents

• **organicMatterEvents**: *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:168](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L168)*

**`nullable`** 
A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  plantingDate

• **plantingDate**: *string*

*Defined in [specification.ts:140](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L140)*

The date the crop was planted (formatted as MM/DD/YYYY)

___

###  prune

• **prune**: *"yes" | "no" | "n/a"*

*Defined in [specification.ts:144](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L144)*

Indicates if the crop was pruned. Only applicable if the crop is an orchard or vineyard. When it is not, use 'n/a'

___

###  renewOrClear

• **renewOrClear**: *"yes" | "no" | "n/a"*

*Defined in [specification.ts:148](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L148)*

Indicates if the crop was renewed or cleared. Only applicable if the crop is an orchard or vineyard. When it is not, use 'n/a'

___

###  tillageEvents

• **tillageEvents**: *[TillageEvent](_specification_.tillageevent.md)[]*

*Defined in [specification.ts:158](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L158)*

**`nullable`** 
A list of tillage events, if applicable. When it is not applicable it can be defined as null.

___

###  type

• **type**: *"annual crop" | "annual cover" | "perennial" | "orchard" | "vineyard" | "n/a"*

*Defined in [specification.ts:130](https://github.com/nori-dot-eco/nori-dot-com/blob/feda5f8/packages/project/src/specification.ts#L130)*

The crop type
