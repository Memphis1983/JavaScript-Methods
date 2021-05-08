### Please research the following methods:

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

  console.log(filterItems("ia")); // ["Victoria", "Olivia"]
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
   We can sort the elements of an array easily with a sort() method.

6. slice
7. pop
8. shift
9. push
10. unshift
11. includes
12. indexOf
13. every
