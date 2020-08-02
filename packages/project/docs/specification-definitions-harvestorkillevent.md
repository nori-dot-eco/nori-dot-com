## HarvestOrKillEvent Type

`object` ([HarvestOrKillEvent](specification-definitions-harvestorkillevent.md))

# HarvestOrKillEvent Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                     |
| :-------------------------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                                 | `string` | Required | cannot be null | [Untitled schema](specification-definitions-harvestorkillevent-properties-date.md "undefined#/definitions/HarvestOrKillEvent/properties/date")                                 |
| [grainFruitTuber](#grainFruitTuber)           | Merged   | Required | cannot be null | [Untitled schema](specification-definitions-harvestorkillevent-properties-grainfruittuber.md "undefined#/definitions/HarvestOrKillEvent/properties/grainFruitTuber")           |
| [residueRemoved](#residueRemoved)             | `number` | Required | can be null    | [Untitled schema](specification-definitions-harvestorkillevent-properties-residueremoved.md "undefined#/definitions/HarvestOrKillEvent/properties/residueRemoved")             |
| [yield](#yield)                               | `number` | Optional | can be null    | [Untitled schema](specification-definitions-harvestorkillevent-properties-yield.md "undefined#/definitions/HarvestOrKillEvent/properties/yield")                               |
| [yieldDenominatorUnit](#yieldDenominatorUnit) | `string` | Required | can be null    | [Untitled schema](specification-definitions-harvestorkillevent-properties-yielddenominatorunit.md "undefined#/definitions/HarvestOrKillEvent/properties/yieldDenominatorUnit") |
| [yieldNumeratorUnit](#yieldNumeratorUnit)     | `string` | Required | can be null    | [Untitled schema](specification-definitions-harvestorkillevent-properties-yieldnumeratorunit.md "undefined#/definitions/HarvestOrKillEvent/properties/yieldNumeratorUnit")     |

## date




`date`

-   is required
-   Type: `string` ([date](specification-definitions-harvestorkillevent-properties-date.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-date.md "undefined#/definitions/HarvestOrKillEvent/properties/date")

### date Type

`string` ([date](specification-definitions-harvestorkillevent-properties-date.md))

## grainFruitTuber




`grainFruitTuber`

-   is required
-   Type: merged type ([grainFruitTuber](specification-definitions-harvestorkillevent-properties-grainfruittuber.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-grainfruittuber.md "undefined#/definitions/HarvestOrKillEvent/properties/grainFruitTuber")

### grainFruitTuber Type

merged type ([grainFruitTuber](specification-definitions-harvestorkillevent-properties-grainfruittuber.md))

any of

-   [Untitled string in undefined](specification-definitions-harvestorkillevent-properties-grainfruittuber-anyof-0.md "check type definition")
-   [Untitled null in undefined](specification-definitions-harvestorkillevent-properties-grainfruittuber-anyof-1.md "check type definition")

## residueRemoved




`residueRemoved`

-   is required
-   Type: `number` ([residueRemoved](specification-definitions-harvestorkillevent-properties-residueremoved.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-residueremoved.md "undefined#/definitions/HarvestOrKillEvent/properties/residueRemoved")

### residueRemoved Type

`number` ([residueRemoved](specification-definitions-harvestorkillevent-properties-residueremoved.md))

## yield




`yield`

-   is optional
-   Type: `number` ([yield](specification-definitions-harvestorkillevent-properties-yield.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-yield.md "undefined#/definitions/HarvestOrKillEvent/properties/yield")

### yield Type

`number` ([yield](specification-definitions-harvestorkillevent-properties-yield.md))

## yieldDenominatorUnit




`yieldDenominatorUnit`

-   is required
-   Type: `string` ([yieldDenominatorUnit](specification-definitions-harvestorkillevent-properties-yielddenominatorunit.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-yielddenominatorunit.md "undefined#/definitions/HarvestOrKillEvent/properties/yieldDenominatorUnit")

### yieldDenominatorUnit Type

`string` ([yieldDenominatorUnit](specification-definitions-harvestorkillevent-properties-yielddenominatorunit.md))

## yieldNumeratorUnit




`yieldNumeratorUnit`

-   is required
-   Type: `string` ([yieldNumeratorUnit](specification-definitions-harvestorkillevent-properties-yieldnumeratorunit.md))
-   can be null
-   defined in: [Untitled schema](specification-definitions-harvestorkillevent-properties-yieldnumeratorunit.md "undefined#/definitions/HarvestOrKillEvent/properties/yieldNumeratorUnit")

### yieldNumeratorUnit Type

`string` ([yieldNumeratorUnit](specification-definitions-harvestorkillevent-properties-yieldnumeratorunit.md))
