import { useState,useEffect } from "react";
const ItemPanel = ({type,children=0,selected=false})=>{
    const [value,setValue] = useState(children);
    const [tiene_accion,set_tiene_accion] = useState(false);
    const [is_selected,set_selected] = useState(selected);
    return(
        <div className={`item-panel ${type} ${is_selected==true?"seleccionado":""}`}>
            <span className={`accion ${tiene_accion==false?"vacio":''}`}>

            </span>
            <span className="value">
                {value}
            </span>

        </div>
    )
}
const Boton = ({children,type,src})=>{
    return (
        <button className={`boton ${type}`}
        style={{backgroundImage:`url(${src})`}}
        >
            {children}
        </button>
    );
}

export const Calculadora = ({id="calculadora-contenedor",icons={}})=>{
    const [elements,setElements] = useState([

    ])
    const [view_elements,setViewElements] = useState(elements);
    const addElement = ()=>{
        
          const new_elements = [...elements];
          new_elements.push(
            <ItemPanel
            key={elements.length+1}
            type="numerico"
            >
                {elements.length+1}
            </ItemPanel>
          )
          
          setElements(new_elements)

          
    }
    useEffect(()=>{
        const new_elements = [...elements];
        setViewElements(new_elements.reverse())

    },[elements])
    return(
        <article id={id}>
            <section
            id="panel-operacion"
            >
                {view_elements}
            
            </section>
            <button id="boton-func-especiales" onClick={addElement}>func. especiales</button>
            <section id="panel-numerico">
                <Boton
                type={'especial accion'}
                src={icons.alCuadrado}
                >
                    
                </Boton>
                <Boton
                type={'especial accion'}
                src={icons.raizCuadrada}
                >
                    
                </Boton>
                <Boton
                type={'especial borrado'}
                src={icons.borrar}
                >
                    
                </Boton>
                <Boton
                type={'especial operacion'}
                >
                    {"÷"}
                </Boton>
                <Boton
                type={'numerico'}
                >
                    7
                </Boton>
                <Boton
                type={'numerico'}
                >
                    8
                </Boton>
                <Boton
                type={'numerico'}
                >
                    9
                </Boton>
                <Boton
                type={'especial operacion'}
                >
                    x
                </Boton>
                {/* fila 3 */}
                <Boton
                type={'numerico'}
                >
                    4
                </Boton>
                <Boton
                type={'numerico'}
                >
                    5
                </Boton>
                <Boton
                type={'numerico'}
                >
                    6
                </Boton>
                <Boton
                type={'especial operacion'}
                >
                    -
                </Boton>
                {/* fila 4 */}
                <Boton
                type={'numerico'}
                >
                    1
                </Boton>
                <Boton
                type={'numerico'}
                >
                    2
                </Boton>
                <Boton
                type={'numerico'}
                >
                    3
                </Boton>
                <Boton
                type={'especial operacion'}
                >
                    +
                </Boton>
                {/* fila 5 */}
                <Boton
                type={'especial accion'}
                >
                    +/-
                </Boton>
                <Boton
                type={'numerico'}
                >
                    0
                </Boton>
                <Boton
                type={'numerico'}
                >
                    .
                </Boton>
                <Boton
                type={'especial resultado'}
                >
                    =
                </Boton>
                <footer>
                    <h2>Morquecho Soto Sergio Manuel</h2>
                </footer>
            </section>
        </article>
    )
}