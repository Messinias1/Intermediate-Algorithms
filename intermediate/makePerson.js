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

  this.setFullName = function(endName) {
    return (firstAndLast = endName);
  };
};

var bob = new Person("Bob Ross");
console.log(bob);
console.log(bob.setFirstName("Haskell"));
console.log(bob.setLastName("Curry"));
console.log(bob.setFullName("Bill Bob"));
console.log(bob.getFullName());
