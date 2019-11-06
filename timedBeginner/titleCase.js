function titleCase(str) {
  var arr = [];
  var lowered = str.toLowerCase().split(" ");
  for (var i = 0; i < lowered.length; i++) {
    arr.push(lowered[i].replace(lowered[i][0], lowered[i][0].toUpperCase()));
  }
  return arr.join(" ");
}

titleCase("I'm a little tea pot");

// 7m 38s

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
