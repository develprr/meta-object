'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sortByProperty = function sortByProperty(array, property, sortDirection) {
  return array.sort(function (a, b) {
    var sortDirectionSwapper = sortDirection === 'desc' ? -1 : 1;
    var valueA = a[property];
    var valueB = b[property];
    if (valueA < valueB) {
      return -1 * sortDirectionSwapper;
    }
    if (valueA > valueB) {
      return 1 * sortDirectionSwapper;
    }
    return 0;
  });
};
exports.sortByProperty = sortByProperty;
//# sourceMappingURL=sortByProperty.js.map
