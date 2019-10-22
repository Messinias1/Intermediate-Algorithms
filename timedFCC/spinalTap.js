function spinalCase(str) {
  var dash = str.replace(/\s|_/g, "-");
  console.log(dash.replace(/\B([a-z](?=[A-Z]))/g, "$1-").toLowerCase());
  return dash.replace(/\B([a-z](?=[A-Z]))/g, "$1-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("thisIsSpinalTap");
spinalCase("AllThe-small Things");

// 16m 5s

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".
