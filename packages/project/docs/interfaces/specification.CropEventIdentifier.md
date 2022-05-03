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

- [externalId](specification.CropEventIdentifier.md#externalid)
- [id](specification.CropEventIdentifier.md#id)

## Properties

### externalId

• `Optional` **externalId**: `string`

Optional external crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`example`**

```js
"externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Defined in

[specification.ts:1320](https://github.com/nori-dot-eco/nori-dot-com/blob/821dfc2/packages/project/src/specification.ts#L1320)

___

### id

• `Optional` **id**: `string`

Optional Nori's internal crop event identifier.

Used to synchronize repeated imports.  External systems leave this blank.

**`example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Defined in

[specification.ts:1334](https://github.com/nori-dot-eco/nori-dot-com/blob/821dfc2/packages/project/src/specification.ts#L1334)
