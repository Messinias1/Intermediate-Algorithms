function addTogether(a, b) {
  if (arguments.length === 1 && typeof a !== "number") {
    console.log("undefined");
    return undefined;
  } else if (arguments.length === 1) {
    return function(b2) {
      if (typeof b2 !== "number") {
        return undefined;
      } else {
        console.log(a + b2);
        return a + b2;
      }
    };
  } else if (typeof a !== "number" || typeof b !== "number") {
    console.log("undefined");
    return undefined;
  } else {
    console.log(a + b);
    return a + b;
  }
}

addTogether("yo");
//40m 19s

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
