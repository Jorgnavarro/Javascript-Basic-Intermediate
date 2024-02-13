/*-----------------------Programación de algoritmos intermedios-------------------------
Ahora que conoces los conceptos básicos del pensamiento algorítmico, junto con la OOP y la programación funcional, 
prueba tus habilidades con los desafíos de programación de algoritmos intermedios. 

--------------------------------------------Excercise 01----------------------------------
----------------------------Suma todos los números en un rango----------------------
Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.
-----------Requirements
sumAll([1, 4]) debe devolver un número.
sumAll([1, 4]) debe devolver 10.
sumAll([4, 1]) debe devolver 10.
sumAll([5, 10]) debe devolver 45.
sumAll([10, 5]) debería devolver 45.
*/

function sumAll(arr) {
    let counter = 0;
    let valMax = arr[1];
    let valMin = arr[0];
    if(valMin<valMax){
        for(let i = valMin; i<valMax + 1; i++){
            counter += i;
        }
    }else{
        for(let i = valMax; i<valMin + 1; i++){
            counter +=i; 
        }
    }
    return counter;

}
console.log(sumAll([5, 30]));

/*La respuesta proporcionada se hizo algo rústico, pero se logró. creamos 3 variables, creando un contador que nos va retornar el resultado, 
las otras variables son los rangos, el mínimo y el máximo, que según el ejercicio si se intercambia el orden debe dar el mismo resultado.
Se completó el ejercicio con dos bucles for, usando los rangos de valMax and valMin, y almacenando las i en el contador, 
se aclara que no se puede usar la propiedad .length porque el array solamente tiene 2 elementos. 
Entonces al rango máximo o mínimo según la posición de elementos se le tiene que sumar 1 porque el array siempre inicia desde 0, 
así que en valores no podríamos sumar todas las "i" que corresponde al número de iteración, el cual acumulamos en el contador, 
creamos la condición para que cuente al derecho, en caso de que el valor mínimo sea menor que el valor máximo y 
creamos un else para que el forma retorne el mismo valor en caso de que el valor mínimo sea mayor que el valor máximo, es decir que el conteo sea al revés. 
Revisemos las otras soluciones:

------------------Usando Math.max and Math.min
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}
sumAll([1, 4]);
en esta solución, se deben pasar por parámetros los dos valores y la propiedad Math sea max or min, retorna el menor o mayor valor de los números, luego se estipula el rango en el bucle for con esas instancias y se agregan las "i" al contador, para así retornarlo, con esta solución nos ahorramos un bucle for.

-------Another solution, pasando directamente la propiedad Math y copiando el array con el spread operator
function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);

*/


/*-------------------------------Excercise 02--------------------------
----------------------Diferenciar dos arreglos------------------------------
Diferenciar dos matrices
Compare dos matrices y devuelva una nueva matriz con cualquier elemento que solo se encuentre en una de las dos matrices dadas, pero no en ambas. 
En otras palabras, devuelva la diferencia simétrica de las dos matrices.

Nota: puede devolver la matriz con sus elementos en cualquier orden.
-------------Requirements
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])debe devolver una matriz.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]debería ["pink wool"]volver
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]debe devolver una matriz con un elemento.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]debería ["diorite", "pink wool"]volver
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]debe devolver una matriz con dos elementos.
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]debería []volver
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]debería devolver una matriz vacía.
[1, 2, 3, 5], [1, 2, 3, 4, 5]debería [4]volver
[1, 2, 3, 5], [1, 2, 3, 4, 5]debe devolver una matriz con un elemento.
[1, "calf", 3, "piglet"], [1, "calf", 3, 4]debería ["piglet", 4]volver
[1, "calf", 3, "piglet"], [1, "calf", 3, 4]debe devolver una matriz con dos elementos.
[], ["snuffleupagus", "cookie monster", "elmo"]debería ["snuffleupagus", "cookie monster", "elmo"]volver
[], ["snuffleupagus", "cookie monster", "elmo"]debe devolver una matriz con tres elementos.
[1, "calf", 3, "piglet"], [7, "filly"]debería [1, "calf", 3, "piglet", 7, "filly"]volver
[1, "calf", 3, "piglet"], [7, "filly"]debe devolver una matriz con seis elementos.
*/

