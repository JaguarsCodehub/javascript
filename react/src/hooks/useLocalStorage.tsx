export const useLocalStorage = () => {
    const getStoredValue = (key, initialValue) => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) { 
            console.error("Error getting localStorage key “" + key + "”: ", error);
            return initialValue;
        }
    }

    const setStoredValue = (key, value) => {
        try {
            const valueToStore = value instanceof Function ? value(getStoredValue(key, value)) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error setting localStorage key “" + key + "”: ", error);
        }   
    }
    return { getStoredValue, setStoredValue };
}