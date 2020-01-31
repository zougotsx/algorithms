import { doesFuncExist } from '../doesFuncExist.test'
import { palindrome } from './palindrome'

describe('palindrome', () => {
  doesFuncExist(palindrome)

  test('Returns true if the string matches the reversed string', () => {
    expect(palindrome('racecar')).toBe(true)
  })

  test('Returns false if the string does not match reversed string', () => {
    expect(palindrome('Hello')).toBe(false)
  })
})
