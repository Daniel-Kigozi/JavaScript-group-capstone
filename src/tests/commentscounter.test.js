import commentCounter from '../modules/commentscounter.js';

describe('commentCounter function returns number of comments in an array', () => {
  it('should return the number of comments in an array', () => {
    expect(commentCounter()).toBe(0);
  });

  it('should return 0 if the input is not an array', () => {
    expect(commentCounter(undefined)).toEqual(0);
  });

  it('should return 0 if the array is empty', () => {
    expect(commentCounter([])).toEqual(0);
  });
});