const isObject = (item) => item && (typeof item === 'object');

const isArray = (item) => item && item instanceof Array;

const isContainer = (item) => item && (typeof item === 'object' || item instanceof Array);

const arrayToPathmap = (array, evolvingPath, pathmap) => array.forEach((arrayItem, index) => {
  const newPathGeneration = evolvingPath + '[' + index + ']';
  objectToPathmap(arrayItem, newPathGeneration, pathmap);
});

const objectToPathmap = (object, evolvingPath, pathmap) => {
  pathmap = pathmap || {};
  evolvingPath = evolvingPath || '';
  const keys = Object.keys(object);
  keys.forEach(key => {
    const value = object[key];
    const separator = evolvingPath.length > 0 ? '.' : '';
    const newPathGeneration = evolvingPath + separator + key;
    if (!isContainer(value)) {
      pathmap[newPathGeneration] = value;
      return pathmap
    }
    if (isObject(value)) {
      return objectToPathmap(value, newPathGeneration, pathmap);
    }
    if (isArray(value)) {
      return arrayToPathmap(value, newPathGeneration, pathmap);
    }
  })
  return pathmap;
}

export const flattenObject = (object) => objectToPathmap(object, '', {});
