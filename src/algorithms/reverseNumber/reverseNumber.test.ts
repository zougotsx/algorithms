import { reverseNumber } from './reverseNumber';

describe('reverseNumber', () => {
  test('To see if the function exists', () => {
    expect(reverseNumber).toBeDefined();
  });

  test('It takes a number and reverses it', () => {
    expect(reverseNumber(-91)).toBe(-19);
  });
});
