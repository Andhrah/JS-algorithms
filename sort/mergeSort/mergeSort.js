function merge(arr1, arr2){
  let mergedArr = [];
  let arr1Index = 0;
  let arr2Index = 0;
  console.log(`Arr1 length is equal to ${arr1.length}`);
  console.log(`Arr2 length is equal to ${arr2.length}`);

  while(arr1Index < arr1.length || arr2Index < arr2.length){
    if(arr1[arr1Index] < arr2[arr2Index]){
      mergedArr.push(arr1[arr1Index]);
      arr1Index += 1;
    } else {
      mergedArr.push(arr2[arr2Index]);
      arr2Index += 1;
    }
  }
  return mergedArr; 
}

const mergeSort = arr => {
  // let num = arr.length
  if(arr.length <= 1) return arr;
  let halfLength = Math.round(arr.length/2);
  // console.log(halfLength);
  let left = mergeSort(arr.slice(0, halfLength)); 
  // let right = mergeSort(arr.slice(halfLength));
  console.log(mergeSort(arr.slice(0, halfLength)));
  // console.log(arr.slice(0, halfLength));
  // console.log(right);
  console.log(`The length of the array is now: ${arr.length}`);
  // return merge(left, right);
  // console.log(arr.slice(0, 4), arr.slice(5, arr.length));
  // return arr
  // console.log(Math.round(num/2));
}

console.log(mergeSort([8, 3, 7, 10, 75, 10, 1, 5]));