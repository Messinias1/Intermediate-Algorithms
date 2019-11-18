function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    // console.log(Object.entries(collection[i]).flat());
    if (
      Object.entries(collection[i])
        .flat()
        .includes(pre)
    ) {
      console.log("true");
    } else return false;
  }
  var arr = [];
  for (var el = 0; el < collection.length; el++) {
    arr.push(Object.entries(collection[el]));
  }
  console.log(arr.flat(2));
  if (
    arr.flat(2).includes(undefined) ||
    arr.flat(2).includes(false) ||
    arr.flat(2).includes(null) ||
    arr.flat(2).includes(0) ||
    arr.flat(2).includes("") ||
    arr.flat(2).includes(NaN)
  ) {
    console.log("false");
    return false;
  } else {
    console.log("true");
    return true;
  }
}

truthCheck([{ single: "double" }, { single: "" }], "single");
// 24m

// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.
