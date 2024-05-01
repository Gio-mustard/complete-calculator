import { useState } from "react";
export const ItemPanel = ({type,children=0,selected=false,id,action=null})=>{
    const [value,setValue] = useState(children);
    const [tiene_accion,set_tiene_accion] = useState(action!==null);
    const [is_selected,set_selected] = useState(selected);
    return(
        <div 
        id={id}
        className={`item-panel ${type} ${is_selected==true?"seleccionado":""}`}>
            <span className={`accion ${tiene_accion==false?"vacio":''}`}>

            </span>
            <span className="value">
                {value}
            </span>

        </div>
    )
}
