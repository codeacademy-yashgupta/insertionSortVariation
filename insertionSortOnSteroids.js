const validatingInput = array => {
  if (array.length === 0){
    return "Invalid input!"
  }
  else{
  return array.every(value => value>0);
  }
}
const initilizeArrayWithDummyValue = (array) => {
  return array.fill(-1);
}

const printArray = (array) => {
  return array.join(' ')
}



// const returnIndexForNextNumber = (array, newNumber, indexOfSmallestValue) => {
//   for(let i = 0; i<array.length; i+=1){
//     while (){
//     if (array[indexOfSmallestValue+i]<newNumber){

//     }
//   }
//   }
//   };


const sortTheArray = (unsortedArrayX) => {
  let indexOfSmallestValue = 0
  let indexOfLargestValue = 0
  let lengthOfUnsortedArray = unsortedArrayX.length;
  let sortedArrayY =new Array(unsortedArrayX.length)
  initilizeArrayWithDummyValue(sortedArrayY);
  sortedArrayY[0] = unsortedArrayX[0];
  for (let i =1; i<lengthOfUnsortedArray; i+=1){
    if (unsortedArrayX[i]<sortedArrayY[indexOfSmallestValue] ){
      indexOfSmallestValue = (indexOfSmallestValue - 1 + lengthOfUnsortedArray) % lengthOfUnsortedArray;
      sortedArrayY[indexOfSmallestValue] = unsortedArrayX[i];
    }
    else if (unsortedArrayX[i]>sortedArrayY[indexOfLargestValue]){
      indexOfLargestValue = (indexOfLargestValue + 1 + lengthOfUnsortedArray) % lengthOfUnsortedArray;
      sortedArrayY[indexOfLargestValue] = unsortedArrayX[i];
    }
    else {
      
    }
  }
  return(sortedArrayY);
}
sortTheArray([4,3,2,1])
// console.log(validatingInput([1,2]));
// initilizeArrayWithDummyValue(new Array(4));
// console.log(new Array(4));
module.exports = {initilizeArrayWithDummyValue, validatingInput, sortTheArray, printArray};