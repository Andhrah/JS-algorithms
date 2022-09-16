const reverse = (str) => {
  let reversed = '';
  for(let x = str.length - 1; x >= 0; x--) {
    reversed = reversed + str[x];
  }
  return reversed;
}
console.log(reverse('apple'));
reverse('apple');