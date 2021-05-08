// Questions to practice:

// *One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((a, b) => a * b);
console.log(sum);

// ------------------------------------------------------------

// *Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

const familyMembersAges = [5, 15, 18, 25, 30];
//declare variables
let youngestAge = familyMembersAges[0]; //initialize to first element
let oldestAge = familyMembersAges[0];  // ---^^
let youngestAgeIndex = 0;  // minimum index
let oldestAgeIndex = familyMembersAges.length - 1; //maximum index

// loop through each element in array
for (let i = 0; i < familyMembersAges.length; i++) {
    //find youngest
    if (familyMembersAges[i] < youngestAge && i < oldestAgeIndex) {
        youngestAge = familyMembersAges[i];
        youngestAgeIndex = i;
    }
    //find oldest
    if (familyMembersAges[i] >= oldestAge && i > youngestAgeIndex) {
        oldestAge = familyMembersAges[i];
        oldestAgeIndex = i;
    }
}
// Return Results
console.log(`oldest: \t ${oldestAge}`);
console.log(`youngest: \t ${youngestAge} index: ${youngestAgeIndex}`)
console.log(oldestAge - youngestAge);

// ----------------------------------------------------------------

// *Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
const sumArray = (arr) => {
    // rearrange array from lowest to highest
    let sortedArray = arr.sort((a, b) => a - b);
    // remove middle values except the first and last 
    // and reduce it to sum
    let sum = arr.slice(1, -1).reduce((acc, cv) => acc + cv);
    return sum;
}
console.log(sumArray([ 1, 1, 11, 2, 3 ]));