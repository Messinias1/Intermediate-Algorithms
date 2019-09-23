function mutation(arr) {
  var first = arr[0].toLowerCase().split("");
  var second = arr[1].toLowerCase().split("");
  //   console.log(first, second);

  var compare = second.map(letter => first.includes(letter));

  console.log(compare);
  if (compare.includes(false)) {
    return false;
  } else return true;
}

mutation(["hello", "hey"]);
