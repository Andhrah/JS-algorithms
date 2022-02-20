const naiveSearch = (long, short) => {
  let counter = 0;
  for(let x = 0, maxX = long.length; x < maxX; x++){
    for(let y = 0, maxY = short.length; y < maxY; y++){
      console.log(`${long[x]} ${short[y]}`);
      if(short[y] !== long[x + y]){
        break;
      }
      if(y === maxY - 1) {
        counter++
      }
    }
  }
  return counter;
}

console.log(naiveSearch("lorie loled", "lol"))