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
* [plantingDate](_specification_.orchardorvineyardcrop.md#plantingdate)
* [prune](_specification_.orchardorvineyardcrop.md#prune)
* [renewOrClear](_specification_.orchardorvineyardcrop.md#reneworclear)
* [tillageEvents](_specification_.orchardorvineyardcrop.md#optional-tillageevents)
* [type](_specification_.orchardorvineyardcrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:226](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L226)*

**`default`** 

{
 "type": "no burning"
}

A burning event, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` fertilizerEvents

• **fertilizerEvents**? : *[FertilizerEvent](_specification_.fertilizerevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)*

*Defined in [specification.ts:200](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L200)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:216](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L216)*

A list of grazing events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` harvestOrKillEvents

• **harvestOrKillEvents**? : *[HarvestOrKillEvent](_specification_.harvestorkillevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[harvestOrKillEvents](_specification_.cropevents.md#optional-harvestorkillevents)*

*Defined in [specification.ts:192](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L192)*

A list of harvest or kill events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:208](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L208)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:212](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L212)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:204](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L204)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

___

###  plantingDate

• **plantingDate**: *string*

*Defined in [specification.ts:301](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L301)*

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

The date the crop was planted (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100)

___

###  prune

• **prune**: *"yes" | "no"*

*Defined in [specification.ts:279](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L279)*

Indicates if the crop was pruned

**`example`** <caption>When the crop was renewed</caption>

```js
"renewOrClear": "yes"
```

**`example`** <caption>When the crop was not renewed</caption>

```js
"renewOrClear": "no"
```

___

###  renewOrClear

• **renewOrClear**: *"yes" | "no"*

*Defined in [specification.ts:295](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L295)*

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

*Defined in [specification.ts:196](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L196)*

A list of tillage events, if applicable. When it is not applicable it can be defined as null.

___

###  type

• **type**: *"orchard" | "vineyard"*

*Defined in [specification.ts:263](https://github.com/nori-dot-eco/nori-dot-com/blob/955580b/packages/project/src/specification.ts#L263)*

The crop type

**`example`** <caption>When the crop is an orchard</caption>

```js
"type": "orchard"
```

**`example`** <caption>When the crop is a vineyard</caption>

```js
"type": "vineyard"
```
