import Link from "next/link"
import { useRouter } from "next/router"

export default function Comment(){
    const router = useRouter()

    const todoId = router.query.todoid
    const commentId = router.query.commentId

    return (
        <>
            <Link href={`/todos/${todoId}`}><a>Voltar</a></Link>
            <h1>Comment Id: {commentId}</h1>
            <p>DO TODO: {todoId}</p>
        </>
    )
}