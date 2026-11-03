import { useState } from "react";

function AireAcondicionado({marca, temperaturaInicial}) {
    const [temperatura, setTemperatura] = useState(temperaturaInicial);

    const aumentar = () => {
        if (temperatura < 30) {
            setTemperatura(temperatura + 1);
        }
    };

    const disminuir = () => {
        if (temperatura > 16) {
            setTemperatura(temperatura - 1);
        }
    };

    return (
        <div>
            <h2>Aire Acondicionador</h2>
            <p>Marca: {marca}</p>
            <p>Temperatura: {temperatura} °C</p>

            <button onClick={aumentar}>Aumentar Temperatura</button> <br />
            <button onClick={disminuir}>Diaminuir Temperatura</button>
        </div>
    );
} 

export default AireAcondicionado;