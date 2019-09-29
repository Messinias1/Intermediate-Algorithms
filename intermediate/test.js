var arr = [1, [2], [3, [[4]]]];

function flattenDeep(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}
console.log(flattenDeep(arr));
flattenDeep(arr);
