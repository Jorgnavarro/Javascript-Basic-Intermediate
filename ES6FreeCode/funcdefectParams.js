/*Establece parámetros por defecto para tus funciones
Para ayudarnos a crear funciones más flexibles, ES6 introduce parametros por defecto para funciones.

Echa un vistazo, al siguente código:*/

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
/*La consola mostrará las cadenas Hello John y Hello Anonymous.

El parámetro por defecto entra en juego cuando el argumento no es especificado (es indefinido). Como puedes ver en el ejemplo anterior, 
el parámetro name recibirá su valor por defecto Anonymous cuando no proveas un valor para el parámetro. Puede agregar valores por defecto para tantos parámetros como desees.*/

/*------------------------------------------ejercicio--------------------------------------*/

//Modifica la función increment agregando parámetros por defecto para que sume 1 a number si value no se especifica.

/*****************solución************************* */
const increment = (number, value = 1) => number + value;
console.log(increment(5))
