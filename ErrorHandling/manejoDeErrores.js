//ponemos nuestro programa en modo estricto
'use strict'

//x= 10;

/*Al usar Quokka, podemos ver que en la línea 4 aparece que x no está definido arrojando un error y parando el programa, lo que indica que las siguientes líneas no se ejecutarán */

/*¿Qué hacemos para recuperarnos de este error y continuar con nuestro programa? 
utilizamos la sintaxis try/catch 
la línea 4 la vamos a envolver en un try para poder manejar nuestro error
*/
try{
    x = 10;
}
catch(e){
    console.log(e);
}
/*Ya redacatamos un bloque try/catch, es importante que siempre que indiquemos un try, debemos acto seguido con el catch indicar todas los procesos necesarios para manejar dicho error */
console.log("Estoy saltando un error");

/*si observamos en la línea 16 al hacer el console.log del error, la variable e,  muestra un array que contiene el tiempo de error "ReferenceError" y el mensaje del error "x is not defined", 
lo interesante es que al capturar el error, la línea siguiente se está ejecutando, por tanto nuestro pograma puede continuar */

//another example, con funciones que no han sido definidas.

try{
    miFunction();
}
catch(e){
    console.log(e);
}

//last example utilizando finally
//finally siempre se ejecutará así no hayan errores, este bloque es opcional, depende de lo que queremos lograr.
try {
    let x = 5
} catch (error) {
    console.log(error);
}finally{
    console.log("finished reviving errors");
}

/*Creando mis propios errores, usando la cláusula throws
*/
try{
    let name = "Jorge";
    throw `el nombre ${name} no puede ser implementado`;
}catch (e){
    console.log(e);
}finally{
    console.log("finaliza revisión de errores");
}

/*Another example*/

let result = "";

try {
    x = 10;
    if(isNaN(result)) throw 'it is not a number';
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

//ejercicio con switch

/*IMPORTANTE: al momento de usar switch, el valor de la variable se compara directamente con los casos, 
por esta razón para el ejercicio de abajo, para poder crear condiciones más complejas que la comparación del valor de la variable, iniciamos la primera cláusula del switch en true. 
Luego creamos los condicionales complejos, fabricamos nuestro exception con throw y lo atrapamos en nuestro catch y lo manejamos como deseemos.
*/

try{
    switch(true){
        case (result === 0) : 
        throw 'Es un número neutro';
        case  (result<0) :
        throw 'Es un número negativo';
        case (result >0): 
        throw 'Es un número positivo';
        default: 
        throw 'No es un número válido';
    }
}catch(e){
    console.log(e);
}

/*cuando usamos un switch interactuamos directamente con el resultado de la variable, 
es decir los casos que se crean en el parámetro switch son afectados por el resultado de la variable que se pase por parámetro del mismo, 
pero si agregamos banderas como true or false directamente en el parámetro de la variable podemos implementar switch con case que usen condicionales complejas. 
*/
/*Usando if */
let test = "hola papá";

try {
    if(!isNaN(test)) throw 'Es un número'
    else if(test.length <=3) throw 'La palabra tiene que tener una extensión mayor';
    else if(test.length >3) throw 'La palabra tiene la extensión adecuada';
} catch (e) {
    console.log(e);
}finally{
    console.log("La revisión de la variable test, se completó");
}
//Creando una función flecha y mándandola a llamar
(()=>{
    console.log("Hola");
})();

const returnObj = () => ({
    email: 'jorlunape@hotmail.com',
    city: 'Munich',
    age: 30
})

console.log(returnObj());
/*Para poder regresar un objeto con una arrow function debemos de escribir la siguiente sintaxis const nameFunction = ()=>({
    key: value,
    key: value
}) 
como el cuerpo de un objeto usa llaves, y el cuerpo de la función arrow también, podemos usar ({}), primero paréntesis y después las llaves.
*/
//llamadas asíncronas con función setTimeout
//ejemplo de proceso asíncrono, se ejecuta la función y se manda a llamar después de 3 segs la otra función.
function myFunctionCallback(){
    console.log("Saludo asíncrono después de 3 segs");
}

setTimeout(myFunctionCallback, 3000);

setTimeout(()=> {console.log("hello late")}, 1000);

//reloj example

let reloj = () =>{
    let actuallyDate = new Date ();
    console.log(`${actuallyDate.getHours()}: ${actuallyDate.getMinutes()}:${actuallyDate.getSeconds()}`);
}

//setInterval(reloj, 1000);
