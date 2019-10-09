function sym(args) {
  var arr = [];
  var smallArr = [];

  if ([...arguments].length == 2) {
    var one = [...arguments][0];
    var two = [...arguments][1];

    for (var i = 0; i < one.length; i++) {
      if (!two.includes(one[i])) {
        smallArr.push(one[i]);
      }
    }

    for (var j = 0; j < two.length; j++) {
      if (!one.includes(two[j])) {
        smallArr.push(two[j]);
      }
    }
    return Array.from(new Set(smallArr.sort()));
  }

  if ([...arguments].length == 3) {
    for (var i = 0; i < [...arguments].length; i = i + 2) {
      if ([i] < [...arguments].length - 1) {
        var mergedArrs = Array.from(new Set([...arguments][i])).concat(
          Array.from(new Set([...arguments][i + 1]))
        );
        arr.push(mergedArrs);
        const uniqueArray = mergedArrs.filter(item => {
          return mergedArrs.lastIndexOf(item) == mergedArrs.indexOf(item);
        });
        var set = Array.from(new Set([...arguments][2]));
        var newArr = uniqueArray.concat(set);
        const finalArray = newArr.filter(item => {
          return newArr.lastIndexOf(item) == newArr.indexOf(item);
        });
        console.log(finalArray);
        return finalArray;
      }
    }
  }

  if ([...arguments].length == 4) {
    var argsArr = [];
    for (var i = 0; i < [...arguments].length; i++) {
      var tester = Array.from(new Set([...arguments][i]));
      argsArr.push(tester);
    }
    console.log(argsArr);
    // array1 = array1.filter(val => !array2.includes(val));
    argsArr.reduce((acc, compare) => {
      var merger = acc.concat(compare);
      var newStart = merger.filter(item => {
        return merger.lastIndexOf(item) == merger.indexOf(item);
      });
      console.log(newStart);
    });
  }
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); // [2, 3, 4, 6, 7]
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); // [1, 2, 4, 5, 6, 7, 8, 9]

// Given two sets (for example set A = {1, 2, 3}and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

// sym([1, 2, 3], [5, 2, 1, 4])should return [3, 4, 5].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])should return [2, 3, 4, 6, 7].
