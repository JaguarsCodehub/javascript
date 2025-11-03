import { useEffect, useState } from "react"

function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(handler)
    })

    return debouncedValue
}

const ControlledForm1 = () =>  {

    

    const [input, setInput] = useState('')

    const shortDebounce = useDebounce(input, 500)
    const longDebounce = useDebounce(input, 5000)
    return (
        <div>
            <input 
                placeholder="Enter anything here"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <p>Live Input: {shortDebounce}</p>
            <p>Debounced Input: {longDebounce}</p>
        </div>
    )

}

export default ControlledForm1