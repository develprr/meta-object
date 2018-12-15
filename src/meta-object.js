/*

A library for general purpose Metamatic object conversions

Author: Heikki Kupiainen / Metamatic.net
License: Apache 2.0
*/

const getContainerData = (container, pathArray) => {
  if (pathArray.length === 0) {
    return container;
  }
  let nextProp = pathArray.shift();
  const innerContainer = container[nextProp];
  return innerContainer ? getContainerData(innerContainer, pathArray) : null;
};

export const getNestedObject = (object, nestedObjectPath) => {
  if (!object) {
    return null;
  }
  const pathArray = nestedObjectPath.split('.');
  return getContainerData(object, pathArray);
};
