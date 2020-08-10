//ES6: Use getters and setters to Control Access to an Object
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

//ES6: Import a Default Export

import subtract from './math_functions.js';
// Only change code above this line

subtract(7, 4);

//ES6: Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {});

//ES6: Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});

//ES6: Handle a Fulfilled Promise with then

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

//ES6: Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

//Basic Data Structures: Copy an Array with the Spread Operator

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//Basic Data Structures: Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());

//Basic Data Structures: Access Property Names with Bracket Notation

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory('apples'));

//Basic Data Structures: Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);

//Basic Data Structures: Check if an Object has a Property

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  if (users.hasOwnProperty('Alan') && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users) {
    return true;
  } else {
    return false;
  }
}

console.log(isEveryoneHere(users));

//Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function countOnline(obj) {
  // change code below this line
  let result = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      result++;
    }
  }
  return result;
  // change code above this line
}
console.log(countOnline(users));

//Basic Data Structures: Generate an Array of All Object Keys with Object.keys()

function getArrayOfUsers(obj) {
  // Only change code below this line
  let arr = [];
  arr = Object.keys(obj);
  return arr;
  // Only change code above this line
}

//Basic Data Structures: Modify an Array Stored in an Object

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: ['Sam', 'Kira', 'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  console.log(userObj.data.friends);
  userObj.data.friends.push(friend);
  // Only change code above this line
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));

//Basic Algorithm Scripting: Reverse a StringPassed

function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

reverseString('hello');

//Basic Algorithm Scripting: Factorialize a Number

function factorialize(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  num = sum;
  return num;
}

factorialize(5);

function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

factorialize(5);

//Basic Algorithm Scripting: Find the Longest Word in a String

function findLongestWordLength(str) {
  let arr = str.split(' ');
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

//Basic Algorithm Scripting: Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let myArray = [];

  arr.forEach(element => {
    let largest = element[0];
    for (let i = 0; i < element.length; i++) {
      // console.log(element[i], largest)
      if (element[i] > largest) {
        largest = element[i];
      }
    }

    myArray.push(largest);
  });

  return myArray;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

//Basic Algorithm Scripting: Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n');

//Basic Algorithm Scripting: Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let holder = '';
  for (let i = 0; i < num; i++) {
    holder += str;
  }

  return holder;
}

repeatStringNumTimes('abc', 3);

//with recursion
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

//Basic Algorithm Scripting: Truncate a String

function truncateString(str, num) {
  let myStr = str.slice(0, num);
  let myStr2 = `${myStr}...`;

  return `${str.length > num ? myStr2 : myStr}`;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

//Basic Algorithm Scripting: Finders Keepers

function findElement(arr, func) {
  let num = arr.find(func);
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//Basic Algorithm Scripting: Boo who
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

//Basic Algorithm Scripting: Title Case a Sentence

function titleCase(str) {
  let arr = str.split(' ');
  let arr2 = arr.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });

  return arr2.join(' ');
}

titleCase("I'm a little tea pot");

//Basic Algorithm Scripting: Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let arr3 = [...arr2];
  arr3.splice(n, 0, ...arr1);

  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Basic Algorithm Scripting: Falsy Bouncer

function bouncer(arr) {
  //use !! to convert to boolean
  let filtered = arr.filter(el => !!el);

  return filtered;
}

bouncer([7, 'ate', '', false, 9]);

//Basic Algorithm Scripting: Where do I Belong

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  let ind = arr.findIndex(el => el >= num);
  if (ind === -1) {
    return arr.length;
  } else return ind;
}

getIndexToIns([2, 5, 10], 15);

//Basic Algorithm Scripting: Mutations
function mutation(arr) {
  let myArray = arr[1].split('');

  let a = myArray.every(el => arr[0].toUpperCase().includes(el.toUpperCase()));

  return a;
}

mutation(['hello', 'hey']);
