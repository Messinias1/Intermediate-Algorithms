function binaryAgent(str) {
  var strSplit = str.split(" ");
  //   console.log(strSplit);
  var arr = [];

  for (var i = 0; i < strSplit.length; i++) {
    // parseInt(string, radix(2, 36))
    var digit = parseInt(strSplit[i], 2);
    // console.log(digit);
    var letters = String.fromCharCode(digit);
    arr.push(letters);
  }
  console.log(arr.join(""));
  return arr.join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
