const testArray = [5, 1, 22, 25, 6, -1, 8, 10]
const testSequence = [1, 6, -1, 10]

export function isValidSubsequence(array: number[], sequence: number[]) {
  let arrayPositionIndex = 0
  let sequencePositionIndex = 0

 

  while(sequencePositionIndex < sequence.length && arrayPositionIndex < array.length) {
    
    if(array[arrayPositionIndex] === sequence[sequencePositionIndex]) {
      sequencePositionIndex ++
    }

    arrayPositionIndex ++
  }

  return sequencePositionIndex === sequence.length
}

isValidSubsequence(testArray, testSequence);

/* 
Czego sie nauczyles: 
1.) sprawdzanie dwoch tablic w jednej petli

*/