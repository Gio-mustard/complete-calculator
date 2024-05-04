import React, { useRef, useState, useEffect } from 'react';
const Pincel = ({ children, currentColor=undefined, color=null, setColor=null ,isErase=false,onClick}) => {

    return (
        <button

            className={`btn-pincel ${currentColor === color ? 'selected' : ""} ${isErase===true?"erase":""}`}
            onClick={() => setColor===null?onClick():setColor(color)}
            style={{
                backgroundColor:color,
               
            }}
            >
            {children}
        </button>
    )
}
export function Pizarron({icons}) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("#000000");
    const [lineWidth, setLineWidth] = useState(5);
    const [drawingMode, setDrawingMode] = useState('draw');  // 'draw' or 'erase'
    const [backgroundColor, setBackgroundColor] = useState('#f0f8ff');
    useEffect(() => {
        const canvas = canvasRef.current;
        const dot =.8
        canvas.width = window.innerWidth * dot;
        canvas.height = window.innerHeight * dot;
        canvas.style.width = `${window.innerWidth * dot}px`;
        canvas.style.height = `${window.innerHeight * dot}px`;
        

        const context = canvas.getContext('2d');
        context.lineCap = "round";
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.globalCompositeOperation = drawingMode === 'draw' ? 'source-over' : 'destination-out';

        contextRef.current = context;
    }, []);

    useEffect(() => {
        if (contextRef.current) {
            contextRef.current.strokeStyle = color;
            contextRef.current.lineWidth = lineWidth;
        }
    }, [color, lineWidth]);

    const startDrawing = (event) => {
        const { offsetX, offsetY } = getCoordinates(event);
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = (event) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = getCoordinates(event);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    const getCoordinates = (event) => {
        if (event.touches) {
            event.preventDefault();
            return {
                offsetX: event.touches[0].clientX - event.target.offsetLeft,
                offsetY: event.touches[0].clientY - event.target.offsetTop
            };
        } else {
            return {
                offsetX: event.nativeEvent.offsetX,
                offsetY: event.nativeEvent.offsetY
            };
        }
    };

    const saveCanvas = () => {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvasRef.current.width;
        tempCanvas.height = canvasRef.current.height;
        tempCtx.fillStyle = backgroundColor; // Color blanco
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.drawImage(canvasRef.current, 0, 0);
        const image = tempCanvas.toDataURL("image/jpeg");
        const link = document.createElement('a');
        link.href = image;
        link.download = 'dibujo.jpg';
        link.click();
    };
    const validatePincelSelected = (e) => {
        const btnPincel = document.getElementsByClassName("btn-pincel");

    }
    const toggleEraser = () => {
        setDrawingMode(prevMode => prevMode === 'draw' ? 'erase' : 'draw');
    };
    useEffect(()=>{
        setColor("#2D3334")
    },[])
    return (
        <div id='pizarron-container'>
            <section id='pizarron-pinceles'>
                <img src={icons.pato} alt="ir a la calculadora" id='link-ir-calculadora'/>
                <h3 id='instruccion-pizarron'>usa esto para dibujar</h3>
                <div id='pinceles'>
                <Pincel
                onClick={saveCanvas}
                    isErase={true}
                >
                    <img src={icons.guardar}/>
                </Pincel>
                <Pincel
                    currentColor={color}
                    color="#00E0FF"
                    setColor={setColor}
                    >

                </Pincel>
                <Pincel
                    currentColor={color}
                    color="#EB1B0E"
                    setColor={setColor}
                    >

                </Pincel>
                <Pincel
                    currentColor={color}
                    color="#2D3334"
                    setColor={setColor}
                    >

                </Pincel>
                <Pincel
                    currentColor={color}
                    color={backgroundColor}
                    setColor={setColor}
                    isErase={true}
                >
                    <img src={icons.borrador}/>
                </Pincel>
                    </div>
            </section>
            <canvas
                id='canvas'
                style={{
                    backgroundColor: backgroundColor
                }}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                onTouchStart={startDrawing}
                onTouchEnd={finishDrawing}
                onTouchMove={draw}
                ref={canvasRef}
            />

        </div>
    );
}