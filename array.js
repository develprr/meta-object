'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sortAlphabetically = function sortAlphabetically(array, column) {
  return array.sort(function (a, b) {
    var sortDirectionSwapper = column.sortDirection === 'desc' ? -1 : 1;
    var nameA = a[column.id].toLowerCase();
    var nameB = b[column.id].toLowerCase();
    if (nameA < nameB) {
      return -1 * sortDirectionSwapper;
    }
    if (nameA > nameB) {
      return 1 * sortDirectionSwapper;
    }
    return 0;
  });
};
exports.sortAlphabetically = sortAlphabetically;
//# sourceMappingURL=sortAlphabeticallyByProperty.js.map
