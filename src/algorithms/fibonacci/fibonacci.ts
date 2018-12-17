// Solution #1

export const fibonacci = (num: number): number => {
  const results: Array<number> = [0, 1];
  for (let i = 2; i <= num; i++) {
    const lastTwoNums = results.slice(1).slice(-2);
    const sum = lastTwoNums.reduce((a: number, b: number): number => a + b);
    results.push(sum);
  }

  return results[num];
};

// Solution #2 - Recursion
export const fibRecursion = (num: number): number => {
  if (num < 2) return num;
  return fibRecursion(num - 2) + fibRecursion(num - 1);
};
