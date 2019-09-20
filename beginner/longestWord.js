function findLongestWordLength(str) {
  var lengthArr = str.split(" ").map(word => word.length);
  return Math.max(...lengthArr);
}

findLongestWordLength("Theeeeeee quick brown fox jumped over the lazy dog");

// Return the length of the longest word in the provided sentence.
// Your response should be a number.
