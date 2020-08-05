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
