function pairElement(str) {
  var arr = [];
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        arr.push(["A", "T"]);
        break;
      case "T":
        arr.push(["T", "A"]);
        break;
      case "C":
        arr.push(["C", "G"]);
        break;
      case "G":
        arr.push(["G", "C"]);
        break;
      default:
        return str;
    }
  }
  console.log(arr);
  return arr;
}

pairElement("GCG");

// 7m 42s

// AT TA CG GC

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
