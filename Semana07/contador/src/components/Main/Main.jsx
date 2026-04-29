import './Main.css'
import Contador from '../Contador/Contador.jsx'

export default function Main() {
    return (
        <main>
            <h1>
                Aplicação
            </h1>
            <p>
                Clique no botão abaixo para incrementar o seu contador.
            </p>
            <Contador/>
        </main>
    )
}