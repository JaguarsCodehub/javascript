// Create a memoize(func) utility that caches the results of a function 
// based on its arguments. If the same arguments are passed again, 
// it returns the cached result without re-executing the function.

function memoCache(func) {
    const cache = new Map();
    return function(...args) {

        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log(`Cache hit for key: ${key}`)
            return cache.get(key)
        }
        
        console.log(`Cache miss for key: ${key}.. computing result`)
        const result  = func.apply(this, args);
        cache.set(key, result);

        return result
        
    }
}