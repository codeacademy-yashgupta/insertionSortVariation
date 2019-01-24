const insertionSortOnSteroids = require('./insertionSortOnSteroids.js');

describe('initilizeArrayWithDummyValue', () => {
  it('must return the array with dummy values', () => {
    expect(insertionSortOnSteroids.initilizeArrayWithDummyValue(new Array(4))).toEqual([-1, -1, -1, -1]);
  });
  it('should not return anything other than an Array', () => {
    expect(insertionSortOnSteroids.initilizeArrayWithDummyValue(new Array(2))).not.toEqual('');
  });
});
