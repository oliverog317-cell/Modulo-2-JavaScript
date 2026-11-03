import Lampara from "./componentes/Lampara";
import AireAcondicionado from "./componentes/AireAcondicionado";
import Televisor from "./componentes/Televisor";




function App() {
  return (
    <div>
      <h1>Panel de control inteligente</h1>
      <Lampara ubicacion="Living" potencia={60} />
      <AireAcondicionado marca="Panasomic" temperaturaInicial={24}/>
      <Televisor marca="Noblex" canalInicial={24}/>
    </div>
  );
}

export default App;