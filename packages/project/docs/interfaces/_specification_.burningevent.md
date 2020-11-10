[@nori-dot-com/project](../README.md) › ["specification"](../modules/_specification_.md) › [BurningEvent](_specification_.burningevent.md)

# Interface: BurningEvent

Burning event details.

**`example`** 

```js
{
 "type": "before planting"
}
```

## Hierarchy

* **BurningEvent**

## Index

### Properties

* [type](_specification_.burningevent.md#type)

## Properties

###  type

• **type**: *"before planting" | "after harvesting"*

*Defined in [specification.ts:1867](https://github.com/nori-dot-eco/nori-dot-com/blob/ab25034/packages/project/src/specification.ts#L1867)*

The type of burning, if applicable.

**`example`** <caption>When burning occurred before planting:</caption>

```js
"type": "before planting"
```

**`example`** <caption>When burning occurred after harvesting:</caption>

```js
"type": "after harvesting"
```
