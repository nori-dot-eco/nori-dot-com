[@nori-dot-com/project](../README.md) › [Globals](../globals.md) › ["specification"](../modules/_specification_.md) › [HistoricLandManagement](_specification_.historiclandmanagement.md)

# Interface: HistoricLandManagement

Details surrounding how the field was managed before year 2000

**`example`** 

```js
{
 // todo example
}
```

## Hierarchy

* **HistoricLandManagement**

## Index

### Properties

* [crp](_specification_.historiclandmanagement.md#crp)
* [crpType](_specification_.historiclandmanagement.md#crptype)
* [preYear1980](_specification_.historiclandmanagement.md#preyear1980)
* [tillageForYears1980To2000](_specification_.historiclandmanagement.md#tillageforyears1980to2000)
* [year1980To2000](_specification_.historiclandmanagement.md#year1980to2000)

## Properties

###  crp

• **crp**: *"yes" | "no"*

*Defined in [specification.ts:135](https://github.com/nori-dot-eco/nori-dot-com/blob/151ad01/packages/project/src/specification.ts#L135)*

Whether the field participated in CRP or not

**`example`** <caption>When the field participated in CRP</caption>

```js
"crp": "yes"
```

**`example`** <caption>When the field did not participate in CRP</caption>

```js
"crp": "no"
```

___

###  crpType

• **crpType**: *"100% grass" | "grass / legume mixture"*

*Defined in [specification.ts:154](https://github.com/nori-dot-eco/nori-dot-com/blob/151ad01/packages/project/src/specification.ts#L154)*

The type of CRP the field participated in. Only applicable if `crp` is set to yes // todo maybe separate interfaces, or if not, make the property optional, default to no

// todo what does "100% grass mean"

**`example`** <caption>When the field participated in 100% grass CRP</caption>

```js
"crpType": "100% grass"
```

**`example`** <caption>When the field participated in grass/legume mixture CRP</caption>

```js
"crpType": "grass / legume mixture"
```

___

###  preYear1980

• **preYear1980**: *"upland non-irrigated (pre 1980s)" | "irrigation (pre 1980s)" | "lowland non-irrigated (pre 1980s)"*

*Defined in [specification.ts:177](https://github.com/nori-dot-eco/nori-dot-com/blob/151ad01/packages/project/src/specification.ts#L177)*

A description of how the land was managed before 1980

**`example`** <caption>When the land was not irrigated upland before 1980</caption>

```js
"preYear1980": "upland non-irrigated (pre 1980s)"
```

**`example`** <caption>When the land was irrigated before 1980</caption>

```js
"preYear1980": "irrigation (pre 1980s)"
```

**`example`** <caption>When the land was not irrigated lowland before 1980</caption>

```js
"preYear1980": "lowland non-irrigated (pre 1980s)"
```

___

###  tillageForYears1980To2000

• **tillageForYears1980To2000**: *"intensive tillage" | "reduced tillage" | "no till"*

*Defined in [specification.ts:203](https://github.com/nori-dot-eco/nori-dot-com/blob/151ad01/packages/project/src/specification.ts#L203)*

The type of soil or crop disturbance events used on the field between 1980 and 2000

**`example`** <caption>When the land used intensive tillage from years 1980-2000</caption>

```js
"tillageForYears1980To2000": "intensive tillage"
```

**`example`** <caption>When the land used reduced tillage from years 1980-2000</caption>

```js
"tillageForYears1980To2000": "reduced tillage"
```

**`example`** <caption>When the land used no till from years 1980-2000</caption>

```js
"tillageForYears1980To2000": "no till"
```

___

###  year1980To2000

• **year1980To2000**: *"none" | "irrigated: annual crops in rotation" | "irrigated: continuous hay" | "non-irrigated: annual crops with hay/pasture in rotation" | "non-irrigated: continuous hay" | "non-irrigated: livestock grazing" | "irrigated: annual crops with hay/pasture in rotation" | "non-irrigated: annual crops in rotation" | "non-irrigated: fallow-grain" | "irrigated: orchard or vineyard"*

*Defined in [specification.ts:211](https://github.com/nori-dot-eco/nori-dot-com/blob/151ad01/packages/project/src/specification.ts#L211)*

A description of how the land was managed between 1980 and 2000
