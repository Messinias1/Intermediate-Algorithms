function updateInventory(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i][1]);
    for (var j = 0; j < arr2.length; j++) {
      console.log(arr2[j][1]);
      if (arr1[i][1] == arr2[j][1]) {
        console.log((arr1[i][0] = arr1[i][0] + arr2[j][0]));
      } else if (arr2[j].includes(arr1)) {
        arr1.push(arr2[j]);
      }
    }
  }
  console.log(arr1);
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

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
