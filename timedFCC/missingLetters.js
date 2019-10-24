function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (
    var i = alphabet.indexOf(str[0]);
    i <= alphabet.indexOf(str[str.length - 1]);
    i++
  ) {
    if (!str.includes(alphabet[i])) {
      console.log(alphabet[i]);
      return alphabet[i];
    }
  }
}

fearNotLetter("stvwx");

// 32m 14s

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// fearNotLetter("bcdf") should return "e".
