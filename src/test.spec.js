import {assert, describe, it} from 'mocha';
import {delegateFlattenObject} from './meta-object';
import {getNestedObject} from './getNestedObject';
import {flattenObject} from './flattenObject';

describe('flattenObject', () => {

  it('should convert deeply nested object to flat object', () => {
    const deepObject = {
      user: {
        username: 'jondoe',
        kids: ['tim', 'kim', 'jim'],
        address: {
          streetAddress: 'Somestreet 1'
        }
      }
    }
    const flatObject = flattenObject(deepObject);
    flatObject['user.kids.1'].should.equal('kim');
    flatObject['user.kids.2'].should.equal('jim');
    flatObject['user.address.streetAddress'].should.equal('Somestreet 1');
  });
});

describe('getNestedObject', () => {
  it('should retrieve a nested object from inside another object', () => {
    const deepObject = {
      user: {
        username: 'jondoe',
        kids: ['tim', 'kim', 'jim'],
        address: {
          streetAddress: 'Somestreet 1'
        }
      }
    }
    const nestedObject = getNestedObject(deepObject, 'user.address');
    nestedObject.streetAddress.should.equal('Somestreet 1');
  });
});

