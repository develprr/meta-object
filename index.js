const flattenObject = require('./lib/flattenObject.js');
const getNestedObject = require('./lib/getNestedObject.js');
module.exports = Object.assign(flattenObject, getNestedObject);
