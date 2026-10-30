function app() {
    let edad = 19;
    const nombre = "Genaro";

    return (
        <div>
            <h1>Hola, {nombre}.</h1>
            <p>Tenés {edad} años.</p>
            <p>Dentro de 5 años vas a tener, {edad + 5} años</p>
        </div>
    );
}

export default app;