export const reverseString = (stringToReverse: string) => {
  const arra = stringToReverse.split('')
  const reversedArray = [];

  for (let i = arra.length -1 ; i >= 0; i--) {
    reversedArray.push(arra[i]);
  }

  console.log("reverse Arr", reversedArray)
  return reversedArray
};
