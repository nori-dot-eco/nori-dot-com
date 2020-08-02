## LimingEvent Type

`object` ([LimingEvent](specification-definitions-limingevent.md))

# LimingEvent Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :-------------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)               | `string` | Required | cannot be null | [Untitled schema](specification-definitions-limingevent-properties-date.md "undefined#/definitions/LimingEvent/properties/date")               |
| [tonsPerAcre](#tonsPerAcre) | `number` | Required | cannot be null | [Untitled schema](specification-definitions-limingevent-properties-tonsperacre.md "undefined#/definitions/LimingEvent/properties/tonsPerAcre") |
| [type](#type)               | `string` | Required | cannot be null | [Untitled schema](specification-definitions-limingevent-properties-type.md "undefined#/definitions/LimingEvent/properties/type")               |

## date




`date`

-   is required
-   Type: `string` ([date](specification-definitions-limingevent-properties-date.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-limingevent-properties-date.md "undefined#/definitions/LimingEvent/properties/date")

### date Type

`string` ([date](specification-definitions-limingevent-properties-date.md))

## tonsPerAcre




`tonsPerAcre`

-   is required
-   Type: `number` ([tonsPerAcre](specification-definitions-limingevent-properties-tonsperacre.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-limingevent-properties-tonsperacre.md "undefined#/definitions/LimingEvent/properties/tonsPerAcre")

### tonsPerAcre Type

`number` ([tonsPerAcre](specification-definitions-limingevent-properties-tonsperacre.md))

## type




`type`

-   is required
-   Type: `string` ([type](specification-definitions-limingevent-properties-type.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-limingevent-properties-type.md "undefined#/definitions/LimingEvent/properties/type")

### type Type

`string` ([type](specification-definitions-limingevent-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | ----------- |
| `"calcitic limestone"`  |             |
| `"crushed limestone"`   |             |
| `"dolomitic limestone"` |             |
| `"none"`                |             |
| `"other"`               |             |
