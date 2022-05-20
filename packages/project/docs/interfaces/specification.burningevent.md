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

- [type](specification.BurningEvent.md#type)

## Properties

### type

• **type**: ``"before planting"`` \| ``"after harvesting"``

The type of burning, if applicable.

**`example`** When burning occurred before planting:

```js
"type": "before planting"
```

**`example`** When burning occurred after harvesting:

```js
"type": "after harvesting"
```

#### Defined in

[specification.ts:1935](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1935)
