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
}
convertHTML("Dolce &  Gabbana");

// entities: & = &amp;  < = &lt;  > = &gt; '' = &quot; ' = &apos

// Convert the characters &, <, >, "(double quote), and '(apostrophe), in a string to their corresponding HTML entities.
