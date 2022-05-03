[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / BurningEvent

# Interface: BurningEvent

[specification](../modules/specification.md).BurningEvent

Burning event details.

**`example`** 

```js
{
 "type": "before planting"
}
```

## Table of contents

### Properties

- [type](specification.burningevent.md#type)

## Properties

### type

• **type**: *before planting* \| *after harvesting*

The type of burning, if applicable.

**`example`** <caption>When burning occurred before planting:</caption>

```js
"type": "before planting"
```

**`example`** <caption>When burning occurred after harvesting:</caption>

```js
"type": "after harvesting"
```

Defined in: [@nori-dot-com/nori-dot-com/packages/project/src/specification.ts:1878](https://github.com/nori-dot-eco/nori-dot-com/blob/88bf3ab/packages/project/src/specification.ts#L1878)
