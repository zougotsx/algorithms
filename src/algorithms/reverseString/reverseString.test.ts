import { doesFuncExist } from '../doesFuncExist.test'
import { reverseString } from './reverseString'

describe('reverseString', () => {
  doesFuncExist(reverseString)

  test('Takes a string and reverses it', () => {
    expect(reverseString('Hello')).toEqual('olleH')
  })
})
