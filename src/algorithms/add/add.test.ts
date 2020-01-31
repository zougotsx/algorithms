import { doesFuncExist } from '../doesFuncExist.test'
import { add } from './add'

describe('add', () => {
  doesFuncExist(add)

  test('Takes two numbers and adds them', () => {
    expect(add(2, 2)).toBe(4)
  })
})
