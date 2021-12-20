import React, { useState } from 'react'

export const ContadorConHook = () => {

    const [valor, setvalor] = useState(10);

    const acumular = ( numero: number ) => {
        setvalor( valor + numero );
    }
    return (
        <>
            <h3>Contador con hook: <small> { valor } </small> </h3>

            <button 
                className="btn btn-primary"
                onClick={ () => acumular(1) }
            >
                +1
            </button>

            <button 
                className="btn btn-primary"
                onClick={ () => acumular(-1) }
                >
                -1
            </button>
        </>
    )
}
