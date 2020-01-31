export const reverseNumber = (num: number): number => {
  const reversedNum = num
    .toString()
    .split('')
    .reverse()
    .join('')
  return parseInt(reversedNum) * Math.sign(num)
}
