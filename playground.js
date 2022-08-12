// const sumOfNum = (x, y) => {
//   return x + y;
// }

// console.log(sumOfNum(10, 9));
// const charCount = str => {
//   let count = {};
//   for(const char of str) {
//     char in count ? count[char]++ : count[char] = 1;
//     // if(char in count) {
//     //   count[char]++
//     // } else {
//     //   count[char] = 1
//     // }
//   }
//   return count
// }

// console.log(charCount('alexandra'))
// const str = "Alexandra 24 Me!";
// const alphaNumeric = /[a-z0-9]/.test(str);
// for(const char of str){
//   console.log(char);
// }
// console.log(alphaNumeric);

// const same = ([arr1, arr2]) => {
//   // square 
//   squareArr1 = 
//   return 3**2
// }

// function countDown(fromNumber) {
//   console.log(fromNumber);

//   let nextNumber = fromNumber - 1;
//   console.log(`What are you ${nextNumber}`)

//   if (nextNumber > 0) {
//     countDown(nextNumber);
//   }
// }
// console.log(countDown(3));
// const binarySearch = (arr, num) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2)
//   console.log(start);
//   console.log(end);
//   console.log(arr[middle]);
//   while(arr[middle] !== num){
    
//   }
//   if(middle == num) {
//     return arr[num];
//   }
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 7));

// console.log(Math.floor(Math.random() * 8));

// Create a function that accepts and array. Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// Examples:

// snail( [[1,2,3], [4,5,6],[7,8,9]) // [1,2,3,6,9,8,7,4,5]

// snail([[1,2,3], [8,9,4], [7,6,5]]) // [1,2,3,4,5,6,7,8,9]

const snail = arr => {
  let result = [];
  let mergeArr = [];
  console.log(arr.length);
  result = [...arr[0]];
  for(x = 1, maxX = arr.length; x < maxX; x++){
    console.log(`Logging this${arr[x][arr[x].length-1]}`);
    result.push(arr[x][arr[x].length-1]);
    // console.log(arr[x].slice(0, arr[x].length-1).reverse());
    mergeArr.push(arr[x].slice(0, arr[x].length-1).reverse());
  }
  let spreadArr = [...mergeArr.reverse()]
  // return spreadArr;
  console.log(`I'm spreading ${spreadArr}`);
  result = [...result, ...spreadArr]
  // return result;
}

console.log(snail([[1,2,3], [4,5,6],[7,8,9]]))