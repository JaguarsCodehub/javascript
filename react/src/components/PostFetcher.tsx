import { useEffect, useState } from "react"

interface Post {
    title: string;
}

const PostFetcher = () => {

    const [data, setData] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            setLoading(true);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
            fetchData();
        }, 3000)
    }, [])
    return (

        <div>
            <h2>Post Fetcher Component</h2>
            <ul>
                {/* Render fetched posts here */}
                {loading && <p className="text-black">Loading posts...</p>}

                {data && data.map((post, index) => (
                    <li key={index}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostFetcher