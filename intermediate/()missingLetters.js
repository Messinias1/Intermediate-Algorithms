function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabet.split("");
  console.log(alphabetArr);

  let test = str.split("");
  console.log(test);

  // for (var i = 0; i < str.length; i++) {
  //   // console.log(str[i]);
  //   var strCode = str.charCodeAt([i]) - 97;
  //   // console.log("STR CODE", strCode);
  //   var alphabetCode = alphabet.charCodeAt([i]) - 97;
  //   // console.log(alphabet[i]);
  //   // console.log("ALPHABET CODE", alphabetCode);

  //   if (strCode !== alphabetCode) {
  //     console.log(alphabet[i]);
  //     return alphabet[i];
  //   }
  // }
}

fearNotLetter("stvwx");
