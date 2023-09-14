/*Usa sintaxis de desestructuración para asignar variables desde arreglos
ES6 hace que desestructurar arreglos sea tan fácil como desestructurar objetos.

Una diferencia clave entre el operador de propagación y la desestructuración de arreglos es que el operador de propagación desempaca todos los contenidos de un arreglo en una lista separada por comas. En consecuencia, no puedes elegir qué elementos deseas asignar como variables.

Desestructurar un arreglo nos permite hacer exactamente eso:*/

const [a1, b1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1);
//La consola mostrará los valores de a y b como 1, 2.

/* A la variable a se le asigna el primer valor del arreglo, y a b se le asigna el segundo valor del arreglo. También podemos acceder al valor en cualquier índice de un arreglo con la desestructuración usando comas para alcanzar el índice deseado:*/ 

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
//La consola mostrará los valores de a, b, y c como 1, 2, 5.

/*------------ejercicio---------------------*/

/*Utiliza la sintaxis de desestructuración para intercambiar los valores de a2 y b2 para que a2 reciba el valor almacenado en b2, y b2 reciba el valor almacenado en a2.*/

/*-----------Solución------------------*/
let a2 = 8, b2 = 6;
// Cambia solo el código debajo de esta línea
[a2, b2] = [b2, a2];

console.log(a2, b2);

//de esa forma modificamos los valores de un array usando la desestructuración


/*-----------------------------------Desestructuración vía elementos rest----------------------------------*/
/*En algunas situaciones que implican la desestructuración de arreglos, tal vez queramos recolectar el resto de elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación:*/

const [a4, b4, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

/*a consola mostrará los valores 1, 2 y [3, 4, 5, 7].

Las variables a y b toman el primer y segundo valor del arreglo. Luego de esto, debido a la presencia de sintaxis rest arr obtiene el rest de los valores en forma de un arreglo. El elemento rest sólo funciona correctamente como la última variable en la lista. Es decir, no se puede utilizar la sintaxis rest para capturar un sub arreglo que deje fuera el último elemento del arreglo original.*/
/*-------------------ejercicio---------------*/
/*Utiliza una asignación de desestructuración con la sintaxis rest para emular el comportamiento de Array.prototype.slice(). removeFirstTwo() debe devolver un sub arreglo del arreglo original list con los dos primeros elementos omitidos.*/

/*-----------------solución------------*/
//la siguiente función almacena en las variables a y b, los dos primeros valores, los restantes los almancena en la lista que devuelve(shorterList) con el operator ...rest
function removeFirstTwo(list) {
    // Cambia solo el código debajo de esta línea
  
    const [a, b, ...shorterList] = list; // Cambia esta línea
    // Cambia solo el código encima de esta línea
    console.log(shorterList)
  
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);


