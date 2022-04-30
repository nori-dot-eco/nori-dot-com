[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / CropEventIdentifier

# Interface: CropEventIdentifier

[specification](../modules/specification.md).CropEventIdentifier

## Hierarchy

- **`CropEventIdentifier`**

  ↳ [`CropEvent`](specification.CropEvent.md)

  ↳ [`CropEventWithOptionalDate`](specification.CropEventWithOptionalDate.md)

  ↳ [`CropEventRange`](specification.CropEventRange.md)

## Table of contents

### Properties

- [id](specification.CropEventIdentifier.md#id)

## Properties

### id

• `Optional` **id**: `string`

Optional external crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`example`**

```js
"id": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Defined in

[specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/8ea14b1/packages/project/src/specification.ts#L1279)
