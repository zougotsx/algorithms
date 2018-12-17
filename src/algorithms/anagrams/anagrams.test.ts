import { anagrams, anagramsSolTwo } from './anagrams';
import { doesFuncExist } from '../doesFuncExist.test';

describe('anagrams', () => {
  doesFuncExist(anagrams);

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
  doesFuncExist(anagramsSolTwo);

  test('Returns false if strings are not anagrams of each other', () => {
    expect(anagramsSolTwo('goodbye', 'bye')).toBe(false);
  });

  test('Returns true if strings are anagrams of each other', () => {
    expect(anagramsSolTwo('HELLO!', 'hello')).toBe(true);
  });
});
