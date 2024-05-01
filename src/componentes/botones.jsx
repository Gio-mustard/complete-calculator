export const Boton = ({children,type,src,onClick,disabled=false,action=null})=>{
    return (
        <button className={`boton ${type} ${disabled?"disabled":""}`}
        disabled={disabled}
        onClick={()=>{
            onClick(children,type,src,action);
        }}
        style={{backgroundImage:`url(${src})`}}
        >
            {children}
        </button>
    );
}