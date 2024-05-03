class Controlador{
    constructor(Item,icons,constants,localStorageManager){
        this.currentIndex=0;
        this.Item = Item;
        this.icons = icons;
        this.timeToRender = 50 //miliseconds
        this.c = constants
        this.localStorageManager = localStorageManager
    }
    findLastItemInPanel(){
        /*
        @return : data del ultimo item del panel de operación.
        */
       const items = [...document.getElementsByClassName("item-panel")];
       return items.length === 0 ? null:items[items.length-1]
    }
    #insertAction(newElements,setElements,lastElement,dataBoton){
        const reversedElements  = [...newElements].reverse();
        for (let elementToInsertAction of reversedElements){
            if (elementToInsertAction.type !== "numerico")continue
            
            let newAction = null
            let src = undefined;
            if (elementToInsertAction.action !== dataBoton.action){
                newAction = dataBoton.action;
                src = dataBoton.key;
        }
        elementToInsertAction.action = newAction;
        elementToInsertAction.src = src;
        const elementToInsertActionIndex = newElements.findIndex((item)=>(
            item.id === elementToInsertAction.id
        ))
        this.#replaceLastItem(newElements,elementToInsertAction,setElements,elementToInsertActionIndex);
        break;
    }
    }
    #replaceLastItem(elements,newLastItem,setElements,index=null) {
        const newElements = [...elements];
        newElements[index===null?newElements.length-1:index]=newLastItem;
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
            // lastElement.type==="numerico"
            true
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
            this.#replaceLastItem(newElements,lastElement,setElements);
            return
        }
        if (lastElement.type === "especial operacion" && split_type.includes("operacion")){
            lastElement.key = key
            this.#replaceLastItem(newElements,lastElement,setElements);
            return
        }
        if (lastElement.type !== "numerico" && key==="+/-"){
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
            if (
                e.action === this.c.exponente_al.cuadrado
                ||
                e.action === this.c.exponente_al.cubo
            ){
                const exponente = parseInt(e.action.split(" ")[1]);
                value = `(Math.abs(${value})**${exponente})`;
            }
            else if (
                e.action === this.c.raiz.cuadrada 
                ||
                e.action === this.c.raiz.cubica
            ){
                const indice = parseInt(e.action.split(" ")[1]);
                value = `((Math.abs(${value})**(1/${indice})))`;
            }
            operacion += value


        })
        
        return(operacion.replaceAll('x','*').replaceAll("÷","/"))
    }
    getResult(elements,setElements,setLastElementsInHistorial){
        console.log(elements)
        const result = this.getRawOperation(elements)
        console.log(result)
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
        this.localStorageManager.addToHistory([...elements].map((item)=>{
            item.src = null;
            return item
        }));
        this.#forceRenderPanel(elements,setLastElementsInHistorial)
        this.#forceRenderPanel(newElements,setElements)

    }
}

export {Controlador}