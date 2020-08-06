[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [CropEvents](_specification_.cropevents.md)

# Interface: CropEvents

Crop management details and events.

**`example`** 

```js
{
 "killEvent": {
   // ...
 },
 "soilOrCropDisturbanceEvents": [
   // ...
 ],
 "fertilizerEvents": [
   // ...
 ],
 "organicMatterEvents": [
   // ...
 ],
 "irrigationEvents": [
   // ...
 ],
 "limingEvents": [
   // ...
 ],
 "grazingEvents": [
   // ...
 ],
 "burningEvent": {
   // ...
 },
}
```

## Hierarchy

* **CropEvents**

  ↳ [OrchardOrVineyardCrop](_specification_.orchardorvineyardcrop.md)

  ↳ [PerennialCrop](_specification_.perennialcrop.md)

  ↳ [CoverCrop](_specification_.covercrop.md)

  ↳ [AnnualCrop](_specification_.annualcrop.md)

## Index

### Properties

* [burningEvent](_specification_.cropevents.md#optional-burningevent)
* [fertilizerEvents](_specification_.cropevents.md#optional-fertilizerevents)
* [grazingEvents](_specification_.cropevents.md#optional-grazingevents)
* [irrigationEvents](_specification_.cropevents.md#optional-irrigationevents)
* [killEvent](_specification_.cropevents.md#optional-killevent)
* [limingEvents](_specification_.cropevents.md#optional-limingevents)
* [organicMatterEvents](_specification_.cropevents.md#optional-organicmatterevents)
* [soilOrCropDisturbanceEvents](_specification_.cropevents.md#soilorcropdisturbanceevents)

## Properties

### `Optional` burningEvent

• **burningEvent**? : *[BurningEvent](_specification_.burningevent.md)*

*Defined in [specification.ts:824](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L824)*

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

*Defined in [specification.ts:732](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L732)*

A list of fertilizer events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some fertilizer events occurred</caption>

```js
[
 {
   "date": "10/01/2000",
   "productName": "Joe's fertilizer",
   "type": "mixed blends",
   "lbsOfNPerAcre": 10
 }
 // ... other fertilizer events
]
```

___

### `Optional` grazingEvents

• **grazingEvents**? : *[GrazingEvent](_specification_.grazingevent.md)[]*

*Defined in [specification.ts:809](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L809)*

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

*Defined in [specification.ts:772](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L772)*

A list of irrigation events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some irrigation events occurred</caption>

```js
[
 {
   "volume": 1,
   "depth": 100,
   "frequency": 7,
   "startDate": "01/01/2000",
   "endDate": "12/31/2000"
 }
 // ... other irrigation events
]
```

___

### `Optional` killEvent

• **killEvent**? : *[KillEvent](_specification_.killevent.md)*

*Defined in [specification.ts:694](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L694)*

A kill event, if applicable. When it is not applicable it can be excluded.

**`example`** <caption>When the crop was killed on October 1st of 2000</caption>

```js
{
 "date": "10/01/2000",
 // "residueRemoved": 5, // todo will it ever be anything other than 0%?
}
```

___

### `Optional` limingEvents

• **limingEvents**? : *[LimingEvent](_specification_.limingevent.md)[]*

*Defined in [specification.ts:790](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L790)*

A list of liming events, if applicable. When it is not applicable it can be defined as null. During quantification, liming events are aggregated into a single event.

**`example`** <caption>When some liming events occurred</caption>

```js
[
 {
   "date": "01/01/2000",
   "type": "crushed limestone",
   "tonsPerAcre": 10,
 }
 //...other liming events
]
```

___

### `Optional` organicMatterEvents

• **organicMatterEvents**? : *[OrganicMatterEvent](_specification_.organicmatterevent.md)[]*

*Defined in [specification.ts:752](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L752)*

A list of organic matter and manure application events, if applicable. When it is not applicable it can be defined as null.

**`example`** <caption>When some organic matter was applied</caption>

```js
[
 {
   "date": "10/01/2000",
   "type": "alfalfa meal",
   "amountPerAcre": 2, // tons
   "percentNitrogen": 9,
   "carbonNitrogenRatio": 30,
 }
 // ... other organic matter or manure events
]
```

___

###  soilOrCropDisturbanceEvents

• **soilOrCropDisturbanceEvents**: *[SoilOrCropDisturbanceEvent](_specification_.soilorcropdisturbanceevent.md)[]*

*Defined in [specification.ts:713](https://github.com/nori-dot-eco/nori-dot-com/blob/6c136ab/packages/project/src/specification.ts#L713)*

A list of soil or crop disturbance events events, if applicable (such as tillage or termination events). When it is not applicable it can be defined as null.

All crops will need to define a soil or crop disturbance event <= the associated `plantingDate`.

**`example`** <caption>When some soil or crop disturbance events occurred</caption>

```js
[
 {
   "date": "10/01/2000",
   "type": "mow",
 }
 // ... other soul and crop disturbance events
]
```
