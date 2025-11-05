// import React, { useEffect, useMemo, useState } from "react"

import { useEffect, useMemo, useState } from 'react'

// interface Post {
//     title: string;
// }

// const PostFetcher = () => {

//     const [data, setData] = useState<Post[]>([])
//     const [loading, setLoading] = useState<boolean>(false)
//     const [input, setInput] = useState('')
//     const [page, setPage] = useState(1)

//     const filteredPosts = data.filter(post => (
//         post.title.toLowerCase().includes(input.toLowerCase())
//     ))

//     const postsPerPage = 10;
//     const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

//     const paginatedPosts = useMemo(() => {
//         return filteredPosts.slice(
//           (page - 1) * postsPerPage,
//           page * postsPerPage
//         );
//     }, [filteredPosts, page]) 

//     const handleNext = () => {
//         if (page < totalPages) setPage(prev => prev + 1)
//     }

//     const handlePrev = () => {
//         if (page > 1) setPage(prev => prev - 1)
//     }

//     const fetchData = async () => {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//             setLoading(true);
//             const json = await response.json();
//             setData(json);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(true)
//             fetchData();
//         }, 500)
//     }, [])
//     return (

//         <div>
//             <h2>Post Fetcher Component</h2>
//             <ul>
//                 {/* Render fetched posts here */}
//                 {loading && <p className="text-black">Loading posts...</p>}

//                 <input type="text" placeholder='Search for Titles' value={input} onChange={(e) => setInput(e.target.value)}/>
//                 {paginatedPosts && paginatedPosts.map((post, index) => (
//                     <li key={index}>
//                         {post.title}
//                     </li>
//                 ))}
//                 <button onClick={handleNext}>Next</button>
//                 <button onCanPlay={handlePrev}>Previous</button>
//             </ul>
//         </div>
//     )
// }

// export default React.memo(PostFetcher)


const PostFetcher = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    const [page, setPage] = useState(1)

    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(input.toLowerCase()))

    const postsPerPage = 10
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)


    const paginatedPosts = useMemo(() => {
        return filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage)
    }, [filteredPosts, page])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <input type="text" value={input} placeholder='Enter anything' onChange={(e) => setInput(e.target.value)} />
            {paginatedPosts && paginatedPosts.map((post,index) => (
                <li key={index}>
                    {post.title}
                </li>
            ))}
        </div>
    )
}

export default PostFetcher