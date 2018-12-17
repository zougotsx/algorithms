import { reverseNumber } from './reverseNumber';
import { doesFuncExist } from '../doesFuncExist.test';

describe('reverseNumber', () => {
  doesFuncExist(reverseNumber);

  test('It takes a number and reverses it', () => {
    expect(reverseNumber(-91)).toBe(-19);
  });
});
