import Link from "next/link"

import {useRouter} from "next/router"

export default function Todo() {

    const router = useRouter()

    const todoId = router.query.todoid

    return (
        <>
            <Link href="/todos">
                <a>Voltar</a>
            </Link>
            <h1>Exibindo o todo: {todoId}</h1>
            <p>Comentário: la la la <Link href={`/todos/${todoId}/comments/554`}><a>Detalhes</a></Link></p>
        </>
    )
}