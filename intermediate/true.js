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
  // //   console.log("colArr", colArr.flat());
  // var argsArr = colArr.flat().concat(preArr);
  // // console.log(argsArr);

  // for (var i = 0; i < argsArr.length; i++) {
  //   // console.log(argsArr[i]);
  //   if (
  //     argsArr[i] === false ||
  //     argsArr[i] === null ||
  //     argsArr[i] === undefined ||
  //     argsArr.includes(NaN)
  //   ) {
  //     result = false;
  //     break;
  //   }
  // }
  console.log("final result", result);
  return result;
}

// false , 0 , "" , null , undefined , and NaN
// truthCheck(
//   [
//     { user: "Tinky-Winky", sex: "male" },
//     { user: "Dipsy", sex: "male" },
//     { user: "Laa-Laa", sex: "female" },
//     { user: "Po", sex: "female" }
//   ],
//   "sex"
// );
// truthCheck(
//   [
//     { user: "Tinky-Winky", sex: "male" },
//     { user: "Dipsy" },
//     { user: "Laa-Laa", sex: "female" },
//     { user: "Po", sex: "female" }
//   ],
//   "sex"
// );
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
