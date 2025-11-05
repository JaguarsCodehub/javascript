// function firstLargestFromArray(arr) {
//     return arr.reduce((a, b) => (a > b ? a : b));
// }

// console.log(firstLargestFromArray([3, 5, 7, 2, 8])); // Output: 8

// function findLargestInArray(arr) {
//     return arr.reduce((a,b) => a > b ? a : b)
// }

arr = [2, 6, 8, 20, 12, 13]

// arr.map((number) => (
//     console.log(number)
// ))

// filter from array
const greaterNumbers = arr.filter((number) => (
    number > 10
))

console.log(greaterNumbers)