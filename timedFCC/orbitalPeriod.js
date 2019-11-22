function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var i = 0; i < arr.length; i++) {
    var timeInSeconds =
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM);
    arr[i].avgAlt = arr[i].orbitalPeriod;
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = Math.round(timeInSeconds);
  }
  console.log(arr);
  return arr;
}

orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);
// 6m 48s
