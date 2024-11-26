const arr = [3, 5, -4, 8, 11, 1, -1, 6];
//should return [-1,11]

const twoNumberSum = (array: number[], target: number = 10) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [array[i], array[j]];
      }
    }
  }

  return undefined
};

twoNumberSum(arr);

// it is solution but not good O(n^2) becuse it is nested loops