const numArray = [1, 2, 3, 4, 5];

export const linearSearch = (arr: number[], value: number): number => {
  if (arr.includes(value)) {
    return arr.indexOf(value);
  }

  return -1;
};

// Best case scenario for Big O of Linear Search is O(1)
// However, this is very unlikely depending on how much data you have

// Average / worst case scenario is O(n)
