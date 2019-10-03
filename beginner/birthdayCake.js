function birthdayCake(ar) {
  var occurance = [];
  console.log(ar);
  var max = Math.max(...ar);
  console.log(max);
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] === max) {
      occurance.push(ar[i]);
    }
  }
  console.log(occurance.length);
  return occurance.length;
}
birthdayCake([4, 4, 1, 3]);
