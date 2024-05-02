

class Controlador{
    constructor(Item,icons){
        this.currentIndex=0;
        this.Item = Item;
        this.icons = icons;
        this.timeToRender = 50 //miliseconds
    }
    findLastItemInPanel(){
        /*
        @return : data del ultimo item del panel de operación.
        */
       const items = [...document.getElementsByClassName("item-panel")];
       return items.length === 0 ? null:items[items.length-1]
    }
    #insertAction(newElements,setElements,lastElement,dataBoton){
        let newAction = null
        let src = undefined;
        if (lastElement.action !== dataBoton.action){
            newAction = dataBoton.action;
            src = dataBoton.key;
        }
        lastElement.action = newAction;
        lastElement.src = src;
        newElements[newElements.length-1] = lastElement;
        this.#forceRenderPanel(newElements,setElements);
    }
    addItem(dataBoton,elements,setElements){
        
        const {type,src,key,action} = dataBoton;
        const split_type = type.split(' ');
        const newElements = [...elements]

        const lastElement = newElements.length===0?{type:undefined}:newElements[newElements.length - 1];
        if (
            key != "+/-"
            &&
            lastElement.type==="numerico"
            && 
            split_type.includes("accion")

        ){
            this.#insertAction(newElements,setElements,lastElement,dataBoton)
            return
        }
        if (split_type.includes("accion") && key != "+/-"){
            return
        }
        if (lastElement.type==="numerico" && (split_type.includes('numerico')||key==="+/-")){ 
            let new_key = ''
            if (key==="+/-"){
                
                if (lastElement.key.startsWith('-')){
                    new_key = lastElement.key.slice(1)    
                }
                else{
                    new_key = `-${lastElement.key}`
                }
                

            }else{
                new_key = `${lastElement.key}${key}`
            }
            lastElement.key = new_key
            newElements[newElements.length-1]=lastElement;
            this.#forceRenderPanel(newElements,setElements);
            return
        }
        newElements.push(
            {
            key:key,
            id:`item-panel-${newElements.length+1}`,
            action:action,
            type:type,
            src:src,
            onclick:null // el evento se agrega al maquetar en el //! panel numérico.
        }
    );
    setElements(newElements);

    
    }
    #forceRenderPanel(elements,setElements){
        this.clearPanel(setElements);
        setTimeout(()=>{
            setElements(elements);
        },this.timeToRender);
    }
    deleteItem(elements,setElements){
        if (elements.length===0) return
        const _elements = [...elements];
        const lastElement = _elements.length===0?{type:undefined}:_elements[_elements.length - 1];

        if (
            lastElement.type==="numerico" 
            &&
            lastElement.key.length>1
        ){
           lastElement.key = lastElement.key.slice(0,lastElement.key.length-1)
           _elements[elements.length-1]=lastElement
           this.#forceRenderPanel(_elements,setElements)
           return
            
         }
         

        const newElements = elements.slice(0,elements.length-1);
        setElements(newElements);
            
    }
    clearPanel(setElements){
        setElements([]);
    }
    getRawOperation(elements){
        let operacion = ""
        const items = [...elements];
        items.map(e=>{
            let value = e.key;
            if (e.action === 'exp'){
                value = `(${value}**2)`
            }
            else if (e.action === 'square'){
                value = `(Math.sqrt(${value}))`

            }
            operacion += value


        })
        
        return(operacion.replace('x','*').replace("÷","/").replace('exp',"2**"))
    }
    getResult(elements,setElements){
        const result = this.getRawOperation(elements)
        const key = parseFloat(eval(result))
        const newElements = [
            {
                key:`${key}`,
                id:`item-panel-${elements.length+1}`,
                action:null,
                type:"numerico",
                src:null,
                onclick:null // el evento se agrega al maquetar en el //! panel numérico.
            },
        ];
        this.#forceRenderPanel(newElements,setElements)

    }
}

export {Controlador}