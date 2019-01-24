const initilizeArrayWithDummyValue = (array) => {
  return (array.fill(-1));
}

initilizeArrayWithDummyValue(new Array(4));
// console.log(new Array(4));
module.exports = {initilizeArrayWithDummyValue};