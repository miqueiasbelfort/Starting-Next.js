import Link from "next/link"
import Navbar from "../../components/Navbar"

export default function Products() {
    return (
        <div>
            <h1>Produtos</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
            <Navbar />
        </div>
    )
}