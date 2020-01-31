import { doesFuncExist } from '../doesFuncExist.test'
import { fibonacci, fibRecursion } from './fibonacci'

describe('fibonacci', () => {
  doesFuncExist(fibonacci)

  test('Adds the last two numbers of the fibonacci sequence and returns the final output as a number', () => {
    expect(fibonacci(4)).toBe(3)
  })
})

describe('fibRecursion', () => {
  doesFuncExist(fibRecursion)

  test('Adds the last two numbers of the fibonacci sequence and returns the final output as a number', () => {
    expect(fibRecursion(4)).toBe(3)
  })
})
