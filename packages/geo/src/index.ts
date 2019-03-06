const turf = require('@turf/turf');
const fs = require('fs');
const path = require('path');
const Wkt = require('wicket');

const writeFile = ({ outputFile, geoCollection }) => {
  console.log(
    '\nThe GeoJSON to be written to the output file is:\n\n',
    JSON.stringify(geoCollection)
  );
  fs.writeFile(outputFile, JSON.stringify(geoCollection), error =>
    error ? console.log(error) : null
  );
};

const createGeoJSON = coordinates => {
  const geometry = {
    type: 'Polygon',
    coordinates: [coordinates],
  };
  const feature = turf.feature(geometry);
  return feature;
};

const getWKT = ({ geometry }) => {
  const wkt = new Wkt.Wkt();
  wkt.fromObject(geometry);
  return wkt.write();
};

const drawShortestPathBetweenPolys = ({ coordinates }) => {
  return turf.multiPolygon([coordinates]).geometry.coordinates.map(polygons => {
    const [poly1, poly2] = polygons;
    let shortest1 = 100000000000000000000;
    let shortest2 = turf.distance(poly1[0], poly2[0]);
    let closest1 = [poly1[0], poly2[0]];
    let closest2 = [poly1[0], poly2[0]];
    let closestIndex1 = 0;
    let closestIndex2 = 0;
    poly1.map((coordinates, i) => {
      for (let j = 0; j < poly2.length; j++) {
        const distance = turf.distance(poly1[i], poly2[j]);
        if (distance < shortest1) {
          closest1 = coordinates;
          shortest1 = distance;
          closestIndex1 = i;
        }
      }
    });
    console.log('\nThe closest point in polygon 1 to polygon 2 is', closest1);
    poly2.map((coordinates, i) => {
      for (let j = 0; j < poly1.length; j++) {
        const distance = turf.distance(poly1[j], poly2[i]);
        if (distance < shortest2) {
          closest2 = coordinates;
          shortest2 = distance;
          closestIndex2 = i;
        }
      }
    });
    console.log('The closest point in polygon 1 to polygon 2 is', closest2);
    const poly1End = poly1.splice(0, closestIndex1);
    const newPoly1 = poly1
      .concat(poly1End)
      .concat([[closest1[0] + 0.00000001, closest1[1]]]);
    const poly2End = poly2.splice(0, closestIndex2).concat([closest2]);
    let poly2FirstCoord = poly2.shift();
    poly2FirstCoord = [poly2FirstCoord[0] + 0.00000001, poly2FirstCoord[1]];
    const newPoly2 = [poly2FirstCoord]
      .concat(poly2)
      .concat(poly2End)
      .concat([closest1]);
    const newGeo = [...newPoly1, ...newPoly2];
    console.log(
      'Polygons redrawn with connection between',
      closest1,
      'and',
      closest2
    );

    const collection = createGeoJSON(newGeo);
    return collection;
  });
};

const exec = (input = './test.geojson', output = './out.geojson') => {
  const {
    features: [
      {
        geometry,
        geometry: { coordinates },
      },
    ],
  } = JSON.parse(fs.readFileSync(path.join(__dirname, input), 'utf8'));
  console.log(coordinates);
  const [geoCollection] = drawShortestPathBetweenPolys({ coordinates });
  writeFile({ outputFile: path.join(__dirname, output), geoCollection });
  const wkt = getWKT({ geometry });
  console.log('\n\nThe WKT is:\n\n', JSON.stringify(wkt), '\n');
};
exec();
