// import { useEffect, useState } from 'react'

import { useEffect, useState } from 'react'

// export const useFetch = (url: string) => {
//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         setLoading(true)
//         setData(null)
//         setError(null)

//         const fetchData = async() => {
//             try {
//                 const response = await fetch(url)

//                 if (!response.ok) {
//                     console.log("INvalid url or response")
//                 }
//                 const result = await response.json()
//                 setData(result) 
//                 setLoading(false)
//                 setError(null)
//             } catch (error) {
//                 console.log("Error", error)
//                 // setError(error)
//             }
//         }

//         if (url) {
//             fetchData()
//         }
//     }, [url])

//     return { data, error, loading}
// }

export const useFetch = (url: string) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true);
        setError(null)
        setData(null)

        const fetchData = async() => {
            try {
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
                setLoading(false)
            } catch (error) {
                console.log(error)
                // setError(error)
            }
            
        }

        if (url) {
            fetchData()
        }
    }, [url])

    return { loading, error, data}
}