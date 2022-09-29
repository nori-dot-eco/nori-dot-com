[@nori-dot-com/project](../README.md) / [v4-specification](../modules/v4_specification.md) / ClearingAndRenewalEvent

# Interface: ClearingAndRenewalEvent

[v4-specification](../modules/v4_specification.md).ClearingAndRenewalEvent

Clearing and renewal event for orchards / vinyards.

**`example`**

```js
{
 "date": "2008-10-31",
  "percentRenewed": 50
}
```

## Hierarchy

- [`CropEvent`](v4_specification.CropEvent.md)

  ↳ **`ClearingAndRenewalEvent`**

## Table of contents

### Properties

- [date](v4_specification.ClearingAndRenewalEvent.md#date)
- [externalId](v4_specification.ClearingAndRenewalEvent.md#externalid)
- [id](v4_specification.ClearingAndRenewalEvent.md#id)
- [percentRenewed](v4_specification.ClearingAndRenewalEvent.md#percentrenewed)
- [source](v4_specification.ClearingAndRenewalEvent.md#source)

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

[v4-specification.ts:1781](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1781)

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

[v4-specification.ts:1796](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1796)

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

[v4-specification.ts:1811](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1811)

___

### percentRenewed

• **percentRenewed**: `number`

Percentage or orchard or vinyard that was cleared and renewed.

**`minimum`** 1

**`maximum`** 100

**`example`** When 50% of the orchard was renewed:

```js
"percentRenewed": 50
```

#### Defined in

[v4-specification.ts:2443](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L2443)

___

### source

• `Optional` **source**: `string`

Source of the event

Optional field to indicate what system this data point originated from.

**`nullable`**

**`example`**

```js
"source": "CDL"
```

**`example`**

```js
"source": "FMS name"
```

#### Inherited from

[CropEvent](v4_specification.CropEvent.md).[source](v4_specification.CropEvent.md#source)

#### Defined in

[v4-specification.ts:1832](https://github.com/nori-dot-eco/nori-dot-com/blob/1fbedf1/packages/project/src/v4-specification.ts#L1832)
