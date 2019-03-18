import * as turf from '@turf/turf';
import { getType } from '@turf/invariant';
import { randomPolygon } from '@turf/random';
import { multiPolygonToPolygon } from '../index';

// vertical poly test
// const geoJson = {
//   type: 'FeatureCollection',
//   features: [
//     {
//       type: 'Feature',
//       properties: {},
//       geometry: {
//         type: 'MultiPolygon',
//         coordinates: [
//           [
//             [-88.9201405865274, 30.96039815570841],
//             [-88.92423930428181, 30.916333114046935],
//             [-89.04607230985769, 30.920807534148008],
//             [-89.07016867720978, 30.962247844991765],
//             [-88.9201405865274, 30.96039815570841],
//           ],
//           [
//             [-88.7913169593782, 33.198751006041924],
//             [-88.84775490200774, 32.985736640198624],
//             [-88.84627052219702, 33.03248084008883],
//             [-89.01663814267641, 33.225629405253976],
//             [-88.7913169593782, 33.198751006041924],
//           ],
//         ],
//       },
//     },
//   ],
// };

const createRandomPolygon = ({ bbox }) => {
  let polygon;
  do {
    polygon = randomPolygon(1, {
      num_vertices: Math.floor(Math.random() * 20) + 8,
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

// describe('multiPolygonToPolygon', () => {
//   let redrawnPolygon, geoJson, polygons;
//   beforeAll(() => {
//     ({ geoJson, polygons } = createRandomGeoJson([
//       [-89, 36, -88.5, 36.9],
//       [-92, 37, -90.5, 38],
//       [-94, 36, -92.5, 36.9],
//       [-97, 36, -95.5, 36.9],
//       [-100, 36, -98.5, 36.9],
//       [-103, 36, -101.5, 36.9],
//       [-106, 36, -104.5, 36.9],
//     ]));
//     redrawnPolygon = multiPolygonToPolygon(<any>(<unknown>geoJson));
//   });
//   it('converts a multi-polygon with two disconnected polygons into a singular polygon with a short path drawn between them', () => {
//     expect(redrawnPolygon).toEqual(
//       expect.objectContaining({
//         geometry: {
//           coordinates: expect.arrayContaining([
//             expect.arrayContaining([...polygons[0], ...polygons[1]]),
//           ]),
//           type: 'Polygon',
//         },
//         properties: {},
//         type: 'Feature',
//       })
//     );
//   });
//   describe('after converting a multi-polygon to a polygon', () => {
//     it('will be a polygon', () => {
//       console.log(JSON.stringify(redrawnPolygon));
//       expect(getType(redrawnPolygon)).toBe('Polygon');
//     });
//   });
// });

describe('multiPolygonToPolygon', () => {
  let redrawnPolygon, geoJson, polygons;
  beforeAll(() => {
    ({ geoJson, polygons } = createRandomGeoJson([
      [-89, 30, -88.5, 31.5],
      [-89, 36, -88.5, 36.9],
      [-88.5, 33, -88.0, 33.5],
    ]));
    redrawnPolygon = multiPolygonToPolygon(<any>(<unknown>geoJson));
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
      console.log(JSON.stringify(redrawnPolygon));
      expect(getType(redrawnPolygon)).toBe('Polygon');
    });
  });
});
