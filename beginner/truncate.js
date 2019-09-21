function truncateString(str, num) {
  var strArr = str.split("");
  console.log(strArr);
  console.log(str.split("").length);
  console.log(num);

  if (strArr.length > num) {
    console.log("true");
    console.log(strArr.slice(0, num).join("") + "...");
    return strArr.slice(0, num).join("") + "...";
  }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ...ending.
