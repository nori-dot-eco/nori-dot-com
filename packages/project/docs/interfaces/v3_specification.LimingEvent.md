[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / LimingEvent

# Interface: LimingEvent

[v3-specification](../modules/v3_specification.md).LimingEvent

Liming event details.

**`Example`**

```js
{
 "date": "01/01/2000",
 "type": "crushed limestone",
 "tonsPerAcre": 10,
}
```

## Table of contents

### Properties

- [date](v3_specification.LimingEvent.md#date)
- [tonsPerAcre](v3_specification.LimingEvent.md#tonsperacre)
- [type](v3_specification.LimingEvent.md#type)

## Properties

### date

• `Optional` **date**: `string`

The date that the liming occurred. Currently, liming dates do not impact quantification. As such, we will default to a reasonable date when this property is left out.

**`Pattern`**

^02/(?:[01]\d|2\d)/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)/(?:[0-2]\d|3[01])/(?:20)\d{2}|(?:0[469]|11)/(?:[0-2]\d|30)/(?:20)\d{2}|02/(?:[0-1]\d|2[0-8])/(?:20)\d{2}$

**`Example`**

<caption>When liming occurred on January 1st of 2000:</caption>

```js
"date": "01/01/2000"
```

#### Defined in

[v3-specification.ts:1849](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1849)

___

### tonsPerAcre

• **tonsPerAcre**: `number`

The liming amount (in tons per acre).

**`Minimum`**

0

**`Example`**

<caption>When 100 tons were user per acre:</caption>

```js
"tonsPerAcre": 100
```

#### Defined in

[v3-specification.ts:1836](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1836)

___

### type

• **type**: ``"crushed limestone"`` \| ``"calcitic limestone"`` \| ``"dolomitic limestone"`` \| ``"other"``

The liming type.

**`Example`**

<caption>When crushed limestone was the liming type that was used:</caption>

```js
"type": "crushed limestone"
```

#### Defined in

[v3-specification.ts:1823](https://github.com/nori-dot-eco/nori-dot-com/blob/aa5eddd/packages/project/src/v3-specification.ts#L1823)
