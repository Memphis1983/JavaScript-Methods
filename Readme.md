##JavaScript Array Methods & Examples:

---

...Give a short description of what the method does, how it works,..
it's time complexity (if appropriate), and give three examples of it ..in action!..

1. #####map()
   The JavaScript map() method calls a specific function on each item in an array. The result of this function is then moved into its own array.

**Example 1**: multiplying every number in a list of numbers, or finding the length of each string in a list of strings.

```javascript
const numbers = [10, 20, 30, 40, 50];
const newArr = numbers.map((value) => value * 10);
console.log(newArr); // returns [100, 200, 300, 400, 500]
```

**Example 2**: Finding the length of each string in a list of strings.

```javascript
const fruits = ["apple", "mango", "pineapple", "orange"];
const strLength = fruits.map((item) => item.length);
console.log(strLength);
```

**\*Example 3**: You own a cookie store and you are going to raise the prices of each cookie by 5%. Rather than calculating all of the new prices individually, you could use the map() method.

```javascript
const cookiePrices = [1.5, 1.75, 1.6, 2.0, 2.05, 1.45];
const newCookiePrices = cookiePrices.map((cookie) => {
  let price = cookie * 1.05;
  return price.toFixed(2);
});
console.log(newCookiePrices);
```

---

2. #####reduce()
   The reduce() method reduces all the elements in an array into a single output value. The output value can be a number, object, or string. reduce() method has two arguments. The first one is a callback function and the second one is the initial value.

> The callback function is executed on each element of the array.
> The return value of the callback function is accumulated result and > provided as an argument in the next call to the callback function.  
> The callback function takes four arguments.

**Example 1**: Sum all the values of an array

```javascript
const studentResult = [67, 90, 100, 37, 60];
const total = studentResult.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(total);
```

**Example 2**: Sum of values in an object array

```javascript
const studentResult = [
  { subject: "Maths", marks: 78 },
  { subject: "Physics", marks: 80 },
  { subject: "Chemistry", marks: 93 },
];
const total = studentResult.reduce(
  (accumulator, currentValue) => accumulator + currentValue.marks,
  0
);

console.log(total);
```

**Example 3**: Flatten an array of arrays

```javascript
const twoDArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];
const oneDArray = twoDArray.reduce((acc, cv) => acc.concat(cv));
console.log(oneDArray);
```

**Example 4**: Grouping objects by a property

> This is a complex example

```javascript
const result = [
  { subject: "Physics", marks: 41 },
  { subject: "Chemistry", marks: 59 },
  { subject: "Pure Maths", marks: 36 },
  { subject: "Applied Maths", marks: 90 },
  { subject: "English", marks: 64 },
];

let initialValue = {
  pass: [],
  fail: [],
};

const groupedResult = result.reduce((accumulator, current) => {
  current.marks >= 50
    ? accumulator.pass.push(current)
    : accumulator.fail.push(current);
  return accumulator;
}, initialValue);

console.log(groupedResult);
```

---

3. #####filter()
   The filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not mutate the original array

**Example 1**: Aave an array of random numbers (e.g ages of people) and you only need numbers that are above a certain number ( e.g 18).

```javascript
const ages = [11, 34, 8, 9, 23, 51, 17, 40, 14];
let olderThan18 = ages.filter((age) => age > 18);
console.log(olderThan18);
```

**Example 2**: Filtering an array of objects

```javascript
const countries = [
  { name: "Nigeria", continent: "Africa" },
  { name: "Nepal", continent: "Asia" },
  { name: "Angola", continent: "Africa" },
  { name: "Greece", continent: "Europe" },
  { name: "Kenya", continent: "Africa" },
  { name: "Greece", continent: "Europe" },
];

let asianCountries = countries.filter((country) => {
  return country.continent === "Asia";
});
console.log(asianCountries); // // [{name: "Nepal", continent: "Asia"}]
```

**Example 3**: Search for specific letters in an array

```javascript
const names = ["Victoria", "Pearl", "Olivia", "Annabel", "Sandra", "Sarah"];
const filterItems = (letters) => {
  return names.filter((name) => name.indexOf(letters) > -1);

  console.log(filterItems("i")); // ["Victoria", "Olivia"]
};
```

---

