export function alternatingSums(a: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  a.forEach((number, index) => {
    return index % 2 ? (oddSum += number) : (evenSum += number);
  });

  return [evenSum, oddSum];
}

alternatingSums([50, 60, 60, 45, 70]);
