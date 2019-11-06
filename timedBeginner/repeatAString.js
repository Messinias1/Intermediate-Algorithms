function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    var newStr = "";
    for (var i = 0; i < num; i++) {
      //   console.log(newStr.concat(str));
      newStr = newStr.concat(str);
    }
    console.log(newStr);
    return newStr;
  }
}

repeatStringNumTimes("abc", 3);

// 12m 42s

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
