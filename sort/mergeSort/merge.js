function merge(arr1, arr2){
  let mergedArr = [];
  let arr1Index = 0;
  let arr2Index = 0;

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

console.log(merge([1, 10, 50], [2, 14, 99, 100 ]));