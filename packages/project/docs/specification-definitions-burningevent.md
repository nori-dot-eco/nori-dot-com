## BurningEvent Type

`object` ([BurningEvent](specification-definitions-burningevent.md))

# BurningEvent Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                         |
| :------------ | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type) | `string` | Required | cannot be null | [Untitled schema](specification-definitions-burningevent-properties-type.md "undefined#/definitions/BurningEvent/properties/type") |

## type




`type`

-   is required
-   Type: `string` ([type](specification-definitions-burningevent-properties-type.md))
-   cannot be null
-   defined in: [Untitled schema](specification-definitions-burningevent-properties-type.md "undefined#/definitions/BurningEvent/properties/type")

### type Type

`string` ([type](specification-definitions-burningevent-properties-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | ----------- |
| `"no burning"`            |             |
| `"yes, after harvesting"` |             |
| `"yes, before planting"`  |             |
