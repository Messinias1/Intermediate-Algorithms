function translatePigLatin(str) { 

  const vowel = /[aeiou]/gi
  let translated = ''

  if (str[0].match(vowel)) {
  translated = str + 'way'
  console.log(translated)

} else if (!str.match(vowel)) {
  translated = str + 'ay'
  
} else {
  const vowelIndex = str.indexOf(str.match(vowel)[0])
  translated = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay'
}
  console.log(translated)
  return translated
}

translatePigLatin("sly")
translatePigLatin("apple")
translatePigLatin("california")

// function translatePigLatin(str) { 

//   const vowel = /[aeiou]/gi
//   let splitStr = str.split('')
//   console.log(splitStr)
//   console.log(splitStr.join(''))

//   if (splitStr[0].match(vowel)) {
//     console.log(splitStr[0])
//     console.log(splitStr.join('') + 'way')
//     return splitStr.join('') + 'way'
//   }

//   for (let i = 0; i < splitStr.length; i++) {
//     if ()
//   }
// }

// translatePigLatin('apple')