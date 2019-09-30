function truthCheck(collection, pre) {
  console.log("pre", pre);
  var result = true;
  for (var i = 0; i < collection.length; i++) {
    var arrs = Object.entries(collection[i]).flat();

    if (arrs.includes(pre)) {
      console.log(arrs);
    } else {
      result = false;
      break;
    }

    for (var j = 0; j < arrs.length; j++) {
      console.log(arrs[j]);

      if (
        arrs[j] === 0 ||
        arrs[j] === "" ||
        arrs[j] === false ||
        arrs[j] === null ||
        arrs[j] === undefined ||
        arrs.includes(NaN)
      ) {
        result = false;
        break;
      }
    }
  }
  console.log("final result", result);
  return result;
}
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male", age: 0 },
    { user: "Dipsy", sex: "male", age: 3 },
    { user: "Laa-Laa", sex: "female", age: 5 },
    { user: "Po", sex: "female", age: 4 }
  ],
  "age"
);

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate prewill be an object property and you need to return trueif its value is truthy. Otherwise, return false.

// In JavaScript, truthyvalues are values that translate to truewhen evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or []notation.
