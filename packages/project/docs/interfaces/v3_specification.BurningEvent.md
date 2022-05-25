[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / BurningEvent

# Interface: BurningEvent

[v3-specification](../modules/v3_specification.md).BurningEvent

Burning event details.

**`example`**

```js
{
 "type": "before planting"
}
```

## Table of contents

### Properties

- [type](v3_specification.BurningEvent.md#type)

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

[v3-specification.ts:1935](https://github.com/nori-dot-eco/nori-dot-com/blob/841b22c/packages/project/src/v3-specification.ts#L1935)
