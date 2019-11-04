function telephoneCheck(str) {
  var trimmedNum = str.replace(/[^0-9()]/g, "");
  var dashesIncluded = str.replace(/[^0-9()-]/g, "");
  var spacesIncluded = str.replace(/[^0-9()-\s]/g, "");

  console.log(spacesIncluded[5]);
  console.log(spacesIncluded.length);

  if (trimmedNum.length == 10) {
    console.log("true");
    return true;
  } else if (
    (trimmedNum.length == 12 && trimmedNum.indexOf(")") == 4) ||
    (trimmedNum.length == 11 && trimmedNum[0] == 1) ||
    (trimmedNum.length == 13 && dashesIncluded[0] == 1)
  ) {
    return true;
  } else if (
    trimmedNum.length > 11 ||
    (spacesIncluded.length == 14 && spacesIncluded[5] === ")")
  ) {
    return false;
  } else return false;
}

telephoneCheck("1 555)555-5555");

// function telephoneCheck(str) {
//   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//   return regex.test(str);
// }
// telephoneCheck("555-555-5555");