function diffArray(arr1, arr2) {
  const newArr = [];
  
  function firstComparation(oneArr, twoArr){
    for(let i = 0; i<oneArr.length; i++){
      if(twoArr.indexOf(oneArr[i]) === -1){
        newArr.push(oneArr[i]);
      }
    }
  }
  firstComparation(arr1,arr2);
  firstComparation(arr2, arr1);
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); 
/*No pude resolver el ejercicio, pero la solución es muy clara, se crea una función que hace una busqueda, tomando como referencia un array, 
para buscar en otro, si el elemento es diferente la busqueda pushea en un nuevo array el valor que no coincide en los dos array, 
abajo antes de retornar el nuevo array, 
se hace una intercalación de función para que se puedan intercambiar los arrays y arroje el mismo resultado.
----------Another solutions----------

------------with includes()
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

se concatena al arr1 el arr2, luego se aplica un filter, preguntamos si el elemento se encuentra incluido en el primer array o en el segundo en comparación 
con la concatenación de los 2 y como resultado devolverá el elemento o los elementos.

-----------------with callback function
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
*/

/*-------------------------Excercise 03-----------------------------------
----------------------Buscar y destruir-------------
Se le proporcionará una matriz inicial (el primer argumento de la destroyerfunción), seguida de uno o más argumentos. 
Elimina todos los elementos de la matriz inicial que tengan el mismo valor que estos argumentos.

Nota: Tienes que usar el arguments objeto.

------------Requirements
destroyer([1, 2, 3, 1, 2, 3], 2, 3)debería [1, 1]volver
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)debería [1, 5, 1]volver
destroyer([3, 5, 1, 2, 2], 2, 3, 5)debería [1]volver
destroyer([2, 3, 2, 3], 2, 3)debería []volver
destroyer(["tree", "hamburger", 53], "tree", 53)debería ["hamburger"]volver
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")debería [12,92,65]volver
*/

