# v4.0.4 (September 28, 2022)
* Added `Field.farmOperator`.
* Clarified documentation in several spots.
* Added additional fertilizer types: `phosphate (00-32-00)` and `potash (00-00-60)`.
* Made `Field.assignmentOfAuthority` required and improved documentation.
* Added `Field.physicalEvidenceDoesNotCorroborateSwitchYear`.

# v4.0.3 (Aughst 9, 2022)
* Added `Field.earliestEvidenceYear`

# v4.0.2 (June 13, 2022)
* Fixed a bug where `HarvestEvent` did not inherit `CropEvent`.
* Corrected a confusing `lbsOfNPerAcre` example.

# v4.0.1 (June 2022)

* Added a `source` attribute to `interface CropEvent` to optionally identify the source system
the data point originated in.

# V4.0.0 (May 2022)

 * Adds externalId and id optional fields at every level to make re-imports and synchronization between systems more stable.
 * Moves `plantingDate` to `PlantingEvent.date`
 * Adds `data` to `LimingEvent` and `BurningEvent` for consistency.  The precision of these dates is not critical.
 * Made `burningEvents` an array like the other event types.
 * Switched to ISO8610 Date format throughout (YYYY-MM-DD)
 * Add `pruningEvents` to `CropEvents`
 * Dropped `pruned` and `cleared / renewed` flags from `orchardOrVineyardCrop`.
 * Simplified `GrazingEvent` to take a single event date and the number of days grazed on the field on or after that date.
 * Simplified specific crop types to behave more similarly and inherit the same hierarchy.
 * Renamed `PlantedCrop` to `Crop`, made it inherit `CropEvents` and the specific crop types inherit `Crop`.
 * Make units explicit for organic matter: `tonsPerAcre` for solid and `gallonsPerAcre` for liquid.
 * Use boolean rather than yes/no strings in `grainFruitTuber` and crp definitions.
 * Added additional fields for contact info and legal information about the farms and fields
   that has historically been collected later in the process.
 * Added a new event type for orchard and vineyard crops: `crop.clearingAndRenewalEvents` with a parameter of `percentRenewed`.
 * Added a structured representation of regenerative practice changes (needs review) `field.practiceChangesAdopted`
 * Made `plantingEvents` an array with max one element to keep the structure consistent.  Can be empty for perennials in years after the planting year.
 * Simplified the type of `crop.harvestEvents` for remove the `(AnnualCropHarvestEvent | CropManagementEvent)` distinction and renamed the event to `HarvestEvent`.
 * Added `GrazingEvent.percentResidueRemoved`
 * Renamed `specification` to `v3-specification`
 * Added additional crop names and tilage types Nori accepts that are mappable to Soil Metrics.