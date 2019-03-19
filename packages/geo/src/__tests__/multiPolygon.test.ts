import * as turf from '@turf/turf';
import { getType } from '@turf/invariant';
import { randomPolygon } from '@turf/random';
import * as jsts from 'jsts';
import * as wicket from 'wicket';
import { multiPolygonToPolygon } from '../index';

const createRandomPolygon = ({ bbox }) => {
  let polygon;
  do {
    polygon = randomPolygon(1, {
      num_vertices: Math.floor(Math.random() * 0) + 5,
      bbox,
      max_radial_length: 0.2,
    });
  } while (
    // turf has a weird quirk that will create invalid
    // polygons with kinks (edges that intersect its interior;
    // this will keep creating random polygons until that is not the case)
    turf.kinks(polygon.features[0]).features.length
  );
  return { polygon, coords: polygon.features[0].geometry.coordinates[0] };
};

const createRandomGeoJson = boundingBoxes => {
  const polygons = boundingBoxes.map(
    bbox =>
      createRandomPolygon({
        bbox,
      }).coords
  );
  const geoJson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'MultiPolygon',
          coordinates: [...polygons],
        },
      },
    ],
  };
  return { geoJson, polygons };
};

describe('multiPolygonToPolygon', () => {
  describe('with three polygons where two are already connected', () => {
    let redrawnPolygon, geoJson, polygons;
    beforeAll(() => {
      geoJson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [-88.66682547885524, 30.680475146163573],
                  [-88.66672547885524, 30.680375146163573],
                  [-88.65974499607994, 30.63134884716672],
                  [-88.60547148059378, 30.63313408015237],
                  [-88.66631653034675, 30.464263843782767],
                  [-88.89350397442742, 30.573235078342677],
                  [-88.66692547885525, 30.680375146163573],
                  [-88.81873758496465, 36.24278883597018],
                  [-88.76413629362534, 36.38849881457336],
                  [-88.49898755899702, 36.37747711823393],
                  [-88.66911206170387, 36.35952940701245],
                  [-88.62445917617178, 36.26712446278727],
                  [-88.81863758496465, 36.242888835970184],
                  [-88.66682547885524, 30.680475146163573],
                ],
                [
                  [-88.02108313769344, 33.14912596285873],
                  [-88.1428269234894, 32.979956784848085],
                  [-88.22652466699822, 33.14717148800488],
                  [-88.20853418938715, 33.17756201383905],
                  [-88.22682713068961, 33.33073477066046],
                  [-88.02108313769344, 33.14912596285873],
                ],
              ],
            },
          },
        ],
      };
      redrawnPolygon = multiPolygonToPolygon(geoJson);
    });
    it('will be able to create a valid WKT', () => {
      const reader = new jsts.io.WKTReader();
      const wkt = new wicket.Wkt();
      expect(
        reader.read(wkt.fromObject(redrawnPolygon.geometry).write()).isValid()
      ).toBe(true);
    });
  });

  describe('with three polygons', () => {
    let redrawnPolygon, geoJson, polygons;
    beforeAll(() => {
      geoJson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [-88.981079479032, 30.23963642770053],
                  [-88.96099244597853, 30.209531717335803],
                  [-89.0019412642359, 30.192103259363353],
                  [-89.07242493723217, 30.227155289116606],
                  [-89.07496200166628, 30.405352180898852],
                  [-88.981079479032, 30.23963642770053],
                ],
                [
                  [-88.67678616436235, 36.476380334502345],
                  [-88.87431646997224, 36.25780157396247],
                  [-88.91210453823011, 36.429506721930366],
                  [-88.86500646570072, 36.49592352403763],
                  [-88.84526334184486, 36.61441170548088],
                  [-88.67678616436235, 36.476380334502345],
                ],
                [
                  [-88.1977871658261, 33.4894111071359],
                  [-88.32366047142912, 33.36133614409829],
                  [-88.35819851613815, 33.209560683281026],
                  [-88.3685419990769, 33.28460455658924],
                  [-88.41533904955256, 33.30352518541223],
                  [-88.1977871658261, 33.4894111071359],
                ],
              ],
            },
          },
        ],
      };
      redrawnPolygon = multiPolygonToPolygon(geoJson);
    });
    it('will be able to create a valid WKT', () => {
      console.log(JSON.stringify(redrawnPolygon));
      const reader = new jsts.io.WKTReader();
      const wkt = new wicket.Wkt();
      expect(
        reader.read(wkt.fromObject(redrawnPolygon.geometry).write()).isValid()
      ).toBe(true);
    });
  });

  describe('random polygons', () => {
    let redrawnPolygon, geoJson, polygons;
    beforeAll(() => {
      ({ geoJson, polygons } = createRandomGeoJson([
        [-89, 30, -88.5, 31.5],
        [-89, 36, -88.5, 36.9],
        [-88.5, 33, -88.0, 33.5],
      ]));
      redrawnPolygon = multiPolygonToPolygon(geoJson);
    });
    it('converts a multi-polygon with two disconnected polygons into a singular polygon with a short path drawn between them', () => {
      expect(redrawnPolygon).toEqual(
        expect.objectContaining({
          geometry: {
            coordinates: expect.arrayContaining([
              expect.arrayContaining([...polygons[0], ...polygons[1]]),
            ]),
            type: 'Polygon',
          },
          properties: {},
          type: 'Feature',
        })
      );
    });
    describe('after converting a multi-polygon to a polygon', () => {
      it('will be a polygon', () => {
        expect(getType(redrawnPolygon)).toBe('Polygon');
      });
      it('will be able to create a valid WKT', () => {
        console.log(JSON.stringify(redrawnPolygon));
        const reader = new jsts.io.WKTReader();
        const wkt = new wicket.Wkt();
        expect(
          reader.read(wkt.fromObject(redrawnPolygon.geometry).write()).isValid()
        ).toBe(true);
      });
    });
  });

  describe('with two polygons', () => {
    let redrawnPolygon, geoJson, polygons;
    beforeAll(() => {
      geoJson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [-89.07496200166628, 30.405352180898852],
                  [-88.981079479032, 30.23963642770053],
                  [-88.96099244597853, 30.209531717335803],
                  [-89.0019412642359, 30.192103259363353],
                  [-89.07242493723217, 30.227155289116606],
                  [-89.07516200166629, 30.405152180898853],
                  [-88.87441646997225, 36.257701573962464],
                  [-88.91210453823011, 36.429506721930366],
                  [-88.86500646570072, 36.49592352403763],
                  [-88.84526334184486, 36.61441170548088],
                  [-88.67678616436235, 36.476380334502345],
                  [-88.87431646997224, 36.25780157396247],
                  [-89.07496200166628, 30.405352180898852],
                ],
                [
                  [-88.1977871658261, 33.4894111071359],
                  [-88.32366047142912, 33.36133614409829],
                  [-88.35819851613815, 33.209560683281026],
                  [-88.3685419990769, 33.28460455658924],
                  [-88.41533904955256, 33.30352518541223],
                  [-88.1977871658261, 33.4894111071359],
                ],
              ],
            },
          },
        ],
      };
      redrawnPolygon = multiPolygonToPolygon(geoJson);
    });
    it('will be able to create a valid WKT', () => {
      console.log(JSON.stringify(redrawnPolygon));
      const reader = new jsts.io.WKTReader();
      const wkt = new wicket.Wkt();
      // console.log(wkt.fromObject(redrawnPolygon.geometry).write());
      expect(
        reader
          .read(
            wkt.fromObject(redrawnPolygon.geometry).write()
            // 'POLYGON((-88.87431646997224 36.25760157396246,-89.07506200166628 30.405452180898852,-88.981079479032 30.23963642770053,-88.96099244597853 30.209531717335803,-89.0019412642359 30.192103259363353,-89.07242493723217 30.227155289116606,-89.07496200166628 30.405352180898852,-89.07496200166628 30.405352180898852,-88.87441646997225 36.257701573962464,-88.91210453823011 36.429506721930366,-88.86500646570072 36.49592352403763,-88.84526334184486 36.61441170548088,-88.67678616436235 36.476380334502345,-88.87431646997224 36.25780157396247,-88.87421646997224 36.25750157396246,-88.1978871658261 33.4893111071359,-88.32366047142912 33.36133614409829,-88.35819851613815 33.209560683281026,-88.3685419990769 33.28460455658924,-88.41533904955256 33.30352518541223,-88.1977871658261 33.4894111071359,-88.87431646997224 36.25760157396246))'
          )
          .isValid()
      ).toBe(true);
    });
  });
});
