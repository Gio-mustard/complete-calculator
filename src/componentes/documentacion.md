# Funcionamiento de paquetes.

Los paquetes de [acciones](#acciones) y [ayudas](#ayudas) son los [paquetes empleados](../../README.md#paquete-empleado) de todos los componentes

## Acciones
Aquí van declarados todas las funciones que ayudan a un [__paquete jefe__](../../README.md#paquete-jefe) pero que __SI__ necesitan algún dato (parámetro) para funcionar.


## Ayudas
Aquí van declarados todas las funciones que ayudan a un [__paquete jefe__](../../README.md#paquete-jefe) pero que __NO__ necesitan ningún dato (parámetro) para funcionar. 

# Item Panel
El __panel numerico__ esta formado por un array con sus __items del panel__
este array tiene que tener la siguiente estructura...

```jsx
// este es el item que representa cuando le das click al numero 7.
const itemPanel = {
    key:7,
    type:"numerico",
    src:"/icono.png"|null,
    action:'square'||null,
    onClick:() => addItem(...)

}


const [elements,setElements] =useState([itemPanel])

```