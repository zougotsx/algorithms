import { alternatingSums } from './alternatingSums';
import { doesFuncExist } from './../doesFuncExist.test';

describe('alternatingSums', () => {
  doesFuncExist(alternatingSums);

  it('Should return the factorial of a number', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toBe([180, 105]);
  });
});
