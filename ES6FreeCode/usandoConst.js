


import * as stringFunctions from './exportFunc';
// Cambia solo el código encima de esta línea

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


/*Muta un arreglo declarado con const
Si no estás familiarizada con const, verifica este desafío sobre la palabra clave const.

La declaración const tiene muchos casos de uso, en el JavaScript moderno.

Algunos desarrolladores prefieren asignar todas sus variables utilizando const por defecto, a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, utilizan let.

Sin embargo, es importante comprender que los objetos (incluyendo arreglos y funciones), asignados a una variable usando const siguen siendo mutables. Usar la declaración const solo previene la reasignación del identificador de una variable.*/

const s1 = [5, 6, 7];
//s1 = [1, 2, 3];
s1[2] = 45;
console.log(s1);

/*s = [1, 2, 3] resultará en un error. Después de comentar esa línea, el console.log mostrará el valor [5, 6, 45].

Como puedes ver, puedes mutar el objeto [5, 6, 7] en sí mismo y la variable s seguirá apuntado al arreglo alterado [5, 6, 45]. Como todos los arreglos, los elementos del arreglo en s son mutables, pero debido a que se utilizó const, no puedes utilizar el identificador de la variable s para apuntar a un arreglo diferente usando el operador de asignación.

Un arreglo es declarado como const s = [5, 7, 2]. Cambia el arreglo a [2, 5, 7] utilizando varias asignaciones de elementos.*/

/*-------------------------solución------------------------*/

const s = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea

  // Usar s = [2, 5, 7] sería inválido
    // s[0] = 2;
    // s[1] = 5;
    // s[2] = 7;
    let prub= [3, 5, 7, 9]
    for(let i = 0; i<prub.length; i++){
        s[i] = prub[i]
    }
    console.log(s);
  //de la forma anterior omitimos el paso de reasignar valores en una constante de un array por valores individuales
  //lo hacemos desde un for, los valores se reemplazan automáticamente.
}
editInPlace();

//se modifican los valores al interior de la constante, pero no se pueden reasignar.