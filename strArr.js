// Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

const strArr = function (string) {
  const str = string.split(' ');

  return str;
};

console.log(strArr('Robin Singh'));
