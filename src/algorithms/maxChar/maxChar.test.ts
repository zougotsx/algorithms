import { maxChar } from './maxChar';
import { doesFuncExist } from '../doesFuncExist.test';

describe('maxChar', () => {
  doesFuncExist(maxChar);

  test('Returns the most common character in a string', () => {
    expect(maxChar('Hello')).toBe('l');
  });
});
