function rot13(str) {
  var caps = str.toUpperCase().split("");
  var capsRegex = /[A-Z]/g;
  var decoded = [];

  for (var i = 0; i < caps.length; i++) {
    if (caps[i].match(capsRegex)) {
      decoded.push(
        String.fromCharCode(((caps[i].charCodeAt(caps[i]) - 65 + 13) % 26) + 65)
      );
    } else if (caps[i].charCodeAt(caps[i] === 32)) {
      decoded.push(caps[i]);
    }
  }

  console.log(decoded.join(""));
  return decoded.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//   rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
