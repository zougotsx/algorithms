import { doesFuncExist } from '../../doesFuncExist.test'
import { linearSearch } from './linearSearch'

const testArray = [1, 2, 3, 4, 5]

describe('linearSearch', () => {
  doesFuncExist(linearSearch)

  test('Takes an array and a value to return the index of the value in the array', () => {
    expect(linearSearch(testArray, 5)).toEqual(4)
  })

  test('Takes an array and a value and returns -1 if the value is not in the array', () => {
    expect(linearSearch(testArray, 0)).toEqual(-1)
  })
})
