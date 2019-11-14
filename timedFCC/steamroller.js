function steamrollArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("final", arr.flat([i]).flat());
  }
  return arr.flat([i]).flat();
}

steamrollArray([[["a"]], [["b"]]]);
// 6m 31s

// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
