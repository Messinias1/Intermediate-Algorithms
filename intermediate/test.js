function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;

  this.updateName = function(newName) {
    return (this.name = newName);
  };

  this.getName = function() {
    return this.name;
  };

  this.getFullName = function() {
    return this.name + " " + this.lastName;
  };
}

let Carl = new Person("Carl", "Kakisis");
console.log(Carl);
console.log(Carl.updateName("Sven"));
// console.log(Carl.getName());
console.log(Carl.getFullName());
