import { capitalize } from './sentenceCapitalization';

describe('capitalize', () => {
  test('To see if the function exists', () => {
    expect(capitalize).toBeDefined();
  });

  test('Takes a string and capitalizes the first letter of each word', () => {
    expect(capitalize('i am a string')).toBe('I Am A String');
  });
});
