import { reverseString } from './reverseString';

describe('reverseString', () => {
  test('To see if the function exists', () => {
    expect(reverseString).toBeDefined();
  });

  test('Takes a string and reverses it', () => {
    expect(reverseString('Hello')).toEqual('olleH');
  });
});
