function pairElement(str) {
  var strand = [];
  // gc cg at ta
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
    switch (str[i]) {
      case "G":
        strand.push(["G", "C"]);
        break;
      case "C":
        strand.push(["C", "G"]);
        break;
      case "A":
        strand.push(["A", "T"]);
        break;
      case "T":
        strand.push(["T", "A"]);
        break;
    }
  }

  console.log(strand);
  return strand;
}

pairElement("ATCGA");
