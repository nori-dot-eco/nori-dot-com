## Untitled object in undefined Type

`object` ([Details](specification.md))

# undefined Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                             |
| :------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------- |
| [fields](#fields)   | `array`  | Required | cannot be null | [Untitled schema](specification-properties-fields.md "undefined#/properties/fields")   |
| [version](#version) | `string` | Required | cannot be null | [Untitled schema](specification-properties-version.md "undefined#/properties/version") |

## fields




`fields`

-   is required
-   Type: unknown\[]
-   cannot be null
-   defined in: [Untitled schema](specification-properties-fields.md "undefined#/properties/fields")

### fields Type

unknown\[]

## version




`version`

-   is required
-   Type: `string` ([version](specification-properties-version.md))
-   cannot be null
-   defined in: [Untitled schema](specification-properties-version.md "undefined#/properties/version")

### version Type

`string` ([version](specification-properties-version.md))

# Untitled object in undefined Definitions

## Definitions group BurningEvent

Reference this group by using

```json
{"$ref":"undefined#/definitions/BurningEvent"}
```

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                         |
| :------------ | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Required | cannot be null | [Untitled schema](specification-definitions-burningevent-properties-type.md "undefined#/definitions/BurningEvent/properties/type") |

### type




`type`

-   is required
-   Type: `string` ([type](specification-definitions-burningevent-properties-type.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-burningevent-properties-type.md "undefined#/definitions/BurningEvent/properties/type")

#### type Type

`string` ([type](specification-definitions-burningevent-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | ----------- |
| `"no burning"`            |             |
| `"yes, after harvesting"` |             |
| `"yes, before planting"`  |             |

## Definitions group Crop

Reference this group by using

```json
{"$ref":"undefined#/definitions/Crop"}
```

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :------------------------------------------ | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [burningEvent](#burningEvent)               | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-burningevent.md "undefined#/definitions/Crop/properties/burningEvent")               |
| [fertilizerEvents](#fertilizerEvents)       | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-fertilizerevents.md "undefined#/definitions/Crop/properties/fertilizerEvents")       |
| [grazingEvents](#grazingEvents)             | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-grazingevents.md "undefined#/definitions/Crop/properties/grazingEvents")             |
| [harvestOrKillEvents](#harvestOrKillEvents) | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-harvestorkillevents.md "undefined#/definitions/Crop/properties/harvestOrKillEvents") |
| [irrigationEvents](#irrigationEvents)       | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-irrigationevents.md "undefined#/definitions/Crop/properties/irrigationEvents")       |
| [limingEvents](#limingEvents)               | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-limingevents.md "undefined#/definitions/Crop/properties/limingEvents")               |
| [name](#name)                               | `string` | Required | can be null    | [Untitled schema](specification-definitions-crop-properties-name.md "undefined#/definitions/Crop/properties/name")                               |
| [organicMatterEvents](#organicMatterEvents) | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-organicmatterevents.md "undefined#/definitions/Crop/properties/organicMatterEvents") |
| [plantingDate](#plantingDate)               | `string` | Required | can be null    | [Untitled schema](specification-definitions-crop-properties-plantingdate.md "undefined#/definitions/Crop/properties/plantingDate")               |
| [prune](#prune)                             | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-prune.md "undefined#/definitions/Crop/properties/prune")                             |
| [renewOrClear](#renewOrClear)               | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-reneworclear.md "undefined#/definitions/Crop/properties/renewOrClear")               |
| [tillageEvents](#tillageEvents)             | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-tillageevents.md "undefined#/definitions/Crop/properties/tillageEvents")             |
| [type](#type)                               | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-crop-properties-type.md "undefined#/definitions/Crop/properties/type")                               |

### burningEvent




`burningEvent`

-   is required
-   Type: merged type ([burningEvent](specification-definitions-crop-properties-burningevent.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-burningevent.md "undefined#/definitions/Crop/properties/burningEvent")

#### burningEvent Type

merged type ([burningEvent](specification-definitions-crop-properties-burningevent.md))

any of

-   [Untitled schema](specification-definitions-crop-properties-burningevent-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-burningevent-anyof-1.md "check type definition")

### fertilizerEvents




`fertilizerEvents`

-   is required
-   Type: merged type ([fertilizerEvents](specification-definitions-crop-properties-fertilizerevents.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-fertilizerevents.md "undefined#/definitions/Crop/properties/fertilizerEvents")

#### fertilizerEvents Type

merged type ([fertilizerEvents](specification-definitions-crop-properties-fertilizerevents.md))

any of

-   [Untitled array in undefined](specification-definitions-crop-properties-fertilizerevents-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-fertilizerevents-anyof-1.md "check type definition")

### grazingEvents




`grazingEvents`

-   is required
-   Type: merged type ([grazingEvents](specification-definitions-crop-properties-grazingevents.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-grazingevents.md "undefined#/definitions/Crop/properties/grazingEvents")

#### grazingEvents Type

merged type ([grazingEvents](specification-definitions-crop-properties-grazingevents.md))

any of

-   [Untitled array in undefined](specification-definitions-crop-properties-grazingevents-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-grazingevents-anyof-1.md "check type definition")

### harvestOrKillEvents




`harvestOrKillEvents`

-   is required
-   Type: merged type ([harvestOrKillEvents](specification-definitions-crop-properties-harvestorkillevents.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-harvestorkillevents.md "undefined#/definitions/Crop/properties/harvestOrKillEvents")

#### harvestOrKillEvents Type

merged type ([harvestOrKillEvents](specification-definitions-crop-properties-harvestorkillevents.md))

any of

-   [Untitled array in undefined](specification-definitions-crop-properties-harvestorkillevents-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-harvestorkillevents-anyof-1.md "check type definition")

### irrigationEvents




`irrigationEvents`

-   is required
-   Type: merged type ([irrigationEvents](specification-definitions-crop-properties-irrigationevents.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-irrigationevents.md "undefined#/definitions/Crop/properties/irrigationEvents")

#### irrigationEvents Type

merged type ([irrigationEvents](specification-definitions-crop-properties-irrigationevents.md))

any of

-   [Untitled array in undefined](specification-definitions-crop-properties-irrigationevents-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-irrigationevents-anyof-1.md "check type definition")

### limingEvents




`limingEvents`

-   is required
-   Type: merged type ([limingEvents](specification-definitions-crop-properties-limingevents.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-limingevents.md "undefined#/definitions/Crop/properties/limingEvents")

#### limingEvents Type

merged type ([limingEvents](specification-definitions-crop-properties-limingevents.md))

any of

-   [Untitled array in undefined](specification-definitions-crop-properties-limingevents-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-limingevents-anyof-1.md "check type definition")

### name




`name`

-   is required
-   Type: `string` ([name](specification-definitions-crop-properties-name.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-name.md "undefined#/definitions/Crop/properties/name")

#### name Type

`string` ([name](specification-definitions-crop-properties-name.md))

### organicMatterEvents




`organicMatterEvents`

-   is required
-   Type: merged type ([organicMatterEvents](specification-definitions-crop-properties-organicmatterevents.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-organicmatterevents.md "undefined#/definitions/Crop/properties/organicMatterEvents")

#### organicMatterEvents Type

merged type ([organicMatterEvents](specification-definitions-crop-properties-organicmatterevents.md))

any of

-   [Untitled array in undefined](specification-definitions-crop-properties-organicmatterevents-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-organicmatterevents-anyof-1.md "check type definition")

### plantingDate




`plantingDate`

-   is required
-   Type: `string` ([plantingDate](specification-definitions-crop-properties-plantingdate.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-plantingdate.md "undefined#/definitions/Crop/properties/plantingDate")

#### plantingDate Type

`string` ([plantingDate](specification-definitions-crop-properties-plantingdate.md))

### prune




`prune`

-   is required
-   Type: merged type ([prune](specification-definitions-crop-properties-prune.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-prune.md "undefined#/definitions/Crop/properties/prune")

#### prune Type

merged type ([prune](specification-definitions-crop-properties-prune.md))

any of

-   [Untitled string in undefined](specification-definitions-crop-properties-prune-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-prune-anyof-1.md "check type definition")

### renewOrClear




`renewOrClear`

-   is required
-   Type: merged type ([renewOrClear](specification-definitions-crop-properties-reneworclear.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-reneworclear.md "undefined#/definitions/Crop/properties/renewOrClear")

#### renewOrClear Type

merged type ([renewOrClear](specification-definitions-crop-properties-reneworclear.md))

any of

-   [Untitled string in undefined](specification-definitions-crop-properties-reneworclear-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-reneworclear-anyof-1.md "check type definition")

### tillageEvents




`tillageEvents`

-   is required
-   Type: merged type ([tillageEvents](specification-definitions-crop-properties-tillageevents.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-tillageevents.md "undefined#/definitions/Crop/properties/tillageEvents")

#### tillageEvents Type

merged type ([tillageEvents](specification-definitions-crop-properties-tillageevents.md))

any of

-   [Untitled array in undefined](specification-definitions-crop-properties-tillageevents-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-tillageevents-anyof-1.md "check type definition")

### type




`type`

-   is required
-   Type: merged type ([type](specification-definitions-crop-properties-type.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-crop-properties-type.md "undefined#/definitions/Crop/properties/type")

#### type Type

merged type ([type](specification-definitions-crop-properties-type.md))

any of

-   [Untitled string in undefined](specification-definitions-crop-properties-type-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-crop-properties-type-anyof-1.md "check type definition")

## Definitions group CropYear

Reference this group by using

```json
{"$ref":"undefined#/definitions/CropYear"}
```

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :---------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [crops](#crops)               | `array`  | Required | cannot be null | [Untitled schema](specification-definitions-cropyear-properties-crops.md "undefined#/definitions/CropYear/properties/crops")               |
| [plantingYear](#plantingYear) | `number` | Required | cannot be null | [Untitled schema](specification-definitions-cropyear-properties-plantingyear.md "undefined#/definitions/CropYear/properties/plantingYear") |

### crops




`crops`

-   is required
-   Type: unknown\[]
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-cropyear-properties-crops.md "undefined#/definitions/CropYear/properties/crops")

#### crops Type

unknown\[]

### plantingYear




`plantingYear`

-   is required
-   Type: `number` ([plantingYear](specification-definitions-cropyear-properties-plantingyear.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-cropyear-properties-plantingyear.md "undefined#/definitions/CropYear/properties/plantingYear")

#### plantingYear Type

`number` ([plantingYear](specification-definitions-cropyear-properties-plantingyear.md))

## Definitions group FertilizerEvent

Reference this group by using

```json
{"$ref":"undefined#/definitions/FertilizerEvent"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :------------------------------ | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                   | `string` | Required | cannot be null | [Untitled schema](specification-definitions-fertilizerevent-properties-date.md "undefined#/definitions/FertilizerEvent/properties/date")                   |
| [lbsOfNPerAcre](#lbsOfNPerAcre) | `number` | Required | can be null    | [Untitled schema](specification-definitions-fertilizerevent-properties-lbsofnperacre.md "undefined#/definitions/FertilizerEvent/properties/lbsOfNPerAcre") |
| [productName](#productName)     | `string` | Optional | can be null    | [Untitled schema](specification-definitions-fertilizerevent-properties-productname.md "undefined#/definitions/FertilizerEvent/properties/productName")     |
| [type](#type)                   | `string` | Required | can be null    | [Untitled schema](specification-definitions-fertilizerevent-properties-type.md "undefined#/definitions/FertilizerEvent/properties/type")                   |

### date




`date`

-   is required
-   Type: `string` ([date](specification-definitions-fertilizerevent-properties-date.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-fertilizerevent-properties-date.md "undefined#/definitions/FertilizerEvent/properties/date")

#### date Type

`string` ([date](specification-definitions-fertilizerevent-properties-date.md))

### lbsOfNPerAcre




`lbsOfNPerAcre`

-   is required
-   Type: `number` ([lbsOfNPerAcre](specification-definitions-fertilizerevent-properties-lbsofnperacre.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-fertilizerevent-properties-lbsofnperacre.md "undefined#/definitions/FertilizerEvent/properties/lbsOfNPerAcre")

#### lbsOfNPerAcre Type

`number` ([lbsOfNPerAcre](specification-definitions-fertilizerevent-properties-lbsofnperacre.md))

### productName




`productName`

-   is optional
-   Type: `string` ([productName](specification-definitions-fertilizerevent-properties-productname.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-fertilizerevent-properties-productname.md "undefined#/definitions/FertilizerEvent/properties/productName")

#### productName Type

`string` ([productName](specification-definitions-fertilizerevent-properties-productname.md))

### type




`type`

-   is required
-   Type: `string` ([type](specification-definitions-fertilizerevent-properties-type.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-fertilizerevent-properties-type.md "undefined#/definitions/FertilizerEvent/properties/type")

#### type Type

`string` ([type](specification-definitions-fertilizerevent-properties-type.md))

## Definitions group Field

Reference this group by using

```json
{"$ref":"undefined#/definitions/Field"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                     |
| :---------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [acres](#acres)         | `number` | Optional | can be null    | [Untitled schema](specification-definitions-field-properties-acres.md "undefined#/definitions/Field/properties/acres")         |
| [cropYears](#cropYears) | `array`  | Required | cannot be null | [Untitled schema](specification-definitions-field-properties-cropyears.md "undefined#/definitions/Field/properties/cropYears") |
| [fieldName](#fieldName) | `string` | Required | cannot be null | [Untitled schema](specification-definitions-field-properties-fieldname.md "undefined#/definitions/Field/properties/fieldName") |
| [geojson](#geojson)     | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-field-properties-geojson.md "undefined#/definitions/Field/properties/geojson")     |

### acres




`acres`

-   is optional
-   Type: `number` ([acres](specification-definitions-field-properties-acres.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-field-properties-acres.md "undefined#/definitions/Field/properties/acres")

#### acres Type

`number` ([acres](specification-definitions-field-properties-acres.md))

### cropYears




`cropYears`

-   is required
-   Type: unknown\[]
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-field-properties-cropyears.md "undefined#/definitions/Field/properties/cropYears")

#### cropYears Type

unknown\[]

### fieldName




`fieldName`

-   is required
-   Type: `string` ([fieldName](specification-definitions-field-properties-fieldname.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-field-properties-fieldname.md "undefined#/definitions/Field/properties/fieldName")

#### fieldName Type

`string` ([fieldName](specification-definitions-field-properties-fieldname.md))

### geojson




`geojson`

-   is required
-   Type: merged type ([geojson](specification-definitions-field-properties-geojson.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-field-properties-geojson.md "undefined#/definitions/Field/properties/geojson")

#### geojson Type

merged type ([geojson](specification-definitions-field-properties-geojson.md))

any of

-   [Untitled object in undefined](specification-definitions-field-properties-geojson-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-field-properties-geojson-anyof-1.md "check type definition")

## Definitions group GrazingEvent

Reference this group by using

```json
{"$ref":"undefined#/definitions/GrazingEvent"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [endDate](#endDate)         | `string` | Required | cannot be null | [Untitled schema](specification-definitions-grazingevent-properties-enddate.md "undefined#/definitions/GrazingEvent/properties/endDate")         |
| [restPeriod](#restPeriod)   | `number` | Required | cannot be null | [Untitled schema](specification-definitions-grazingevent-properties-restperiod.md "undefined#/definitions/GrazingEvent/properties/restPeriod")   |
| [startDate](#startDate)     | `string` | Required | cannot be null | [Untitled schema](specification-definitions-grazingevent-properties-startdate.md "undefined#/definitions/GrazingEvent/properties/startDate")     |
| [utilization](#utilization) | `number` | Required | cannot be null | [Untitled schema](specification-definitions-grazingevent-properties-utilization.md "undefined#/definitions/GrazingEvent/properties/utilization") |

### endDate




`endDate`

-   is required
-   Type: `string` ([endDate](specification-definitions-grazingevent-properties-enddate.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-grazingevent-properties-enddate.md "undefined#/definitions/GrazingEvent/properties/endDate")

#### endDate Type

`string` ([endDate](specification-definitions-grazingevent-properties-enddate.md))

### restPeriod




`restPeriod`

-   is required
-   Type: `number` ([restPeriod](specification-definitions-grazingevent-properties-restperiod.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-grazingevent-properties-restperiod.md "undefined#/definitions/GrazingEvent/properties/restPeriod")

#### restPeriod Type

`number` ([restPeriod](specification-definitions-grazingevent-properties-restperiod.md))

### startDate




`startDate`

-   is required
-   Type: `string` ([startDate](specification-definitions-grazingevent-properties-startdate.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-grazingevent-properties-startdate.md "undefined#/definitions/GrazingEvent/properties/startDate")

#### startDate Type

`string` ([startDate](specification-definitions-grazingevent-properties-startdate.md))

### utilization




`utilization`

-   is required
-   Type: `number` ([utilization](specification-definitions-grazingevent-properties-utilization.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-grazingevent-properties-utilization.md "undefined#/definitions/GrazingEvent/properties/utilization")

#### utilization Type

`number` ([utilization](specification-definitions-grazingevent-properties-utilization.md))

## Definitions group HarvestOrKillEvent

Reference this group by using

```json
{"$ref":"undefined#/definitions/HarvestOrKillEvent"}
```

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                     |
| :-------------------------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                                 | `string` | Required | cannot be null | [Untitled schema](specification-definitions-harvestorkillevent-properties-date.md "undefined#/definitions/HarvestOrKillEvent/properties/date")                                 |
| [grainFruitTuber](#grainFruitTuber)           | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-harvestorkillevent-properties-grainfruittuber.md "undefined#/definitions/HarvestOrKillEvent/properties/grainFruitTuber")           |
| [residueRemoved](#residueRemoved)             | `number` | Required | can be null    | [Untitled schema](specification-definitions-harvestorkillevent-properties-residueremoved.md "undefined#/definitions/HarvestOrKillEvent/properties/residueRemoved")             |
| [yield](#yield)                               | `number` | Optional | can be null    | [Untitled schema](specification-definitions-harvestorkillevent-properties-yield.md "undefined#/definitions/HarvestOrKillEvent/properties/yield")                               |
| [yieldDenominatorUnit](#yieldDenominatorUnit) | `string` | Required | can be null    | [Untitled schema](specification-definitions-harvestorkillevent-properties-yielddenominatorunit.md "undefined#/definitions/HarvestOrKillEvent/properties/yieldDenominatorUnit") |
| [yieldNumeratorUnit](#yieldNumeratorUnit)     | `string` | Required | can be null    | [Untitled schema](specification-definitions-harvestorkillevent-properties-yieldnumeratorunit.md "undefined#/definitions/HarvestOrKillEvent/properties/yieldNumeratorUnit")     |

### date




`date`

-   is required
-   Type: `string` ([date](specification-definitions-harvestorkillevent-properties-date.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-date.md "undefined#/definitions/HarvestOrKillEvent/properties/date")

#### date Type

`string` ([date](specification-definitions-harvestorkillevent-properties-date.md))

### grainFruitTuber




`grainFruitTuber`

-   is required
-   Type: merged type ([grainFruitTuber](specification-definitions-harvestorkillevent-properties-grainfruittuber.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-grainfruittuber.md "undefined#/definitions/HarvestOrKillEvent/properties/grainFruitTuber")

#### grainFruitTuber Type

merged type ([grainFruitTuber](specification-definitions-harvestorkillevent-properties-grainfruittuber.md))

any of

-   [Untitled string in undefined](specification-definitions-harvestorkillevent-properties-grainfruittuber-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-harvestorkillevent-properties-grainfruittuber-anyof-1.md "check type definition")

### residueRemoved




`residueRemoved`

-   is required
-   Type: `number` ([residueRemoved](specification-definitions-harvestorkillevent-properties-residueremoved.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-residueremoved.md "undefined#/definitions/HarvestOrKillEvent/properties/residueRemoved")

#### residueRemoved Type

`number` ([residueRemoved](specification-definitions-harvestorkillevent-properties-residueremoved.md))

### yield




`yield`

-   is optional
-   Type: `number` ([yield](specification-definitions-harvestorkillevent-properties-yield.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-yield.md "undefined#/definitions/HarvestOrKillEvent/properties/yield")

#### yield Type

`number` ([yield](specification-definitions-harvestorkillevent-properties-yield.md))

### yieldDenominatorUnit




`yieldDenominatorUnit`

-   is required
-   Type: `string` ([yieldDenominatorUnit](specification-definitions-harvestorkillevent-properties-yielddenominatorunit.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-yielddenominatorunit.md "undefined#/definitions/HarvestOrKillEvent/properties/yieldDenominatorUnit")

#### yieldDenominatorUnit Type

`string` ([yieldDenominatorUnit](specification-definitions-harvestorkillevent-properties-yielddenominatorunit.md))

### yieldNumeratorUnit




`yieldNumeratorUnit`

-   is required
-   Type: `string` ([yieldNumeratorUnit](specification-definitions-harvestorkillevent-properties-yieldnumeratorunit.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-yieldnumeratorunit.md "undefined#/definitions/HarvestOrKillEvent/properties/yieldNumeratorUnit")

#### yieldNumeratorUnit Type

`string` ([yieldNumeratorUnit](specification-definitions-harvestorkillevent-properties-yieldnumeratorunit.md))

## Definitions group IrrigationEvent

Reference this group by using

```json
{"$ref":"undefined#/definitions/IrrigationEvent"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                             |
| :-------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)               | `string` | Required | cannot be null | [Untitled schema](specification-definitions-irrigationevent-properties-date.md "undefined#/definitions/IrrigationEvent/properties/date")               |
| [depth](#depth)             | `number` | Required | can be null    | [Untitled schema](specification-definitions-irrigationevent-properties-depth.md "undefined#/definitions/IrrigationEvent/properties/depth")             |
| [depthUnits](#depthUnits)   | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-irrigationevent-properties-depthunits.md "undefined#/definitions/IrrigationEvent/properties/depthUnits")   |
| [endDate](#endDate)         | `string` | Required | can be null    | [Untitled schema](specification-definitions-irrigationevent-properties-enddate.md "undefined#/definitions/IrrigationEvent/properties/endDate")         |
| [frequency](#frequency)     | `number` | Required | can be null    | [Untitled schema](specification-definitions-irrigationevent-properties-frequency.md "undefined#/definitions/IrrigationEvent/properties/frequency")     |
| [volume](#volume)           | `number` | Required | can be null    | [Untitled schema](specification-definitions-irrigationevent-properties-volume.md "undefined#/definitions/IrrigationEvent/properties/volume")           |
| [volumeUnits](#volumeUnits) | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-irrigationevent-properties-volumeunits.md "undefined#/definitions/IrrigationEvent/properties/volumeUnits") |

### date




`date`

-   is required
-   Type: `string` ([date](specification-definitions-irrigationevent-properties-date.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-irrigationevent-properties-date.md "undefined#/definitions/IrrigationEvent/properties/date")

#### date Type

`string` ([date](specification-definitions-irrigationevent-properties-date.md))

### depth




`depth`

-   is required
-   Type: `number` ([depth](specification-definitions-irrigationevent-properties-depth.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-irrigationevent-properties-depth.md "undefined#/definitions/IrrigationEvent/properties/depth")

#### depth Type

`number` ([depth](specification-definitions-irrigationevent-properties-depth.md))

### depthUnits




`depthUnits`

-   is required
-   Type: merged type ([depthUnits](specification-definitions-irrigationevent-properties-depthunits.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-irrigationevent-properties-depthunits.md "undefined#/definitions/IrrigationEvent/properties/depthUnits")

#### depthUnits Type

merged type ([depthUnits](specification-definitions-irrigationevent-properties-depthunits.md))

any of

-   [Untitled string in undefined](specification-definitions-irrigationevent-properties-depthunits-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-irrigationevent-properties-depthunits-anyof-1.md "check type definition")

### endDate




`endDate`

-   is required
-   Type: `string` ([endDate](specification-definitions-irrigationevent-properties-enddate.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-irrigationevent-properties-enddate.md "undefined#/definitions/IrrigationEvent/properties/endDate")

#### endDate Type

`string` ([endDate](specification-definitions-irrigationevent-properties-enddate.md))

### frequency




`frequency`

-   is required
-   Type: `number` ([frequency](specification-definitions-irrigationevent-properties-frequency.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-irrigationevent-properties-frequency.md "undefined#/definitions/IrrigationEvent/properties/frequency")

#### frequency Type

`number` ([frequency](specification-definitions-irrigationevent-properties-frequency.md))

### volume




`volume`

-   is required
-   Type: `number` ([volume](specification-definitions-irrigationevent-properties-volume.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-irrigationevent-properties-volume.md "undefined#/definitions/IrrigationEvent/properties/volume")

#### volume Type

`number` ([volume](specification-definitions-irrigationevent-properties-volume.md))

### volumeUnits




`volumeUnits`

-   is required
-   Type: merged type ([volumeUnits](specification-definitions-irrigationevent-properties-volumeunits.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-irrigationevent-properties-volumeunits.md "undefined#/definitions/IrrigationEvent/properties/volumeUnits")

#### volumeUnits Type

merged type ([volumeUnits](specification-definitions-irrigationevent-properties-volumeunits.md))

any of

-   [Untitled string in undefined](specification-definitions-irrigationevent-properties-volumeunits-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-irrigationevent-properties-volumeunits-anyof-1.md "check type definition")

## Definitions group LimingEvent

Reference this group by using

```json
{"$ref":"undefined#/definitions/LimingEvent"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :-------------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)               | `string` | Required | cannot be null | [Untitled schema](specification-definitions-limingevent-properties-date.md "undefined#/definitions/LimingEvent/properties/date")               |
| [tonsPerAcre](#tonsPerAcre) | `number` | Required | cannot be null | [Untitled schema](specification-definitions-limingevent-properties-tonsperacre.md "undefined#/definitions/LimingEvent/properties/tonsPerAcre") |
| [type](#type)               | `string` | Required | cannot be null | [Untitled schema](specification-definitions-limingevent-properties-type.md "undefined#/definitions/LimingEvent/properties/type")               |

### date




`date`

-   is required
-   Type: `string` ([date](specification-definitions-limingevent-properties-date.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-limingevent-properties-date.md "undefined#/definitions/LimingEvent/properties/date")

#### date Type

`string` ([date](specification-definitions-limingevent-properties-date.md))

### tonsPerAcre




`tonsPerAcre`

-   is required
-   Type: `number` ([tonsPerAcre](specification-definitions-limingevent-properties-tonsperacre.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-limingevent-properties-tonsperacre.md "undefined#/definitions/LimingEvent/properties/tonsPerAcre")

#### tonsPerAcre Type

`number` ([tonsPerAcre](specification-definitions-limingevent-properties-tonsperacre.md))

### type




`type`

-   is required
-   Type: `string` ([type](specification-definitions-limingevent-properties-type.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-limingevent-properties-type.md "undefined#/definitions/LimingEvent/properties/type")

#### type Type

`string` ([type](specification-definitions-limingevent-properties-type.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | ----------- |
| `"calcitic limestone"`  |             |
| `"crushed limestone"`   |             |
| `"dolomitic limestone"` |             |
| `"none"`                |             |
| `"other"`               |             |

## Definitions group OrganicMatterEvent

Reference this group by using

```json
{"$ref":"undefined#/definitions/OrganicMatterEvent"}
```

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :------------------------------------------ | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [amountPerAcre](#amountPerAcre)             | `number` | Required | cannot be null | [Untitled schema](specification-definitions-organicmatterevent-properties-amountperacre.md "undefined#/definitions/OrganicMatterEvent/properties/amountPerAcre")             |
| [carbonNitrogenRatio](#carbonNitrogenRatio) | `number` | Required | can be null    | [Untitled schema](specification-definitions-organicmatterevent-properties-carbonnitrogenratio.md "undefined#/definitions/OrganicMatterEvent/properties/carbonNitrogenRatio") |
| [date](#date)                               | `string` | Required | cannot be null | [Untitled schema](specification-definitions-organicmatterevent-properties-date.md "undefined#/definitions/OrganicMatterEvent/properties/date")                               |
| [percentNitrogen](#percentNitrogen)         | `number` | Required | can be null    | [Untitled schema](specification-definitions-organicmatterevent-properties-percentnitrogen.md "undefined#/definitions/OrganicMatterEvent/properties/percentNitrogen")         |
| [type](#type)                               | `string` | Required | cannot be null | [Untitled schema](specification-definitions-organicmatterevent-properties-type.md "undefined#/definitions/OrganicMatterEvent/properties/type")                               |

### amountPerAcre




`amountPerAcre`

-   is required
-   Type: `number` ([amountPerAcre](specification-definitions-organicmatterevent-properties-amountperacre.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-organicmatterevent-properties-amountperacre.md "undefined#/definitions/OrganicMatterEvent/properties/amountPerAcre")

#### amountPerAcre Type

`number` ([amountPerAcre](specification-definitions-organicmatterevent-properties-amountperacre.md))

### carbonNitrogenRatio




`carbonNitrogenRatio`

-   is required
-   Type: `number` ([carbonNitrogenRatio](specification-definitions-organicmatterevent-properties-carbonnitrogenratio.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-organicmatterevent-properties-carbonnitrogenratio.md "undefined#/definitions/OrganicMatterEvent/properties/carbonNitrogenRatio")

#### carbonNitrogenRatio Type

`number` ([carbonNitrogenRatio](specification-definitions-organicmatterevent-properties-carbonnitrogenratio.md))

### date




`date`

-   is required
-   Type: `string` ([date](specification-definitions-organicmatterevent-properties-date.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-organicmatterevent-properties-date.md "undefined#/definitions/OrganicMatterEvent/properties/date")

#### date Type

`string` ([date](specification-definitions-organicmatterevent-properties-date.md))

### percentNitrogen




`percentNitrogen`

-   is required
-   Type: `number` ([percentNitrogen](specification-definitions-organicmatterevent-properties-percentnitrogen.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-organicmatterevent-properties-percentnitrogen.md "undefined#/definitions/OrganicMatterEvent/properties/percentNitrogen")

#### percentNitrogen Type

`number` ([percentNitrogen](specification-definitions-organicmatterevent-properties-percentnitrogen.md))

### type




`type`

-   is required
-   Type: `string` ([type](specification-definitions-organicmatterevent-properties-type.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-organicmatterevent-properties-type.md "undefined#/definitions/OrganicMatterEvent/properties/type")

#### type Type

`string` ([type](specification-definitions-organicmatterevent-properties-type.md))

## Definitions group TillageEvent

Reference this group by using

```json
{"$ref":"undefined#/definitions/TillageEvent"}
```

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                         |
| :------------ | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date) | `string` | Required | cannot be null | [Untitled schema](specification-definitions-tillageevent-properties-date.md "undefined#/definitions/TillageEvent/properties/date") |
| [type](#type) | `string` | Required | cannot be null | [Untitled schema](specification-definitions-tillageevent-properties-type.md "undefined#/definitions/TillageEvent/properties/type") |

### date




`date`

-   is required
-   Type: `string` ([date](specification-definitions-tillageevent-properties-date.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-tillageevent-properties-date.md "undefined#/definitions/TillageEvent/properties/date")

#### date Type

`string` ([date](specification-definitions-tillageevent-properties-date.md))

### type




`type`

-   is required
-   Type: `string` ([type](specification-definitions-tillageevent-properties-type.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-tillageevent-properties-type.md "undefined#/definitions/TillageEvent/properties/type")

#### type Type

`string` ([type](specification-definitions-tillageevent-properties-type.md))
