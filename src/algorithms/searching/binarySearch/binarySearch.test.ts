import { doesFuncExist } from '../../doesFuncExist.test'
import { binarySearch } from './binarySearch'

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

describe('binarySearch', () => {
  doesFuncExist(binarySearch)

  it('Takes an array and a number and returns the index of the number', () => {
    expect(binarySearch(testArray, 6)).toBe(5)
  })

  it('Takes an array and a number and returns -1 if the number is not found', () => {
    expect(binarySearch(testArray, 12)).toBe(-1)
  })
})
