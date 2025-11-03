async function retryFetch(url, maxRetries) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}/${maxRetries}`, `Fetching URL: ${url}`);
            const data = await fetch(url);

            return data;

        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error);
            
            if (attempt === maxRetries) {
                throw new Error('Max retries reached');
            }
        }
    }
}