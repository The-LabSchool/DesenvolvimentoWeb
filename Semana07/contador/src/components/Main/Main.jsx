
import './Main.css'

import Contador from "../Contador/Contador"

export default function Main () {
    
    const funcao = () => {
        // função 
        console.log("executou a função");
    };

    return (
        <main className="container-main">
            <div>
                <h2>Aplicação</h2>

                <p>Click no botão abaixo para incrementar seu contador</p>
            </div>
            <Contador label="Contagem 1" value={0} incremento={1} funcao={funcao}/>
        </main>
    )
}