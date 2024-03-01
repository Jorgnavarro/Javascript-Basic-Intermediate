/*---------------------------Programación de algoritmos básicos
Un algoritmo es una serie de instrucciones paso a paso que describen cómo hacer algo.

Para escribir un algoritmo eficaz, ayuda el dividir un problema en partes más pequeñas y pensar cuidadosamente cómo resolver cada parte con código. 
En este curso, aprenderás los fundamentos del pensamiento algorítmico mediante la escritura de algoritmos que hacen de todo, desde la conversión de temperaturas hasta el manejo de arreglos 2D complejos.
*/

/*---------------------------Convierte Celsius a Fahrenheit--------------------------
La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 9/5, más 32.

--------------------------------Ejercicio 1-------------------------------------------
Se te da una variable celsius que representa una temperatura en Celsius. Utiliza la variable fahrenheit ya definida y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. 
Utiliza la fórmula mencionada anteriormente para ayudarte a convertir la temperatura Celsius a Fahrenheit.

-------Requirements-------
convertCtoF(0) debe devolver un número
Esperando:convertCtoF(-30) debe devolver un valor de -22
Esperando:convertCtoF(-10) debe devolver un valor de 14
Esperando:convertCtoF(0) debe devolver un valor de 32
Esperando:convertCtoF(20) debe devolver un valor de 68
Esperando:convertCtoF(30) debe devolver un valor de 86
*/
function convertCtoF(celsius) {
    let fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

console.log(convertCtoF(30));

/*--------------------------------------Invierte una cadena--------------------
Invertir la cadena proporcionada y devolver la cadena invertida.
Por ejemplo, "hello" debe convertirse "olleh".
-------Requirements-------
reverseString("hello") debe devolver una cadena.
Esperando:reverseString("hello") debe devolver la cadena olleh.
Esperando:reverseString("Howdy") debe devolver la cadena ydwoH.
Esperando:reverseString("Greetings from Earth") debe devolver la cadena htraE morf sgniteerG.
*/

function reverseString(str) {
    let reverseString = "";
    for(let i = 0; i<str.length; i++){
        reverseString += str[(str.length - 1) - i]
    } 
    return reverseString;
}
console.log(reverseString("hello")); 

/*------------------------------------------Factoriza un número-------------------------
Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.

-------Requirements-------
factorialize(5) debe devolver un número.
Esperando:factorialize(5) debe devolver 120.
Esperando:factorialize(10) debe devolver 3628800.
Esperando:factorialize(20) debe devolver 2432902008176640000.
Esperando:factorialize(0) debe devolver 1.
*/

function factorialize(num) {
    let counter = 1;
    for(let i = 0; i<num; i++){ 
        counter *= (num - i);
        /*abajo se presentan las sintaxis con las cuales se puede solucionar, sea de forma invertida o de forma normal, 
        en este caso me demoré en resolver el algoritmo porque como es un factorial, es decir una multiplicación, 
        no podía iniciar el counter en "0", me estaba retornando un 0, hasta que lo cambié por 1*/
        console.log((num - i));
        console.log(i + 1) 
    }
    return counter;
}

console.log(factorialize(5)); 

/*---------------------------Encuentra la palabra más larga en una cadena-----------------
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.

-------Requirements-------
findLongestWordLength("The quick brown fox jumped over the lazy dog") debe devolver un número.
findLongestWordLength("The quick brown fox jumped over the lazy dog") debe devolver 6.
findLongestWordLength("May the force be with you") debe devolver 5.
findLongestWordLength("Google do a barrel roll") debe devolver 6.
findLongestWordLength("What is the average airspeed velocity of an unladen swallow") debe devolver 8.
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") debe devolver 19.
*/
function findLongestWordLength(str) {
    let counterWords = 0;
    //se crea una variable en la cual se almacena nuestra cadena de texto en un array usando la palabra split y agregando la expresión regular /\s/, para que se guarde sin espacios
    let strInArray = str.split(/\s/);
    console.log(str.split(/\s/)); 
    for(let i = 0; i<strInArray.length; i++){
        if(counterWords<strInArray[i].length){
            //indicamos en el condicional que si counterWords es menor a la extensión de una palabra en la posición [i], entonces lo igualamos y por cada iteración hará lo mismo hasta que counterWords tenga el número con la palabra más larga.
            counterWords = strInArray[i].length
        }
        console.log(strInArray[i].length);
    }
    return counterWords;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/*------------------------Devuelve los números mayores en los arreglos------------------
Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i].

-------Requirements-------
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) debe devolver un arreglo.
Esperando:largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) debe devolver [27, 5, 39, 1001].
Esperando:largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) debe devolver [9, 35, 97, 1000000].
Esperando:largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) debe devolver [25, 48, 21, -3].
*/

function largestOfFour(arr) {
    let newArr = []
    let numberCounter = 0;
        for(let i = 0; i<arr.length; i++){
            console.log(arr[i]);
            numberCounter = arr[i][0]
            for(let j = 0; j<arr.length; j++){
                console.log(arr[i][j]);
                if(arr[i][j]>numberCounter){
                    numberCounter = arr[i][j]
                }
            }
            newArr.push(numberCounter);
        }
    console.log(newArr);
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
/*
Para resolver el problema creamos un array vacío porque nos piden que devolvamos un array con los números más grandes de cada subarray. 
luego creamos un contador que almacenará cada número mayor por iteración.
En el primer for dejamos fijos el primer número de cada sub array y lo almacenamos en number counter = arr[i][0], luego tomamos cada número arr[i][j] y si es mayor que numberCounter, 
es decir que el primer número del array, lo igualamos o almacenamos en numberCounter.
y luego por fuera de los for, hacemos el push en el array vacío que instanciamos y lo retornamos.
*/

/*
----------------------------------------------Confirma el final----------------------
Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar.
-------Requirements-------
confirmEnding("Bastian", "n") debe devolver true.
confirmEnding("Congratulation", "on") debe devolver true.
confirmEnding("Connor", "n") debe devolver false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") debe devolver false.
confirmEnding("He has to give me a new name", "name") debe devolver true.
confirmEnding("Open sesame", "same") debe devolver true.
confirmEnding("Open sesame", "sage") debe devolver false.
confirmEnding("Open sesame", "game") debe devolver false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") debe devolver false.
confirmEnding("Abstraction", "action") debe devolver true.
Tu código no debe usar el método incorporado .endsWith() para resolver el desafío.
*/
function confirmEnding(str, target) {

    return str.slice(str.length - target.length) === target;

}
console.log(confirmEnding("Bastian", "n"));

/*
explicación

Another solution
function confirmEnding(str, target) {

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));
---------------------------------------------------
another solution 2

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");
----------------------------------------------
*/

/*
-----------------------------------------Repite una cadena repite una cadena---------------------------------
Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().
*/

function repeatStringNumTimes(str, num) {
    let repeat = ""
    for(let i = 0; i<num; i++){
        repeat += str
    }
    return repeat;
}

console.log(repeatStringNumTimes("*", 2)); 

/*----------------------------------------------------Recorta una cadena----------------------------------------------
Recorta una cadena (primer argumento) si es más larga que la longitud máxima proporcionada (segundo argumento). Devuelve la cadena recortada con un ... al final.

-------Requirements-------
truncateString("A-tisket a-tasket A green and yellow basket", 8) debe devolver la cadena A-tisket....
truncateString("Peter Piper picked a peck of pickled peppers", 11) debe devolver la cadena Peter Piper....
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) debe devolver la cadena A-tisket a-tasket A green and yellow basket.
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) debe devolver la cadena A-tisket a-tasket A green and yellow basket.
truncateString("A-", 1) debe devolver la cadena A....
truncateString("Absolutely Longer", 2) debe devolver la cadena Ab....
*/

function truncateString(str, num) {
    truncateWord = "";
    for(let i = 0; i<str.length; i++){
        truncateWord += str.slice(str, num) + "...";
        if(str.length <= num){
            return str;
        }
        return truncateWord;
    }
}

console.log(truncateString("A-", 1))

/*
En el anterior ejercicio se creó una función, en la cual se toma un string, y un número que lo corta. Sí el String.length es mayor a el número que lo corta,
entonces se retorna el pedazo de string con "..." tres puntos al final, pero si el String.length es igual que al número o igual, debe retornar el string completo sin "...", 
se guarda en truncateWord el string con los ..., pero se indica que en caso de que sea mayor o igual el número debe retornar el string completo, en caso de que no sea así, debe retonar la palabra truncada con la expresión de "..." 
por eso el return se pone adentro del for, para que no haga muchas iteraciones.
---anothers solutions:

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
------------------------------
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
*/

/*------------------------------Buscadores guardianes------------------------------
Crea una función que recorra un arreglo arr y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento x, 
el "detector de verdad" es pasado si func(x) es true. Si ningún elemento pasa la prueba. la función debería devolver undefined.
-------Requirements-------
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) debe devolver 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) debe devolver undefined.
*/

function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i< arr.length; i++){
        if(func(arr[i]) == true){
            num = arr[i]
            return num;
        }
    }
}

console.log(findElement([1, 3, 5, 9], num => num % 2 === 0)); 

/*
----explanation
En el caso anterior, tenemos una función que recibirá como parámetro otra función y un array. Debemos recorrer el array y después de hacerlo, 
se debe invocar a la función con cada uno de los elementos, y si se cumple la condición de la función pasada en los parámetros se debe retornar el primer elemento que cumpla con esa condición, 
para ello creamos un variable llamada num, que recibirá ese primer parametro que cumpla la condición de la función externa anidada en un if en la línea 262, 
se debe poner el return dentro de ese condicional para que se devuelva el primer elemento que encuentre y en caso que no se cumpla la condición no agregamos otro return porque se nos pide un undefined como retorno.

--------Anothers solutions
unction findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
-----------------------------------
function findElement(arr, func) {
  return arr.find(func);
}
--------------------------------
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
--------------------------------
function findElement(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return findElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}
*/
/*-------------------------------------Boo who (Booleano Quién)---------------------------------
Comprueba si el valor está clasificado como booleano primitivo. Devuelve true o false.

Booleanos primitivos son true y false.
-------Requirements-------
booWho(true) debe devolver true.
booWho(false) debe devolver true.
booWho([1, 2, 3]) debe devolver false.
booWho([].slice) debe devolver false.
booWho({ "a": 1 }) debe devolver false.
booWho(1) debe devolver false.
booWho(NaN) debe devolver false.
booWho("a") debe devolver false.
booWho("true") debe devolver false.
booWho("false") debe devolver false.
*/

function booWho(bool) {
    if(bool === true | bool === false ){
        return true;
    }else{
        return false
    }
    
}
console.log(booWho("true")); 

/*
------------------Anothers solutions--------------
function booWho(bool) {
    return typeof bool === "boolean";
}
*/

/*-----------------------------Haz que la primera letra de una palabra este en mayúscula-------------------------------------
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúsculas. Asegúrate de que el resto de la palabra esté en minúsculas.

Como propósito de este ejercicio, debes también usar mayúsculas conectando palabras como the y of.
-------Requirements-------
titleCase("I'm a little tea pot") debe devolver una cadena.
titleCase("I'm a little tea pot") debe devolver la cadena I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") debe devolver la cadena Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") debe devolver la cadena Here Is My Handle Here Is My Spout.
*/
/*Mi solución no pasó pero es funcional */
function titleCase(str) {
  let strModify = str.toLowerCase().split(" "); //introducimos la cadena de texto en un array, y todas las letras las formateamos a minúsculas
  let strComplete = "";
  console.log(strModify);
  for(let i = 0; i<strModify.length; i++){
    strComplete += strModify[i].toUpperCase()[0]+strModify[i].slice(1)+ " ";
  }
  return strComplete;
}

console.log(titleCase("isabelle bhome")); 

let saludo = "hola"
console.log(saludo.toUpperCase()[0] + saludo.slice(1,saludo.length));

/*
another solution
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
*/

function anotherTitleCase(str){
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

console.log(anotherTitleCase("sHoRt AnD sToUt")); 

/*----------------------------------------Cortar y rebanar----------------------------------------
Tienes dos arreglos y un índice.

Copia cada elemento del primer arreglo en el segundo arreglo, en orden.

Comienza insertando elementos en el índice n del segundo arreglo.

Devuelve el arreglo resultante. Los arreglos de entrada deben permanecer iguales luego de que se ejecute la función.

-------Requirements-------
frankenSplice([1, 2, 3], [4, 5], 1) debe devolver [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) debe devolver ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) debe devolver ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Todos los elementos del primer arreglo deben ser añadidos al segundo arreglo en su orden original. frankenSplice([1, 2, 3, 4], [], 0) debe devolver [1, 2, 3, 4].
El primer arreglo debe permanecer igual después de ejecutar la función.
El segundo arreglo debe permanecer igual después de ejecutar la función.
*/
function frankenSplice(arr1, arr2, n) {
  const startIndex = n;
  const amountToDelete = 0;
  let newArr = [...arr2]
  newArr.splice(startIndex , amountToDelete, ...arr1)
  return newArr;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
/*
En este caso la funcion frankenSplice recibe 2 arrays y un número de índice, como nos indican que no debemos modificar ninguno de los arrays, debemos retornar uno nuevo, por ende debemos crear un nuevo array.
Inicialmente copiamos el array2 con el spreadOperator porque debemos copiar el primer array en el segundo, teniendo en cuenta el índice que se nos pasa n.
teniendo el arr2 copiado en el nuevo array, usamos la propiedad splice, que además de eliminar elementos también nos permite agregar. 
escribimos un primer argumento con n que es donde vamos a iniciar, en este caso como no vamos a eliminar ningún elemento, el segundo argumento se deja en 0, y por último agregamos el arr1, 
de esta forma es como tenemos un nuevo array con elementos del arr2 como base y los del arr1 que se introducen en la copia del arr2 a partir del índice en el parámetro.
*/

/*-------------------------------------------------------Rebote falsy
Elimina todos los valores falsos de un arreglo. Devuelve un nuevo arreglo; no alteres el arreglo original.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.
-------Requirements-------
bouncer([7, "ate", "", false, 9]) debe devolver [7, "ate", 9].
bouncer(["a", "b", "c"]) debe devolver ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) debe devolver [].
bouncer([null, NaN, 1, 2, undefined]) debe devolver [1, 2].
No debes alterar arr.
*/
function bouncer(arr) {
 let newArr = [];
  for(let i = 0; i<arr.length; i++){
      console.log(Boolean(arr[i]));
      if(Boolean(arr[i]) === true){
        newArr.push(arr[i])
      }
  }
  return newArr
}

console.log(bouncer([7, "ate", "", false, 9]))

/*
Aunque el ejercicio es sencillo no fue sencillo resolverlo para mí, lo indispensable era transformar todo el array como así lo sugería el ejercicio en booleanos, la notación para la misma es como se describe en la línea 439 Boolean(dato or array), 
luego se tuvo que crear un condicional para pushear todos los elementos i del array que cumplieran esa condición. Como siempre en un nuevo array, para así devolverlo.

No se puede pasar por alto que el false del objeto NaN, null, undefined es muy diferente al valor true or false que se asignan con los booleanos

function discover(param1){
  param1 = NaN
  console.log(typeof param1);
  
  if(param1 === false){
    return "es lo mismo"
  }
  return "No es lo mismo"
}
let prub = Boolean(NaN)
console.log(discover(prub))

console.log(prub)

-------------------------anothers Solutions
function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

function bouncer(arr) {
  return arr.filter(Boolean);
}
*/


/*---------------------------------------Dónde pertenezco---------------------------------
Devuelve el índice mas bajo en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez que éste haya sido ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5) debe devolver 1 por que este valor es más grande que 1 (índice 0), pero menor que 2 (índice 1).

De esta forma, getIndexToIns([20,3,5], 19) debe devolver 2 porque una vez ordenado el arreglo, éste se verá así [3,5,20] y 19 es menor que 20 (índice 2) y mayor que 5 (índice 1).
----------------------Requirements--------------
getIndexToIns([10, 20, 30, 40, 50], 35) debe devolver 3.
getIndexToIns([10, 20, 30, 40, 50], 35) debe devolver un número.
getIndexToIns([10, 20, 30, 40, 50], 30) debe devolver 2.
getIndexToIns([10, 20, 30, 40, 50], 30) debe devolver un número.
getIndexToIns([40, 60], 50) debe devolver 1.
getIndexToIns([40, 60], 50) debe devolver un número.
getIndexToIns([3, 10, 5], 3) debe devolver 0.
getIndexToIns([3, 10, 5], 3) debe devolver un número.
getIndexToIns([5, 3, 20, 3], 5) debe devolver 2.
getIndexToIns([5, 3, 20, 3], 5) debe devolver un número.
getIndexToIns([2, 20, 10], 19) debe devolver 2.
getIndexToIns([2, 20, 10], 19) debe devolver un número.
getIndexToIns([2, 5, 10], 15) debe devolver 3.
getIndexToIns([2, 5, 10], 15) debe devolver un número.
getIndexToIns([], 1) debe devolver 0.
getIndexToIns([], 1) debe devolver un número.

*/

function getIndexToIns(arr, num) {
  function comparar (a,b){ return a - b}
  console.log(arr.sort(comparar));
  arr.sort(comparar)
  for(let i = 0; i<arr.length; i++){
      console.log(i);
      console.log(arr[i]);
      if(arr[i]>= num){
          return i
      }
  }
  return arr.length
}

console.log(getIndexToIns([2, 5, 10], 15)); 
/*
Me costó realizar este ejercicio se puede decir que solo me faltaba una línea de código el return de arr.length por fuera del for, que devolvía el número de 
indice si el número era mayor a cualquier otro número en el array o si se pasaba un array vacío se debía de obtener el índice disponible que este caso sería cero.
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b); // se refactorizó esta línea
  for(let i = 0; i<arr.length; i++){
      if(arr[i]>= num){
        return i
      }
  }
  return arr.length
}

getIndexToIns([40, 60], 50);

----------------------anothers solutions
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}
---------------------------------------
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
------------------------------------
function getIndexToIns(arr, num) {
   sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  Returns index or total length of arr
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);
-------------------------------------
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);
*/


/*-------------------------------------------------Mutaciones---------------------------------
Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.


-----------------------Requirements
mutation(["hello", "hey"]) debe devolver false.
mutation(["hello", "Hello"]) debe devolver true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) debe devolver true.
mutation(["Mary", "Army"]) debe devolver true.
mutation(["Mary", "Aarmy"]) debe devolver true.
mutation(["Alien", "line"]) debe devolver true.
mutation(["floor", "for"]) debe devolver true.
mutation(["hello", "neo"]) debe devolver false.
mutation(["voodoo", "no"]) debe devolver false.
mutation(["ate", "date"]) debe devolver false.
mutation(["Tiger", "Zebra"]) debe devolver false.
mutation(["Noel", "Ole"]) debe devolver true.
*/
function mutation(arr) {
  let arrToCompare = arr[1].toLowerCase();
  let targetArr = arr[0].toLowerCase();
  console.log(targetArr);
  for(let i = 0; i < arrToCompare.length; i++){
      if(targetArr.indexOf(arrToCompare[i])<0){
        return false;
      }
  }
  return true;
}

console.log(mutation((["hello", "olle"]))); 

/*
--------------------------------Anothers solutions
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}
--------------------------------
function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}
----------------------------
function mutation([elem1, elem2]) {
  const regex = new RegExp(`[^${elem1}]`, 'i');
  return !regex.test(elem2);
}
*/

/*Monito Trocitos
Escribe una función que divida un arreglo (primer argumento) en grupos 
de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

-----------------------Requirements
chunkArrayInGroups(["a", "b", "c", "d"], 2) debe devolver [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) debe devolver [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) debe devolver [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) debe devolver [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) debe devolver [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) debe devolver [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) debe devolver [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for(let i = 0; i<arr.length;  i+=size){
      console.log(arr[i]);
      let piece = arr.slice(i, i + size);
      newArr.push(piece)
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 

newArrPrub = [0, 1, 2, 3, 4, 5, 6, 7, 8];
newArrRecep = newArrPrub.splice(4,8,)
console.log(newArrPrub.splice(0,4, ...newArrRecep));

console.log(newArrRecep.push(newArrPrub.slice(0,4)));
console.log(newArrRecep.push(newArrPrub.slice(4,8)));
console.log(newArrRecep);


/*
--------------------------------anothers solutions------------------
function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
---------------------------------------------------------------------
function chunkArrayInGroups(arr, size) {
  Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
----------------------------------------------------------------------
function chunkArrayInGroups(arr, size) {
  Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
-----------------------------------------------
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
----------------------------------------------
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
*/

