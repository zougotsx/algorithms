export const palindrome = (str: string): boolean => {
  const reversedString = str
    .split('')
    .reverse()
    .join('');
  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};
