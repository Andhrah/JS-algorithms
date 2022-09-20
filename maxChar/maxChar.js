const maxChar = (str) => {
  // declare an empty object called `count` to keep count of the chars
  let count = {};
  let mostOccurredStrKey = "";
  let mostOccurredStrValue = 0;
  // loop over the string
  for(let char of str) {
    char in count ? count[char]++ : count[char] = 1
  }
  for(const key in count){
    if(count[key] > mostOccurredStrValue){
      mostOccurredStrKey = key;
      mostOccurredStrValue = count[key];
    }
  }
  console.log(count);
  return mostOccurredStrKey;
}

console.log(maxChar("abccccd hello"));