// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

const objKeys = function (obj) {
  let string = '';

  for (let key in obj) {
    console.log(key.length - 1);
    string += `${key}, `;
  }
  return string;
};

var student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

console.log(objKeys(student));
