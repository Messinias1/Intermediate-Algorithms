function mutation(arr) {
  var zero = arr[0].toLowerCase().split("");
  console.log(zero);
  var one = arr[1].toLowerCase().split("");
  console.log(one);

  var each = one.every(letter => {
    return zero.includes(letter);
  });
  console.log(each);
  if (each) {
    return true;
  } else return false;
}

mutation(["Alien", "hey"]);

// 11m 28s

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
