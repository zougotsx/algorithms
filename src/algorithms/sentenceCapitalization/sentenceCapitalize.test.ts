import { capitalize } from './sentenceCapitalization';
import { doesFuncExist } from '../doesFuncExist.test';

describe('capitalize', () => {
  doesFuncExist(capitalize);

  test('Takes a string and capitalizes the first letter of each word', () => {
    expect(capitalize('i am a string')).toBe('I Am A String');
  });
});
