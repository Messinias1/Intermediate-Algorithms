function sym(args) {
  console.log([...arguments]);

  var arr = [];

  var one = [...arguments][0];
  var two = [...arguments][1];
  console.log(one);
  console.log(two);

  for (var i = 0; i < one.length; i++) {
    if (!two.includes(one[i])) {
      arr.push(one[i]);
    }
  }

  for (var j = 0; j < two.length; j++) {
    if (!one.includes(two[j])) {
      arr.push(two[j]);
    }
  }
  console.log(Array.from(new Set(arr.sort())));
  return Array.from(new Set(arr.sort()));
}

sym([1, 2, 3, 3], [5, 2, 1, 4]);

// Given two sets (for example set A = {1, 2, 3}and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

// sym([1, 2, 3], [5, 2, 1, 4])should return [3, 4, 5].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])should return [2, 3, 4, 6, 7].
