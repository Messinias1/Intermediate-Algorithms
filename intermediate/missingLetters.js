function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabet.split("");
  var start = str.charCodeAt(str[0]) - 97;

  let test = str.split("");
  console.log(test);

  var alphabetCharArr = [];
  for (var i = start; i < alphabetArr.length; i++) {
    var alphabetCode = alphabetArr[i];
    alphabetCharArr.push(alphabetCode);
  }

  alphabetCharArr.length = test.length;
  console.log(alphabetCharArr);

  for (var i = 0; i < test.length; i++) {
    console.log(test[i]);
    console.log(alphabetCharArr[i]);
    if (test[i] !== alphabetCharArr[i]) {
      console.log("MISSING LETTER", alphabetCharArr[i]);
      return alphabetCharArr[i];
    }
  }
}

fearNotLetter("acdefg");
