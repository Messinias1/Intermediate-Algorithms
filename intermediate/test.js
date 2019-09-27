var people = [
  {
    name: "Carl",
    age: 24
  },
  { name: "Bill", age: 40 }
];

var compare = { name: "Carl", age: 24, height: 170 };

var keys = Object.keys(compare);
console.log(keys);

var arr = [];

// GOOGLE THIS: How to get all properties values of a Javascript Object (without knowing the keys)?

// for (const key of Object.keys(people)) {
//   const val = people[key];
//   console.log(val);
//   console.log(Object.keys(val));
//   if (keys.hasOwnProperty(Object.keys(val))) {
//     console.log("true");
//   }
// }

for (var i = 0; i < people.length; i++) {
  var objects = people[i];
  console.log(objects);
  for (var key in objects) {
    console.log(key);
    console.log(objects[key]);
    if (keys.hasOwnProperty(objects[key])) {
      arr.push(objects);
      console.log(arr);
    }
  }
}

// for (var key in people) {
//   if (Object.prototype.hasOwnProperty.call(people, key)) {
//     var val = people[key];
//     console.log("val", val);
//   }
// }

// get values
// var keyArray = people.map(key => {
//   console.log("key: ", key);
//   for (var i in key) {
//     var value = key[i];
//     console.log("value: ", value);
//   }
// });
