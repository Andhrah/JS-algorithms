// optimized with noSwaps
const bubbleSort2 = arr => {
  // declare a variable called noSwaps to stop the sorting when there a no more swap
  // if there is no swaps up to the end of the arr on the last time, there would be no swaps next time  
  let noSwaps;
    // loop over the arr starting from the last element
  for(x = arr.length; x > 0; x--){
    // set noSwaps to true
    noSwaps = true;
    // loop over the arr while y is less than arr length - 1
    for(y = 0; y < x - 1; y++){
      // check if the current element of the arr is greater the next element of the arr
      if(arr[y] > arr[y + 1]){
        // if the above is true swap the position of the two element with each other
        [arr[y], arr[y + 1]] = [arr[y + 1], arr[y]]
        // set noSwaps to false, since we swapped
        noSwaps = false;
      }
    }
    // check if no swaps at the end of the nested loop and break  
    if(noSwaps) break;
  }
  // return array
  return arr;
}

console.log(bubbleSort2([12, 56, 7, 8]));