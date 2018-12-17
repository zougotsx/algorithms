import { flattenThis, reduceArray } from './flattenArray';
import { doesFuncExist } from '../doesFuncExist.test';

describe('flattenArray', () => {
  doesFuncExist(flattenThis);

  test('Takes a nested array of subarrays and flattens its contents into one array', () => {
    expect(flattenThis([1, [2, 3, [4, 5]], [6, 7]])).toEqual([
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
  doesFuncExist(reduceArray);

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
