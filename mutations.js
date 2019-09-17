function mutation(arr) {
  let first = arr[0].toLowerCase().split("");
  let second = arr[1].toLowerCase().split("");
  console.log(first);
  console.log(second);

  for (var i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1) return false;
  }
  return true;
}

mutation(["HELLO", "HEY"]);
