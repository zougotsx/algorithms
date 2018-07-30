import { flattenArray, reduceArray } from './flattenArray';

describe('flattenArray', () => {
  test('To see if the function exists', () => {
    expect(flattenArray).toBeDefined();
  });

  test('Takes a nested array of subarrays and flattens its contents into one array', () => {
    expect(flattenArray([1, [2, 3, [4, 5]], [6, 7]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]);
  });
});

describe('reduceArray', () => {
  test('To see if the function exists', () => {
    expect(reduceArray).toBeDefined();
  });

  test('Takes a nested array of subarrays and reduces it into one array', () => {
    expect(reduceArray([1, [2, 3], [4, 5], [6, 7]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]);
  });
});
