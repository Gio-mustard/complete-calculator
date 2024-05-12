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
    action:'exp 2'||null,
    onClick:() => addItem(...)

}

const [elements,setElements] =useState([itemPanel])

```
-> Mira el archivo 'constantes.js' para ver las actions que existen y como funcionan.

# historial
Cuando se realiza una operación matemática esta se guarda en el __local storge__ habiendo una clave la cual guarda un array donde cada elemento es una operación que se realizo, cabe mencionar que no se guarda el resultado en el historial, solo se guarda el algoritmo.
