

class Controlador{
    constructor(Item,icons){
        this.currentIndex=0;
        this.Item = Item;
        this.icons = icons;
    }
    findLastItemInPanel(){
        /*
        @return : data del ultimo item del panel de operación.
        */
       const items = [...document.getElementsByClassName("item-panel")];
       return items.length === 0 ? null:items[items.length-1]
    }
    addItem(dataBoton,elements,setElements){
        
        const {type,src,key,action} = dataBoton;
        const split_type = type.split(' ');
        const newElements = [...elements]

        const lastElement = newElements.length===0?{type:undefined}:newElements[newElements.length - 1];
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
           setElements([])
            setTimeout(()=>{
                setElements(newElements);
            },50)
        }
        else{

        

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
    }
    deleteItem(elements,setElements){
        if (elements.length===0) return
        const _elements = [...elements];
        const lastElement = _elements.length===0?{type:undefined}:_elements[_elements.length - 1];

        if (lastElement.type==="numerico"){
            const lastInPanelItemValue = document.getElementsByClassName("value")[0];
            if (lastInPanelItemValue.textContent.length>1){

                lastInPanelItemValue.textContent  = lastInPanelItemValue.textContent.slice(0,lastInPanelItemValue.textContent.length-1);
                return
            }
            
         }
         

        const newElements = elements.slice(0,elements.length-1);
        setElements(newElements);
            
    }
    getRawOperation(elements){
        let operacion = ""
        const items = [...elements];
        items.map(e=>{
            let value = e.key;
            operacion += value


        })
        
        return(operacion.replace('x','*').replace("÷","/").replace('exp',"2**"))
    }
    getResult(elements,setElements){
        const result = this.getRawOperation(elements)
        console.log(result)
        const key = parseFloat(eval(result))
        const newElements = [
            {
                key:key,
                id:`item-panel-${elements.length+1}`,
                action:null,
                type:"numerico",
                src:null,
                onclick:null // el evento se agrega al maquetar en el //! panel numérico.
            },
        ];
        setElements([])
        setTimeout(()=>{
            setElements(newElements);

        },100)

    }
}

export {Controlador}