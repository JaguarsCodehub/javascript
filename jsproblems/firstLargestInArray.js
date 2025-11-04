function firstLargestFromArray(arr) {
    return arr.reduce((a, b) => (a > b ? a : b));
}

console.log(firstLargestFromArray([3, 5, 7, 2, 8])); // Output: 8