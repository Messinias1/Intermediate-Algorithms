var people = [
  {
    name: "Carl",
    age: 24
  },
  { name: "Bill", age: 40 }
];

var compare = { name: "Carl" };

var keys = Object.keys(compare);
console.log("compare keys :", compare[keys]);

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
  console.log("Objects var: ", objects);
  for (var key in objects) {
    console.log("key :", key);
    console.log("key's value :", objects[key]);
    if (objects.hasOwnProperty(keys)) {
      arr.push(objects);
      console.log(arr);
    }
  }
}

// for (var i = 0; i < people.length; i++) {
//   var objects = people[i];
//   console.log("objects: ", objects);

//   if (objects.hasOwnProperty(compare[keys])) {
//     arr.push(objects[keys]);
//   }
// }
// console.log(arr);

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
