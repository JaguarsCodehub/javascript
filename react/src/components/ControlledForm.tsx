import { useState, useEffect } from "react";

// Small reusable hook to debounce a value
function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

const ControlledForm = () => {
    const [input, setInput] = useState('');

    // Debounced versions of the input
    // shortDebounce updates ~500ms after the last change
    const shortDebounce = useDebounce(input, 500);
    // longDebounce updates 5 seconds after the last change
    const longDebounce = useDebounce(input, 5000);

    return (
        <>
            <div>
                <input
                    placeholder="Enter anything"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />

                <p>Live value: {input}</p>
                <p>Debounced (500ms): {shortDebounce}</p>
                <p>Debounced (5s): {longDebounce}</p>

                {/*
                  How to use:
                  - If you want to delay a call (e.g. API request) until the user stops typing,
                    use the `shortDebounce` or `longDebounce` value in an effect:

                    useEffect(() => {
                      // call API with shortDebounce
                    }, [shortDebounce]);

                  - If you specifically want an interval that fires every 5 seconds regardless
                    of typing, use setInterval in an effect instead.
                */}
            </div>
        </>
    );
}

export default ControlledForm;