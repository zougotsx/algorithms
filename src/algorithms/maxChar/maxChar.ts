// Solution #1
export const maxChar = (str: string): string => {
  const chars: any = {}

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1
  }

  let keys = Object.keys(chars)
  keys.sort((a, b) => chars[b] - chars[a])
  return (str = keys[0])
}
