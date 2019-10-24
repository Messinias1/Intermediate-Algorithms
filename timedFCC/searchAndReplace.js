function myReplace(str, before, after) {
  var lower = /[a-z]/;
  var upper = /[A-Z]/;

  if (before[0].match(lower)) {
    // console.log(
    //   (str = str.replace(
    //     before,
    //     after[0].toLowerCase() + after.substring(1, after.length)
    //   ))
    // );
    return (str = str.replace(
      before,
      after[0].toLowerCase() + after.substring(1, after.length)
    ));
  }
  if (before[0].match(upper)) {
    // console.log(
    //   (str = str.replace(
    //     before,
    //     after[0].toUpperCase() + after.substring(1, after.length)
    //   ))
    // );
    return (str = str.replace(
      before,
      after[0].toUpperCase() + after.substring(1, after.length)
    ));
  }
  //   console.log((str = str.replace(before, after)));
}

myReplace("His name is Tom", "Tom", "john");

// 7m 19s
