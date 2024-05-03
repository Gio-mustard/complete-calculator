import { useState,useEffect } from "react";
import { Boton } from "./botones";
import { ItemPanel } from "./itemPanel";
import { Controlador } from "./acciones/control_panel_operacion";
import * as c from "./constantes";

const controllador = new Controlador(ItemPanel,null,c.actions);
export const Calculadora = ({id="calculadora-contenedor",icons={}})=>{
    const [elements,setElements] = useState([])
    const [view_elements,setViewElements] = useState(elements);
    const addItem = (key,type,src,action)=>{
        const dataBoton = {
            type:type,
            key:key,
            src:src,
            action:action
        }
        controllador.addItem(dataBoton,elements,setElements);
    }
    const deleteLastItem = () =>{
        controllador.deleteItem(elements,setElements);
    }
    const clear = () =>{
        controllador.clearPanel(setElements);
    };
    useEffect(() =>{controllador.icons=icons},[icons]);
    useEffect(()=>{
        const new_elements = elements.map((item,index)=>(
            <ItemPanel
            id={item.id}
            key={index+1}
            type={item.type}
            src={item.src}
            action={item.action}
            >
                {item.key}
            </ItemPanel>
    ));
        new_elements.reverse()
        setViewElements(new_elements);

    },[elements])
    /*
    ! Mira la documentación para ver el formato de los ItemsPanel
    */ 
    return(
        <article id={id}>
            <section
            id="panel-operacion"
            >
                {view_elements}
            
            </section>
            <button id="boton-func-especiales"
            
            onClick={()=>{
                controllador.getRawOperation(elements);
            }}
            >func. especiales</button>
            <section id="panel-numerico">
                {/* fila 1 */}
                <Boton
                type={'especial borradoCompleto'}
                onClick={clear}

                >
                    <img src={icons.limpiar} className="temp-icon-especial-action"></img>

                </Boton>
                {/*Estos div solo estan 
                    para no alterar el posicionamiento de los botones, 
                    cuando se agreguen mas botones
                    se hará aquí*/}

<div></div>
               <Boton
               type={'especial segmentacion'}
               onClick={addItem}
               >
                {"("}
               </Boton>
               <Boton
               type={'especial segmentacion'}
               onClick={addItem}
               >
                {")"}
               </Boton>

                {/* fila 2 */}
                <Boton
                type={'especial accion'}
                // src={icons.alCuadrado}
                action={c.actions.exponente_al.cuadrado}
                onClick={addItem}
                   

                >
                    <img src={icons.alCuadrado} className="temp-icon-especial-action"></img>
                    
                </Boton>
                <Boton
                action={c.actions.raiz.cuadrada}
                
                type={'especial accion'}
                // src={icons.raizCuadrada}
                onClick={addItem}

                >
                    <img src={icons.raizCuadrada} className="temp-icon-especial-action"></img>
                </Boton>
                <Boton
                type={'especial borrado'}
                onClick={deleteLastItem}

                src={icons.borrar}
                >
                    
                </Boton>
                <Boton
                type={'especial operacion'}
                onClick={addItem}

                >
                    {"÷"}
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}
                >
                    7
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    8
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    9
                </Boton>
                <Boton
                type={'especial operacion'}
                onClick={addItem}

                >
                    x
                </Boton>
                {/* fila 3 */}
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    4
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    5
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    6
                </Boton>
                <Boton
                type={'especial operacion'}
                onClick={addItem}

                >
                    -
                </Boton>
                {/* fila 4 */}
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    1
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    2
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    3
                </Boton>
                <Boton
                type={'especial operacion'}
                onClick={addItem}

                >
                    +
                </Boton>
                {/* fila 5 */}
                <Boton
                type={'especial accion'}
                onClick={addItem}

                >
                    +/-
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    0
                </Boton>
                <Boton
                type={'numerico'}
                onClick={addItem}

                >
                    .
                </Boton>
                <Boton
                type={'especial resultado'}
                onClick={()=>{
                    controllador.getResult(elements,setElements)
                }}

                >
                    =
                </Boton>
                {/* <footer>
                    <h2>Morquecho Soto Sergio Manuel</h2>
                </footer> */}
            </section>
        </article>
    )
}