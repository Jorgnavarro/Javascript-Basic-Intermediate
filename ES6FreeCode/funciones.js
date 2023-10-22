//hoisting
let resultado = miFuncion(100, 150);

console.log(resultado);

//declaración de la función
function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}
//Llamando a la función
console.log(miFuncion(30, 50)); 

//usando una función expresada

let saludo = function(nombre){
    return "Hola " + nombre + ", te deseamos un excelente día";
}
resultado =  saludo("Jorge");

console.log(resultado);

//self-invoking, función que se llama así misma
//esta función no se puede reutilizar, solamente se usa una vez después de que se ejecuta la línea de código
//No se puede reutilizar porque no se almacena en una variable y porque es una función anónima

(function(){
    console.log("Me estoy ejecutando sola");
})();

//preguntamos por el tipo de dato

console.log(typeof saludo);

//comprobando que una función también es un objeto, utilizamos la propiedad .toString();

let miFuncionTexto = miFuncion.toString();

console.log(miFuncionTexto);

//funciones tipo flecha o arrow
//en la función tipo arrow no se usan las llaves en el cuerpo de la misma porque
// el código se puede redactar en una línea

const sumarFunctionTypeArrow = (a, b) => a + b; 

resultado = sumarFunctionTypeArrow (40, 70);

console.log(resultado);

//usando arguments dentro de la función

let anotherFunction = function( a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a * b
}

resultado = anotherFunction(15, 30);

console.log(resultado); 

//se pueden emplear valores por default en los parámetros de una función

let anotherFunction2 = function ( a = 8, b = 30){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a * b;
}

console.log(anotherFunction2());

//observamos que la salida de los argumentos es undefined porque no se está pasando ningún
//valor a la función, pero sí definiendo los parámetros por tanto en la salida por consola
//tenemos el resultado, y la salida al interior de la función anotherFunction2 nos arroja
//undefined, cuando llamamos arguments. si usamos valores en los argumentos, estos sobreescriben
//los que tengan default

//podemos también acceder a los argumentos de una función que son sean definidos en los
//parámetros, por ejemplo:

let anotherFunction3 = function (a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]); //esta línea almacena el tercer valor y lo muestra, así no se implemente en los paramétros
    return a * b * arguments[2]
}

resultado = anotherFunction3(30, 40, 50)

console.log(resultado);

//teniendo en cuenta lo anterior, estudiaremos que sucede debajo en una función, constantemente las mismas funciones hacen recorridos
//para integrar valores, en este caso vamos a multiplicar todo, así que trabajaremos con argumentos.

let argumentsResults = multipleEverything(13, 18, 19, 23, 27);
console.log(argumentsResults);

function multipleEverything(){
    let totalMultiplication = 1; // se inicia en 1 para que se pueda inicializar la sumatoria de la multiplicación
    for(let i = 0; i < arguments.length; i++){
        totalMultiplication *= arguments[i]; 
    }
    return totalMultiplication;
}

//se puede pensar en el trabajo interno que hace una función, si toda función es un objeto, se demuestra en el ejemplo anterior, que puede recorrerse, que se puede iterar, y trabajar con otras propiedades, modificando su salida por pantalla, entre otras características.

//paso por valor, se hace con tipos de datos primitivos y siempre se crea una copia, el valor se opera cuando se ejecuta la función, pero al finalizar la ejecución de la misma, el nuevo valor se destruye. Recodar que los tipos de datos primitivos son llamados así porque no tienen propiedades o métodos, necesitan de funciones externas para poder ser operados.
let x = 10

function changeValue(a){
    return a = 50;
}

console.log(changeValue(x)); //solamente mostrará otro valor al ejecutar la función

console.log(x); // x conservará su valor original

//paso por referencia, se pasa la referencia del objeto al cual estamos apuntando para modificarlo. Por esa razón el parámetro se puede citar con los atributos del objeto, por ejemplo param.name

const persona = {
    name: "Jorge",
    lastName: "Navarro"
}

function changeValueObject(param){
    param.name = "Luis";
    param.lastName = "Peñate";
}
changeValueObject(persona);
console.log(persona);
