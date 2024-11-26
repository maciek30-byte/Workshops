export const sortedSquaredArray = (inputArray: number[]): number[] => {
    let leftSideIndex = 0;
    let rightSideIndex = inputArray.length - 1;
    let currentArrayIndex = inputArray.length - 1;
  
    const results = new Array(inputArray.length).fill(0);
  
    while (leftSideIndex <= rightSideIndex) {
      const rightSidePowElement = Math.pow(inputArray[rightSideIndex], 2);
      const leftSidePowElement = Math.pow(inputArray[leftSideIndex], 2);
  
      if (leftSidePowElement > rightSidePowElement) {
        results[currentArrayIndex] = leftSidePowElement;
        leftSideIndex++;
      } else {
        results[currentArrayIndex] = rightSidePowElement;
        rightSideIndex--;
      }
      currentArrayIndex--;
    }
  
    return results;
  };
  
  /* 
  Czego sie tu nauczyles :
  1.) Metoda dwoch wskaznikow, i iterowania przez jedna tablice z dwoch stron jednoczesnie
  2.) Dynamiczne ukladanie elementow w nowej tablicy podczas iterowania
  3.) dodawanie elementow do tablicy od konca zastepstwo shifta algorytmem
  */