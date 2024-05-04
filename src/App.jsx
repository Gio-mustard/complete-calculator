import {Calculadora} from './componentes/calculadora';
import "./estilos/index.css"
import "./estilos/calculadora.css"
import "./estilos/calculadora-item-panel.css"
import "./estilos/botones.css"
import "./estilos/funciones_especiales.css"
import "./estilos/panel_historial.css"
import { Pizarron } from './componentes/pizarron';
import "./estilos/pizarron.css"

import * as imgs from './images';

function App() {
  
  return (
    <>
      <aside>
        
        <Pizarron/>
        </aside>
     
      <Calculadora
      id="calculadora-contenedor"
      icons={{
        borrar:imgs.iconoBorrar,
        corona:imgs.iconoCorona,
        alCuadrado:imgs.iconoAlCuadrado,
        raizCuadrada:imgs.iconoRaizCuadrada,
        limpiar:imgs.iconoLimpiar,
        historial:imgs.iconoHistorial
      }}
      >

      </Calculadora>
    </>
  )
}

export default App