function destroyer(arr) {
let arrArguments = []
for(let i = 1; i<arguments.length; i++){
    console.log(arguments[i]);
    arrArguments.push(arguments[i]) 
}
console.log(arrArguments);
return arr
    .concat(arrArguments)
    .filter(item => !arr.includes(item) || !arrArguments.includes(item));
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

/*En la solución anterior, lo que hicimos fue separar los argumentos, usando el objeto arguments, por la posición siempre arguments[0], 
será el array y apartir de arguments[1] en adelante, serán los elementos que vamos a comparar y posteriormente a eliminar.
Después de separar los argumentos, los concatenamos al primer array, arr y los filtramos, 
indicando que los elementos que sean diferentes !arr.includes(item) || !arrArguments.includes(item), 
se deben retornar en un nuevo array y de esta forma es como eliminamos la coincidencias.

-----Another solutions-----------
Debo aprender a pensar fuera de la caja, es complicado, pero entender como puedo usar, indeOf(), includes() o filter(), 
junto con otras propiedades es clave para el desempeño y la solución de algoritmos complejos, por ejemplo:
La siguiente solución es algo creativa

function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

En la línea 165, usamos el slice(1), para retornar todos los argumentos a apartir de esa posición, 
los almacenamos en una variables y con ellos podemos comparar con el array del argumento en la posición 0, creamos un array vacío. 
luego creamos un for para iterar sobre nuestro array en el argumento 0, iniciamos una variable con un valor booleano en false, 
luego creamos un segundo for que itere sobre los argumentos a partir de la posición 1, dentro de ese segundo for, creamos un if, 
donde indicamos que si los elementos del arr[i] son exactamente iguales a los elementos que se encuentran en valsToRemove[j], que retorne true.
Luego de esto, de bajo del segundo for creamos un condición que indique que si la variable removeElement, instanciada en el primer for es false, 
es decir no se cumple la condición del segundo for, que se haga un push al array que vacío que creamos afuera de los ciclos for, 
luego lo retornamos por fuera de los for y obtenemos únicamente los elementos diferentes, es clave entender que el condicional que se crea if(!removeElement), 
se instancia una variable como false en el primer for, debido a que se debe recorrer el array, de ahí la clave de su posicionamiento.
 */
function destroyer2(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  console.log(valsToRemove);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
console.log(destroyer2(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));

function destroyer3(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}
console.log(destroyer3(["tree", "hamburger", 53], "tree", 53));

/* en la línea de la const valsToRemove, de nuevo se retornan los argumentos después de la posición 0, 
se retorna el array cuando se le hace un filter(), pero este filter tiene un callback con un argumento, 
al interior de esa función se indica que se retorne el elemento diferencial de !valsToRemove.includes(val) 
y en el parámetro del callback se llama cada elemento del array, designado como "val"

------------------Another solution
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
La solución más sencilla, se utiliza el spread operator en los argumentos siguientes al argumento 0, para indicar que se almacenarán en valsToRemove, 
se le hace un filter al array, arr.filter, en donde el elem, sino está incluido en el valsToRemove que lo retorne.
*/

/*------------------------------------------------Excercise 04-----------------------------------------------
------------------------------------------------Donde estás------------------------------------
Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos 
los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto 
fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], y el segundo argumento es { last: "Capulet" }, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, el cual fue pasado como segundo argumento.
--------------------Requirements
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) debe devolver [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) debe devolver [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) debe devolver [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) debe devolver [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) debe devolver [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) debe devolver []

whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}) debe devolver []
*/
function whatIsInAName(collection, source) {
  let propSource = Object.keys(source) // forma como se obtienen las propiedades de un objeto para después usarlas en iteraciones
  console.log(propSource);

return collection.filter(obj =>{
  for(let i = 0; i<propSource.length; i++){
    if(!obj.hasOwnProperty(propSource[i]) || obj[propSource[i]] !== source[propSource[i]]){
      return false
    }
  }
  return true;
})
}
/*Explicación del código: almacenamos las propiedades usando Object.keys de source, 
que son los que vamos a buscar en el array de objetos. Le hacemos el filter a la collection, 
tomando el elemento el primer argumento obj. Al interior, instanciamos un for, donde la condición de la iteración para hacerlo escalable 
propSource.length, creamos un if que retorne un false si se cumplen las condiciones, la primera es: !obj.hasOwnProperty(propSource[i]), 
indicando que si es diferente la propiedad del obj collection a la propiedad que almacenamos en la variable propSource[i] 
en el elemento de index que proporcionamos en source, esto se hace con el fin de que sea escalable, si en el argumento pasamos 
un objeto que tenga más propiedades, automáticamente será recorrida con esa instancia [i], retorne false y en caso que sea igual retorne true, 
pero no es suficiente. Tenemos que indicar un || para comparar el valor del obj[propSource[i]] que hace parte del array con el valor del segundo 
argumento proporcionado source[propSource[i]], pero es importante, entender que se pasa la propiedad escalable con [i] 

----Another solution
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const sourceKeys = Object.keys(source);
  return collection
    .filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
}
En tres líneas se resume el código.
// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

*/

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));

/*---------------------------------------------Ejercicio 05---------------------------------------------------
---------------------------------------------Spinal case--------------------------------------------
Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.
-------------Requirements
spinalCase("This Is Spinal Tap") debe devolver la cadena this-is-spinal-tap.
spinalCase("thisIsSpinalTap") debe devolver la cadena this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show") debe devolver la cadena the-andy-griffith-show.
spinalCase("Teletubbies say Eh-oh") debe devolver la cadena teletubbies-say-eh-oh.
spinalCase("AllThe-small Things") debe devolver la cadena all-the-small-things.
*/

function spinalCase(str) {
  let strToLowerCase = str.split(/[_]|\s|(?=[A-Z])/).join("-").toLowerCase()
  return strToLowerCase;
}

console.log(spinalCase('AllThe-small Things'));

//la expresión(?=[A-Z]), indica que seguido de una mayúscula que no cumpla con las otras condiciones se agregrará un guión.


/*--------------------------------Excercise 6---------------------------------------

------------------------------------------Pig Latin (Latin de los cerdos)-----------------------------
Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:

- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.

- Si una palabra comienza con una vocal, solo añade way al final.

Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada están garantizadas como palabras en inglés en minúsculas.
-------------Requirements
translatePigLatin("california") debe devolver la cadena aliforniacay.
translatePigLatin("paragraphs") debe devolver la cadena aragraphspay.
translatePigLatin("glove") debe devolver la cadena oveglay.
translatePigLatin("algorithm") debe devolver la cadena algorithmway.
translatePigLatin("eight") debe devolver la cadena eightway.
Debes manejar las palabras en donde la primera vocal viene en el centro de la palabra. translatePigLatin("schwartz") debe devolver la cadena artzschway.
Debes manejar las palabras sin vocales. translatePigLatin("rhythm") debe devolver la cadena rhythmay.
 */

