const binarySearch = (arr, num) => {
  const sortedArray = arr.sort((a, b) => a - b);
  let start = 0;
  let end = sortedArray.length - 1;
  let middle = Math.floor((start + end) / 2);
  while(sortedArray[middle] !== num && start <= end){
    if(num < sortedArray[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return sortedArray[middle] === num ? middle : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10));