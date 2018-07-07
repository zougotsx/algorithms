import { add } from './add';

describe('add', () => {
  test('To see if the function exists', () => {
    expect(add).toBeDefined();
  });

  test('Takes two numbers and adds them', () => {
    expect(add(2, 2)).toBe(4);
  });
});
