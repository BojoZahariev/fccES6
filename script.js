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

//Basic Algorithm Scripting: Chunky Monkey

function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

//Object Oriented Programming: Create a Method on an Object

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function() {
    return `This dog has ${dog.numLegs} legs.`;
  }
};

dog.sayLegs();

//Object Oriented Programming: Make Code More Reusable with the this Keyword

let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: function() {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

//Object Oriented Programming: Define a Constructor Function

function Dog() {
  this.name = 'Albert';
  this.color = 'blue';
  this.numLegs = 4;
}

//Object Oriented Programming: Use a Constructor to Create Objects

function Dog() {
  this.name = 'Rupert';
  this.color = 'brown';
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

//Object Oriented Programming: Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('Chocho', 'black');

dog.sayLegs();

//Object Oriented Programming: Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House; //true

//Object Oriented Programming: Understand Own Properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

//Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog('Snoopy');

//Object Oriented Programming: Iterate Over All Properties

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//Object Oriented Programming: Understand the Constructor Property

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

//Object Oriented Programming: Change the Prototype to a New Object

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log('nom nom nom');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }
};

//Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log('nom nom nom');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }
};

//Object Oriented Programming: Understand Where an Object’s Prototype Comes From

function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);

//Object Oriented Programming: Understand the Prototype Chain

function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');

Dog.prototype.isPrototypeOf(beagle); // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log('nom nom nom');
  }
};

//Object Oriented Programming: Inherit Behaviors from a Supertype

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log('nom nom nom');
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

//Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log('nom nom nom');
  }
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

//Object Oriented Programming: Reset an Inherited Constructor Property

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

//Object Oriented Programming: Add Methods After Inheritance

function Animal() {}
Animal.prototype.eat = function() {
  console.log('nom nom nom');
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof!');
};

let beagle = new Dog();

//Object Oriented Programming: Override Inherited Methods

function Bird() {}

Bird.prototype.fly = function() {
  return 'I am flying!';
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return 'Alas, this is a flightless bird.';
};

let penguin = new Penguin();
console.log(penguin.fly());

//Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name: 'Donald',
  numLegs: 2
};

let boat = {
  name: 'Warrior',
  type: 'race-boat'
};

// Only change code below this line

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log('Gliding, wooosh!');
  };
};

glideMixin(bird);
glideMixin(boat);

//Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}

//Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)

(function() {
  console.log('A cozy nest is ready');
})();

//Object Oriented Programming: Use an IIFE to Create a Module

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log('Singing to an awesome tune');
  };
};

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log('Singing to an awesome tune');
      };
    }
  };
})();

//Functional Programming: Learn About Functional Programming

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line

//Functional Programming: Understand Functional Programming Terminology

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

//Functional Programming: Understand the Hazards of Using Imperative Code

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {
  // Only change code below this line

  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
};

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

//Functional Programming: Avoid Mutations and Side Effects Using Functional Programming

// The global variable
var fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let result = fixedValue + 1;
  return result;
  // Only change code above this line
}

//Functional Programming: Pass Arguments to Avoid External Dependence in a Function

// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer(num) {
  return num + 1;

  // Only change code above this line
}

//Functional Programming: Refactor Global Variables Out of Functions

// The global variable
var bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae'
];

// Change code below this line
function add(arr, bookName) {
  let newList = [...arr];
  newList.push(bookName);
  return newList;

  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  var book_index = arr.indexOf(bookName);
  let newList = [...arr];
  if (book_index >= 0) {
    newList.splice(book_index, 1);

    return newList;

    // Change code above this line
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

//Functional Programming: Use the map Method to Extract Data from an Array

// The global variable
var watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
    Plot:
      'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot:
      'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True'
  }
];

// Only change code below this line

var ratings = watchList.map(element => {
  return { title: element['Title'], rating: element['imdbRating'] };
});

// Only change code above this line

console.log(JSON.stringify(ratings));

//Functional Programming: Implement map on a Prototype

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line

  this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

//Functional Programming: Use the filter Method to Extract Data from an Array

// The global variable
var watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
    Plot:
      'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot:
      'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True'
  }
];

// Only change code below this line

var filteredList = watchList
  .filter(el => el['imdbRating'] >= 8)
  .map(el => {
    return { title: el['Title'], rating: el['imdbRating'] };
  });

// Only change code above this line

console.log(filteredList);

//Functional Programming: Implement the filter Method on a Prototype

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  this.forEach(el => {
    if (callback(el)) {
      newArray.push(el);
    }
  });

  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

//Functional Programming: Return Part of an Array Using the slice Method

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  let arr = anim.slice(beginSlice, endSlice);
  return arr;

  // Only change code above this line
}
var inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
sliceArray(inputAnim, 1, 3);

//Functional Programming: Remove Elements from an Array Using slice Instead of splice

function nonMutatingSplice(cities) {
  // Only change code below this line
  let arr = cities.slice(0, 3);
  return arr;

  // Only change code above this line
}
var inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
nonMutatingSplice(inputCities);

//Functional Programming: Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
  // Only change code below this line

  return original.concat(attach);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
