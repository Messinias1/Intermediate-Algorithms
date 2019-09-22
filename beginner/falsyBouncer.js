function bouncer(arr) {
  console.log("ORIGINAL ARRAY", arr);

  function isNotFalsy(value) {
    if (
      value !== false ||
      value !== null ||
      value !== "" ||
      value !== 0 ||
      value !== undefined ||
      value !== NaN
    ) {
      return value;
    }
  }

  var filtered = arr.filter(isNotFalsy);
  console.log("FILTERED", filtered);

  return filtered;
}

bouncer([null, "ate", "", false, undefined, 0]);

//   Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.
