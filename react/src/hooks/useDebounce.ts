// import { useEffect, useState } from "react";

import { useEffect, useState } from 'react';

// export function useDebounce<T>(value: T, delay: number) {
//     const [debouncedValue, setDebouncedValue] = useState(value)

//     useEffect(() => {
        
//     const handler = setTimeout(() => {
//         setDebouncedValue(value)
//     }, delay)
    
//     return () => {
//         clearTimeout(handler)
//     }
//     }, [value, delay])

//     return debouncedValue
// }


export function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)

            return () => clearTimeout(handler)
        })

        
    }, [value, delay])
    return debouncedValue;
}

