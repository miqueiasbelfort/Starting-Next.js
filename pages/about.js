import Link from "next/link"
import Head from "next/head"

export default function About(){
    return (
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            <h1>Página de Sobre</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
        </>
    )
}