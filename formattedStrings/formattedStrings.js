/**
 * Given: an array containing hashes of names

  Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

  Example:

  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
  // returns 'Bart, Lisa & Maggie'

  list([ {name: 'Bart'}, {name: 'Lisa'} ])
  // returns 'Bart & Lisa'

  list([ {name: 'Bart'} ])
  // returns 'Bart'

  list([])
  // returns ''
*/
function list(names){
  //your code here
  //   check if names is empty and return empty string
  if (names && names.length === 0) {
    return '';
  }
  
  //   map through names and return array containing only the values of the objects.
  const mappedArray = names.map(item=>item.name);
  
  //   declare an empty array which will hold  
  //   mappedaArray without the last two elements.
  const trunacatedArray = [];
  
  //   check if the length of mappedArray is 2 and if true,
  //   turn the mappedArray into strings separated by ampersand and return it.
  if (mappedArray.length === 2){
    return mappedArray.join(' & ');
  } else if (mappedArray.length > 2) {
    
    //   check if the length of mappedArray is greater than 2 and if true,
     for (let x = 0; x < mappedArray.length  - 2; x++){
      //   loop through mappedArray except the last two elements of it, then
      //   push the result to trunacatedArray,
      trunacatedArray.push(mappedArray[x]);
    }
    //  then get the last 2 elements of mappedArray and store it in a variable,
    const slicedArray = mappedArray.slice(mappedArray.length - 2);
    //   next, turn the trunacatedArray into strings separated by comma.
    const commaSparatedArray = trunacatedArray.join(', ');
    
    //   next, turn the slicedArray into strings separated by ampersand and,
    const amperAndSparatedArray = slicedArray.join(' & ');
    
    //  return both commaSparatedArray and amperAndSparatedArray variables 
    return `${commaSparatedArray}, ${amperAndSparatedArray}`;
  }
  //   else return mappedArray
  return mappedArray.join();
}
