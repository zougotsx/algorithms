import { anagrams, anagramsSolTwo } from './anagrams';

describe('anagrams', () => {
  test('To see if the function exists', () => {
    expect(anagrams).toBeDefined();
  });

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

describe('anagramsSolTwo', () => {
  test('To see if the function exists', () => {
    expect(anagramsSolTwo).toBeDefined();
  });

  test('Returns false if strings are not anagrams of each other', () => {
    expect(anagramsSolTwo('goodbye', 'bye')).toBe(false);
  });

  test('Returns true if strings are anagrams of each other', () => {
    expect(anagramsSolTwo('HELLO!', 'hello')).toBe(true);
  });
});
