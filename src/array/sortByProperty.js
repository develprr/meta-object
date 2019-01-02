export const sortByProperty = (array, property, sortDirection) => array.sort((a, b) => {
  const sortDirectionSwapper = sortDirection === 'desc' ? -1 : 1;
  const valueA = a[property];
  const valueB = b[property];
  if (valueA < valueB) {
    return -1 * sortDirectionSwapper;
  }
  if (valueA > valueB) {
    return 1 * sortDirectionSwapper;
  }
  return 0;
});
