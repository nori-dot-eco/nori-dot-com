[@nori-dot-com/project](../README.md) / [specification](../modules/specification.md) / OrganicMatterEvent

# Interface: OrganicMatterEvent

[specification](../modules/specification.md).OrganicMatterEvent

Organic matter (OMAD) and manure event details.

**`example`**

```js
{
 "date": "10/01/2000",
 "amountPerAcre": 2,
 "percentNitrogen": 9,
 "carbonNitrogenRatio": 30,
 "percentMoisture": 0,
}
```

## Hierarchy

- [`CropEvent`](specification.CropEvent.md)

  ↳ **`OrganicMatterEvent`**

  ↳↳ [`SolidOrganicMatterEvent`](specification.SolidOrganicMatterEvent.md)

  ↳↳ [`SlurryOrganicMatterEvent`](specification.SlurryOrganicMatterEvent.md)

## Table of contents

### Properties

- [amountPerAcre](specification.OrganicMatterEvent.md#amountperacre)
- [carbonNitrogenRatio](specification.OrganicMatterEvent.md#carbonnitrogenratio)
- [date](specification.OrganicMatterEvent.md#date)
- [name](specification.OrganicMatterEvent.md#name)
- [percentMoisture](specification.OrganicMatterEvent.md#percentmoisture)
- [percentNitrogen](specification.OrganicMatterEvent.md#percentnitrogen)

## Properties

### amountPerAcre

• **amountPerAcre**: `number`

Amount of organic matter or manure applied per acre (in tons per acre for solid/dry organic matter or gallons per acre for slurry).

**`minimum`** 0

**`maximum`** 200

**`example`** When the amount of organic matter or manure applied to the crop per acre was 2 tons per acre for a solid/dry manure:

```js
"amountPerAcre": 2
```

#### Defined in

[specification.ts:1708](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1708)

___

### carbonNitrogenRatio

• **carbonNitrogenRatio**: `number`

The carbon to nitrogen ratio in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`nullable`** during import

**`minimum`** 0

**`example`** When the carbon to nitrogen ration of the organic matter or manure was 30:

```js
"carbonNitrogenRatio": 30
```

#### Defined in

[specification.ts:1747](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1747)

___

### date

• **date**: `string`

The date the crop event happened (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`nullable`** during import (note: when dates are defined as null in an import file, the data will still need to be collected at a later point in the enrollment process (i.e., either in the Nori front-end experience, or in a subsequent data import file).

**`pattern`** ^02\/(?:[01]\d|2\d)\/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:20)\d{2}$

**`example`** When the crop event occurred on January 1st of 2000:

```js
"date": "01/01/2000"
```

**`validationrules`** ["cropEventDateIsOnOrAfterContainingCropYear"]

**`errormessage`**
{
"type": "projectDataError:cropEventDateTypeError",
"validationRules": "projectDataError:cropEventDateValidationRuleViolation"
}

#### Inherited from

[CropEvent](specification.CropEvent.md).[date](specification.CropEvent.md#date)

#### Defined in

[specification.ts:1279](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1279)

___

### name

• `Optional` **name**: `string`

The name/alias that the OMAD event is known by. This property is used in the to-be-deprecated supplier intake sheet.

**`todo`** this property will be deprecated in the future

**`example`** When the name of the organic matter or manure used on the crop was known by the supplier as "Joe's manure":

```js
"name": "Joe's manure"
```

#### Defined in

[specification.ts:1694](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1694)

___

### percentMoisture

• **percentMoisture**: `number`

The percent moisture of the organic matter or manure

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`nullable`** during import (explicitly specify null if you are unsure what the value is)

**`minimum`** 0

**`maximum`** 100

**`example`** When the percent moisture is 15:

```js
"percentMoisture": 15
```

#### Defined in

[specification.ts:1765](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1765)

___

### percentNitrogen

• **percentNitrogen**: `number`

The nitrogen percent makeup in the organic matter or manure.

You can find a list of default values per `type` [here](https://go.nori.com/inputs).

**`todo`** In the future, when this value is defined as null, the importer will attempt to find a reasonable a default value based on the [type](#type)

**`minimum`** 0

**`maximum`** 100

**`nullable`** during import (when defined as null, a default value will be assigned)

**`example`** When the organic matter or manure contains 9% nitrogen:

```js
"percentNitrogen": 9
```

#### Defined in

[specification.ts:1728](https://github.com/nori-dot-eco/nori-dot-com/blob/0db6c17/packages/project/src/specification.ts#L1728)
