function diffArray(arr1, arr2) {
    var newArr = [];
  
    function compare(first, second) {
      console.log(second)
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          newArr.push(first[i])
        }
        // console.log(first[i])
      }
    }
    compare(arr1, arr2)
    compare(arr2, arr1)
    console.log(newArr)
    return newArr
  }
  
  diffArray(["dog", 2, 3, 5], [1, 2, 3, 4, 5]);