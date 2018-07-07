import { palindrome } from './palindrome';

describe('palindrome', () => {
  test('To see if the function exists', () => {
    expect(palindrome).toBeDefined();
  });

  test('Returns true if the string matches the reversed string', () => {
    expect(palindrome('racecar')).toBe(true);
  });

  test('Returns false if the string does not match reversed string', () => {
    expect(palindrome('Hello')).toBe(false);
  });
});
