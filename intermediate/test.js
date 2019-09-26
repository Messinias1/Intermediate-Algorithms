var people = [
  {
    name: "Carl",
    age: 24
  },
  { name: "Bill", age: 40 }
];

for (var i = 0; i < people.length; i++) {
  console.log(Object.keys(people[i]));
}