4. forEach
   The forEach() method calls a function once for each element in an array, in order.
   Note: the function is not executed for array elements without values i.e It doesn't execute the callback function for empty array elements.

**Example 1**: Iterate through an array

```javascript
const birds = ['🐦', '🦅', '🦆', '🦉'];
birds.forEach((item, index) => {
  console.log(`${index} : ${item}`);
});

Output:
0 : 🐦
1 : 🦅
2 : 🦆
3 : 🦉
```

**Example 2** Looping through NodeLists

```javascript
const elements = document.querySelectorAll("div");
elements.forEach((element, index) => {
  console.log(element);
  console.log(index);
});
```

**Example 3** Updating the Array Elements

```javascript
let students = ["John", "Sara", "Jack"];
students.forEach((item, index, arr) => {
  //adding strings to the array elements
  arr[index] = "Hello " + item;
});
console.log(students);

Output: ["Hello John", "Hello Sara", "Hello Jack"];
```

---

5. #####sort()
   We can reorganize a given array into one in which the elements are presented in ascending order.

**Example 1**: Sorting strings in ascending order

```javascript
const fruits = ["peach", "mango", "banana", "strawberry", "apple"];
fruits.sort();
console.log(fruits);
Output: ["apple", "banana", "mango", "peach", "strawberry"];
```

**Example 2**: sorting numbers

```javascript
let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers);

Output: [0, 1, 10, 2, 20, 3, 30];
```

> In this example, the sort() method places 10 before 2 because the string “10” comes before “2” when doing a string comparison.
> To fix this, you need to pass a compare function to the sort() method. The sort() method will use the compare function to determine the orders of elements.

```javascript
let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(numbers);
```

**Example 3**: Sort an array of strings in descending order

```javascript
let animals = ["cat", "dog", "elephant", "bee", "ant"];
animals.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
console.log(animals);

Output: ["elephant", "dog", "cat", "bee", "ant"];
```

> Suppose you have an array that contains elements in both uppercase and lowercase
> To sort this array alphabetically, you need to use a custom compare function to convert all elements to the same case e.g., uppercase for comparison and pass that function to the sort() method. **_like so_**:

```javascript
let mixedCaseAnimals = ["Cat", "dog", "Elephant", "bee", "ant"];

mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});
```

**Example 4**: Sorting an array of strings with non-ASCII characters

> for the strings with non-ASCII characters e.g., é, è, etc., the sort() method will not work correctly, to resolve this we must use the **localCompare()**

```javascript
let animaux = ["zèbre", "abeille", "écureuil", "chat"];
animaux.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(animaux);

Output: ["abeille", "chat", "écureuill", "zèbree"];
```

---

6. #####slice()
   The slice method returns the selected elements in an array, as a new array object.
   The slice method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

**Example 1**: Slice the given string into a new string starting from index
18 - 27 (27-1)

```javascript
let string = "Tesla, Solarcity, Neuralink, Spacex";
var newString = string.slice(18, 27);
console.log(newString);
//Output: Neuralink;
```

**Example 2**: Select elements from an array

```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
```

**Example 3**: Negative index - It is possible to provide negative numbers as either argument for the slice() method. When negative numbers are provided, the index count begins from the end of the Array or String.

```javascript
const nums = [1, 23, 45, 56, 64, 102];
const midNums = nums.slice(2, -2);
console.log(midNums);
// Expected output: [45, 56]
```

---

7. #####pop()
   The arr.pop() method is used to remove the last element of the array and also returns the removed element. This function decreases the length of the array by 1.

**Example 1**: Remove the last element from the array

```javascript
let array = [10, 20, 30, 40, 50];
let removedArr = array.pop();
console.log(removedArr);
```

**Example 2**:

```js
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());
// expected output: "tomato"
```

**Example 3**:

```js
function func() {
  var arr = ["Bob", "Evil John", "Simba", "Machi"];

  // Popping the last element from the array
  document.write(arr.pop());
}

func();
Output: Machi;
```

---

8. #####shift()
   Javascript array shift()method removes the first element from an array and returns that element.

**Example**:

```javascript
let names = ["Blaire", "Ash", "Coco", "Dean", "Georgia"];
let initalElem = names.shift();
console.log(names);
Output: ["Ash", "Coco", "Dean", "Georgia"];
console.log(initialElem);
Output: Blaire;
```

