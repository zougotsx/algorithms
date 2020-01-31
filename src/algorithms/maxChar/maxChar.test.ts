import { doesFuncExist } from '../doesFuncExist.test'
import { maxChar } from './maxChar'

describe('maxChar', () => {
  doesFuncExist(maxChar)

  test('Returns the most common character in a string', () => {
    expect(maxChar('Hello')).toBe('l')
  })
})
