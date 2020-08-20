// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumber = function (number) {
  let num = number + '';
  let n = num.split('');
  //create an array
  let arr = [];

  //iterate through and unshift to arry
  n.forEach((i) => {
    arr.unshift(i);
  });

  const res = arr.join('');
  return res;
  //combine the array to string
};

const x = 32242;
console.log(reverseNumber(x));
