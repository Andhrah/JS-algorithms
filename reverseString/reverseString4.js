const reverse = (str) => {
  return str.split('').reduce((reversed, currentChar) => currentChar + reversed)
}
console.log(reverse('apple'));
reverse('apple');