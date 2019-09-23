const STRAND = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

function pairElement(str) {
  //   var strand = [];
  // gc cg at ta
  //   for (var i = 0; i < str.length; i++) {
  //     console.log(str[i]);
  //     switch (str[i]) {
  //       case "G":
  //         strand.push(["G", "C"]);
  //         break;
  //       case "C":
  //         strand.push(["C", "G"]);
  //         break;
  //       case "A":
  //         strand.push(["A", "T"]);
  //         break;
  //       case "T":
  //         strand.push(["T", "A"]);
  //         break;
  //       default:
  //         str[i].slice();
  //     }
  //   }

  //   console.log(strand);
  console.log(str);
  console.log(str.split("").map(letter => [letter, STRAND[letter]]));
  return str.split("").map(letter => [letter, STRAND[letter]]);
}

pairElement("ATCGA");
