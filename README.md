# meta-object

A general purpose utility library to perform useful conversions to data objects.

## Installation

```js
npm i @metamatic.net/meta-object
```

## Summary

* [flattenObject](#flattenobject)
* [getNestedObject](#getnestedobject)


## Usage

### flattenObject 

```js
import {flattenObject} from '@metamatic.net/meta-object';

const deepObject = {
  user: {
    username: 'jondoe',
    kids: ['tim', 'kim', 'jim'],
    address: {
      streetAddress: 'Somestreet 1'
    }
  }
};

const flatObject = flattenObject(deepObject);
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
## License 

Apache 2.0

## Author 

[Heikki Kupiainen](https://www.linkedin.com/in/heikki-kupiainen-oppikone) / [metamatic.net](http://www.metamatic.net)


