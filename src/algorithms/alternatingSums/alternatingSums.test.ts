import { doesFuncExist } from './../doesFuncExist.test'
import { alternatingSums } from './alternatingSums'

describe('alternatingSums', () => {
  doesFuncExist(alternatingSums)

  it('Should return the factorial of a number', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toBe([180, 105])
  })
})
