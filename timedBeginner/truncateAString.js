function truncateString(str, num) {
  if (num == str.length || num > str.length) {
    return str;
  }
  var truncate = "";
  for (var i = 0; i < num; i++) {
    truncate = truncate.concat(str[i]);
  }
  return truncate + "...";
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);

// 5m 7s

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
