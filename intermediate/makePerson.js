var Person = function(firstName, lastName, firstAndLast) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.firstAndLast = firstAndLast;

  this.setFirstName = function(first) {
    return (this.firstName = first);
  };

  this.setLastName = function(last) {
    return (this.lastName = last);
  };

  this.setFullName = function(firstAndLast) {
    return (this.getFullName = firstAndLast);
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + " " + lastName;
  };
};

var bob = new Person("Bob", "Ross", "Bob Ross");
console.log(bob);
console.log(bob.firstAndLast.split(" ")[0]);
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFirstName());
