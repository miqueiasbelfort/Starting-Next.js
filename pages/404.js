import Link from "next/link"
export default function NotFound(){
    return (
        <>
            <h1>Página 404</h1>
            <p>Essa página não existe</p>
            <Link href="/"><a>Voltar</a></Link>
        </>
    )
}