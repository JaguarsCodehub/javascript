function secondLargestFromArray(arr) {
    const uniqueElements = [...new Set(arr)];

    if (uniqueElements.length < 2) {
        console.log('Array must contain at least two unique elements.');
        return null;
    }

    uniqueElements.sort((a, b) => b - a);

    const secondLargest = uniqueElements[1];
    console.log('Second largest element is:', secondLargest);
    return secondLargest;
}

secondLargestFromArray([3, 5, 17, 2, 18, 8, 7, 5])