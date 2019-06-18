function translatePigLatin(str) { 

    const vowel = /[aeiou]/gi
    let translated = ''
    const vowelIndex = str.indexOf(str.match(vowel)[0])
  
    if (str[0].match(vowel)) {
    translated = str + 'way'
    console.log(translated)
  } else {
    translated = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay'
  }
    console.log(translated)
    return translated
  }
  
  translatePigLatin("apple")
  translatePigLatin("california")