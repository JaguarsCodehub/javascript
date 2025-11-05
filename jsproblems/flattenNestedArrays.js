// function flattenNestedArrays(arr) {
//     let flattened = [];

//     for  (const element of arr) {
//         if (Array.isArray(element) ) { 
//             flattened.push(...flattenNestedArrays(element));
//         } else {
//             flattened.push(element);
//         }
//     }

//     return flattened
// }

// console.log(flattenNestedArrays([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]

function flattenNestedArrays(arr) {
    let flattened = []

    for (const element of arr) {
        console.log("Element: ", element)
        if (Array.isArray(element)) {
            console.log("Array found", Array.isArray(element))
            flattened.push(...flattenNestedArrays(element))
        } else {
            console.log("This element is Not an array")
            flattened.push(element)
            console.log("Pushed element: ", element)
        }
    }

    return flattened
}

console.log(flattenNestedArrays([1, [2, [3, 4], 5], 6]))