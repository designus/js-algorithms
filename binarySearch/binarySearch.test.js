const findNumPos = require('./binarySearch');

describe('BinarySearch', () => {
  it('findNumberPosition', () => {
    expect(findNumPos(5, [1,2,4,5,6,7,8], 0)).toBe(3);
  })
});