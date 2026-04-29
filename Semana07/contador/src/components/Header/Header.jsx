import './Header.css'

export default function Header() {

    const nomeDoProjeto = "Meu Contador";

    return (
        <header className='header'>
            <h1>{nomeDoProjeto}</h1>
            <p>Seu primeiro aplicativo em ReactJs.</p>
        </header>
    )
}


