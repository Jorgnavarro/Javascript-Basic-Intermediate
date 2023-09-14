/*Escribe funciones flecha con parámetros
Al igual que una función regular, puedes pasar argumentos a una función flecha.*/

const doubler = (item) => item * 2;
/*doubler(4);
doubler(4) devolvería el valor 8.*/

/*Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos.

const doubler = item => item * 2;
Es posible pasar más de un argumento a una función flecha.*/

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
//multiplier(4, 2) devolverá el valor 8.
/*-----------------------------------------------ejercicioo---------------------------
Reescribe la función myConcat que añade el contenido de arr2 a arr1 para que la función use la sintaxis de función flecha.*/

/*----------------------------------solución---------------------*/

const myConcat = (arr1, arr2,) => arr1.concat(arr2); 
console.log(myConcat([1, 2], [3, 4, 5]));

//Con la propiedad concat() unimos los dos arrays
