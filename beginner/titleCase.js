function titleCase(str) {
  var strArr = str.split(" ");
  console.log(strArr);

  var capsArr = strArr.map(x =>
    x.toLowerCase().replace(x[0].toLowerCase(), x[0].toUpperCase())
  );
  console.log(capsArr.join(" "));
  return capsArr.join(" ");
}
titleCase("I'm a little tea pot");

//   Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
