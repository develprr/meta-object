export const sortAlphabeticallyByProperty = (array, property, sortDirection) => array.sort((a, b) => {
  const sortDirectionSwapper = sortDirection === 'desc' ? -1 : 1;
  const nameA = a[property].toLowerCase();
  const nameB = b[property].toLowerCase();
  if (nameA < nameB) {
    return -1 * sortDirectionSwapper;
  }
  if (nameA > nameB) {
    return 1 * sortDirectionSwapper;
  }
  return 0;
});
