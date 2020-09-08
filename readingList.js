// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

const readingList = function (arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];

    for (let key in obj) {
      result = result + key + '' + obj[key] + ', ';
    }
  }

  return result;
};

console.log(readingList(library));
