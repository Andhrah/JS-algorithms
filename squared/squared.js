// const same = (arr1, arr2) => {
//   // check if the two arrays are of equal length
//   if(arr1.length === arr2.length){
//     console.log(`First Array is: ${arr1.length}`);
//     console.log(`Second Array is: ${arr2.length}`);
//     return false;
//   } else {
//     // square the first array
//     let squared = [];
//     let sumOfarr1 = 0;
//     let sumOfArr2 = 0;
//     for(const element of arr1){
//       // squared.push(element**2);
//       sumOfarr1 += element**2
//     }
//     // sum up the squared array and sum up the second array
//   }
  
  
  // check if the two arrays are equal
  // return true if they are equal
  // else return false
// }

const same = (arr1, arr2) => {
  if(arr1.length !== arr2.length){
    return false;
  }
  for(const element of arr1){
    let correctIndex = arr2.indexOf(element**2);
    if(correctIndex === -1){
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}


console.log(same([1, 2, 3], [1, 8, 5]))