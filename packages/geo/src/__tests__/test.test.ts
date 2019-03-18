import { getType } from '@turf/invariant';
import { randomPolygon } from '@turf/random';
import { multiPolygonToPolygon } from '../index';

const createRandomGeoJson = () => {
  const poly1 = randomPolygon(1, {
    num_vertices: Math.floor(Math.random() * 6) + 4,
  }).features[0].geometry.coordinates[0];
  const poly2 = randomPolygon(1, {
    num_vertices: Math.floor(Math.random() * 6) + 4,
  }).features[0].geometry.coordinates[0];
  const geoJson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'MultiPolygon',
          coordinates: [poly1, poly2],
        },
      },
    ],
  };
  return { geoJson, poly1, poly2 };
};

describe('multiPolygonToPolygon', () => {
  let redrawnPolygon, geoJson, poly1, poly2;
  beforeAll(() => {
    ({ geoJson, poly1, poly2 } = createRandomGeoJson());
    redrawnPolygon = multiPolygonToPolygon(<any>(<unknown>geoJson));
  });
  it('converts a multi-polygon with two disconnected polygons into a singular polygon with a short path drawn between them', () => {
    expect(redrawnPolygon).toEqual(
      expect.objectContaining({
        geometry: {
          coordinates: expect.arrayContaining([
            expect.arrayContaining([...poly1, ...poly2]),
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
  });
});
