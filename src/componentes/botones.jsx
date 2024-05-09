export const Boton = ({children,type,src,onClick,disabled=false,action=null,id=""})=>{
    return (
        <button className={`boton ${type} ${disabled?"disabled":""}`}
        disabled={disabled}
        id={id}
        onClick={()=>{
            onClick(children,type,src,action);
        }}
        style={{backgroundImage:`url(${src})`}}
        >
            {children}
        </button>
    );
}