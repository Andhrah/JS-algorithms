const palindrome = (str) => {
  return str.split('').every((currentChar, currentIndex) => {
    return currentChar === str[str.length - currentIndex - 1]
  })
}
console.log(palindrome("come"));
palindrome("come");