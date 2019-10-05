function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;

  this.updateName = function(newName) {
    return (this.name = newName);
  };

  this.updateLastName = function(newLastName) {
    return (this.lastName = newLastName);
  };

  this.updateFullName = function(firstAndLast) {
    return (this.getFullName = firstAndLast);
  };

  this.getName = function() {
    return this.name;
  };

  this.getLastName = function() {
    return this.lastName;
  };

  this.getFullName = function() {
    return this.name + this.lastName;
  };
}

let Carl = new Person("Carl", "Kakisis");
console.log(Carl.updateFullName("Sven Ostman"));
console.log(Carl.getFullName());
