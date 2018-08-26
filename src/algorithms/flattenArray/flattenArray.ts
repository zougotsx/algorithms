// Solution 1

const notFlatArray = [1, 2, [3, 4, [5, 6]], [7, 8], 9];

export const flattenThis = (arr: any[]): any[] => {
  const newArray: any[] = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      newArray.push(...flattenThis(element));
    } else {
      newArray.push(element);
    }
  });

  return newArray;
};

// Solution 2

// const nestedArrayTwo = [[0, 1], [2, 3], [4, 5]];

// export const reduceArray = (arr: any[]) =>
//   arr.reduce((acumulator, currentValue) => acumulator.concat(currentValue), []);

// reduceArray(nestedArrayTwo);
