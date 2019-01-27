const insertionSortOnSteroids = require('./insertionSortOnSteroids.js');

describe('initilizeArrayWithDummyValue', () => {
  it('must return the array with dummy values', () => {
    expect(insertionSortOnSteroids.initilizeArrayWithDummyValue(new Array(4))).toEqual([-1, -1, -1, -1]);
  });
  it('should not return anything other than an Array', () => {
    expect(insertionSortOnSteroids.initilizeArrayWithDummyValue(new Array(2))).not.toEqual('');
  });
});


describe('validating input', () => {
  it('should return false if any value is not a positive integer', () => {
    expect(insertionSortOnSteroids.validatingInput([1, -2])).toEqual(false);
  });
  it('should return true when all values in the array are positive', () => {
    expect(insertionSortOnSteroids.validatingInput([1, 2])).toEqual(true);
  });
  it('should return invalid input when no input is provided', () => {
    expect(insertionSortOnSteroids.validatingInput([])).toEqual('Invalid input!');
  });
});

describe('sortTheArray', () => {
  it('should return the sorted circular array when every element is either greater or smaller than the existing elements', () => {
    expect(insertionSortOnSteroids.sortTheArray([4, 3, 2, 1])).toEqual([4, 1, 2, 3]);
  });
  it('should return the array of same length as of input', () => {
    expect(insertionSortOnSteroids.sortTheArray([5, 3, 2, 1]).length).toEqual(4);
  });
});
