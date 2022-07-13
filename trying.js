function findLongestWord(string) {
  // Change code below this line
  const stringSplit = string.split(" ");
  // console.log(stringSplit);
  let longestWord = stringSplit[0];
  for (const word of string) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
  // string = string.split(" ");
  // let longWord = string[0];
  // for (const word of string) {
  //   if (word.length > longWord.length) {
  //     longWord = word;
  //   }
  // }
  // return longWord;

  // Change code above this line
}
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