---

9. #####push()
   The push() method adds one or more elements to the end of an array and returns the new length of the array.

**Example 1**:

```javascript
var array = [];
array.push(10, 20, 30, 40, 50, 60, 70);
console.log(array);
Output: [10, 20, 30, 40, 50, 60, 70];
```

**Example 2**:

```js
let array = ["Mobile", "Earphones", "Laptop", "Charger"];
document.getElementById("demo").innerHTML = "Array before function calling :: " + array;

  removed_item = array.shift();

 document.getElementById("demo1").innerHTML = "Array shift() removed item :: " + removed_item;
 document.getElementById("demo2").innerHTML = "Array after function calling :: " + array;

 Output:
 Array before function calling: Mobile, Earphones, Laptop, Charger
 Arrya.shift() removed item: Mobile
 Array after function calling Earphones, Laptop, Charger
```

**Example 3**: Usage of shift() method in while loop

> We use the array shift() method inside while loop when we want to check a specific condition using the function shift().

```js
removed_item = "";

    let array = ["Mobile", "Earphones", "Laptop", "Charger"];
    while( (i = array.shift()) !== undefined ) {
        removed_item += "<br>" + i + " Removed ";
    }

    document.getElementById("demo").innerHTML = "Array shift() removed items :: " + removed_item;

Output: Array shift() removed items:
Mobile Removed
Earphones Removed
Laptop Removed
Charger Removed
```

> In the above example, we call the array shift() function inside the while loop condition. It removes each item of the array one by one because the loop will execute while the array becomes empty.

---

10. #####unshift()
    The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

**Example 1**:

```javascript
let names = ["Leon"];
names.unshift("Little Leon", "Bob", "John", "Nuns");
console.log(names);
Output: ["Little Leon", "Bob", "John", "Nuns", "Leon"];
```

**Example 2**:

```js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
Output: 5;

console.log(array1);
Output: Array[(4, 5, 1, 2, 3)];
```

**Example 3**:

```js
function func() {

    // Original array
    var array = ["Bob", "Evil John", "Simba", "Machi"];

    // Checking for condition in array
    var value = array.unshift("Learn with Leon");

    document.write(value);
    document.write("<br />");
    document.write(array);
}

func();

Output: 5
Learn with Leon, Bob, Evil John, Simba, Machi
```

---

11. #####includes()
    The includes() method determines whether one string may be found within another string, returning true or false as appropriate.

**Example 1**:

```javascript
let string = "Welcome to Learn with Leon";
let check = string.includes("Leon");
console.log(check);
Output: true;
```

**Example 2**: Check if a string includes "world":

```js
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");

Output: true;
```

**Example 3**:

```js
const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
Output: true;
```

---

12. #####indexOf()
    indexOf() we returns the first index at which a given element can be found in the array, or -1 if it is not present

**Example 1**: Check elements in an array, add if it doesn't exit and report if it does

```javascript
function updateVegetablesCollection(veggies, veggie) {
  <br />; // do we have a veggie by id of -1 ? (means does not exist)
  if (veggies.indexOf(veggie) === -1) {
    // add it to array if not
    veggies.push(veggie);
    console.log("New veggies collection is : " + veggies);
    // already exists? report it then
  } else if (veggies.indexOf(veggie) > -1) {
    console.log(veggie + " already exists in the veggies collection.");
  }
}

var veggies = ["potato", "tomato", "chillies", "green-pepper"];
```

**Example 2**: Check statenames in US

```javascript
function elementExists() {
  const selectedState = document.getElementById("selectstate").value;
  const USStates = ["New York", "Texas", "Florida", "Alaska"];
  let arrSearch;
  arrSearch = USStates.indexOf(selectedState);
  if (arrsearch != -1) {
    alert("The State exist in Array and its index is: " + arrsearch);
  } else {
    alert("The State does not exist in array!");
  }
}
```

**Example 3**: Search a string for "welcome":

```js
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");
Output: 13;
```

---

13. #####every()
    JavaScript array every method tests whether all the elements in an array passes the test implemented by the provided function.

**Example 1**:

```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// expected output: true
```

**Example 2**: Check if all the values in the ages array are 18 or over:

```js
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}

Output: false;
```

**Example 3**: Let's check the marks of a student.

