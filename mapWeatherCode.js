export const Icon_map = new Map();

addMapping([0], "sun");
addMapping([1, 2, 3], "cloud-sun");
addMapping([45, 48], "smog");
addMapping([51, 53, 55], "cloud");
addMapping([71, 73, 75, 77, 85, 86], "snowflakes");
addMapping([56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "cloud-showers-heavy");
addMapping([95, 96, 99], "cloud-bolt");

function addMapping(values, icon) {
  values.forEach((value) => {
    Icon_map.set(value, icon);
  });
}
