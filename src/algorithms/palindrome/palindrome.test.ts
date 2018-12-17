import { palindrome } from './palindrome';
import { doesFuncExist } from '../doesFuncExist.test';

describe('palindrome', () => {
  doesFuncExist(palindrome);

  test('Returns true if the string matches the reversed string', () => {
    expect(palindrome('racecar')).toBe(true);
  });

  test('Returns false if the string does not match reversed string', () => {
    expect(palindrome('Hello')).toBe(false);
  });
});
