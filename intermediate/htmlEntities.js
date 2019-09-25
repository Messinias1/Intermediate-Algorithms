function convertHTML(str) {
  var multiple = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  console.log(multiple);
  for (var char in multiple) {
    console.log(char); // object keys
    var before = char; // setting before to object keys
    var after = multiple[char]; // setting after to key values
    console.log(after);
    var pattern = new RegExp(before, "g"); // regex for all keys
    str = str.replace(pattern, after); // replace obj keys with their values in the string
  }
  console.log(str);
  return str;

  // var strArr = str.split(" ");
  // console.log(strArr);
  // for (var i = 0; i < strArr.length; i++) {
  //   switch (strArr[i]) {
  //     case "&":
  //       strArr[i] = "&amp";
  //       break;
  //     case "<":
  //       strArr[i] = "&lt";
  //       break;
  //     case ">":
  //       strArr[i] = "&gt;";
  //       break;
  //     case "''":
  //       strArr[i] = "&quot";
  //       break;
  //     case "'":
  //       strArr[i] = "&apos";
  //   }
  // }
  // console.log(strArr.join(" "));
  // return strArr.join(" ");
}
convertHTML("Dolce & Gabbana");

// entities: & = &amp;  < = &lt;  > = &gt; '' = &quot; ' = &apos

// Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities.
