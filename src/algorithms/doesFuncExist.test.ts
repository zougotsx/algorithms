export const doesFuncExist = (
  testFuncOne: Function,
  testFuncTwo?: Function
) => {
  test('To see if the function exists', () => {
    expect(`${testFuncOne}`).toBeDefined();
  });

  if (testFuncTwo) {
    test('To see if the function exists', () => {
      expect(`${testFuncTwo}`).toBeDefined();
    });
  }
};
