const insertionSort = arr => {
  // loop over the arr
  for(let x = 1, maxX = arr.length; x < maxX; x++){
    // holds current value of the arr element
    let currentElem = arr[x];
    // loop over the arr if y >= 0 and
    // if element at index y is greater than currentElem 
    for(let y = x - 1; y >= 0 && arr[y] > currentElem; y--){
      // assign element at index y to the next element which is at index y + 1 
      arr[y + 1] = arr[y];
      // assign currentElem to the previous element, which is at index y
      arr[y] = currentElem;
    }
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
