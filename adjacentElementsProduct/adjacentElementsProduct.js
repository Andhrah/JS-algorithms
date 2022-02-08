function adjacentElementsProduct(inputArray) {
  let element = 0;
  let products = [];
  for(const value of inputArray){
    if(element === 0){
      element = value;
    } else {
      products.push(element * value);
      element = value;
    }
  }
  return Math.max(...products);
}

// function adjacentElementsProduct(inputArray) {
//   let element = inputArray[0];
//   let products = [];
//   for(const value of inputArray){
//     products.push(element * value);
//     element = value;
//   }
//   console.log(products);
//   return Math.max(...products);
// }

console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
