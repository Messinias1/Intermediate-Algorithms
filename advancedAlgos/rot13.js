function rot13(str) {
  var caps = str.toUpperCase().split("");
  console.log(caps);
  //   console.log(caps.join(""));
  var capsRegex = /[A-Z]/g;
  var decoded = [];

  for (var i = 0; i < caps.length; i++) {
    if (caps[i].match(capsRegex)) {
      decoded.push(
        String.fromCharCode(((caps[i].charCodeAt(caps[i]) - 65 + 13) % 26) + 65)
      );
    }
  }
  console.log(decoded.join(""));
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//   rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
