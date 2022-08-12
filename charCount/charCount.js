const charCount = (str) => {
  // declare an empty object called `count` to keep count
  const count = {};
  // lowercase the str
  const lowercaseStr = str.match(/[a-z0-9]+/gi).toString();;
  // loop over str
  for (x = 0; lowercaseStr.length > x; x++) {
    // if char is in object `count` increment it by 1, else add it and set it to one
    if(lowercaseStr[x] in count) {
      count[lowercaseStr[x]]++;
    } else {
      count[lowercaseStr[x]] = 1
    }
  }
  // return count
  return count;
}

console.log(charCount('Hello 123123'));