function spinalCase(str) {
  var modded = str.replace(/\s|_/g, "-");
  console.log(modded.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase());
}

spinalCase("The Andy_Griffith_Show");
