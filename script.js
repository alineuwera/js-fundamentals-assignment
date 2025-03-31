//// 1.  STRING TRANSFORMATIONS ///

///// a. Capitalizes the first letter of a string.

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("aline"));

///// b. Reverses agiven string.

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("54321"));

//// c. Is palindrome (reads the same backward as forward)

function isPalindrome(str) {
  const reversedWord = str.split("").reverse().join("");
  return str === reversedWord;
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));

///// d. Counts the number of words in a given string.

function wordCount(str) {
  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}
console.log(wordCount("hello world!!"));
console.log(wordCount(""));
console.log(wordCount("hello"));

/// e.  Convers a string to snakecase.

function toSnakeCase(str) {
  return str.trim().replace(/\s+/g, "_").toLowerCase();
}
console.log(toSnakeCase("Hello world"));

//// f. converts a string to camelCase

function toCamelCase(str) {
  return str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join("");
}
console.log(toCamelCase("convert to camel case"));

//// g. finds the longest word in a given string

function findLongestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(findLongestWord("Today is the day of blessings!!"));

///// h. function that counts the number of times a specific letter appeara in a string

function countLetter(str, letter) {
  let count = 0;

  for (let char of str) {
    if (char === letter) {
      count++;
    }
  }

  return count;
}
console.log(countLetter("hello world!!", "l"));

///// 2. ARRAY TRANSFORMATIONS /////
/// a. doubles every number in an array

function doubleNumberInArray(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleNumberInArray([1, 2, 3, 4, 5]));

//// b. filters out even numbers fron an array

function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 40, 33]));

/// c.. the sum of all numbers in an array

function calculateSum(arr) {
  return arr.reduce((num, sum) => num + sum, 0);
}
console.log(calculateSum([1, 2, 3, 4, 5, 10]));

///// d. calculate the average of all numbers in an array

function calculateAverage(arr) {
  return arr.reduce((num, sum) => num + sum, 0) / arr.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5, 10]));

///// e. returns the largest number in an array

function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5]));

//// f. returns the smallest number in an array

function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([1, 2, 3, 4, 5]));

//// g. function that removes duplicate values from an array

function removeDuplicate(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 5]));

//// h. function that returns the index of a given value in an array

function findIndex(arr, value) {
  return arr.indexOf(value);
}
console.log(findIndex([1, 2, 3, 4, 5], 4));

///// 3. OBJECT TRANSFORMATIONS

////  a. function that returns the full name of a person

function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}
const personFullName = { firstName: "Uwera", lastName: "Aline" };
console.log(fullName(personFullName));

///// b. function that checks if a person is 18 or older

function isAdult(person) {
  return person.age >= 18;
}
const person1 = { name: "aline", age: 22 };
const person2 = { name: "uwera", age: 16 };
console.log(isAdult(person1));
console.log(isAdult(person2));

///// c.   function that filters an array of person

function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

const arrayOfPeople = [
    { name: "Alice", age: 25 },
    { name: "aline", age: 17 },
    { name: "john", age: 30 },
    { name: "josee", age: 18 }
];

const result = filterByAge(arrayOfPeople, 18);
console.log(result);


///// d. function that adda a new property to an object

function addPropery(obj, key, value) {
  obj[key] = value;
  return obj;
}
const person = { name: "aline", age: 25 };
console.log(addPropery(person, "city", "Kigali"));

///// e. function that checks if an object has a specific propety

function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}
const personInfo = { name: "aline", age: 25 };
console.log(hasProperty(personInfo, "name"));
console.log(hasProperty(personInfo, "city"));
console.log(hasProperty(person, "age"));

///// f. function that returns the number of properties in an object

function countProperties(obj) {
  return Object.keys(obj).length;
}
const personProperties = { name: "aline", age: 25, city: "Kigali" };
console.log(countProperties(personProperties));

///// 4. FUNCTION COMPOSITION AND HIGHER-ORDER FUNCTIONS

///// a.  the compose(...fns) function to combine your functions in interesting ways.
/// Example 1: Create a function to reverse and capitalize a string.

const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);
const stringReverse = (str) => str.split("").reverse().join("");
const capitalize = (str) => str.toUpperCase();
const reverseAndCapitalize = compose(capitalize, stringReverse);

console.log(reverseAndCapitalize("hello aline"));

///// Example 2: Create a function to double all the even numbers in an array.

const filterEvens = (arr) => arr.filter((num) => num % 2 === 0);
const doubleNumbers = (arr) => arr.map((num) => num * 2);
const doubleEvens = compose(doubleNumbers, filterEvens);

console.log(doubleEvens([1, 2, 3, 4, 5, 6]));


/// b. create a function that maps over the array and adds a new property status, where status is "Pass" if the grade is above 50 and "Fail"

function transformStudents(students) {
    return students.map(student => ({
      ...student,
      status: student.grade > 50 ? "Pass" : "Fail"
    }));
  }
const students = [
    {name:"aline",grade:80},
    {name:"uwera",grade:60},
    {name:"john",grade:30},
    {name:"eric",grade:45} 
];
console.log(transformStudents(students));

///// c. function that sorts an array of objects by a given key 

function sortByKey(array, key) {
    return array.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
  const people = [
    { name: "Aline", age: 25 },
    { name: "john", age: 20 },
    { name: "uwera", age: 30 }
  ];
  
  console.log(sortByKey(people, "age"));
    
//// d. function that returns only the products in a specified category

function filterProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
}
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Jeans", category: "Clothing" }
];

const filteredProducts = filterProductsByCategory(products, "Electronics");
console.log(filteredProducts);

///// e. function that stores results of previous calculations to avoid recomputation.


