import { maxChar } from './maxChar';

describe('maxChar', () => {
  test('To see if the function exists', () => {
    expect(maxChar).toBeDefined();
  });

  test('Returns the most common character in a string', () => {
    expect(maxChar('Hello')).toBe('l');
  });
});
