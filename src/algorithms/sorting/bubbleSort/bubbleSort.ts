const numArray = [1, 5, 4, 7, 2, 0];

export const swap = (arr: number[], idx1: number, idx2: number): void => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

export const bubbleSort = (arr: number[]): number[] => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, i, j + 1);
      }
    }
  }

  return arr;
};
