var Person = function(firstAndLast) {
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };
  this.getFullName = function() {
    return firstAndLast;
  };
  this.setFirstName = function(first) {
    return (firstAndLast = first + " " + firstAndLast.split(" ")[1]);
  };
  this.setLastName = function(last) {
    return (firstAndLast = firstAndLast.split(" ")[0] + " " + last);
  };
  this.setFullName = function(fullName) {
    return (firstAndLast = fullName);
  };
};

var bob = new Person("Bob Ross");
console.log(bob.getFirstName());
// 31m 29s

// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
