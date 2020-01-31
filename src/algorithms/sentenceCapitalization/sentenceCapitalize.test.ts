import { doesFuncExist } from '../doesFuncExist.test'
import { capitalize } from './sentenceCapitalization'

describe('capitalize', () => {
  doesFuncExist(capitalize)

  test('Takes a string and capitalizes the first letter of each word', () => {
    expect(capitalize('i am a string')).toBe('I Am A String')
  })
})