function translatePigLatin(str) {
  let regexStr = /^[bcdfghjklmnpqrstvwxyz]+[^aeiou]/g;
  let firstLetter = str.slice(0,1);
  let secondLetter = str.slice(1,2)
  console.log(secondLetter);
  let arrVocal = ["a", "e", "i", "o", "u"];
  if(!arrVocal.includes(firstLetter)){
      if(arrVocal.includes(secondLetter)){
        let arrStr=str.split("")
        arrStr.splice(0,1)
        arrStr.push(firstLetter);
        return arrStr.join("") + "ay";
      }else{
        let arrStr= str.split("");
        for(let i = 0; i<arrStr.length; i++){
          if(arrVocal[i].indexOf(arrStr[i])!== -1){
              return arrStr + "ay"
          }else{
              let modified = str.match(regexStr).join();
              let amountToMove = modified.length;
              let moveLetters = str.slice(0,amountToMove);
              arrStr.splice(0, amountToMove);
              arrStr.push(moveLetters);
              return arrStr.join("") + "ay"
          }
        }
      }
  }else{
    return str + "way";
  }
}

console.log(translatePigLatin("california")); 

/*test*/
let pruStr = "glove"
let regexStr = /^[bcdfghjklmnpqrstvwxyz]+[^aeiou]/g;
let modified = pruStr.match(regexStr).join()
let amountToMove = modified.length
console.log(amountToMove);

let strToArr = pruStr.split("")
let moveLetter = pruStr.slice(0,amountToMove)

console.log(strToArr.splice(0,amountToMove));
console.log(strToArr.push(moveLetter));
console.log(strToArr.join(""));

let anotherTest = "hola"
anoArr = anotherTest.split("")
console.log(anoArr);
let arrVocal = ["a", "e", "i", "o", "u"];
console.log(arrVocal.indexOf(anoArr[1]));

console.log(anoArr.filter(e => e.indexOf(arrVocal))); 



function dimelo(){
for(let i = 0; i<arrVocal.length; i++){
  if(arrVocal.indexOf(anoArr[i]>0)){
    return "hola"
  }
  return "Chao"
}
}
console.log(dimelo());

