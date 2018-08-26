// Solution #1

export const anagrams = (stringA: string, stringB: string): boolean => {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
};

const buildCharMap = (str: string) => {
  const charMap: any = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

anagrams('HELLO', 'elloh');

// Solution #2

export const anagramsSolTwo = (string1: string, string2: string): boolean => {
  return cleanString(string1) === cleanString(string2);
};

const cleanString = (str: string): string => {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
};

anagramsSolTwo('true', 'asdf');
