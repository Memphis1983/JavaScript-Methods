### JavaScript Methods & Examples:

---

...Give a short description of what the method does, how it works,..
it's time complexity (if appropriate), and give three examples of it ..in action!..

1. map()
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

2. reduce()
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

3. filter
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

5. sort()
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

6. slice()
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

7. pop()
   The arr.pop() method is used to remove the last element of the array and also returns the removed element. This function decreases the length of the array by 1.

**Example**: Remove the last element from the array

```javascript
let array = [10, 20, 30, 40, 50];
let removedArr = array.pop();
console.log(removedArr);
```

8. shift()
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

9. push()
   The push() method adds one or more elements to the end of an array and returns the new length of the array.

**Example**:

```javascript
var array = [];
array.push(10, 20, 30, 40, 50, 60, 70);
console.log(array);
Output: [10, 20, 30, 40, 50, 60, 70];
```

10. unshift()
    The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

**Example**:

```javascript
let names = ["Leon"];
names.unshift("Little Leon", "Bob", "John", "Nuns");
console.log(names);
Output: ["Little Leon", "Bob", "John", "Nuns", "Leon"];
```

11. includes()
    The includes() method determines whether one string may be found within another string, returning true or false as appropriate.

**Example**:

```javascript
let string = "Welcome to Learn with Leon";
let check = string.includes("Leon");
console.log(check);
Output: true;
```

12. indexOf()
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

13. every()
    JavaScript array every method tests whether all the elements in an array passes the test implemented by the provided function.

**Example**:

```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// expected output: true
```
