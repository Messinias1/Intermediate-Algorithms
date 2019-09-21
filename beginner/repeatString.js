function repeatStringNumTimes(str, num) {
  var repeatedStr = [];

  for (var i = 0; i < num; i++) {
    repeatedStr.push(str);
  }
  console.log(repeatedStr.join(""));
  return repeatedStr.join("");
}

repeatStringNumTimes("abc", 3);
