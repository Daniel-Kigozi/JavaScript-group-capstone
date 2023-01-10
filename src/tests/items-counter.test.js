import itemsCounter from "../modules/items-counter";

describe('itemsCounter function correctly counts the number of items in an array', () => {
  it('should return the number of items in an array', () => {
    expect(itemsCounter([1, 2, 3, 4])).toBe(4);
  });

  it('should return 0 if the input is not an array', () => {
    expect(itemsCounter(undefined)).toEqual(0);
  });

  it('should return 0 if the array is empty', () => {
    expect(itemsCounter([])).toEqual(0);
  });
});
