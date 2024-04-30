# Calculadora Completa [nombre provisional]
Esta calculadora busca ser la mejor opción para personas que necesitan portabilidad, funciones extra y una buena experiencia al hacer cálculos matemáticos.

Esta calculadora es por el momento una aplicación web, pero en un futuro podría ser adaptada o construida para ser nativa de IOS o Android, ya que esta pensada para ser __usada en el celular__.

## Tecnologías
Inicialmente para este proyecto se estarán usando las siguientes tecnologías.
* Html
* Css
* Javascript + react
En un futuro se podrá incrementar las tecnologías o si se es requerido agregar una conexión a un servidor.

## UI de la aplicación

# Arquitectura y conceptos de la aplicación.
Este proyecto esta estructurado de la siguiente manera
![arquitectura de la aplicación](/recursos-documentacion//imagenes/arquitectura-proyecto.png)

Cada paquete tiene su documentación para facilitar la comprensión del mismo asi que, este archivo de documentación supone que ya se ha leído cada documentación de cada paquete (aunque no es necesario si no quieres hacer cambios muy específicos ya que aquí se da un resumen)

## Relaciones de paquetes
![relación de paquetes](/recursos-documentacion/imagenes/relacion-paquetes.png)

### Paquete Jefe
Es todo paquete el cual use funcionalidades de otro paquete, todos los paquetes jefes tienen que cumplir con las siguientes características obligatorias.

1. No tener importaciones circulares (Sus paquetes empleados no pueden usar funcionalidades de sus paquetes jefes sin excepción)
1. Tienen que tener [paquetes empleados](#paquete-empleado).
1. Tienen que darle lo necesario para funcionar a sus paquetes empleados (Solo si es solicitado por el empleado).

### Paquete Empleado
Es todo paquete el cual proporcione alguna funcionalidad a otro paquete ([paquete jefe](#paquete-jefe)).
Los paquetes empleados pueden ser jefes, realizando dos roles al mismo tiempo, pero siempre y cuando se respete la primer característica de los [paquetes jefe](#paquete-jefe)

> #### Funcionalidades
> Son las __clases__ , __funciones__ u __objetos__ exportados por el paquete empleado para que sean usadas por cualquier [paquete jefe](#paquete-jefe) <hr>

Los paquetes empleados deben de cumplir con las siguientes características:



1. Tener al menos una [Funcionalidad](#funcionalidades) exportada para ser usada por cualquier [paquete jefe](#paquete-jefe).
1. El paquete no deberia de usar sus [Funcionalidades](#funcionalidades) , esto para que los [paquetes jefe](#paquete-jefe) tengan la opción de ellos hacer abstracciones especificas usando las funcionalidades de sus empleados y para que los jefes no se preocupen de todo lo que puede hacer una [Funcionalidad](#funcionalidades) de sus empleados.
