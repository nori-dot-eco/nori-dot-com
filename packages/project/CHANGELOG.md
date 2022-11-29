# v4.2.0 (November 28, 2022)
* Added `historical extrapolation` as an option to `CropYear.dataSourceType`.
* Removed nullable annotation from `FertilizerEvent.lbsOfNPerAcre` and applied a schema-level default of 0 to that field.

# v4.1.0 (November 17, 2022)
* Simplified schema to reduce complexity.
    * Removed `AnnualCrop`, `CoverCrop`, `OrchardOrVineyardCrop` and `PerennialCrop`.
    * All crop event types must be an array (can be empty) or the property omitted but
      cannot explicitly be `null`.
* *BREAKING CHANGE* Converted `CropYear.dataSourceType` values to lower case to be consistent with the rest of the schema and to work around a bug.  Values are now
    * `grower reported`
    * `projected`
* Updates to the unit tests to cover these cases.
* Added the following crops to the cover crop list
    * `winter wheat`
    * `triticale`
    * `oats`
    * `buckwheat`
    * `alfalfa`
    * `dry field pea`
    * `sugar beets`
    * `winter grain-other`

# v4.0.7 (October 31, 2022)
* added `Project.projectName`

# v4.0.6 (October 27, 2022)
* Added `Project.supplierId`
* Added `CropYear.dataSourceType` enum to permit the supplier to specify whether the CropYear's data is source from actual grower past data or project future practice data.
* Updated unit tests and validation sample code to operate on v4 of project import schema.
* Tuned up some warnings in the validation code and simplified the schema around the array of fields in a CropYear.

# v4.0.5 (October 5, 2022)
* Corrected OrganinicMatterEvent properties `percentNitrogen`, `carbonNitrogenRatio` and `percentMoisture` to be optional.  Default values for these properties will be used based on the selected OMAD when running the SoilMetrics model.
* Added `alfalfa` and `clover` to `annualCropTypes`

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