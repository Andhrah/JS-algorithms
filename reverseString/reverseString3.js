const reverse = (str) => {
  let reversed = '';
  for(const char of str){
    reversed = char + reversed;
  }
  return reversed;
}
console.log(reverse('apple'));
reverse('apple');