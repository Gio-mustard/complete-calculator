import {Calculadora} from './componentes/calculadora';
import "./estilos/index.css"
import "./estilos/calculadora.css"
import "./estilos/calculadora-item-panel.css"
import "./estilos/botones.css"
import "./estilos/funciones_especiales.css"



import * as imgs from './images';

function App() {
  
  return (
    <>
      <aside>
        
        <a href="#calculadora-contenedor" className="smooth-scroll">ir a la calculadora</a>
        
        </aside>
     
      <Calculadora
      id="calculadora-contenedor"
      icons={{
        borrar:imgs.iconoBorrar,
        corona:imgs.iconoCorona,
        alCuadrado:imgs.iconoAlCuadrado,
        raizCuadrada:imgs.iconoRaizCuadrada
      }}
      >

      </Calculadora>
    </>
  )
}

export default App
