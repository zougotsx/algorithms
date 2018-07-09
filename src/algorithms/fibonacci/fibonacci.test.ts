import { fibonacci, fibRecursion } from './fibonacci';

describe('fibonacci', () => {
  test('To see if the function exists', () => {
    expect(fibonacci).toBeDefined();
  });

  test('Adds the last two numbers of the fibonacci sequence and returns the final output as a number', () => {
    expect(fibonacci(4)).toBe(3);
  });
});

describe('fibRecursion', () => {
  test('To see if the function exists', () => {
    expect(fibRecursion).toBeDefined();
  });

  test('Adds the last two numbers of the fibonacci sequence and returns the final output as a number', () => {
    expect(fibRecursion(4)).toBe(3);
  });
});
