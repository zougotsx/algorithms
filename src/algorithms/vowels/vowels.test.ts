import { vowels } from './vowels';

describe('vowels', () => {
  test('To see if the function exists', () => {
    expect(vowels).toBeDefined();
  });

  test('Returns the number of vowels given in a string', () => {
    expect(vowels('Hello')).toBe(2);
  });
});
