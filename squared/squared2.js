const same2 = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(const value of arr1){
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }
  for(const value of arr2){
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }
  for(const key in frequencyCounter1){
    if(!(key**2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}