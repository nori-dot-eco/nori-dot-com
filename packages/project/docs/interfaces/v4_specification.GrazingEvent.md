[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / GrazingEvent

# Interface: GrazingEvent

[v4-specification](../modules/v4_specification.md).GrazingEvent

Grazing event details.

**`example`**

```js
{
 "date": "2000-01-01",
 "daysGrazed": 3,
 "percentResidueRemoved": 50
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`GrazingEvent`**

## Table of contents

### Properties

- [date](v4_specification.GrazingEvent.md#date)
- [daysGrazed](v4_specification.GrazingEvent.md#daysgrazed)
- [externalId](v4_specification.GrazingEvent.md#externalid)
- [id](v4_specification.GrazingEvent.md#id)
- [percentResidueRemoved](v4_specification.GrazingEvent.md#percentresidueremoved)

## Properties

### date

• **date**: `Date`

The date the crop event happened (formatted as ISO8061 date: YYYY-MM-DD and YYYY > 2000 and YYYY < 2100).

Dates for liming and burning can be approximate or the first day of the crop year.

**`example`** When the crop event occurred on January 1st of 2000:

```js
"date": "2000-01-01"
```

**`validationrules`** ["cropEventDateIsOnOrAfterContainingCropYear"]

**`format`** date

**`errormessage`**
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[date](v4_specification.CropEvent.md#date)

#### Defined in

[v4-specification.ts:1636](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L1636)

___

### daysGrazed

• **daysGrazed**: `number`

Number of days actively grazed from `CropEvent.date`

**`minimum`** 1

**`maximum`** 365

**`example`** When animals are on the field 3 days:

```js
"daysGrazed": 3
```

#### Defined in

[v4-specification.ts:2230](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L2230)

___

### externalId

• `Optional` **externalId**: `string`

External crop event identifier.

Used to correlate data back to the originating system and to synchronize repeated imports.

**`nullable`**

**`example`**

```js
"externalId": "4dbbddd2-84c5-4f2b-a58f-e1198b531fba"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[externalId](v4_specification.CropEvent.md#externalid)

#### Defined in

[v4-specification.ts:1651](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L1651)

___

### id

• `Optional` **id**: `string`

Nori's internal crop event identifier.

Used to synchronize repeated imports.

**`nullable`** External systems leave this blank for new projects.

**`example`**

```js
"id": "20e75f5e-05e6-4a4d-92a7-9987de55c586"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[id](v4_specification.CropEvent.md#id)

#### Defined in

[v4-specification.ts:1666](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L1666)

___

### percentResidueRemoved

• **percentResidueRemoved**: `number`

Percent of residue removed if known.

**`minimum`** 0

**`maximum`** 100

**`example`** When 50% of residue was removed:

```js
"percentResidueRemoved": 50
```

#### Defined in

[v4-specification.ts:2244](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/v4-specification.ts#L2244)