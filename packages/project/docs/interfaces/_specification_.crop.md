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

*Defined in [specification.ts:200](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L200)*

**`nullable`** 
A burning event, if applicable. When it is not applicable it can be defined as null.

___

###  fertilizerEvents

• **fertilizerEvents**: *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Defined in [specification.ts:175](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L175)*

**`nullable`** 
A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

###  grazingEvents

• **grazingEvents**: *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:195](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L195)*

**`nullable`** 
A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

###  harvestOrKillEvents

• **harvestOrKillEvents**: *[HarvestOrKillEvent](_specification_.harvestorkillevent.md)[]*

*Defined in [specification.ts:165](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L165)*

**`nullable`** 
A list of harvest or kill events, if applicable. When it is not applicable it can be defined as null.

___

###  irrigationEvents

• **irrigationEvents**: *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Defined in [specification.ts:185](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L185)*

**`nullable`** 
A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

###  limingEvents

• **limingEvents**: *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:190](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L190)*

**`nullable`** 
A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

###  name

• **name**: *string | null*

*Defined in [specification.ts:138](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L138)*

The name of the crop. You can find a list of accepted crops [here](go.nori.com/inputs)

___

###  organicMatterEvents

• **organicMatterEvents**: *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:180](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L180)*

**`nullable`** 
A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  plantingDate

• **plantingDate**: *string*

*Defined in [specification.ts:152](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L152)*

The date the crop was planted (formatted as MM/DD/YYYY)

___

###  prune

• **prune**: *"yes" | "no" | "n/a"*

*Defined in [specification.ts:156](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L156)*

Indicates if the crop was pruned. Only applicable if the crop is an orchard or vineyard. When it is not, use 'n/a'

___

###  renewOrClear

• **renewOrClear**: *"yes" | "no" | "n/a"*

*Defined in [specification.ts:160](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L160)*

Indicates if the crop was renewed or cleared. Only applicable if the crop is an orchard or vineyard. When it is not, use 'n/a'

___

###  tillageEvents

• **tillageEvents**: *[TillageEvent](_specification_.tillageevent.md)[]*

*Defined in [specification.ts:170](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L170)*

**`nullable`** 
A list of tillage events, if applicable. When it is not applicable it can be defined as null.

___

###  type

• **type**: *"annual crop" | "annual cover" | "perennial" | "orchard" | "vineyard" | "n/a"*

*Defined in [specification.ts:142](https://github.com/nori-dot-eco/nori-dot-com/blob/758366f/packages/project/src/specification.ts#L142)*

The crop type
