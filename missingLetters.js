function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < str.length; i++) {
    // console.log(str[i]);
    var strCode = str.charCodeAt([i]) - 97;
    // console.log("STR CODE", strCode);
    var alphabetCode = alphabet.charCodeAt([i]) - 97;
    // console.log("ALPHABET CODE", alphabetCode);
    // console.log("SEARCH", alphabet.search("x"));

    if (strCode !== alphabetCode) {
      console.log(alphabet[i]);
      return alphabet[i];
    }
  }
}

fearNotLetter("stvwx");
