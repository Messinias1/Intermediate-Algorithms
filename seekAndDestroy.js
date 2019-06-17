function destroyer(arr) {
    // Remove all the values
    let args = [...arguments]
  
    args.splice(0, 1)
  
  
    return arr.filter(function(value) {
      return args.indexOf(value) === -1
    })
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);