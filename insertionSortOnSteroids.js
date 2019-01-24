const validatingInput = array => {
  if (array.length === 0){
    return "Invalid input!"
  }
  else{
  return array.every(value => value>0);
  }
}
const initilizeArrayWithDummyValue = (array) => {
  return (array.fill(-1));
}

const returnIndexForNextNumber = (array, newNumber) => {
  array.map((x) => {
    if (x<newNumber){

    }
  });
}


// console.log(validatingInput([1,2]));
// initilizeArrayWithDummyValue(new Array(4));
// console.log(new Array(4));
module.exports = {initilizeArrayWithDummyValue, validatingInput};