/*------------------Another solutions
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
-----------------------------
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");

------------------------------

*/
function translatePigLatin2(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin2("consonant");


/*-------------------Excercise 8-----------------------
---------------------------------------Busca y reemplaza
Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, 
si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog
-----------------Requirements
myReplace("Let us go to the store", "store", "mall") debe devolver la cadena Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") debe devolver la cadena He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down") debe devolver la cadena I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling") debe devolver la cadena This has a spelling error.
myReplace("His name is Tom", "Tom", "john") debe devolver la cadena His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") debe devolver la cadena Let us get back to more Algorithms.
*/

function myReplace(str, before, after) {
  let firstLetterBefore = before.charCodeAt();
  let firstLetterAfter = after.charCodeAt();
  if(firstLetterBefore >= 65 && firstLetterBefore <= 90){
    let afterModified = after.slice(1,after.length)
    let upperAfter = after[0].toUpperCase().concat(afterModified);
    return str.replace(before, upperAfter)
  }else if(firstLetterAfter >= 65 && firstLetterAfter <= 90){
    let afterModified = after.toLowerCase()
    return str.replace(before, afterModified)
  }
  return str.replace(before, after);
}
console.log(
myReplace("This has a spellngi error", "spellngi", "spelling")); 

//---------------------Another solution

function myReplace2(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }
  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// test here
console.log(myReplace2(
  "A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

/*El código de arriba es mucho más sencillo que el mío, utiliza un condicional con una expresión regular, 
que indica que si la palabra a reemplazar en este caso before, inicia con una letra mayúscula, que la primera letra de la palabra after se transforme en mayúscula
y luego sea concatenada con el resto de la palabra, si la palabra por before es minúscula entonces que la palabra after sea el primer caracter 
en minúscula y se concatene el resto de la cadena de texto con substring, para así pasar al return con el replace()*/



let newStr = "spelling"
console.log(newStr.slice(1));
console.log(newStr.substring(1));
console.log(newStr);


/*-------------------------------Excercise 09-------------------------
-------------------------------Emparejamiento de ADN--------------------
El par de hebras del ADN esta formado por pares de nucleobases. Los pares de base son representados por los caracteres AT y CG, que forman bloques de doble hélix ADN.

A la cadena de ADN le falta el elemento de emparejamiento. Escribe una función que coincida con los pares de base faltantes para la hebra de ADN proporcionada. 
Para cada carácter de la cadena proporcionada, encuentra el carácter de par base. Devuelve los resultados como un arreglo 2d.

Por ejemplo, la entrada GCG, devuelve [["G", "C"], ["C","G"], ["G", "C"]]

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.
------Requirements
pairElement("ATCGA") debe devolver [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") debe devolver [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") debe devolver [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function pairElement(str) {
  let strToArr = str.split("");
  let newArr = [];
  console.log(strToArr.length);
  console.log(strToArr[0]);
  for(let i = 0; i<strToArr.length; i++){
        let piece = strToArr.slice(i, i+1);
        newArr.push(piece);
  }
  newArr.map(function(e){
    if(e.includes("C")){
      e.push("G")
    }else if(e.includes("G")){
      e.push("C")
    }else if(e.includes("A")){
      e.push("T")
    }else{
      e.push("A")
    }
  })
  return newArr;
}

console.log(pairElement("GCG"));

/*--------------------------Anothers solutions---------------------------
function pairElement(str) {
  // Function to match each character with the base pair
  const matchWithBasePair = function(char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  // Find pair for every character in the string
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }
  return pairs;
}
// test here
pairElement("GCG");

---------------------------Another solution
*/
function pairElement2(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}
/*Explicación del código de arriba, puede ayudar mucho para el futuro, 1)creamos un objeto pairs con las claves que vamos a utilizar. 
2) transformamos el string en array str.split(""), luego usamos un .map(x => [x, pairs[x]]), 
que retornará cada vez que itere un array con el elemento x al principio y otro elemento que al mismo tiempo 
ese elemento tiene como propiedad en el objeto pairs, por tanto retornará su opuesto por cada iteración, 
así es como se llama el valor del elemento de un objeto, "pairs[x]"
*/
// test here
console.log(pairElement2("GCG"));

/*----------------------------------Excercise 10-------------------------
-----------------------------------------------Letras faltantes---------------------------------
Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined.
--------------------Requirements
fearNotLetter("abce") debe devolver la cadena d.
Esperando:fearNotLetter("abcdefghjklmno") debe devolver la cadena i.
Esperando:fearNotLetter("stvwx") debe devolver la cadena u.
Esperando:fearNotLetter("bcdf") debe devolver la cadena e.
Esperando:fearNotLetter("abcdefghijklmnopqrstuvwxyz") debe devolver undefined.
*/
function fearNotLetter(str) {
  let strAlphabet = "abcdefghijklmnopqrstuvwxyz"
  let startIndex = strAlphabet.indexOf(str[0]);
  let amountStr = str.length
  console.log(startIndex);

  for(let i = startIndex; i< startIndex + amountStr; i++){
    if(!str.includes(strAlphabet[i])){
      return strAlphabet[i]
    }
  }
  return undefined;
}

console.log(fearNotLetter("bcdf"));

/*-------------------------Another solutions-------------------
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    code of current character 
    const charCode = str.charCodeAt(i);

   if code of current character is not equal to first character + no of iteration
        then a letter was skipped 
    if (charCode !== str.charCodeAt(0) + i) {
    if current character skipped past a character find previous character and return 
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");
-------------------------------------------------------
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}

// test here
fearNotLetter("abce");
*/

/*----------------------------Excercise 11-----------------------
----------------------------------Unión ordenada
Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.

En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.

Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.

Revisa las pruebas de afirmación para ver ejemplos.

-----------------Requirements
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) debe devolver [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) debe devolver [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) debe devolver [1, 2, 3, 5, 4, 6, 7, 8].
uniteUnique([1, 3, 2], [5, 4], [5, 6]) debe devolver [1, 3, 2, 5, 4, 6].
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) debe devolver [1, 3, 2, 5, 4].
*/
function uniteUnique(...arr) {
  let newArr = [...arr].join()
  let expRegex = /\w/g
  let formatArr = newArr.match(expRegex)
  return formatArr.map(function(e) {
    return parseInt(e)
  }
  ).filter(function(e, index, arr){
    return arr.indexOf(e) === index;
  })
}
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));

/* nunca olvidar, siempre que quieras usar el indexOf, procura indicar el array adentro de la función del filter, 
porque de otra forma iterará siempre en la primera posición, siempre me ocurre ese error, me demoré mucho resolviendo un problema sencillo.
------Anothers solutions
function uniteUnique(arr1, arr2, arr3) {
  Creates an empty array to store our final result.
  const finalArray = [];

Loop through the arguments object to truly make the program work with two or more arrays
instead of 3.
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    Loops through the array at hand
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

*/

function uniteUnique2() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));

