import type { Input } from '@nori-dot-com/ggit';

import {
  TRANSLATIONS,
  isSlurryOrganicMatterEvent,
  isSolidOrganicMatterEvent,
  isAnnualCrop,
  isOrchardOrVineyardCrop,
  isPerennialCrop,
  isCoverCrop,
  extractGeometryData,
  extractFieldName,
  buildHistoricCrpLandManagement,
  buildHistoricNonCrpLandManagement,
  buildHistoricLandManagement,
  separateCurrentAndFutureScenarios,
  extractRegenerativeSwitchYear,
  translateFertilizerEvent,
  translateFertilizerEvents,
  translateOrganicMatterEvent,
  translateOrganicMatterEvents,
  translateIrrigationEvent,
  translateIrrigationEvents,
  translateLimingEvents,
  translateBurningEvent,
  translateGrazingEvent,
  translateGrazingEvents,
  translateCropHarvestEvent,
  translateCropHarvestEvents,
  translateSoilOrCropDisturbanceEvent,
  translateSoilOrCropDisturbanceEvents,
  translateCoverCrop,
  translateOrchardOrVineyardCrop,
  translateAnnualCrop,
  translatePerennialCrop,
  translateCropEvent,
  extractCrops,
  extractCropYears,
  extractCroplandsAndScenarios,
  shiftCropsTaggedAsContinueFromPreviousYear,
  convertFromGgitToProject,
} from '../../index';

import { ggitInputData, v3Data } from './fixtures';

describe('convertFromGgitToProject', () => {
  it('should convert ggit input to project data', () => {
    expect(convertFromGgitToProject({ ggitInputData })).toStrictEqual<
      ReturnType<typeof convertFromGgitToProject>
    >(v3Data);
  });
});

describe('TRANSLATIONS', () => {
  it('should translate the GGIT event to an equivalent project event', () => {
    const translation =
      TRANSLATIONS.historicNonCrpLandManagement.preYear1980[
        'upland non-irrigated (pre 1980s)'
      ];
    expect(translation).toStrictEqual<typeof translation>(
      'upland non-irrigated'
    );
  });
});

describe('isSlurryOrganicMatterEvent', () => {
  it('will return false when the event is not a slurry OMAD event', () => {
    expect(
      isSlurryOrganicMatterEvent({
        OMADType: ('not a slurry OMAD type' as unknown) as Input.OMADType,
        OMADApplicationDate: null,
        OMADCNRatio: null,
        OMADPercentN: null,
        OMADAmount: null,
      })
    ).toStrictEqual<ReturnType<typeof isSlurryOrganicMatterEvent>>(false);
  });
  it('will return true when the event is a slurry OMAD event', () => {
    expect(
      isSlurryOrganicMatterEvent({
        OMADType: 'beef slurry',
        OMADApplicationDate: null,
        OMADCNRatio: null,
        OMADPercentN: null,
        OMADAmount: null,
      })
    ).toStrictEqual<ReturnType<typeof isSlurryOrganicMatterEvent>>(true);
  });
});

describe('isSolidOrganicMatterEvent', () => {
  it('will return false when the event is not a solid OMAD event', () => {
    expect(
      isSolidOrganicMatterEvent({
        OMADType: ('not a solid OMAD type' as unknown) as Input.OMADType,
        OMADApplicationDate: null,
        OMADCNRatio: null,
        OMADPercentN: null,
        OMADAmount: null,
      })
    ).toStrictEqual<ReturnType<typeof isSolidOrganicMatterEvent>>(false);
  });
  it('will return true when the event is a solid OMAD event', () => {
    expect(
      isSolidOrganicMatterEvent({
        OMADType: 'alfalfa meal',
        OMADApplicationDate: null,
        OMADCNRatio: null,
        OMADPercentN: null,
        OMADAmount: null,
      })
    ).toStrictEqual<ReturnType<typeof isSolidOrganicMatterEvent>>(true);
  });
});

