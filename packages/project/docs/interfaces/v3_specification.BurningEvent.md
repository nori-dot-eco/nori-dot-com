[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / BurningEvent

# Interface: BurningEvent

[v3-specification](../modules/v3_specification.md).BurningEvent

Burning event details.

**`Example`**

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

**`Example`**

<caption>When burning occurred before planting:</caption>

```js
"type": "before planting"
```

**`Example`**

<caption>When burning occurred after harvesting:</caption>

```js
"type": "after harvesting"
```

#### Defined in

[v3-specification.ts:1947](https://github.com/nori-dot-eco/nori-dot-com/blob/cc4e2a7/packages/project/src/v3-specification.ts#L1947)