/*la solución es más sencilla cuando se usa .flat(), pone a un mismo nivel todos los arrays. Recordar que si se usa el spread operator con arguments, 
no se necesita pasar parámetros en la función. Siempre que se use un filter y se quiera operar sobre el array se debe indicar en los argumentos
*/

/*----------------------------------Excercise 12-------------------------------
-------------------------------------------------------Convierte entidades HTML---------------------------------------------
Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.
-------Requirements
convertHTML("Dolce & Gabbana") debe devolver la cadena Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") debe devolver la cadena Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") debe devolver la cadena Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') debe devolver la cadena Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") debe devolver la cadena Schindler&apos;s List.
convertHTML("<>") debe devolver la cadena &lt;&gt;.
convertHTML("abc") debe devolver la cadena abc.
*/
function convertHTML(str) {
  let newStr = str.split("");
  const htmlTags = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;"
  }
  return newStr.map(element => htmlTags[element]|| element).join("")
}

console.log(convertHTML('Stuff in "quotation marks"'));

let manyThings = ["o", "a", "o", 1, 2, 3]
let chainText = "soy un estupido"; 
let arrIn = []
let letter = "u"

console.log(manyThings);
console.log(chainText.split("").map(function(e,i,list) {
  return list[i].replace("s", "x")
} ));

console.log(manyThings.indexOf(1));

/*---------------------Another Solution
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");

*/

/*-------------------------------------Excercise 13---------------------------------
----------------------Suma todos los números impares de Fibonacci-------------------
Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.

Los dos primeros números de la sucesión de Fibonacci son el 0 y el 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. 
Los siete primeros números de la sucesión de Fibonacci son 0, 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5.

-----------------Requirements
sumFibs(1) debe devolver un número.
sumFibs(1000) debe devolver 1785.
sumFibs(4000000) debe devolver 4613732.
sumFibs(4) debe devolver 5.
sumFibs(75024) debe devolver 60696.
sumFibs(75025) debe devolver 135721.
*/
var fib = function(n) {
  const sol = [0, 1];

  for (let i = 2; i<= n; i++) {
      sol[i] = sol[i -1] + sol[i - 2];
  }

  return sol[n];
};

console.log(fib(4));

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
console.log(sumFibs(4));


/*---------------------------------Excercise 14-------------------------------

--------------------------Suma todos los números primos--------------------------
Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 
2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.

---------------Requirements
sumPrimes(10) debe devolver un número.
sumPrimes(10) debe devolver 17.
sumPrimes(977) debe devolver 73156.
*/
function sumPrimes(num) {

  function isPrime(num){
    const sqrt = Math.sqrt(num)
    for(let i = 2; i<=sqrt; i++){
      if(num%i===0){
        return false;
      }
    }
    return true;
  }

  let counter = 0;
  for(let i = 2; i<=num; i++){
    if(isPrime(i))
      counter +=i
  }
  return counter;
}

console.log(sumPrimes(10));

