import type { V1CropYear, V1Data } from '../index';

export const sanitizeV1Data = ({
  project,
}: {
  project: V1Data;
}): { sanitizedProject: V1Data } => {
  const sanitizedProject = project;
  project.projects.forEach((p, i) =>
    p.fieldSets.forEach((f, j) =>
      f.cropYears.forEach((cy, k) => {
        sanitizedProject.projects[i].fieldSets[j].cropYears[k] = JSON.parse(
          JSON.stringify(cy, (key, value) => {
            return value?.toLowerCase?.() ?? value;
          })
        ) as V1CropYear;
      })
    )
  );
  return { sanitizedProject };
};
