import {makeObjectToFlat} from '@metamatic.net/flatten-object';

export const flattenObject = (object) => makeObjectToFlat(object, '', {});