/*-------------------------------Excercise 15------------------------------
----------------------------------Mínimo común múltiplo-----------------
Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, 
así como por todos los números consecutivos del rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. La respuesta sería 6.
-------------Requirements
smallestCommons([1, 5]) debe devolver un número.
smallestCommons([1, 5]) debe devolver 60.
smallestCommons([5, 1]) debe devolver 60.
smallestCommons([2, 10]) debe devolver 2520.
smallestCommons([1, 13]) debe devolver 360360.
smallestCommons([23, 18]) debe devolver 6056820.
*/

function smallestCommons(arr) {

  const [min, max] = arr.sort((a,b) => a-b);
  const numbersDiv = max-min + 1;
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
     upperBound *= i;
  }
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numbersDiv) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1,5])); 


/*--------------------------------------Excercise 16---------------------------
-----------------------------------------------------Déjalo caer--------------------------------------
Dado el arreglo arr, itera y elimina cada elemento comenzando desde el primer elemento (el índice 0) 
hasta que la función func devuelva true cuando el elemento iterado se pasa a través de él.

Luego devuelve el resto del arreglo una vez que se cumpla la condición, de lo contrario, arr debe devolverse como un arreglo vacío.
*/
function dropElements(arr, func) {
  for(let i = 0; i<arr.length; i++){
    if(func(arr[i])){
      let arrAmountModified = arr.slice(arr.indexOf(arr[i])).length;
        if(arrAmountModified < arr.length){
          return arr.slice(arr.indexOf(arr[i]))
        }else{
          return arr;
        }
    }
  }
  return [];
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))


/*Explicación del código, se crea al for para iterar el arreglo, indicando en un primer condicional que si el elemento 
en la posición i es verdadero, entonces se haga un corte con slice desde esa posición, el problema con este algoritmo se presenta, 
cuando todos los argumentos son verdaderos. Para poder diferenciar un caso de otro, utilizamos .length porque la extensión cambiaría, 
entonces simplemente indicamos que si el array es cortado, debería ser menor que la extensión del array original si todos los elementos 
son verdaderos, en caso de ser así retornamos el array recortado, y en caso de que todos los elementos cumplan la condición retornamos 
el array completo. Pero qué sucede sin ningún elemento cumple la condición? retornamos un array vacío.

-------------Anothers solutions------------

*/
function dropElements2(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
console.log(dropElements2([1, 2, 3, 4], function(n) {
  return n > 2;
}));

/*Utilizando shift, el código es más completo y sencillo, se usa un bucle while, donde las condiciones de break son que mientras arr.length 
sea mayor que cero y el elemento sea false hasta que se haga todas la iteracciones, va a devolver los elementos true en arr.shift(), 
sino se cumplen esas condiciones, o todos los elementos son verdaderos, se retorna el array completo, pero si ninguno cumple la condición, 
se retorna un array vacío.
--------------------------
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

-----------------------------------
function dropElements(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
-------------------------------
function dropElements(arr, func) {
  return arr.length > 0 && !func(arr[0])
    ? (dropElements(arr.slice(1), func))
    : arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
*/

/*------------------Excercise 17---------------------
-----------------------------Aplanadora---------------------
Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación.

--------------Requirements
steamrollArray([[["a"]], [["b"]]]) debe devolver ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) debe devolver [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) debe devolver [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) debe devolver [1, {}, 3, 4].
Tu solución no debe utilizar los métodos Array.prototype.flat() o Array.prototype.flatMap().
Las variables globales no deben ser usadas.
*/

function steamrollArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
}

console.log(steamrollArray([1, {}, [3, [[4]]]])); 


/*-------------------Excercise 18-----------------------
--------------------Agentes binarios----------------------
Devuelve una frase traducida al inglés de una cadena binaria pasada.

La cadena binaria estará separada por espacios.

----------------Requirements
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") debe devolver la cadena Aren't bonfires fun!?
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") debe devolver la cadena I love FreeCodeCamp!
*/
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 
01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 
01100110 01110101 01101110 00100001 00111111"));

/*---------------------------------Another solutions
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char

      for (var i = 0; i < biString.length; i++) {
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
      }
    
      // we then simply join the string
      return uniString.join("");
    }
    
    // test here
    binaryAgent(
      "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
    );
-----------------------
function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
*/


