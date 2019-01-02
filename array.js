'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sortAlphabeticallyByProperty = function sortAlphabeticallyByProperty(array, property, sortDirection) {
  return array.sort(function (a, b) {
    var sortDirectionSwapper = sortDirection === 'desc' ? -1 : 1;
    var nameA = a[property].toLowerCase();
    var nameB = b[property].toLowerCase();
    if (nameA < nameB) {
      return -1 * sortDirectionSwapper;
    }
    if (nameA > nameB) {
      return 1 * sortDirectionSwapper;
    }
    return 0;
  });
};
exports.sortAlphabeticallyByProperty = sortAlphabeticallyByProperty;
//# sourceMappingURL=sortAlphabeticallyByProperty.js.map
