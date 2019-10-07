function translatePigLatin(str) {
  var vowel = /[aeiou]/gi;
  console.log(str.match(vowel));

  if (str[0].match(vowel)) {
    console.log((str = str + "way"));
    return (str = str + "way");
  }

  if (str.match(vowel)) {
    var index = str.indexOf(str.match(vowel)[0]);
    console.log(index);
    console.log(str.slice(0, index));
    console.log(
      (str =
        str
          .split("")
          .slice(index)
          .join("") +
        str.slice(0, index) +
        "ay")
    );
    return (str =
      str
        .split("")
        .slice(index)
        .join("") +
      str.slice(0, index) +
      "ay");
  } else return str + "ay";
}

// translatePigLatin("paragraphs"); // should return "aragraphspay".
// translatePigLatin("apple");
translatePigLatin("sly");
// translatePigLatin("pro"); // opray

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase
