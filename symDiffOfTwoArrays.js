function diffArray(arr1, arr2) {
    var newArr = [];
  
    // function compare(first, second) {
    //   console.log(second)
    //   for (var i = 0; i < first.length; i++) {
    //     if (second.indexOf(first[i]) === -1) {
    //       newArr.push(first[i])
    //     }
    //     // console.log(first[i])
    //   }
    // }
    // compare(arr1, arr2)
    // compare(arr2, arr1)
    // console.log(newArr)

    // for (var i = 0; i < arr1.length; i++) {
    //   if (arr2.indexOf(arr1[i]) === -1) {
    //     newArr.push(arr1[i])
    //   }
    // }

    // for (var i = 0; i < arr2.length; i++) {
    //   if (arr1.indexOf(arr2[i]) === -1) {
    //     newArr.push(arr2[i])
    //   }
    // }

    
    return newArr
  }
  
  diffArray(["dog", 2, 3, 5], [1, 2, 3, 4, 5]);