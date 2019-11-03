function telephoneCheck(str) {
  var trimmedNum = str.replace(/[^0-9()\s-]/g, "");
  console.log(trimmedNum[0]);
  console.log(trimmedNum.length);
  if (
    trimmedNum.length == 10 ||
    trimmedNum.length == 13 ||
    (trimmedNum.length == 11 && trimmedNum[0] == 1) ||
    (trimmedNum.length == 14 && trimmedNum[0] == 1)
  ) {
    console.log("true");
    return true;
  } else return false;
}

telephoneCheck("1 555-555-5555");
