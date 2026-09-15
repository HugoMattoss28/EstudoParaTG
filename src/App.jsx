import {useState} from 'react';
import mapa from './mapas.json';

export default function App(){

  const [ resultado, setResultado] = useState(0)

  function calcular_rota(){

    const nomeDolugar = mapa[1].nome

    setResultado(nomeDolugar)
  }

  return(
    <div>
      <h1>Descobrir nome do ponto um</h1>
      <p> testando para aprender react...</p>
      <button onClick={calcular_rota}>Calcular rota</button>
      <p>Resultado: {resultado}</p>
    </div>
  )
}

