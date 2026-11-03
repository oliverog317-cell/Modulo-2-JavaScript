import { useState } from "react";

function Lampara({ubicacion, potencia}) {
    const [encendida, setEncendida] = useState(false);

    const alternar = () => {
        setEncendida(!encendida);
    };

    return (
        <>
            <div>
                <h2>Lámpara</h2>
                <p>Ubicación: {ubicacion}</p>
                <p>Potencia: {potencia}</p>
                <p>Estado: {encendida ? "Encendida" : "Apagada"}</p>
                <button onClick={alternar}>
                    {encendida ? "Apagar" : "Encender"}
                </button>
            </div>
        
        </>
    )
}

export default Lampara;