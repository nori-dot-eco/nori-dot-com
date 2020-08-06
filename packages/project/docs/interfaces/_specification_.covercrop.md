[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CoverCrop](_specification_.covercrop.md)

# Interface: CoverCrop

Crop management details and events for cover crops.

**`example`** 

```js
{
 "name": "corn",
 "type": "annual cover",
 "plantingDate": "01/01/2000"
 // ...CropEvents
}
```

## Hierarchy

* [CropEvents](_specification_.cropevents.md)

* [PlantedCrop](_specification_.plantedcrop.md)

  ↳ **CoverCrop**

## Index

### Properties

* [burningEvent](_specification_.covercrop.md#optional-burningevent)
* [fertilizerEvents](_specification_.covercrop.md#optional-fertilizerevents)
* [grazingEvents](_specification_.covercrop.md#optional-grazingevents)
* [irrigationEvents](_specification_.covercrop.md#optional-irrigationevents)
* [killEvent](_specification_.covercrop.md#optional-killevent)
* [limingEvents](_specification_.covercrop.md#optional-limingevents)
* [name](_specification_.covercrop.md#name)
* [organicMatterEvents](_specification_.covercrop.md#optional-organicmatterevents)
* [plantingDate](_specification_.covercrop.md#plantingdate)
* [soilOrCropDisturbanceEvents](_specification_.covercrop.md#soilorcropdisturbanceevents)
* [type](_specification_.covercrop.md#type)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[burningEvent](_specification_.cropevents.md#optional-burningevent)*

*Defined in [specification.ts:630](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L630)*

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

*Defined in [specification.ts:557](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L557)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some fertilizer events occurred</caption>

```js
[
// todo
]
```

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[grazingEvents](_specification_.cropevents.md#optional-grazingevents)*

*Defined in [specification.ts:615](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L615)*

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

### `Optional` irrigationEvents

• **irrigationEvents**? : *[IrrigationEvent](_specification_.irrigationevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)*

*Defined in [specification.ts:583](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L583)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some irrigation events occurred</caption>

```js
[
// todo
]
```

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](_specification_.killevent.md)*

*Inherited from [CropEvents](_specification_.cropevents.md).[killEvent](_specification_.cropevents.md#optional-killevent)*

*Defined in [specification.ts:529](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L529)*

A kill event, if applicable. When it is not applicable it can be excluded.

**`example`** 

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[limingEvents](_specification_.cropevents.md#optional-limingevents)*

*Defined in [specification.ts:596](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L596)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

**`example`** <caption>When some liming events occurred</caption>

```js
[
// todo
]
```

___

###  name

• **name**: *string*

*Defined in [specification.ts:786](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L786)*

The name of the crop.

You can find a list of accepted crops [here](https://go.nori.com/inputs).

**`example`** <caption>When the cover crop was alfalfa</caption>

```js
"type": "alfalfa"
```

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Inherited from [CropEvents](_specification_.cropevents.md).[organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)*

*Defined in [specification.ts:570](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L570)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some organic matter was applied</caption>

```js
[
// todo
]
```

___

###  plantingDate

• **plantingDate**: *string*

*Inherited from [PlantedCrop](_specification_.plantedcrop.md).[plantingDate](_specification_.plantedcrop.md#plantingdate)*

*Defined in [specification.ts:439](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L439)*

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

*Defined in [specification.ts:544](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L544)*

A list of soil or crop disturbance events events, if applicable. When it is not applicable it can be defined as null.

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`example`** <caption>When some soil or crop disturbance events occurred</caption>

```js
[
// todo
]
```

___

###  type

• **type**: *"annual cover"*

*Defined in [specification.ts:801](https://github.com/nori-dot-eco/nori-dot-com/blob/54e6ec8/packages/project/src/specification.ts#L801)*

The crop type.

You can find a list of acceptable crop types per crop `name` [here](https://go.nori.com/inputs).

**`default`** "annual cover"

**`example`** 

```js
"type": "annual cover"
```
