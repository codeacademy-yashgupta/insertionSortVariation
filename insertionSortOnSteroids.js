const validatingInput = (array) => {
  if (array.length === 0) {
    return 'Invalid input!';
  }
  return array.every(value => value > 0);
};

const initilizeArrayWithDummyValue = array => array.fill(-1);

const printArray = array => array.join(' ');

// const returnIndexForNextNumber = (array, newNumber, indexOfSmallestValue) => {
//   for(let i = 0; i<array.length; i+=1){
//     while (){
//     if (array[indexOfSmallestValue+i]<newNumber){

//     }
//   }
//   }
//   };
const arrayRotate = (array, reverse) => {
  if (reverse) array.unshift(array.pop());
  else array.push(array.shift());
  return array;
};

const sortTheArray = (unsortedArrayX) => {
  let indexOfSmallestValue = 0;
  let indexOfLargestValue = 0;
  let midFound = false;
  const lengthOfUnsortedArray = unsortedArrayX.length;
  const sortedArrayY = new Array(unsortedArrayX.length);
  initilizeArrayWithDummyValue(sortedArrayY);
  // eslint-disable-next-line prefer-destructuring
  sortedArrayY[0] = unsortedArrayX[0];
  console.log(printArray(sortedArrayY));

  for (let i = 1; i < lengthOfUnsortedArray; i += 1) {
    let numbersAfterMid = 0;
    let numbersBeforeMid = 0;
    midFound = false;
    if (unsortedArrayX[i] < sortedArrayY[indexOfSmallestValue]) {
      indexOfSmallestValue = (indexOfSmallestValue - 1 + lengthOfUnsortedArray) % lengthOfUnsortedArray;
      sortedArrayY[indexOfSmallestValue] = unsortedArrayX[i];
    } else if (unsortedArrayX[i] > sortedArrayY[indexOfLargestValue]) {
      indexOfLargestValue = (indexOfLargestValue + 1 + lengthOfUnsortedArray) % lengthOfUnsortedArray;
      sortedArrayY[indexOfLargestValue] = unsortedArrayX[i];
    } else if (sortedArrayY[indexOfLargestValue] - unsortedArrayX[i] > sortedArrayY[indexOfSmallestValue] - unsortedArrayX[i]) {
      let j = indexOfLargestValue;
      while (!midFound && !(sortedArrayY[j] > unsortedArrayX[i])) {
        j -= 1;
        midFound = true;

        // sortedArrayY.splice((j + lengthOfUnsortedArray), 0, unsortedArrayX[i]);
        // midFound = false;

        // console.log(j);
      }
      numbersAfterMid = (indexOfLargestValue - j + lengthOfUnsortedArray) % lengthOfUnsortedArray;
      numbersBeforeMid = (j - indexOfSmallestValue + lengthOfUnsortedArray) % lengthOfUnsortedArray;
      if (numbersAfterMid < numbersBeforeMid) {
        sortedArrayY.splice(j, 0, unsortedArrayX[i]);
      } else if (numbersBeforeMid < numbersAfterMid) {
        sortedArrayY.splice(j, 0, unsortedArrayX[i]);
        arrayRotate(sortedArrayY, false);
        const numberIndexToBeRemoved = sortedArrayY.indexOf(-1);
        sortedArrayY.splice(numberIndexToBeRemoved, 1);
      }
      // console.log(printArray(sortedArrayY));
    }
    console.log(printArray(sortedArrayY));
  }
};
sortTheArray([10, 11, 12, 5]);
//  console.log(printArray(sortTheArray([4,3,2,1])));
// console.log(validatingInput([1,2]));
// initilizeArrayWithDummyValue(new Array(4));
// console.log(new Array(4));

module.exports = {
  initilizeArrayWithDummyValue, validatingInput, sortTheArray, printArray,
};
