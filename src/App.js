import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  

  const [dato, setDato] = useState("")
  const [term, setTerm] = useState("")
  const [tema, setTema] = useState("")
  const handleTermChange = (event) => setTerm(event.target.value);

  return (
    <main>

      <h1>Evaluación React - Requests</h1>
      <h1>Consejos de vida</h1>

      <div>
        <h2>Obtener un consejo aleatorio</h2>
        <button onClick={term}>Obtener</button>
        <p className="result-box"></p>
      </div>

      <div>
        <h2>Buscar un consejo</h2>
        <input type="text" onChange={handleTermChange} />
        <button>Enviar</button>
        <h3>Resultados de búsqueda:</h3>
        <p className="result-box"></p>
      </div>

    </main>
  );
}

function Consejo(){
  fetch('https://api.adviceslip.com/advice')
  // .get((Response)) => () setTerm
  .then((Response)) => () setDato
  // .catch((Response)) => () setTema
}

export default App;
