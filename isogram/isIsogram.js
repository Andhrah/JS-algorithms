
// Isogram is a word with no repeating letters
const isIsogram = word => {
  // convert str to lowercase
  let lowercaseChars = word.toLowerCase();
  // remove repeating characters using "set"
  let isUniqueChars = new Set(lowercaseChars);
  // convert the "set" to array then to string
  let refinedStr = [...isUniqueChars].join('');
  // check if the length of the word is the same after removing repeating chars then return true, else return false
  if (word.length === refinedStr.length){
    return true;
  } else {
    return false;
  }
}
console.log(isIsogram('andra'));
