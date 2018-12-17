"use strict";

/*
A library for general purpose Metamatic object conversions

Author: Heikki Kupiainen / Metamatic.net
License: Apache 2.0
*/
//# sourceMappingURL=_note.js.map

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var isObject = function isObject(item) {
  return item && typeof item === 'object';
};

var isArray = function isArray(item) {
  return item && item instanceof Array;
};

var isContainer = function isContainer(item) {
  return item && (typeof item === 'object' || item instanceof Array);
};

var arrayToPathmap = function arrayToPathmap(array, evolvingPath, pathmap) {
  return array.forEach(function (arrayItem, index) {
    var newPathGeneration = evolvingPath + '[' + index + ']';
    objectToPathmap(arrayItem, newPathGeneration, pathmap);
  });
};

var objectToPathmap = function objectToPathmap(object, evolvingPath, pathmap) {
  pathmap = pathmap || {};
  evolvingPath = evolvingPath || '';
  var keys = Object.keys(object);
  keys.forEach(function (key) {
    var value = object[key];
    var separator = evolvingPath.length > 0 ? '.' : '';
    var newPathGeneration = evolvingPath + separator + key;
    if (!isContainer(value)) {
      pathmap[newPathGeneration] = value;
      return pathmap;
    }
    if (isObject(value)) {
      return objectToPathmap(value, newPathGeneration, pathmap);
    }
    if (isArray(value)) {
      return arrayToPathmap(value, newPathGeneration, pathmap);
    }
  });
  return pathmap;
};

var flattenObject = function flattenObject(object) {
  return objectToPathmap(object, '', {});
};
exports.flattenObject = flattenObject;
//# sourceMappingURL=flattenObject.js.map

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var getContainerData = function getContainerData(_x, _x2) {
  var _again = true;

  _function: while (_again) {
    var container = _x,
        pathArray = _x2;
    _again = false;

    if (pathArray.length === 0) {
      return container;
    }
    var nextProp = pathArray.shift();
    var innerContainer = container[nextProp];
    if (innerContainer) {
      _x = innerContainer;
      _x2 = pathArray;
      _again = true;
      nextProp = innerContainer = undefined;
      continue _function;
    } else {
      return null;
    }
  }
};

var getNestedObject = function getNestedObject(object, nestedObjectPath) {
  if (!object) {
    return null;
  }
  var pathArray = nestedObjectPath.split('.');
  return getContainerData(object, pathArray);
};
exports.getNestedObject = getNestedObject;
//# sourceMappingURL=getNestedObject.js.map
