function convertToRoman(num) {
  var integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var numerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  var numeralArr = [];
  var count = 0;

  while (num >= integers[0]) {
    count++;
    num = num - integers[0];
    console.log(integers[0] * count);

    console.log("numeral", numerals[0].repeat(count));
  }
  numeralArr.push(numerals[0].repeat(count));
  count = 0;
  while (num >= integers[1]) {
    count++;
    num = num - integers[1];
    console.log(integers[1] * count);

    console.log("numeral", numerals[1].repeat(count));
  }
  numeralArr.push(numerals[1].repeat(count));
  count = 0;
  while (num >= integers[2]) {
    count++;
    num = num - integers[2];
    console.log(integers[2] * count);

    console.log("numeral", numerals[2].repeat(count));
  }
  numeralArr.push(numerals[2].repeat(count));
  count = 0;
  while (num >= integers[3]) {
    count++;
    num = num - integers[3];
    console.log(integers[3] * count);

    console.log("numeral", numerals[3].repeat(count));
  }
  numeralArr.push(numerals[3].repeat(count));
  count = 0;
  while (num >= integers[4]) {
    count++;
    num = num - integers[4];
    console.log(integers[4] * count);

    console.log("numeral", numerals[4].repeat(count));
  }
  numeralArr.push(numerals[4].repeat(count));
  count = 0;
  while (num >= integers[5]) {
    count++;
    num = num - integers[5];
    console.log(integers[5] * count);

    console.log("numeral", numerals[5].repeat(count));
  }
  numeralArr.push(numerals[5].repeat(count));
  count = 0;
  while (num >= integers[6]) {
    count++;
    num = num - integers[6];
    console.log(integers[6] * count);

    console.log("numeral", numerals[6].repeat(count));
  }
  numeralArr.push(numerals[6].repeat(count));
  count = 0;
  while (num >= integers[7]) {
    count++;
    num = num - integers[7];
    console.log(integers[7] * count);

    console.log("numeral", numerals[7].repeat(count));
  }
  numeralArr.push(numerals[7].repeat(count));
  count = 0;
  while (num >= integers[8]) {
    count++;
    num = num - integers[8];
    console.log(integers[8] * count);

    console.log("numeral", numerals[8].repeat(count));
  }
  numeralArr.push(numerals[8].repeat(count));
  count = 0;
  while (num >= integers[9]) {
    count++;
    num = num - integers[9];
    console.log(integers[9] * count);

    console.log("numeral", numerals[9].repeat(count));
  }
  numeralArr.push(numerals[9].repeat(count));
  count = 0;
  while (num >= integers[10]) {
    count++;
    num = num - integers[10];
    console.log(integers[10] * count);

    console.log("numeral", numerals[10].repeat(count));
  }
  numeralArr.push(numerals[10].repeat(count));
  count = 0;
  while (num >= integers[11]) {
    count++;
    num = num - integers[11];
    console.log(integers[11] * count);

    console.log("numeral", numerals[11].repeat(count));
  }
  numeralArr.push(numerals[11].repeat(count));
  count = 0;
  while (num >= integers[12]) {
    count++;
    num = num - integers[12];
    console.log(integers[12] * count);

    console.log("numeral", numerals[12].repeat(count));
  }
  numeralArr.push(numerals[12].repeat(count));
  console.log(numeralArr);

  var filtered = numeralArr.filter(function(el) {
    return el != "";
  });
  console.log(filtered.join(""));
  return filtered.join("");
}

convertToRoman(3999);
