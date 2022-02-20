const linearSearch = (arr, n) => {
  for(x = 0, max = arr.length; x < max; x++){
    console.log(arr[x]);
    if(arr[x] === n){
      return x;
    }
  }
  return -1
}

// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 6));

console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 'g'));