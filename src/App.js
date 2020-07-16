import React, { useState, useEffect } from 'react';

//Components
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';

function App() {
  const [ numero, guardarNumero ] = useState(0);
  const [ numeroSumado, guardarNumeroSumado ] = useState(0);
  const [ mostrarResultado, guardarMostrarResultado ] = useState(false);
  const [ mensaje, guardarMensaje ] = useState("");
  const [ claseContenido, guardarClaseContenido ] = useState("contenido-principal contenido");

  // UseEffect que actualiza el numeroSumado si es Par o impar
  useEffect(() => {
    if (mostrarResultado) {

      if (numeroSumado % 2 === 0) {
        guardarClaseContenido("contenido-principal contenido par");
        guardarMensaje("Par");
      } else {
        guardarMensaje("Impar");
        guardarClaseContenido("contenido-principal contenido impar");
      }
    }

  }, [ numero, numeroSumado, mostrarResultado, mensaje ])

  return (
    <div className="container">
      <header>
        <h1>N&#250;meros Pares e Impares</h1>

        <div className={claseContenido}>
          {
            mostrarResultado ? 
            <Resultado 
              numero={numero}
              numeroSumado={numeroSumado}
              mensaje={mensaje}
              guardarMostrarResultado={guardarMostrarResultado}
              guardarMensaje={guardarMensaje}
              guardarNumero={guardarNumero}
              guardarNumeroSumado={guardarNumeroSumado}
              guardarClaseContenido={guardarClaseContenido}
            />
            :
            <Formulario
              numero={numero}
              guardarNumero={guardarNumero}
              guardarMostrarResultado={guardarMostrarResultado}
              guardarNumeroSumado={guardarNumeroSumado}
            />
          }          
        </div>
      </header>
    </div>
  );
}

export default App;
