function updateInventory(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    for (var j = 0; j < arr2.length; j++) {
      console.log("j", arr2[j][1]);
      if (arr1[i][1] == arr2[j][1]) {
        console.log((arr1[i][0] = arr1[i][0] + arr2[j][0]));
      }
    }
  }
  var concatted = arr1.concat(arr2);
  concatted.sort(function(a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (b[1] < a[1]) {
      return 1;
    }
    return 0;
  });
  var filtered = concatted.filter(function(item, index, inputArray) {
    return inputArray.indexOf(item) == index;
  });
  console.log(filtered);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
// u should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
