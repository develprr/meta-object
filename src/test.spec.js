import {assert, describe, it} from 'mocha';
import {getNestedObject} from './object/getNestedObject';
import {flatten} from './object/flatten';
import {sortAlphabeticallyByProperty, sortByProperty} from './array/sortByProperty';

describe('flatten', () => {
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
    const flatObject = flatten(deepObject);
    flatObject['user.kids.1'].should.equal('kim');
    flatObject['user.kids.2'].should.equal('jim');
    flatObject['user.address.streetAddress'].should.equal('Somestreet 1');
  });
});

describe('getNestedObject', () => {
  before(() => {

  });

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



describe('array', () => {

  let array;

  beforeEach(() => {

    array = [
      {
        "_id": 4,
        "_ownerId": 1,
        "name": "Spanish Basic Words",
        "description": "Essential Spanish vocabularies for beginners"
      },
      {
        "_id": 1,
        "_ownerId": 1,
        "name": "Trappistian Basics",
        "description": "Learn basics of the language spoken by our friends on Trappist 1e"
      },
      {
        "_id": 3,
        "_ownerId": 1,
        "name": "Learn Tagalog with Forrest",
        "description": "Tagalog language basic words and phrases taken from Forrest Gump movie"
      },
      {
        "_id": 6,
        "_ownerId": 1,
        "name": "Spanish Intermediate Vocabularies",
        "description": "Useful intermediate vocabularies"
      },
      {
        "_id": 2,
        "_ownerId": 1,
        "name": "Spanish Conversational Phrases",
        "description": "Good packet with useful examples"
      },
      {
        "_id": 5,
        "_ownerId": 1,
        "name": "Spanish Advanced Sentences",
        "description": "Learn to master Spanish with advanced phrases and sentences"
      },
    ];
  });


  describe('sortByProperty', () => {

    it('should sort alphabetically ascending by name property', () => {
      const resultArray = sortByProperty(array, 'name', 'asc');
      resultArray.shift().name.should.equal('Learn Tagalog with Forrest');
      resultArray.pop().name.should.equal('Trappistian Basics');
    });

    it('should sort alphabetically descending by name property', () => {
      const resultArray = sortByProperty(array, 'name', 'desc');
      resultArray.shift().name.should.equal('Trappistian Basics');
      resultArray.pop().name.should.equal('Learn Tagalog with Forrest');
    });

    it('should sort numerically ascending by _id property', () => {
      const resultArray = sortByProperty(array, '_id', 'asc');
      resultArray.shift()._id.should.equal(1);
      resultArray.pop()._id.should.equal(6);
    });

    it('should sort numerically descending by _id property', () => {
      const resultArray = sortByProperty(array, '_id', 'desc');
      resultArray.shift()._id.should.equal(6);
      resultArray.pop()._id.should.equal(1);
    });

  });
});
