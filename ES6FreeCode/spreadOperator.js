/*Utiliza el operador de propagación para evaluar los arreglos en el lugar
ES6 introduce el operador de propagación, que nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 usa apply() para calcular el valor máximo en un arreglo:*/

var arr = [6, 89, 3, 45];
//var maximus = Math.max.apply(null, arr);
//maximus tendrá un valor de 89.

/*Tuvimos que usar Math.max.apply(null, arr) porque Math.max(arr) devuelve NaN. Math.max() espera argumentos separados por comas, pero no un arreglo. El operador de propagación hace que esta sintaxis sea más fácil de leer y mantener.*/

const arr21 = [6, 89, 3, 45];
const maximus = Math.max(...arr21);
//maximus tendría un valor de 89.

/*...arr devuelve un arreglo desempacado. En otras palabras, propaga el arreglo. Sin embargo, el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo literal. El siguiente código no funcionará:

const spreaded = ...arr;*/

/*--------------------------------ejercicio--------------------*/

//Copia todo el contenido de arr1 en otro arreglo arr2 usando el operador de propagación.

/*-------------------------Solución-------------------*/
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);

//se pueden hacer diferentes trabajos con el spread operator

//introducir valores al interior de otro array usando otro array

let things = ["Gon", "Mercedes Benz", "Front End"]

let anotherThings = ["I can do it", ...things, "Work hard", "Rock you"] // con esta sintaxis introduccimos los valores del array ...things al interior del array anotherThings.

console.log(anotherThings);

//copiar un array para luego modificarlo sin afectar al original.

let numP = [0,1,2];
let numC = [...numP]
numC.push(7,8,9);
console.log(numC);
console.log(numP);

//arriba agregamos más valores al array numC que contiene una copia de numP, los cuales solamente afectan el array numC, el array numP contendrá sus valores originales.