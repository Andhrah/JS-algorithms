const palindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}
console.log(palindrome("level"));
palindrome("level");