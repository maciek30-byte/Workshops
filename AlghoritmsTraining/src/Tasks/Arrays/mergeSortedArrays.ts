export const mergeTwoArrays = (arr1: number[], arr2: number[]) => {
  const mergedArray = [];
  //starting point of iteration it will be change inside while loop//
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let iterator1 = 0;
  let iterator2 = 0;

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (arr1Item || arr2Item) {
    if (arr1Item > arr2Item && arr1Item!== undefined) {
      mergedArray.push(arr1Item);
      // in this place we change the arr1Item
      arr1Item = arr1[iterator1];
      iterator1 ++
    } else {
      console.log('item2', arr2Item);
      mergedArray.push(arr2Item);
      arr2Item = arr2[iterator2];
      iterator2++
    }
  }
};

//@TODO think about this code once again and try find best way to solve, in the other handl is possible to merge this arrays and sort it :) //