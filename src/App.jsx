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
        <button id='block-scroll' onClick={()=>{
          const root = document.getElementById('body')
          console.log(root)
          if (root.style.overflow === 'hidden'){
            root.style.overflow = 'scroll';
          }
          else{
            root.style.overflow = 'hidden';
          }
        }}>
          block
        </button>
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
