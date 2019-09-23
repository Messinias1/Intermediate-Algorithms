function myReplace(str, before, after) {
  var strArray = str.split(" ");
  var Before = before;
  var After = after;
  console.log(strArray);
  console.log(Before);
  console.log(After);

  var newAfter = After.split("");

  if (Before[0] === Before[0].toUpperCase()) {
    newAfter[0] = newAfter[0].toUpperCase();
    console.log(newAfter.join(""));
  }

  if (strArray.includes(Before)) {
    console.log(str.replace(Before, newAfter.join("")));
  }
}

myReplace("I Ate a pizza", "Ate", "made");
