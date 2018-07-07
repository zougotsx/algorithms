import { anagrams } from './anagrams';

describe('anagrams', () => {
  test('Returns false if the keys length of Character Map A does not equal Character Map B', () => {
    expect(anagrams('Hello', 'lleh')).toBe(false);
  });

  test('Returns false if a character in Character Map A does not equal Character Map B', () => {
    expect(anagrams('a', 'b')).toBe(false);
  });

  test('Returns true if strings are anagrams of each other', () => {
    expect(anagrams('Hello', 'olleh')).toBe(true);
  });
});
