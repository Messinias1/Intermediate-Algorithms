var Person = function(first, last) {
  this.setFirstName = function(first) {
    return first + " " + this.getLastName();
  };

  this.setLastName = function(last) {
    return last;
  };

  this.setFullName = function(firstAndLast) {
    return firstAndLast;
  };

  this.getFirstName = function() {
    return "Bob";
  };

  this.getLastName = function() {
    return "Ross";
  };

  this.getFullName = function() {
    return first + " " + last;
  };
};

var bob = new Person("Bob", "Ross");
console.log(bob.setFirstName("Haskell"));
console.log(bob.getFullName());
