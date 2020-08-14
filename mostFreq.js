// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const mostFreq = function (arr) {
  let freqObj = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (freqObj[item] === undefined) {
      freqObj[item] = 1;
    } else {
      freqObj[item] += 1;
    }
  }

  let max = 0;
  let k;

  for (let key in freqObj) {
    if (freqObj[key] > max) {
      max = freqObj[key];
      k = key;
    }
  }
  return `${k} (${max} times)`;
};

var arr1 = [3, 2, 3, 'a', 3, 2, 4, 9, 3];

console.log(mostFreq(arr1));
