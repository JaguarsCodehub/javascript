// async function retryFetch(url, maxRetries) {
//     for (let attempt = 1; attempt <= maxRetries; attempt++) {
//         try {
//             console.log(`Attempt ${attempt}/${maxRetries}`, `Fetching URL: ${url}`);
//             const data = await fetch(url);

//             return data;

//         } catch (error) {
//             console.error(`Attempt ${attempt} failed:`, error);
            
//             if (attempt === maxRetries) {
//                 throw new Error('Max retries reached');
//             }
//         }
//     }
// }

async function retryFetch(url, maxRetries) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const data = await fetch(url)
            const result = data.json()

            return result
        } catch (error) {
            if (attempt === maxRetries) {
                console.log(`Max retries reached`)
            }
            console.log(`Attempt ${attempt} failed:`, error)

        }
    }
}

// async function fetchData() {
//   console.log('Starting data fetch...');
//   const response = await fetch('https://api.example.com/data'); // await pauses here
//   const data = await response.json(); // await pauses again
//   console.log('Data fetched:', data);
//   return data;
// }

// fetchData();
// console.log('This line runs immediately, not waiting for fetchData to finish.');

// Write a function that generates a unique ID every time it is called using a closure.
function createUniqueIdGenerator() {
    let id = 0;
    return function() {
        id += 1;
        return id;
    }
}

const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId()); // 1
console.log(generateUniqueId());