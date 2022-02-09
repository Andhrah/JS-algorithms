const selectionSort = arr => {
  // loop over the arr using nested `for` loop
  for(x = 0; x < arr.length; x++){
    // declare a variable to hold the smallest element
    let min = x;
    for(y = x + 1; y < arr.length ; y++){
      // check if the current element is greater than the next element and swap
      if(arr[min] > arr[y]){
        // if true, assign `y` to min
        min = y;
      }
    }
    if(x !== min) [arr[x], arr[min]] = [arr[min], arr[x]];
  }
  // return array
  return arr 
}

console.log(selectionSort([4, 12, 56, 1, 7, 8]));