// Solution 1

const nestedArray: any[] = [20, [50, 2, [90, 61]], [4, 7], 3];

export const flattenArray = (array: any[]): number[] => {
  const flatArray: number[] = [];

  array.forEach((item: number) => {
    if (Array.isArray(item)) {
      flatArray.push(...flattenArray(item));
    } else {
      flatArray.push(item);
    }
  });

  return flatArray;
};

flattenArray(nestedArray);

// Solution 2

const nestedArrayTwo = [[0, 1], [2, 3], [4, 5]];

export const reduceArray = (arr: any[]) =>
  arr.reduce((acumulator, currentValue) => acumulator.concat(currentValue), []);

reduceArray(nestedArrayTwo);
