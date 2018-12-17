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

var _metamaticNetFlattenObject = require('@metamatic.net/flatten-object');

var flattenObject = function flattenObject(object) {
  return (0, _metamaticNetFlattenObject.makeObjectToFlat)(object, '', {});
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
