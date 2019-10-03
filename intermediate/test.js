// var f = function(y) {
//   console.log("f:", y);
// };

// var getF = function(x) {
//   console.log("getF:", x);
//   return f;
// };

// getF(1)(2);

// function addTogether(x) {
//   return function(y) {
//     console.log(x + y);
//     return x + y;
//   };
// }
// addTogether(2)(5);

function addTogether() {
  var args = [...arguments];

  if (args.length === 2) {
    function isNum() {
      if (typeof args[0] === "number" && typeof args[1] === "number") {
        console.log(args[0] + args[1]);
        return args[0] + args[1];
      }
    }
    return isNum(args);
  }

  if (args.length === 1 && typeof args[0] === "number") {
    return function sumTwoAnd(num) {
      if (typeof num === "number") {
        console.log(args[0] + num);
        return args[0] + num;
      }
    };
  } else return undefined;
}

addTogether(2, 6);

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3)should return 5, and addTogether(2)should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3)returns 5.
// If either argument isn't a valid number, return undefined.