```js
var marks = [50, 40, 45, 37, 20];

function check(value) {
  return value > 30; //return false, as marks[4]=20
}

document.writeln(marks.every(check));

Output: false;
```

---

## ##JAVASCRIPT STRING METHODS & EXAMPLES

1. ####charAt
   The charAt() method returns the character at the specified index in a string.

**Example 1**: Return the character from the first index

```js
let string = "Hello World";
let character = string.charAt(0);
console.log(character);

Output: H;
```

**Example 2**:

```js
const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

Output: "The character at index 4 is q";
```

**Example 3**:

```js
let newStr = "Learn with Leon";
console.log(newStr.charAt(3));

Output: r;
```

---

2. ####charCodeAt()
   The charCodeAt() method returns the Unicode of the character at the specified index in a string.
   > MDN: The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

**Example 1**:

```js
let str = "Hello World";
let char = str.charCodeAt(0);
console.log(char);

Output: 72;
```

**Example 2**:

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`;
Output: "The character code 113 is equal to q"
```

**Example 3**:

```js
var hundredDevs = "LearnWithLeon";

console.log(hundredDevs.charCodeAt(0));
console.log(hundredDevs.charCodeAt(1));
console.log(hundredDevs.charCodeAt(2));
console.log(hundredDevs.charCodeAt(3));

Output: 76;
101;
97;
114;
```

---

3. ####concat();
   Arrays: The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

Strings: The concat() method concatenates the string arguments to the calling string and returns a new string.

**Example 1**:

```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
Output: Array[("a", "b", "c", "d", "e", "f")];
```

**Example 2**:

```js
var

```

**Example 3**:

```js
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
Output: "Hello World";

console.log(str2.concat(", ", str1));
Output: "World, Hello";
```

---

4. ####includes
   The includes() method determines whether a string contains the characters of a specified string.
   This method returns true if the string contains the characters, and false if not.
   Note: The includes() method is case sensitive.

**Example 1**:

```js
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
console.log(n);
Output: true;
```

**Example 2**:

```js
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
Output: "The word "fox" is in the sentence"
```

**Example 3**:

```js
let example = "Example String!";
let ourSubstring = "Example";

if (example.includes(ourSubstring)) {
  console.log("The word Example is in the string.");
} else {
  console.log("The word Example is not in the string.");
}
```

---

5. ####indexOf()
   The indexOf() method returns the position of the first occurrence of a specified value in a string.
   This method returns -1 if the value to search for never occurs.

**Example 1**:

```js
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");
console.log(n);
Output: 13;
```

**Example 2**:

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
Output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
Output: "The index of the 2nd "dog" is 52"
```

**Example 3**:

```js

```

---

6. ####match()
   The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
   Note: If the regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.

This method returns null if no match is found.

**Example 1**:

```js
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
console.log(res);
Output: ain, ain, ain;
```

**Example 2**:

```js
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
Output: Array[("T", "I")];
```

**Example 3**:

```js
var str = "For more information, see Chapter 3.4.5.1";
       var re = /(chapter \d+(\.\d)*)/i;
       var found = str.match( re );
       document.write(found );
Output: Chapter 3.4.5.1,Chapter 3.4.5.1,.1
```

---

7. ####repeat()
   The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

**Example 1**:

```js
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

Output:
"Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

```

**Example 2**:

```js
var str = "Hello world!";
str.repeat(2);
Output: Hello world!Hello world!
```

**Example 3**:

```js
let hunderedDevs = "Little Leon";
console.log(hundredDevs.repeat(2))
Output: Little Leon, Little Leon
```

---

7. ####replace()
   The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).

**Example 1**:

```js
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "Azure");
console.log(res);

Output: Visit Azure!
```

**Example 2**:

```js
const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(p.replace("dog", "monkey"));
Output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?";

const regex = /Dog/i;
console.log(p.replace(regex, "ferret"));
Output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?";
```

**Example 3**:

```js
let str = 'JS will, JS will rock you!';
let newStr = str.replace('JS','JavaScript');