describe('isAnnualCrop', () => {
  it('will return false crop is not an annual crop', () => {
    expect(
      isAnnualCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: ('not an annual crop' as unknown) as Input.CropName,
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isAnnualCrop>>(false);
  });
  it('will return true crop is an annual crop', () => {
    expect(
      isAnnualCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: 'corn',
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isAnnualCrop>>(true);
  });
});

describe('isOrchardOrVineyardCrop', () => {
  it('will return false crop is not a orchard/vineyard crop', () => {
    expect(
      isOrchardOrVineyardCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: ('not an orchard or vineyard crop' as unknown) as Input.CropName,
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isOrchardOrVineyardCrop>>(false);
  });
  it('will return true crop is an orchard/vineyard crop', () => {
    expect(
      isOrchardOrVineyardCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: 'oranges',
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isOrchardOrVineyardCrop>>(true);
  });
});

describe('isPerennialCrop', () => {
  it('will return false crop is not a a perennial crop', () => {
    expect(
      isPerennialCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: ('not a perennial crop' as unknown) as Input.CropName,
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isPerennialCrop>>(false);
  });
  it('will return true crop is a perennial crop', () => {
    expect(
      isPerennialCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: 'alfalfa',
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isPerennialCrop>>(true);
  });
});

describe('isCoverCrop', () => {
  it('will return false crop is not a a cover crop', () => {
    expect(
      isCoverCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: ('not a cover crop' as unknown) as Input.CropName,
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isCoverCrop>>(false);
  });
  it('will return true crop is a cover crop', () => {
    expect(
      isCoverCrop({
        '@CropNumber': null,
        BurnEvent: null,
        CropName: 'annual rye',
        PlantingDate: null,
        ContinueFromPreviousYear: null,
        HarvestList: null,
        TillageList: null,
        NApplicationList: null,
        OMADApplicationList: null,
        IrrigationList: null,
        LimingEvent: null,
        GrazingList: null,
        Prune: null,
        Renew: null,
      })
    ).toStrictEqual<ReturnType<typeof isCoverCrop>>(true);
  });
});

describe('extractGeometryData', () => {
  it('will extract the geometry from a single polygon input', () => {
    expect(
      extractGeometryData({
        croplands: [
          {
            '@Name': null,
            GEOM: {
              '@SRID': '4326',
              '@AREA': 0,
              '#text':
                'polygon((-102.025696361448 41.1624569193335, -102.024237239744 41.1631353976904, -102.022520625974 41.1635554045818, -102.020460689451 41.1632646308668, -102.019044483091 41.1625861538478, -102.01822909155 41.1617784339522, -102.017542446043 41.1607122284469, -102.017585361387 41.1594844551661, -102.01771410742 41.1587413180595, -102.01822909155 41.1579658616607, -102.019301975156 41.1571257735422, -102.020589435484 41.1566734139417, -102.021962726499 41.1563826096929, -102.023336017515 41.1564795445859, -102.024880969907 41.1570611509333, -102.025996768858 41.15790123988, -102.026554668333 41.1586120759635, -102.026812160398 41.1597752456533, -102.026683414365 41.161035322856, -102.026168430235 41.1618430519102, -102.025696361448 41.1624569193335))',
            },
            'Pre-1980': null,
            CRP: null,
            CRPType: null,
            'Year1980-2000': null,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Year1980-2000_Tillage': null,
            CRPStartYear: null,
            CRPEndYear: null,
            PreCRPManagement: null,
            PreCRPTillage: null,
            PostCRPManagement: null,
            PostCRPTillage: null,
            CropScenario: null,
          },
        ],
      })
    ).toStrictEqual<ReturnType<typeof extractGeometryData>>({
      acres: 0,
      geojson: {
        features: [
          {
            geometry: {
              coordinates: [
                [
                  [-102.025696361448, 41.1624569193335],
                  [-102.024237239744, 41.1631353976904],
                  [-102.022520625974, 41.1635554045818],
                  [-102.020460689451, 41.1632646308668],
                  [-102.019044483091, 41.1625861538478],
                  [-102.01822909155, 41.1617784339522],
                  [-102.017542446043, 41.1607122284469],
                  [-102.017585361387, 41.1594844551661],
                  [-102.01771410742, 41.1587413180595],
                  [-102.01822909155, 41.1579658616607],
                  [-102.019301975156, 41.1571257735422],
                  [-102.020589435484, 41.1566734139417],
                  [-102.021962726499, 41.1563826096929],
                  [-102.023336017515, 41.1564795445859],
                  [-102.024880969907, 41.1570611509333],
                  [-102.025996768858, 41.15790123988],
                  [-102.026554668333, 41.1586120759635],
                  [-102.026812160398, 41.1597752456533],
                  [-102.026683414365, 41.161035322856],
                  [-102.026168430235, 41.1618430519102],
                  [-102.025696361448, 41.1624569193335],
                ],
              ],
              type: 'Polygon',
            },
            properties: {},
            type: 'Feature',
          },
        ],
        type: 'FeatureCollection',
      },
    });
  });

  it('will extract the geometry from a multi polygon input', () => {
    expect(
      extractGeometryData({
        croplands: [
          {
            '@Name': null,
            GEOM: {
              '@SRID': '4326',
              '@AREA': 0,
              '#text':
                'polygon((-102.025696361448 41.1624569193335, -102.024237239744 41.1631353976904, -102.022520625974 41.1635554045818, -102.020460689451 41.1632646308668, -102.019044483091 41.1625861538478, -102.01822909155 41.1617784339522, -102.017542446043 41.1607122284469, -102.017585361387 41.1594844551661, -102.01771410742 41.1587413180595, -102.01822909155 41.1579658616607, -102.019301975156 41.1571257735422, -102.020589435484 41.1566734139417, -102.021962726499 41.1563826096929, -102.023336017515 41.1564795445859, -102.024880969907 41.1570611509333, -102.025996768858 41.15790123988, -102.026554668333 41.1586120759635, -102.026812160398 41.1597752456533, -102.026683414365 41.161035322856, -102.026168430235 41.1618430519102, -102.025696361448 41.1624569193335))',
            },
            'Pre-1980': null,
            CRP: null,
            CRPType: null,
            'Year1980-2000': null,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Year1980-2000_Tillage': null,
            CRPStartYear: null,
            CRPEndYear: null,
            PreCRPManagement: null,
            PreCRPTillage: null,
            PostCRPManagement: null,
            PostCRPTillage: null,
            CropScenario: null,
          },
          {
            '@Name': null,
            GEOM: {
              '@SRID': '4326',
              '@AREA': 0,
              '#text':
                'polygon((-90.025696361448 41.1624569193335, -90.024237239744 41.1631353976904, -90.022520625974 41.1635554045818, -90.020460689451 41.1632646308668, -90.019044483091 41.1625861538478, -90.01822909155 41.1617784339522, -90.017542446043 41.1607122284469, -90.017585361387 41.1594844551661, -90.01771410742 41.1587413180595, -90.01822909155 41.1579658616607, -90.019301975156 41.1571257735422, -90.020589435484 41.1566734139417, -90.021962726499 41.1563826096929, -90.023336017515 41.1564795445859, -90.024880969907 41.1570611509333, -90.025996768858 41.15790123988, -90.026554668333 41.1586120759635, -90.026812160398 41.1597752456533, -90.026683414365 41.161035322856, -90.026168430235 41.161843051990, -90.025696361448 41.1624569193335))',
            },
            'Pre-1980': null,
            CRP: null,
            CRPType: null,
            'Year1980-2000': null,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Year1980-2000_Tillage': null,
            CRPStartYear: null,
            CRPEndYear: null,
            PreCRPManagement: null,
            PreCRPTillage: null,
            PostCRPManagement: null,
            PostCRPTillage: null,
            CropScenario: null,
          },
        ],
      })
    ).toStrictEqual<ReturnType<typeof extractGeometryData>>({
      acres: 0,
      geojson: {
        features: [
          {
            geometry: {
              coordinates: [
                [
                  [-90.025696361448, 41.1624569193335],
                  [-90.024237239744, 41.1631353976904],
                  [-90.022520625974, 41.1635554045818],
                  [-90.020460689451, 41.1632646308668],
                  [-90.019044483091, 41.1625861538478],
                  [-90.01822909155, 41.1617784339522],
                  [-90.017542446043, 41.1607122284469],
                  [-90.017585361387, 41.1594844551661],
                  [-90.01771410742, 41.1587413180595],
                  [-90.01822909155, 41.1579658616607],
                  [-90.019301975156, 41.1571257735422],
                  [-90.020589435484, 41.1566734139417],
                  [-90.021962726499, 41.1563826096929],
                  [-90.023336017515, 41.1564795445859],
                  [-90.024880969907, 41.1570611509333],
                  [-90.025996768858, 41.15790123988],
                  [-90.026554668333, 41.1586120759635],
                  [-90.026812160398, 41.1597752456533],
                  [-90.026683414365, 41.161035322856],
                  [-90.026168430235, 41.16184305199],
                  [-90.025696361448, 41.1624569193335],
                ],
              ],
              type: 'Polygon',
            },
            properties: {},
            type: 'Feature',
          },
          {
            geometry: {
              coordinates: [
                [
                  [-102.025696361448, 41.1624569193335],
                  [-102.024237239744, 41.1631353976904],
                  [-102.022520625974, 41.1635554045818],
                  [-102.020460689451, 41.1632646308668],
                  [-102.019044483091, 41.1625861538478],
                  [-102.01822909155, 41.1617784339522],
                  [-102.017542446043, 41.1607122284469],
                  [-102.017585361387, 41.1594844551661],
                  [-102.01771410742, 41.1587413180595],
                  [-102.01822909155, 41.1579658616607],
                  [-102.019301975156, 41.1571257735422],
                  [-102.020589435484, 41.1566734139417],
                  [-102.021962726499, 41.1563826096929],
                  [-102.023336017515, 41.1564795445859],
                  [-102.024880969907, 41.1570611509333],
                  [-102.025996768858, 41.15790123988],
                  [-102.026554668333, 41.1586120759635],
                  [-102.026812160398, 41.1597752456533],
                  [-102.026683414365, 41.161035322856],
                  [-102.026168430235, 41.1618430519102],
                  [-102.025696361448, 41.1624569193335],
                ],
              ],
              type: 'Polygon',
            },
            properties: {},
            type: 'Feature',
          },
        ],
        type: 'FeatureCollection',
      },
    });
  });
});

describe('extractFieldName', () => {
  it('will test the function', () => {
    expect(
      extractFieldName({
        metadata:
          'PROJECT_NAME|FIELD_NAME|12345==|54321|2021-03-09T16:52:15.223Z|1|0',
      })
    ).toStrictEqual<ReturnType<typeof extractFieldName>>({
      fieldName: 'FIELD_NAME',
    });
  });
});

describe('buildHistoricCrpLandManagement', () => {
  it('will test the function', () => {
    expect(() => buildHistoricCrpLandManagement()).toThrow();
  });
});

describe('buildHistoricNonCrpLandManagement', () => {
  it('will build historic non-CRP land management when it is indicated that they did not participated in CRP', () => {
    expect(
      buildHistoricNonCrpLandManagement({
        'Pre-1980': 'upland non-irrigated (pre 1980s)',
        'Year1980-2000': 'irrigated: annual crops in rotation',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Year1980-2000_Tillage': 'intensive tillage',
      })
    ).toStrictEqual<ReturnType<typeof buildHistoricNonCrpLandManagement>>({
      crp: 'no',
      preYear1980: 'upland non-irrigated',
      year1980To2000: 'irrigated: annual crops in rotation',
      tillageForYears1980To2000: 'intensive tillage',
    });
  });
});

describe('buildHistoricLandManagement', () => {
  it('will build historic non-CRP land management when it is indicated that they did not participated in CRP', () => {
    expect(
      buildHistoricLandManagement({
        CRP: 'no',
        CRPType: null,
        CRPStartYear: null,
        CRPEndYear: null,
        PreCRPManagement: null,
        PreCRPTillage: null,
        PostCRPManagement: null,
        PostCRPTillage: null,
        'Pre-1980': 'irrigation (pre 1980s)',
        'Year1980-2000': 'irrigated: continuous hay',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Year1980-2000_Tillage': 'no till',
      })
    ).toStrictEqual<ReturnType<typeof buildHistoricLandManagement>>({
      crp: 'no',
      preYear1980: 'irrigation',
      year1980To2000: 'irrigated: continuous hay',
      tillageForYears1980To2000: 'no till',
    });
  });
  it('will build historic CRP land management when it is indicated that they did participate in CRP', () => {
    expect(() =>
      buildHistoricLandManagement({
        CRP: 'yes',
        CRPType: null,
        CRPStartYear: null,
        CRPEndYear: null,
        PreCRPManagement: null,
        PreCRPTillage: null,
        PostCRPManagement: null,
        PostCRPTillage: null,
        'Pre-1980': null,
        'Year1980-2000': null,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Year1980-2000_Tillage': null,
      })
    ).toThrow();
  });
});

describe('separateCurrentAndFutureScenarios', () => {
  it('will separate current and future crop scenarios', () => {
    expect(
      separateCurrentAndFutureScenarios({
        cropScenarios: [
          {
            '@Name': 'Current',
            CropYear: [
              {
                '@Year': 2001,
                Crop: null,
              },
            ],
          },
          {
            '@Name': 'Future',
            CropYear: [
              {
                '@Year': 2020,
                Crop: null,
              },
            ],
          },
        ],
      })
    ).toStrictEqual<ReturnType<typeof separateCurrentAndFutureScenarios>>({
      currentCropScenario: {
        '@Name': 'Current',
        CropYear: [
          {
            '@Year': 2001,
            Crop: null,
          },
        ],
      },
      futureCropScenario: {
        '@Name': 'Future',
        CropYear: [
          {
            '@Year': 2020,
            Crop: null,
          },
        ],
      },
    });
  });
});

describe('extractRegenerativeSwitchYear', () => {
  it('will extract the regenerative switch year (which is the earliest crop year in the Future scenarios', () => {
    expect(
      extractRegenerativeSwitchYear({
        futureCropScenario: {
          '@Name': 'Future',
          CropYear: [
            {
              '@Year': 2020,
              Crop: null,
            },
            {
              '@Year': 2025,
              Crop: null,
            },
            {
              '@Year': 2019,
              Crop: null,
            },
          ],
        },
      })
    ).toStrictEqual<ReturnType<typeof extractRegenerativeSwitchYear>>({
      regenerativeStartYear: 2019,
    });
  });
});

describe('translateFertilizerEvent', () => {
  it('will translate a fertilizer event', () => {
    expect(
      translateFertilizerEvent({
        event: {
          EEP: null,
          NApplicationAmount: 1,
          NApplicationDate: '01/01/2000',
          NApplicationMethod: null,
          NApplicationType: 'ammonium nitrate (34-0-0)',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateFertilizerEvent>>({
      fertilizerEvent: {
        lbsOfNPerAcre: 1,
        date: '01/01/2000',
        type: 'ammonium nitrate (34-0-0)',
        name: null,
      },
    });
  });
});

describe('translateFertilizerEvents', () => {
  it('will translate fertilizer events', () => {
    expect(
      translateFertilizerEvents({
        fertilizerEventList: {
          NApplicationEvent: [
            {
              EEP: null,
              NApplicationAmount: 1,
              NApplicationDate: '01/01/2000',
              NApplicationMethod: null,
              NApplicationType: 'ammonium nitrate (34-0-0)',
            },
            {
              EEP: null,
              NApplicationAmount: 5,
              NApplicationDate: '01/02/2000',
              NApplicationMethod: null,
              NApplicationType: 'calcium nitrate',
            },
          ],
        },
      })
    ).toStrictEqual<ReturnType<typeof translateFertilizerEvents>>({
      fertilizerEvents: [
        {
          lbsOfNPerAcre: 1,
          date: '01/01/2000',
          type: 'ammonium nitrate (34-0-0)',
          name: null,
        },
        {
          lbsOfNPerAcre: 5,
          date: '01/02/2000',
          type: 'calcium nitrate',
          name: null,
        },
      ],
    });
  });
});

describe('translateOrganicMatterEvent', () => {
  it('will translate the organic matter event', () => {
    expect(
      translateOrganicMatterEvent({
        event: {
          OMADAmount: 1,
          OMADApplicationDate: '01/01/2000',
          OMADCNRatio: 3,
          OMADPercentN: 2,
          OMADType: 'alfalfa meal',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateOrganicMatterEvent>>({
      organicMatterEvent: {
        amountPerAcre: 1,
        carbonNitrogenRatio: 3,
        date: '01/01/2000',
        percentMoisture: null,
        percentNitrogen: 2,
        type: 'alfalfa meal',
        name: null,
      },
    });
  });
  it('will throw if the organic matter event is not a defined slurry or solid type', () => {
    expect(() =>
      translateOrganicMatterEvent({
        event: {
          OMADAmount: 1,
          OMADApplicationDate: '01/01/2000',
          OMADCNRatio: 3,
          OMADPercentN: 2,
          OMADType: ('not an OMAD type' as unknown) as Input.OMADType,
        },
      })
    ).toThrow();
  });
});

describe('translateOrganicMatterEvents', () => {
  it('will translate the organic matter events', () => {
    expect(
      translateOrganicMatterEvents({
        organicMatterEventList: {
          OMADApplicationEvent: [
            {
              OMADAmount: 1,
              OMADApplicationDate: '01/01/2000',
              OMADCNRatio: 3,
              OMADPercentN: 2,
              OMADType: 'blood, dried',
            },
            {
              OMADAmount: 2,
              OMADApplicationDate: '01/05/2000',
              OMADCNRatio: 3,
              OMADPercentN: 2,
              OMADType: 'compost or composted manure, solid',
            },
          ],
        },
      })
    ).toStrictEqual<ReturnType<typeof translateOrganicMatterEvents>>({
      organicMatterEvents: [
        {
          amountPerAcre: 1,
          carbonNitrogenRatio: 3,
          date: '01/01/2000',
          percentMoisture: null,
          percentNitrogen: 2,
          type: 'blood, dried',
          name: null,
        },
        {
          amountPerAcre: 2,
          carbonNitrogenRatio: 3,
          date: '01/05/2000',
          percentMoisture: null,
          percentNitrogen: 2,
          type: 'compost or composted manure, solid',
          name: null,
        },
      ],
    });
  });
});

describe('translateIrrigationEvent', () => {
  it('will translate the irrigation event', () => {
    expect(
      translateIrrigationEvent({
        event: {
          IrrigationDate: '01/01/2000',
          IrrigationInches: 1.0,
        },
      })
    ).toStrictEqual<ReturnType<typeof translateIrrigationEvent>>({
      irrigationEvent: {
        date: '01/01/2000',
        volume: 1.0,
      },
    });
  });
});

describe('translateIrrigationEvents', () => {
  it('will translate the irrigation events', () => {
    expect(
      translateIrrigationEvents({
        irrigationEventList: {
          IrrigationEvent: [
            {
              IrrigationDate: '01/01/2000',
              IrrigationInches: 1.0,
            },
            {
              IrrigationDate: '01/02/2000',
              IrrigationInches: 2.0,
            },
          ],
        },
      })
    ).toStrictEqual<ReturnType<typeof translateIrrigationEvents>>({
      irrigationEvents: [
        {
          date: '01/01/2000',
          volume: 1.0,
        },
        {
          date: '01/02/2000',
          volume: 2.0,
        },
      ],
    });
  });
});

describe('translateLimingEvents', () => {
  it('will translate the liming event when there is one', () => {
    expect(
      translateLimingEvents({
        limingEventList: {
          LimingDate: '01/01/2000',
          LimingMethod: 'crushed limestone',
          LimingRate: 1,
        },
      })
    ).toStrictEqual<ReturnType<typeof translateLimingEvents>>({
      limingEvents: [
        {
          date: '01/01/2000',
          type: 'crushed limestone',
          tonsPerAcre: 1,
        },
      ],
    });
  });
  it('will translate the liming event when there is not when as indicated by the "none" liming type input', () => {
    expect(
      translateLimingEvents({
        limingEventList: {
          LimingDate: null,
          LimingMethod: 'none',
          LimingRate: null,
        },
      })
    ).toStrictEqual<ReturnType<typeof translateLimingEvents>>({
      limingEvents: null,
    });
  });
  it('will translate the liming event when there is not one when indicated by none being specified', () => {
    expect(
      translateLimingEvents({
        limingEventList: {},
      })
    ).toStrictEqual<ReturnType<typeof translateLimingEvents>>({
      limingEvents: null,
    });
  });
});

describe('translateBurningEvent', () => {
  it('will translate the burning event when it is "yes, after harvesting"', () => {
    expect(
      translateBurningEvent({
        burnEvent: {
          BurnTime: 'yes, after harvesting',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateBurningEvent>>({
      burningEvent: {
        type: 'after harvesting',
      },
    });
  });
  it('will translate the burning event when it is "yes, before planting"', () => {
    expect(
      translateBurningEvent({
        burnEvent: {
          BurnTime: 'yes, before planting',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateBurningEvent>>({
      burningEvent: {
        type: 'before planting',
      },
    });
  });
  it('will exclude the burning event when it is missing', () => {
    expect(
      translateBurningEvent({
        burnEvent: {
          BurnTime: 'no burning',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateBurningEvent>>({
      burningEvent: null,
    });
  });
  it('will exclude the burning event when it is "no burning', () => {
    expect(
      translateBurningEvent({
        burnEvent: {
          BurnTime: 'no burning',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateBurningEvent>>({
      burningEvent: null,
    });
  });
});

describe('translateGrazingEvent', () => {
  it('will translate the grazing event', () => {
    expect(
      translateGrazingEvent({
        event: {
          GrazingStartDate: '01/01/2000',
          GrazingEndDate: '12/31/2000',
          RestPeriod: 0,
          UtilizationPct: 20,
        },
      })
    ).toStrictEqual<ReturnType<typeof translateGrazingEvent>>({
      grazingEvent: {
        startDate: '01/01/2000',
        endDate: '12/31/2000',
        restPeriod: 0,
        utilization: 20,
      },
    });
  });
});

describe('translateGrazingEvents', () => {
  it('will translate the grazing events', () => {
    expect(
      translateGrazingEvents({
        grazingEventList: {
          GrazingEvent: [
            {
              GrazingStartDate: '01/01/2000',
              GrazingEndDate: '01/31/2000',
              RestPeriod: 0,
              UtilizationPct: 20,
            },
            {
              GrazingStartDate: '02/01/2000',
              GrazingEndDate: '12/31/2000',
              RestPeriod: 0,
              UtilizationPct: 10,
            },
          ],
        },
      })
    ).toStrictEqual<ReturnType<typeof translateGrazingEvents>>({
      grazingEvents: [
        {
          startDate: '01/01/2000',
          endDate: '01/31/2000',
          restPeriod: 0,
          utilization: 20,
        },
        {
          startDate: '02/01/2000',
          endDate: '12/31/2000',
          restPeriod: 0,
          utilization: 10,
        },
      ],
    });
  });
});

describe('translateCropHarvestEvent', () => {
  it('will translate the crop harvest event', () => {
    expect(
      translateCropHarvestEvent({
        event: {
          Grain: 'yes',
          HarvestDate: '01/01/2000',
          StrawStoverHayRemoval: 0,
          yield: 50,
        },
      })
    ).toStrictEqual<ReturnType<typeof translateCropHarvestEvent>>({
      annualCropHarvestEvent: {
        date: '01/01/2000',
        yield: 50,
        yieldUnit: 'bu/ac',
        residueRemoved: 0,
        grainFruitTuber: 'yes',
      },
    });
  });
});

describe('translateCropHarvestEvents', () => {
  it('will translate the crop harvest events', () => {
    expect(
      translateCropHarvestEvents({
        harvestEventList: {
          HarvestEvent: [
            {
              Grain: 'no',
              HarvestDate: '01/01/2000',
              StrawStoverHayRemoval: 1,
              yield: 10,
            },
            {
              Grain: 'no',
              HarvestDate: '01/02/2000',
              StrawStoverHayRemoval: 5,
              yield: 11,
            },
          ],
        },
      })
    ).toStrictEqual<ReturnType<typeof translateCropHarvestEvents>>({
      harvestEvents: [
        {
          date: '01/01/2000',
          yield: 10,
          yieldUnit: 'bu/ac',
          residueRemoved: 1,
          grainFruitTuber: 'no',
        },
        {
          date: '01/02/2000',
          yield: 11,
          yieldUnit: 'bu/ac',
          residueRemoved: 5,
          grainFruitTuber: 'no',
        },
      ],
    });
  });
});

describe('translateSoilOrCropDisturbanceEvent', () => {
  it('will translate the tillage event', () => {
    expect(
      translateSoilOrCropDisturbanceEvent({
        event: {
          TillageDate: '01/01/2000',
          TillageType: 'mow',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateSoilOrCropDisturbanceEvent>>({
      soilOrCropDisturbanceEvent: {
        date: '01/01/2000',
        type: 'mow',
        name: null,
      },
    });
  });
});

describe('translateSoilOrCropDisturbanceEvents', () => {
  it('will translate the tillage events', () => {
    expect(
      translateSoilOrCropDisturbanceEvents({
        soilOrCropDisturbanceEventList: {
          TillageEvent: [
            {
              TillageDate: '01/01/2000',
              TillageType: 'no tillage',
            },
            {
              TillageDate: '12/31/2000',
              TillageType: 'winter kill',
            },
          ],
        },
      })
    ).toStrictEqual<ReturnType<typeof translateSoilOrCropDisturbanceEvents>>({
      soilOrCropDisturbanceEvents: [
        { date: '01/01/2000', type: 'no tillage', name: null },
        { date: '12/31/2000', type: 'winter killed', name: null },
      ],
    });
  });
});

describe('translateCoverCrop', () => {
  it('will translate the cover crop', () => {
    expect(
      translateCoverCrop({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: 'annual rye',
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
        },
      })
    ).toStrictEqual<ReturnType<typeof translateCoverCrop>>({
      coverCrop: {
        type: 'annual rye',
        classification: 'annual cover',
        plantingDate: '01/01/2000',
        soilOrCropDisturbanceEvents: [],
        fertilizerEvents: [],
        organicMatterEvents: [],
        irrigationEvents: [],
        limingEvents: null,
        grazingEvents: null,
        burningEvent: null,
        name: null,
      },
    });
  });
});

describe('translateOrchardOrVineyardCrop', () => {
  it('will translate the orchard crop', () => {
    expect(
      translateOrchardOrVineyardCrop({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: 'grape, wine (1391-1670 gdd)',
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
          Prune: 'yes',
          Renew: 'yes',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateOrchardOrVineyardCrop>>({
      orchardOrVineyard: {
        type: 'grape, wine (1391-1670 gdd)',
        classification: 'vineyard',
        plantingDate: '01/01/2000',
        soilOrCropDisturbanceEvents: [],
        fertilizerEvents: [],
        organicMatterEvents: [],
        irrigationEvents: [],
        limingEvents: null,
        grazingEvents: null,
        burningEvent: null,
        name: null,
        prune: 'yes',
        renewOrClear: 'yes',
        harvestEvents: [],
      },
    });
  });
});

describe('translateAnnualCrop', () => {
  it('will translate the annual crop', () => {
    expect(
      translateAnnualCrop({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: 'barley',
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
        },
      })
    ).toStrictEqual<ReturnType<typeof translateAnnualCrop>>({
      annualCrop: {
        type: 'barley',
        classification: 'annual crop',
        plantingDate: '01/01/2000',
        soilOrCropDisturbanceEvents: [],
        fertilizerEvents: [],
        organicMatterEvents: [],
        irrigationEvents: [],
        limingEvents: null,
        grazingEvents: null,
        burningEvent: null,
        name: null,
        harvestEvents: [],
      },
    });
  });
});

describe('translatePerennialCrop', () => {
  it('will translate the perennial crop', () => {
    expect(
      translatePerennialCrop({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: 'alfalfa',
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
        },
      })
    ).toStrictEqual<ReturnType<typeof translatePerennialCrop>>({
      perennialCrop: {
        type: 'alfalfa',
        classification: 'perennial',
        plantingDate: '01/01/2000',
        soilOrCropDisturbanceEvents: [],
        fertilizerEvents: [],
        organicMatterEvents: [],
        irrigationEvents: [],
        limingEvents: null,
        grazingEvents: null,
        burningEvent: null,
        name: null,
        harvestEvents: [],
      },
    });
  });
});

describe('translateCropEvent', () => {
  it('will throw an error if the crop classification cannot be detected', () => {
    expect(() =>
      translateCropEvent({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: ('invalid crop name' as unknown) as Input.CropName,
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
        },
      })
    ).toThrow();
  });
  it('will translate the crop event when it is a cover crop', () => {
    expect(
      translateCropEvent({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: 'annual rye',
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
        },
      })
    ).toStrictEqual<ReturnType<typeof translateCropEvent>>({
      crop: {
        type: 'annual rye',
        classification: 'annual cover',
        plantingDate: '01/01/2000',
        soilOrCropDisturbanceEvents: [],
        fertilizerEvents: [],
        organicMatterEvents: [],
        irrigationEvents: [],
        limingEvents: null,
        grazingEvents: null,
        burningEvent: null,
        name: null,
      },
    });
  });
  it('will translate the crop event when it is a orchard/vineyard', () => {
    expect(
      translateCropEvent({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: 'grape, wine (1391-1670 gdd)',
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
          Prune: 'yes',
          Renew: 'yes',
        },
      })
    ).toStrictEqual<ReturnType<typeof translateCropEvent>>({
      crop: {
        type: 'grape, wine (1391-1670 gdd)',
        classification: 'vineyard',
        plantingDate: '01/01/2000',
        soilOrCropDisturbanceEvents: [],
        fertilizerEvents: [],
        organicMatterEvents: [],
        irrigationEvents: [],
        limingEvents: null,
        grazingEvents: null,
        burningEvent: null,
        name: null,
        prune: 'yes',
        renewOrClear: 'yes',
        harvestEvents: [],
      },
    });
  });
  it('will translate the crop event when it is an annual crop', () => {
    expect(
      translateCropEvent({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: 'barley',
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
        },
      })
    ).toStrictEqual<ReturnType<typeof translateCropEvent>>({
      crop: {
        type: 'barley',
        classification: 'annual crop',
        plantingDate: '01/01/2000',
        soilOrCropDisturbanceEvents: [],
        fertilizerEvents: [],
        organicMatterEvents: [],
        irrigationEvents: [],
        limingEvents: null,
        grazingEvents: null,
        burningEvent: null,
        name: null,
        harvestEvents: [],
      },
    });
  });
  it('will translate the crop event when it is a perennial', () => {
    expect(
      translateCropEvent({
        cropEvent: {
          '@CropNumber': null,
          BurnEvent: null,
          CropName: 'alfalfa',
          PlantingDate: '01/01/2000',
          ContinueFromPreviousYear: null,
          HarvestList: {},
          TillageList: {},
          NApplicationList: {},
          OMADApplicationList: {},
          IrrigationList: {},
          LimingEvent: {},
          GrazingList: {},
        },
      })
    ).toStrictEqual<ReturnType<typeof translateCropEvent>>({
      crop: {
        type: 'alfalfa',
        classification: 'perennial',
        plantingDate: '01/01/2000',
        soilOrCropDisturbanceEvents: [],
        fertilizerEvents: [],
        organicMatterEvents: [],
        irrigationEvents: [],
        limingEvents: null,
        grazingEvents: null,
        burningEvent: null,
        name: null,
        harvestEvents: [],
      },
    });
  });
});

describe('extractCrops', () => {
  it('will extract the crops', () => {
    expect(
      extractCrops({
        cropList: ggitInputData.Cropland[0].CropScenario[0].CropYear[0].Crop,
      })
    ).toStrictEqual<ReturnType<typeof extractCrops>>({
      crops: v3Data.fields[0].cropYears[0].crops,
    });
  });
});

describe('extractCropYears', () => {
  it('will extract the crop years', () => {
    expect(
      extractCropYears({
        currentCropScenario: {
          '@Name': 'Current',
          CropYear: [
            {
              '@Year': 2001,
              Crop: [],
            },
          ],
        },
        futureCropScenario: {
          '@Name': 'Future',
          CropYear: [
            {
              '@Year': 2020,
              Crop: [],
            },
          ],
        },
      })
    ).toStrictEqual<ReturnType<typeof extractCropYears>>({
      cropYears: [
        {
          crops: ([] as unknown) as any,
          plantingYear: 2001,
        },
        {
          crops: [],
          plantingYear: 2020,
        },
      ],
    });
  });
});

describe('extractCroplandsAndScenarios', () => {
  it('will extract the croplands and scenarios', () => {
    const cropland: Input.Cropland = {
      '@Name': 'project name|field name|1|2|2021-03-09T16:52:15.223Z|120|0',
      CRP: null,
      CRPEndYear: [],
      CRPStartYear: [],
      CRPType: null,
      CropScenario: [
        { '@Name': 'Current', CropYear: [{ '@Year': 2000, Crop: [] }] },
        { '@Name': 'Future', CropYear: [{ '@Year': 2010, Crop: [] }] },
      ],
      GEOM: {
        '#text':
          'polygon((-102.0256 41.1624, -102.02423 41.1631, -102.0225 41.1635, -102.0261 41.161, -102.0256 41.1624))',
        '@AREA': 120,
        '@SRID': '4326',
      },
      PostCRPManagement: [],
      PostCRPTillage: [],
      'Pre-1980': 'irrigation (pre 1980s)',
      PreCRPManagement: [],
      PreCRPTillage: [],
      'Year1980-2000': null,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Year1980-2000_Tillage': null,
    };
    expect(
      extractCroplandsAndScenarios({
        croplands: [cropland],
      })
    ).toStrictEqual<ReturnType<typeof extractCroplandsAndScenarios>>({
      cropScenarios: [cropland.CropScenario[0], cropland.CropScenario[1]],
      cropland,
      croplands: [cropland],
      metadata: 'project name|field name|1|2|2021-03-09T16:52:15.223Z|120|0',
    });
  });
});

describe('shiftCropsTaggedAsContinueFromPreviousYear', () => {
  it('will shift the crops tagged as continue from previous year into the relevant planting year', () => {
    expect(
      shiftCropsTaggedAsContinueFromPreviousYear({
        unadjustedCropScenarios: [
          {
            '@Name': 'Current',
            CropYear: [
              {
                '@Year': 2000,
                Crop: [
                  {
                    '@CropNumber': 1,
                    CropName: 'soybean',
                    PlantingDate: '04/20/2000',
                    ContinueFromPreviousYear: 'n',
                    HarvestList: {
                      HarvestEvent: [
                        {
                          HarvestDate: '09/14/2000',
                          Grain: 'yes',
                          yield: 38.0,
                          StrawStoverHayRemoval: 0,
                        },
                      ],
                    },
                    TillageList: {
                      TillageEvent: [
                        {
                          TillageDate: '04/20/2000',
                          TillageType: 'no tillage',
                        },
                      ],
                    },
                    NApplicationList: {},
                    OMADApplicationList: {},
                    IrrigationList: {},
                    BurnEvent: {
                      BurnTime: 'no burning',
                    },
                    LimingEvent: {},
                    GrazingList: {},
                  },
                ],
              },
              {
                '@Year': 2001,
                Crop: [
                  {
                    '@CropNumber': 1,
                    CropName: 'corn',
                    PlantingDate: '04/20/2001',
                    ContinueFromPreviousYear: 'n',
                    HarvestList: {
                      HarvestEvent: [
                        {
                          HarvestDate: '09/14/2001',
                          Grain: 'yes',
                          yield: 38.0,
                          StrawStoverHayRemoval: 0,
                        },
                      ],
                    },
                    TillageList: {
                      TillageEvent: [
                        {
                          TillageDate: '04/20/2001',
                          TillageType: 'no tillage',
                        },
                      ],
                    },
                    NApplicationList: {},
                    OMADApplicationList: {},
                    IrrigationList: {},
                    BurnEvent: {
                      BurnTime: 'no burning',
                    },
                    LimingEvent: {},
                    GrazingList: {},
                  },
                ],
              },
              {
                '@Year': 2002,
                Crop: [
                  {
                    '@CropNumber': 1,
                    CropName: 'corn',
                    ContinueFromPreviousYear: 'y',
                    HarvestList: {
                      HarvestEvent: [
                        {
                          HarvestDate: '09/14/2002',
                          Grain: 'yes',
                          yield: 38.0,
                          StrawStoverHayRemoval: 0,
                        },
                      ],
                    },
                    TillageList: {
                      TillageEvent: [
                        {
                          TillageDate: '04/20/2002',
                          TillageType: 'no tillage',
                        },
                      ],
                    },
                    NApplicationList: {},
                    OMADApplicationList: {},
                    IrrigationList: {},
                    BurnEvent: {
                      BurnTime: 'no burning',
                    },
                    LimingEvent: {},
                    GrazingList: {},
                  },
                ],
              },
              {
                '@Year': 2003,
                Crop: [
                  {
                    '@CropNumber': 1,
                    CropName: 'soybean',
                    PlantingDate: '04/20/2003',
                    ContinueFromPreviousYear: 'n',
                    HarvestList: {
                      HarvestEvent: [
                        {
                          HarvestDate: '09/14/2003',
                          Grain: 'yes',
                          yield: 38.0,
                          StrawStoverHayRemoval: 0,
                        },
                      ],
                    },
                    TillageList: {
                      TillageEvent: [
                        {
                          TillageDate: '04/20/2003',
                          TillageType: 'no tillage',
                        },
                      ],
                    },
                    NApplicationList: {},
                    OMADApplicationList: {},
                    IrrigationList: {},
                    BurnEvent: {
                      BurnTime: 'no burning',
                    },
                    LimingEvent: {},
                    GrazingList: {},
                  },
                ],
              },
            ],
          },
          {
            '@Name': 'Future',
            CropYear: [
              {
                '@Year': 2004,
                Crop: [
                  {
                    '@CropNumber': 1,
                    CropName: 'soybean',
                    ContinueFromPreviousYear: 'y',
                    HarvestList: {
                      HarvestEvent: [
                        {
                          HarvestDate: '09/14/2004',
                          Grain: 'yes',
                          yield: 38.0,
                          StrawStoverHayRemoval: 0,
                        },
                      ],
                    },
                    TillageList: {
                      TillageEvent: [
                        {
                          TillageDate: '04/20/2004',
                          TillageType: 'no tillage',
                        },
                      ],
                    },
                    NApplicationList: {},
                    OMADApplicationList: {},
                    IrrigationList: {},
                    BurnEvent: {
                      BurnTime: 'no burning',
                    },
                    LimingEvent: {},
                    GrazingList: {},
                  },
                ],
              },
            ],
          },
        ],
      })
    ).toStrictEqual<
      ReturnType<typeof shiftCropsTaggedAsContinueFromPreviousYear>
    >({
      cropScenarios: [
        {
          '@Name': 'Current',
          CropYear: [
            {
              '@Year': 2000,
              Crop: [
                {
                  '@CropNumber': 1,
                  BurnEvent: { BurnTime: 'no burning' },
                  ContinueFromPreviousYear: 'n',
                  CropName: 'soybean',
                  GrazingList: {},
                  HarvestList: {
                    HarvestEvent: [
                      {
                        Grain: 'yes',
                        HarvestDate: '09/14/2000',
                        StrawStoverHayRemoval: 0,
                        yield: 38,
                      },
                    ],
                  },
                  IrrigationList: {},
                  LimingEvent: {},
                  NApplicationList: {},
                  OMADApplicationList: {},
                  PlantingDate: '04/20/2000',
                  TillageList: {
                    TillageEvent: [
                      { TillageDate: '04/20/2000', TillageType: 'no tillage' },
                    ],
                  },
                },
              ],
            },
            {
              '@Year': 2001,
              Crop: [
                {
                  '@CropNumber': 1,
                  BurnEvent: { BurnTime: 'no burning' },
                  ContinueFromPreviousYear: 'n',
                  CropName: 'corn',
                  GrazingList: {},
                  HarvestList: {
                    HarvestEvent: [
                      {
                        Grain: 'yes',
                        HarvestDate: '09/14/2001',
                        StrawStoverHayRemoval: 0,
                        yield: 38,
                      },
                      {
                        Grain: 'yes',
                        HarvestDate: '09/14/2002',
                        StrawStoverHayRemoval: 0,
                        yield: 38,
                      },
                    ],
                  },
                  IrrigationList: {},
                  LimingEvent: {},
                  NApplicationList: {},
                  OMADApplicationList: {},
                  PlantingDate: '04/20/2001',
                  TillageList: {
                    TillageEvent: [
                      { TillageDate: '04/20/2001', TillageType: 'no tillage' },
                      { TillageDate: '04/20/2002', TillageType: 'no tillage' },
                    ],
                  },
                },
              ],
            },
            { '@Year': 2002, Crop: [] },
            {
              '@Year': 2003,
              Crop: [
                {
                  '@CropNumber': 1,
                  BurnEvent: { BurnTime: 'no burning' },
                  ContinueFromPreviousYear: 'n',
                  CropName: 'soybean',
                  GrazingList: {},
                  HarvestList: {
                    HarvestEvent: [
                      {
                        Grain: 'yes',
                        HarvestDate: '09/14/2003',
                        StrawStoverHayRemoval: 0,
                        yield: 38,
                      },
                      {
                        Grain: 'yes',
                        HarvestDate: '09/14/2004',
                        StrawStoverHayRemoval: 0,
                        yield: 38,
                      },
                    ],
                  },
                  IrrigationList: {},
                  LimingEvent: {},
                  NApplicationList: {},
                  OMADApplicationList: {},
                  PlantingDate: '04/20/2003',
                  TillageList: {
                    TillageEvent: [
                      { TillageDate: '04/20/2003', TillageType: 'no tillage' },
                      { TillageDate: '04/20/2004', TillageType: 'no tillage' },
                    ],
                  },
                },
              ],
            },
          ],
        },
        { '@Name': 'Future', CropYear: [{ '@Year': 2004, Crop: [] }] },
      ],
    });
  });
});
