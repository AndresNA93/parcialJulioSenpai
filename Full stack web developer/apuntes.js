/*
    Variables:

    Las variables son identificadores que utilizamos para guardar valores.

    Podemos pensar en ellas como si fueran cajitas en la memoria de nuestro programa,
    dentro de las cuales podemos colocar distintos tipos de datos.

    Las variables no tienen un tipo de dato determinado, sino que los valores tienen tipos de datos.
    Esto implica que para JavaScript una variable puede ser asociada a cualquier valor, sin importar su tipo.


    Hay varios tipos de datos en JS (más info en https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures o https://tc39.es/ecma262/)

    Primitivos:
        * string (cadenas de texto)
        * number (números)
            * Algunos valores especiales NaN, Infinity

        * boolean (verdadero o falso)
        * undefined (no definido)
        * null (la nada misma)
        * symbol (para símbolos, poco usado)

    A diferencia de los tipos primitivos, los objetos son un poco más dinámicos.

    Objetos:
        * objetos

    Objetos de primera clase:
        * bigint (números mayores a 2^53)
        * functions (funciones)
        * arrays (listas o arreglos)

    Las variables se pueden declarar y asignar:
        * Declarar es crear una variable pero no explicitarle un valor (su valor por defecto será undefined)
        * Asignar es asociarle un valor a dicha variable, por ejemplo 5, "hola" o true

    Para crear una variable debemos utilizar las palabras clave let, const o var (preferiblemente let/const)

    Sobre los nombres:
        * Los nombres de las variables deben empezar con letras, $ o _
        * Como todo en JS, importan las mayúsculas/minúsculas
        * Pueden tener letras, números, $ y _
        * Se recomienda utilizar lowerCamelCase para las variables


    Para probar vamos a utilizar un método salvador, console.log().
    Éste método nos va a permitir visualizar nuestros valores en consola.
*/

console.log("Hola desde un archivo JS aparte 👀")

let cantidadDeAlumnos = 22;

console.log("Cantidad de alumnos:", cantidadDeAlumnos);

cantidadDeAlumnos = 23;

console.log("Cantidad de alumnos", cantidadDeAlumnos);

/* 1. Declarar una variable con let */

/* 2. Asignar o reasignar un valor a una variable */

/* 3. Declarar y asignar una variable */

/* 4. El operador typeof */

/* 5. Probemos otros tipos de datos */

/* 6. Arreglos */

/* 7. Objetos 🤔 */



