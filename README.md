# meta-object

A general purpose utility library to perform useful conversions to data objects.

## Installation

```js
npm i @metamatic.net/meta-object
```

## Summary

* [flatten](#flatten)
* [getNestedObject](#getnestedobject)


## Object conversions

### flatten 

```js
import {flatten} from '@metamatic.net/meta-object';

const deepObject = {
  user: {
    username: 'jondoe',
    kids: ['tim', 'kim', 'jim'],
    address: {
      streetAddress: 'Somestreet 1'
    }
  }
};

const flatObject = flatten(deepObject);
```

The flattened object: 
```js
{ 
  'user.username': 'jondoe',
  'user.kids.0': 'tim',
  'user.kids.1': 'kim',
  'user.kids.2': 'jim',
  'user.address.streetAddress': 'Somestreet 1' 
}
```

### getNestedObject 

definition:
* getNestedObject(object, string)

params:
* object: any associative array
* string: path to nested object separated with dots

returns:
* object: an associative array from inside the parent object

example:

```js
import {getNestedObject} from '@metamatic.net/meta-object';

const deepObject = {
  user: {
    username: 'jondoe',
    kids: ['tim', 'kim', 'jim'],
    address: {
      streetAddress: 'Somestreet 1'
    }
  }
};

const streetAddress = getNestedObject(deepObject, 'user.adderss.streetAddress');
```

## Array Conversions

### sortByProperty

definition:
* sortByProperty(dataArray, property, sortDirection)

params:
* dataArray: array -> array of objects
* property: string -> string that defines by which property objects in array are sorted 
* sortDirection: string -> string that defins sort direction. Can have only value 'asc' or 'desc'

returns:
* array: sorted array

example:

```js
import {sortByProperty} from '@metamatic.net/meta-object/array';

const array = [
  {
    "name": "Spanish Basic Words",
    "description": "Essential Spanish vocabularies for beginners",
    "count": 30
  },
  {
    "name": "Trappistian Basics",
    "description": "Learn basics of the language spoken by our friends on Trappist 1e",
    "count": 15
  }
];

const arrayDescendingByAlphabeticalProperty = sortByProperty(array, 'description', 'desc');
const arrayAscendingByAlphabeticalProperty = sortByProperty(array, 'description', 'asc');

const arrayDescendingByNumericProperty = sortByProperty(array, 'count', 'desc');
const arrayAscendingByNumericProperty = sortByProperty(array, 'count', 'asc');

```

## License 

Apache 2.0

## Author 

[Heikki Kupiainen](https://www.linkedin.com/in/heikki-kupiainen-oppikone) / [metamatic.net](http://www.metamatic.net)


