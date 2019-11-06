function confirmEnding(str, target) {
  var reversedStr = str
    .split("")
    .reverse()
    .join("");
  var reversedTarget = target
    .split("")
    .reverse()
    .join("");
  if (reversedStr.substring(0, reversedTarget.length) == reversedTarget) {
    console.log("true");
    return true;
  } else return false;
}

confirmEnding("Bastian", "n");

// 5m 40s

//   Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
