import { doesFuncExist } from '../doesFuncExist.test'
import { vowels, vowelsSolTwo } from './vowels'

describe('vowels', () => {
  doesFuncExist(vowels)

  test('Returns the number of vowels given in a string', () => {
    expect(vowels('Hello')).toBe(2)
  })
})

describe('vowelsSolTwo', () => {
  doesFuncExist(vowelsSolTwo)

  test('Returns the number of vowels given in a string', () => {
    expect(vowelsSolTwo('Hi There')).toBe(3)
  })
})
