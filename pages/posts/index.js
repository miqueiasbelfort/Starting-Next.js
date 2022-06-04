import styles from "../../styles/Posts.module.css"

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()

    return {
        props: {posts}
    }
}

export default function Posts({posts}){
    return (
        <>
            <h1>Posts</h1>
            <div className={styles.container}>

                <ul className={styles.postlist}>
                    {posts && posts.map(post => (
                        <li key={post.id}>
                            
                            {post.userId == 1 && <h2>Lucas</h2>}
                            {post.userId == 2 && <h2>Sarh</h2>}
                            {post.userId == 3 && <h2>Victoria</h2>}
                            {post.userId == 4 && <h2>Mathues</h2>}

                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <div className={styles.btns_container}>
                                <button>Like</button>
                                <button>Comment</button>
                                <button>Share</button>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}