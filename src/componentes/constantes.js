/*
    estas constantes se usan para realizar las acciones para los números puestos en el panel de operación
    y para renderizar su icono
    puedes cambiar el texto de que identifica a la acción, pero los números son necesarios para la operación a realizar.

    # ejemplo
    Cuando elevas al cuadrado la acción a realizar es -> 'exp 2'
    
    'exp' identifica que es una 'exponentiation'
    '2'   se usa para hacer la operación matemática 'n**2'
    
    Esto es asi para hacer mas fácil hacer exponentes mayores en un futuro sin tener que hacer mas grande el codigo
    ya que solo sera necesario cambiar el '2' para exponenciar mas arriba, por ejemplo.

    'exp 3' === 'n**3'

    Es el mismo caso para las demás acciones
    el texto es mutable y el numero de exponente o indice es constante o relacionado con la operación matemática a realzar.
    */
export const actions = {
    exponente_al:{
        cuadrado:"exp 2",
        cubo:"exp 3"
    },
    raiz:{
        cuadrada:"-| 2",
        cubica:"-| 3",        
    }
};
