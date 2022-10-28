[@nori-dot-com/project](../README.md) / [v3-specification](../modules/v3_specification.md) / CropEventRange

# Interface: CropEventRange

[v3-specification](../modules/v3_specification.md).CropEventRange

A crop event that has a start and end date.

**`Example`**

```js
{
 "startDate": "01/01/2000",
 "endDate": "12/31/2000"
}
```

## Hierarchy

- **`CropEventRange`**

  ↳ [`GrazingEvent`](v3_specification.GrazingEvent.md)

## Table of contents

### Properties

- [endDate](v3_specification.CropEventRange.md#enddate)
- [startDate](v3_specification.CropEventRange.md#startdate)

## Properties

### endDate

• **endDate**: `string`

The last date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`Pattern`**

^02/(?:[01]\d|2\d)/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)/(?:[0-2]\d|3[01])/(?:20)\d{2}|(?:0[469]|11)/(?:[0-2]\d|30)/(?:20)\d{2}|02/(?:[0-1]\d|2[0-8])/(?:20)\d{2}$

**`Example`**

<caption>When the end date of the event range was on December 31st of 2000:</caption>

```js
"endDate": "12/31/2000"
```

#### Defined in

[v3-specification.ts:1333](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L1333)

___

### startDate

• **startDate**: `string`

The first date that the event occurred (formatted as MM/DD/YYYY and YYYY > 2000 and YYYY < 2100).

**`Pattern`**

^02/(?:[01]\d|2\d)/(?:20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)/(?:[0-2]\d|3[01])/(?:20)\d{2}|(?:0[469]|11)/(?:[0-2]\d|30)/(?:20)\d{2}|02/(?:[0-1]\d|2[0-8])/(?:20)\d{2}$

**`Example`**

<caption>When the start date of the event range was on January 1st of 2000:</caption>

```js
"startDate": "01/01/2000"
```

#### Defined in

[v3-specification.ts:1320](https://github.com/nori-dot-eco/nori-dot-com/blob/4a106bf/packages/project/src/v3-specification.ts#L1320)