console.log(newStr);
Output: JavaScript will, JavaScript will rock you!
```

---

8. ####search()
   The search() method searches a string for a specified value, and returns the position of the match.
   The search value can be string or a regular expression.
   This method returns -1 if no match is found.

**Example 1**:

```js
var str = "Visit 100Devs!";
var n = str.search("100Devs");
console.log(n);
Output: 6;
```

**Example 2**:

```js
   var re = /apples/gi;
       var str = "Apples are round, and apples are juicy.";

       if ( str.search(re) == -1 ) {
          document.write("Does not contain Apples" );
       } else {
          document.write("Contains Apples" );
       }
Output: Contains Apples
```

**Example 3**:

```js
let re = /[A-Z]/;
let str = "hi There! How are you?";
let index = str.search(re);

console.log(index);
Output: 3; //It returns 3 which is the index of the capital letter T.
```

---

9. ####slice()
   The slice() method extracts parts of a string and returns the extracted parts in a new string.
   Use the start and end parameters to specify the part of the string you want to extract.
   The first character has the position 0, the second has position 1, and so on.
   Tip: Use a negative number to select from the end of the string.

**Example 1**:

```js
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
Output: "the lazy dog.";

console.log(str.slice(4, 19));
Output: "quick brown fox";

console.log(str.slice(-4));
Output: "dog.";

console.log(str.slice(-9, -5));
Output: "lazy";
```

**Example 2**:

```js
function myFunction() {
  var str = "Hello world!";
  var res = str.slice(0, 5);
  document.getElementById("demo").innerHTML = res;

  Output: Hello;
}
```

**Example 3**:

```js
var str = "database";
var output = str.slice(1, 3);
console.log(output);
```

---

10. ####split()
    The split() method is used to split a string into an array of substrings, and returns the new array.
    Tip: If an empty string ("") is used as the separator, the string is split between each character.
    Note: The split() method does not change the original string

**Exmaple 1**:

```js
function myFunction() {
var str = "How are you doing today?";
var res = str.split(" ");
document.getElementById("demo").innerHTML = res;
}
Output: How,are,you,doing,today?
```

**Example 2**: Omit the separator operator

```js
function myFunction() {
var str = "How are you doing today?";
var res = str.split("");
document.getElementById("demo").innerHTML = res;
}

Output: H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
```

**Example 3**: Use the limit parameter

```js
var str = "How are you doing today?";
var res = str.split(" ", 3);
document.getElementById("demo").innerHTML = res;
}
Output: How,are,you
```

**Example 4** Use a letter as separator

```js
function myFunction() {
var str = "How are you doing today?";
var res = str.split("o");
document.getElementById("demo").innerHTML = res;
}
Output: H,w are y,u d,ing t,day?
```

---

11. ####substr()
    The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
    Tip: To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).
    Note: The substr() method does not change the original string.

**Example 1**:

```js
function myFunction() {
  var str = "Hello world!";
  var res = str.substr(1, 4);
  document.getElementById("demo").innerHTML = res;
}
Output: ello;
```

**Example 2**: Begin the extraction at position 2, and extract the rest of the string:

```js
function myFunction() {
var str = "Hello world!";
var res = str.substr(2);
document.getElementById("demo").innerHTML=res;
}
Output: llo world!
```

**Example 3**: Extract only the first character:

```js
function myFunction() {
  var str = "Hello world!";
  var res = str.substr(0, 1);
  document.getElementById("demo").innerHTML = res;
}
Output: H;
```

**Example 4**: Extract only the last character:

```js
function myFunction() {
var str = "Hello world!";
var res = str.substr(11, 1);
document.getElementById("demo").innerHTML = res;
}
Output: !
```

---

12. ####toLowerCase()
    The toLowerCase() method returns the calling string value converted to lower case.

**Example 1**:

```js
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toLowerCase());
Output: "the quick brown fox jumps over the lazy dog.";
```

---

13. ####toUpperCase()
    The toUpperCase() method converts a string to uppercase letters.

Note: The toUpperCase() method does not change the original string.

**Example 1**:

```js
function myFunction() {
var str = "Hello World!";
var res = str.toUpperCase();
document.getElementById("demo").innerHTML = res;
}
Output:   HELLO WORLD!
```

14. ####trim()
    The trim() method removes whitespace from both sides of a string.
    Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
    Note: The trim() method does not change the original string.

**Example 1**: Remove whitespace from both sides of a string:

```js
function myFunction() {
var str = "     Hello World!     ";
alert(str.trim());
}
Output: Hello World!
```
