/* Write a function which will take one string argument containing characters between a-z, 
  and should remove all repeated characters (dupliacates) in the string.
  The function should be called removeDuplicates and return an object literal containing a 'uniques' property, 
  which should be the sorted input string but without any duplicates or special characters.
  The returned object should also have a 'duplicates' property which should represent the total number of duplicate characters dropped

  For example
  removeDuplicates('th#elex_ash?')
  Returns

  {uniques: 'aehlstx', duplicates: 2}
*/

const removeDuplicates = (str) => {
  // declare empty object
  let result = {};
  // remove special character and ignore cases
  let noSpecialChars = str.match(/[a-z]+/gi)
  // remove duplicates using "set"
  let noDuplicates = new Set(noSpecialChars);
  // convert set to array, sort it and convert the array to string
  let uniqueValues = [...noDuplicates].sort().join('');
  // add the unique values as property of empty object
  result.uniques = uniqueValues;
  // add the number of dropped characters as property of the empty object by subtracting the length of the unique values from the length of the str
  result.duplicates = str.length - noDuplicates.length;
  // return object
  return result;
} 
