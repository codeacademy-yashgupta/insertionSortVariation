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
