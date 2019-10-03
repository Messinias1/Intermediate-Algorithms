function titleCase(str) {
  var lower = str.toLowerCase().split(" ");

  var mapped = lower.map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  });
  console.log(mapped.join(" "));
  return mapped.join(" ");
}

titleCase("I'm a little tea pot");
