export const palindrome = (str: string): boolean => {
  const reversedString = str
    .split('')
    .reverse()
    .join('')
  return reversedString === str
}