/*------------------------------Excercise 19------------------------------
Todo sea verdad
Comprueba si el predicado (segundo argumento) es truthy en todos los elementos de una colección (primer argumento).

En otras palabras, se te da una colección de arreglos de objetos. El predicado pre será una propiedad del objeto y debe devolver true si su valor es truthy. 
De lo contrario, devuelve false.

En JavaScript, los valores truthy son valores que se traducen en true cuando se evalúan en un contexto booleano.

Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación de corchetes [].|
----------------------------Requirements
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot") debe devolver false.
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name") debe devolver true.
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role") debe devolver false.
truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number") debe devolver true.
truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "caught") debe devolver false.
truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number") debe devolver false.
truthCheck([{name: "Quincy", username: "QuincyLarson"}, {name: "Naomi", username: "nhcarrigan"}, {name: "Camperbot"}], "username") debe devolver false.
truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users") debe devolver true.
truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "data") debe devolver true.
truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id") debe devolver false.
*/
function truthCheck(collection, pre) {
  let arrFiltered = []
  arrFiltered = collection.filter(obj => Boolean(obj[pre]) === true)
  if(arrFiltered.length<collection.length){
    return false; 
  }else{
    return true;
  }
}

console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number")) 

/*
--------------------Another solutions
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
-----------------------------------------
function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
*/

/*-------------------------Excercise 20--------------------------
-----------------------------------Argumentos opcionales----------
Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.

Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) devuelve 5.
Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.
--------------------Requirements
addTogether(2, 3) debe devolver 5.
addTogether(23, 30) debe devolver 53.
addTogether(5)(7) debe devolver 12.
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") debe devolver undefined.
addTogether(2, "3") debe devolver undefined.
addTogether(2)([3]) debe devolver undefined.
addTogether("2", 3) debe devolver undefined.
addTogether(5, undefined) Debería devolver undefined.
*/
function addTogether() {
  const [first, second] = arguments
    if(typeof(first) !== "number"){
      return undefined;
    }else if(arguments.length ===1){
      function addSecond(second){
          if(typeof(second) !== "number"){
            return undefined;
          }else{
            return first + second;
          }
      }
      return addSecond;
    }
    else if(typeof(second)!== "number"){
      return undefined;
    }else{
      return first + second;
    }

}

console.log(addTogether(2)(3));


/*---------------------------------------------Crea una persona
Completa el constructor de objetos con los siguientes métodos:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Ejecuta las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar sólo un argumento 
y tiene que ser una cadena. Estos métodos deben ser el único medio disponible para interactuar con el objeto.
*/
const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
bob.setFirstName("Esteban")
console.log(bob.getFullName());


let fullName = "Jorge Navarro";

let setFirstName = function(name) {
  return fullName = name + " " + fullName.split(" ")[1];
};

console.log(setFirstName("Esteban"));



/*------------------------Excercise 21---------------------------
---------------------------Mapea el Debris----------------------------
De acuerdo con la Tercera Ley de Kepler, el período orbital  T
  de dos puntos se orbitan mutuamente en una órbita circular o elíptica es:

T=2πa3μ−−−√
 
a
  es el eje semi-mayor de la órbita
μ=GM
  es el parámetro gravitatorio estándar
G
  es la constante gravitatoria,
M
  es la masa del cuerpo más masivo.
Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).

El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

El radio de la tierra es de, 6367.4447 kilómetros y el valor GM de la tierra es de, 398600.4418 km3s-2.
---------------------Requirements
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) debe devolver [{name: "sputnik", orbitalPeriod: 86400}].
Esperando:orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
debe devolver [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
*/
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj){
    let c = Math.pow(earthRadius + obj.avgAlt, 3);
    let b = Math.sqrt(c/GM);
    let orbPeriod = Math.round(a*b);
    return {name: obj.name, orbitalPeriod: orbPeriod}
  }
  for(let elem in arr){
    newArr.push(getOrbPeriod(arr[elem]))
  }
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


/*Anothers solutions
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

  //Looping through each key in arr object
  for (let elem in arr) {
    //Rounding off the orbital period value
    const orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
    );
    //Adding new object with orbitalPeriod property
    newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
----------------------
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  // Create new array to prevent modification of the original
  const newArr = JSON.parse(JSON.stringify(arr));
  // Loop through each item in the array arr
  newArr.forEach(function(item) {
    // Calculate the Orbital period value
    const tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);


-----------------------
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

*/
