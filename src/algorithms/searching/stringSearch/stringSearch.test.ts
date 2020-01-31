import { doesFuncExist } from './../../doesFuncExist.test'
import { stringSearch } from './stringSearch'

const pattern = 'wowomgzomg'
const phrase = 'omg'

describe('stringSearch', () => {
  doesFuncExist(stringSearch)

  it('Should increment the count by 1 if the pattern contains the phrase', () => {
    expect(stringSearch(pattern, phrase)).toBe(2)
  })
})
