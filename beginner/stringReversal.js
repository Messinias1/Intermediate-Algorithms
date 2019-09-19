function reverseString(str) {
  console.log(str);
  var reversed = str
    .split("")
    .reverse()
    .join("");
  console.log(reversed);
  return reversed;
}

reverseString("hello");
