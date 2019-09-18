function myReplace(str, before, after) {
  var strArray = str.split(" ");
  var Before = before;
  var After = after;
  console.log(strArray);
  console.log(Before.split(""));
  console.log(Before.split("").join(""));
  console.log(After);

  if (strArray.includes(Before)) {
    console.log(str.replace(Before, After));
  }
}

myReplace("I Ate a pizza", "Ate", "made");
