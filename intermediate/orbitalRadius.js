function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var alt = arr[i].avgAlt;
    // 2π 42241^3 / 398600.4418
    var OP = 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + alt, 3) / GM);
    arr[i].avgAlt = Math.round(OP);

    arr[i].orbitalPeriod = arr[i].avgAlt;
    delete arr[i].avgAlt;
  }

  newArr.push(arr);

  console.log(newArr[0]);
  return newArr[0];
}

orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);
