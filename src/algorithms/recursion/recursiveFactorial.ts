export const recursiveFactorial = (num: number): number => {
  if (num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}
