function confirmEnding(str, target) {
  var strArr = str
    .split("")
    .reverse()
    .join("");
  console.log(strArr);
  var tarArr = target
    .split("")
    .reverse()
    .join("");
  console.log(tarArr);

  console.log(strArr.substring(0, tarArr.length));

  if (strArr.substring(0, tarArr.length) === tarArr) {
    console.log("true");
    return true;
  } else if (strArr.substring(0, tarArr.length) !== tarArr) {
    console.log("false");
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");

// Check if a string (first argument, str) ends with the given target string (second argument, target).
