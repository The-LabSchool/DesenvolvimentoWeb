
import './Contador.css'


import { useState } from 'react';


export default function Contador ({label, value, incremento, funcao}) {


    const [contador, setContador] = useState(value);

    const handleClick = () => {
        funcao();
        setContador((prev) => prev + incremento)
    }

    return (
        <div className="container-contador">
            <h3>{label}</h3>
            <p>{contador}</p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    )
}