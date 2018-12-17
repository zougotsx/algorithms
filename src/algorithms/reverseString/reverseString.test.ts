import { reverseString } from './reverseString';
import { doesFuncExist } from '../doesFuncExist.test';

describe('reverseString', () => {
  doesFuncExist(reverseString);

  test('Takes a string and reverses it', () => {
    expect(reverseString('Hello')).toEqual('olleH');
  });
});
