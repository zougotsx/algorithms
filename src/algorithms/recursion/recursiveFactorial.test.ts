import { recursiveFactorial } from './recursiveFactorial';
import { doesFuncExist } from './../doesFuncExist.test';

describe('recursiveFactorial', () => {
  doesFuncExist(recursiveFactorial);

  it('Should return the factorial of a number', () => {
    expect(recursiveFactorial(5)).toBe(120);
  });
});
