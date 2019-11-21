function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  console.log(arr[0].avgAlt);
  var timeInSeconds =
    2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[0].avgAlt, 3) / GM);
  console.log(Math.round(timeInSeconds));
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
