function truthCheck(collection, pre) {
  var result = true;
  for (var i = 0; i < collection.length; i++) {
    if (!Object.keys(collection[i]).includes(pre)) {
      result = false;
    }
  }
  for (var j = 0; j < collection.length; j++) {
    console.log(Object.values(collection[j]));
    switch (Object.values(collection[j])) {
      case false:
        result = false;
        break;
      case undefined:
        result = false;
        break;
      case null:
        result = false;
        break;
      case 0:
        result = false;
        break;
      case "":
        result = false;
        break;
      case Object.values(collection[j]).includes(NaN):
        result = false;
        break;
      default:
        return result;
    }
    // if (
    //   Object.values(collection[j]) !== false ||
    //   Object.values(collection[j]) !== undefined ||
    //   Object.values(collection[j]) !== null ||
    //   Object.values(collection[j]) !== 0 ||
    //   Object.values(collection[j]) !== "" ||
    //   Object.values(collection[j]).includes(NaN)
    // ) {
    //   return true;
    // } else {
    //   console.log("false");
    // }
  }
  return result;
}

truthCheck([{ single: "double" }, { single: undefined }], "single");

// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.
