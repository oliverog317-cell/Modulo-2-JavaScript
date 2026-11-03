import {useState} from "react";


function Televisor({marca, canalInicial}) {
    const [encendido, setEncendido] = useState(false);
    const [canal, setCanal] = useState(canalInicial);

    const AlternarEncendido = () => {
        setEncendido(!encendido);
    };

    const siguienteCanal = () => {
        if (encendido) {
            setCanal(canal + 1);
        }
    };

    const anteriorCanal = () => {
        if (encendido && canal > 0) {
            setCanal(canal - 1);
        }
    };

    return (
        <div>
            <h2>Televisor</h2>
            <p>Marca: {marca}</p>
            <p>Estado: {encendido ? "Encendido" : "Apagado"}</p>
            <p>Canal: {canal}</p>


            <button onClick={AlternarEncendido}>
                {encendido ? "Apagar" : "Encender"}
            </button> <br />
            <button onClick={siguienteCanal}>Siguiente Canal</button> <br />
            <button onClick={anteriorCanal}>Anterior canal</button>
        </div>
    )
}


export default Televisor;