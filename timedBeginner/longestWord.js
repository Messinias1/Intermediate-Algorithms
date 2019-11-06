function findLongestWordLength(str) {
  //   console.log(str.split(" "));
  var arr = [];
  for (var i = 0; i < str.split(" ").length; i++) {
    // console.log(str.split(" ")[i].length);
    arr.push(str.split(" ")[i].length);
  }
  console.log(Math.max(...arr));
  return Math.max(...arr);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 3m 58s

//   Return the length of the longest word in the provided sentence.
// Your response should be a number.
