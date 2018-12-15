/*

Testing out practical usage of dependencies in reusable libraries.

Author: Heikki Kupiainen / Metamatic.net
License: Apache 2.0
*/

import {flattenObject} from '@metamatic.net/flatten-object';

export const delegateFlattenObject = (object) => flattenObject(object);
