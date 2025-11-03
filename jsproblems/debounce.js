function debounce(func, delay) {
    let timeoutId;
    
    return function (...args) {
        const context = this;
        
        // Clear any existing timeout
        clearTimeout(timeoutId);
        
        // Set new timeout
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}

function inputHandler(event) {
    console.log('Input value:', event.target.value);
}