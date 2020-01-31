export const vowels = (str: any): number => {
  const matches = str.match(/[aeiou]/gi).length
  return matches ? matches.length : 0
}

export const vowelsSolTwo = (str: string): number => {
  let count = 0
  const checker = ['a', 'e', 'i', 'o', 'u']

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++
    }
  }

  return count
}
