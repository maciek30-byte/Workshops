const matrix = [
    [1, 2, 3],  // wiersz 0
    [4, 5, 6]
  ];
  
  const prepareResultsArray = (rows:number, cols:number) => {
    const resultArr = [];
    for (let i = 0; i < rows; i++) { // iterujemy po kolumnach, czyli tworzymy 3 tablice
        resultArr.push(new Array(cols));  // tworzy nowa tablice z 2 elementami okreslonymi jako undefined// 
    }
    return resultArr; //
  };
  
  function transposeMatrix(matrix: number[][]) {
    const resultArr = prepareResultsArray(matrix[0].length, matrix.length)
    
    for(let i = 0; i < matrix.length; i++) { // iterujemy 2 razy 
        for(let j = 0; j < matrix[i].length; j++) {
          /* 
           resultArr[1][0] = matrix[0][1] 
          */
            resultArr[j][i] = matrix[i][j]
        }
    }
    
    return resultArr
  }
  
  
  console.log('this is my result', transposeMatrix(matrix));
  
  
  // w tym przypadku arr = [[undefined, undefined], [undefined, undefined], [undefined, undefined]]
  // j steruje tutaj kolumnami//
  
  /*
  // i=0, j=0:
  resultArr[0][0] = matrix[0][0] // = 1
  [
      [1, undefined],       
      [undefined, undefined], 
      [undefined, undefined]  
  ]
  
  // i=0, j=1:
  resultArr[1][0] = matrix[0][1] // = 2
  [
      [1, undefined],       
      [2, undefined], 
      [undefined, undefined]  
  ]
  
  // i=0, j=2:
  resultArr[2][0] = matrix[0][2] // = 3
  [
      [1, undefined],       
      [2, undefined], 
      [3, undefined]  
  ]
  
  // i=1, j=0:
  resultArr[0][1] = matrix[1][0] // = 4
  [
      [1, 4],       
      [2, undefined], 
      [3, undefined]  
  ]
  
  // i=1, j=1:
  // [j][i] = [i][j]
  
  resultArr[1][1] = matrix[1][1] // = 5
  [
      [1, 4],       
      [2, 5], 
      [3, undefined]  
  ]
  
  // i=1, j=2:
  resultArr[2][1] = matrix[1][2] // = 6
  [
      [1, 4],       
      [2, 5], 
      [3, 6]  
  ]
  
  */