function translatePigLatin(str) {
  console.log(str[0]);

  var vowels = /[aeiou]/;

  if (str[0].match(vowels)) {
    str = str + "way";
    console.log(str);
    return str;
  }

  if (!str.match(vowels)) {
    str = str + "ay";
    console.log(str);
    return str;
  }

  if (!str[0].match(vowels)) {
    console.log("true");
    var index = str.match(vowels).index;
    // console.log(index);
    str = str.substring(index, str.length) + str.substring(0, index) + "ay";
    console.log(str);
    return str;
  }
}

translatePigLatin("schwartz");

// 26m 46s

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// If a word does not contain a vowel, just add "ay" to the end.
// Input strings are guaranteed to be English words in all lowercase.

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
