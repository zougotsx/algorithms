import { add } from './add';
import { doesFuncExist } from '../doesFuncExist.test';

describe('add', () => {
  doesFuncExist(add);

  test('Takes two numbers and adds them', () => {
    expect(add(2, 2)).toBe(4);
  });
});
