import { doesFuncExist } from '../doesFuncExist.test'
import { reverseNumber } from './reverseNumber'

describe('reverseNumber', () => {
  doesFuncExist(reverseNumber)

  test('It takes a number and reverses it', () => {
    expect(reverseNumber(-91)).toBe(-19)
  })
})
