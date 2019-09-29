function steamrollArray(arr) {
  // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  return arr.reduce(
    (acc, val) =>
      // condition ? value_if_true : value_if_false
      Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val),
    []
  );
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
steamrollArray([1, [2], [3, [[4]]]]);
