/*-----------------------------------Usa el método "test"---------------------------------*/
/*Las expresiones regulares se utilizan en lenguajes de programación para coincidir con partes de cadenas. Creas patrones para ayudarte a hacer esa coincidencia.

Si quieres encontrar la palabra the en la cadena The dog chased the cat, puedes utilizar la siguiente expresión regular: /the/. 
Ten en cuenta que las comillas no son requeridas dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el método .test(). 
El método .test() toma la expresión regular, la aplica a una cadena (que se coloca dentro de los paréntesis), y devuelve true o false si tu patrón encuentra algo o no.*/

/*const { log } = require("sync");*/

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
//El método test aquí devuelve true.

/*-------------------------------------ejercicio 1-----------------------------------*/
//Aplica la expresión regular myRegex en la cadena myString usando el método .test().

/*------------------------------------Solución---------------------------------*/
//la secuencia en la cadenda texto debe ser exactamente igual, incluyendo mayúsculas o minúsculas
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
console.log(result);

/*----------------------------Haz coincidir cadenas literales------------------------*/

/*En el desafío anterior, buscaste la palabra Hello usando la expresión regular /Hello/. Esa expresión regular buscó una coincidencia literal de la cadena Hello. 
Aquí hay otro ejemplo donde se busca una coincidencia literal de la cadena Kevin:*/

let testStr2 = "Hello, my name is Kevin.";
let testRegex2 = /Kevin/;
testRegex2.test(testStr2);
//Esta llamada a test devolverá true.

/*Cualquier otra variante de Kevin no coincidirá. Por ejemplo, la expresión regular /Kevin/ no coincidirá con kevin o KEVIN.*/

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
//Esta llamada a test devolverá false.

//Un futuro desafío también mostrará cómo coincidir esas otras variantes.
/*----------------------------------------ejercicio 2-----------------------------------------*/
/*Completa la expresión regular waldoRegex para encontrar "Waldo" en la cadena waldoIsHiding con una coincidencia literal.*/
/*---------------------------------------solución-----------------------------------------*/
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result2 = waldoRegex.test(waldoIsHiding);

console.log(result2);

/*--------------------------------Coincide una cadena literal con diferentes posibilidades-----------------*/
/*Al utilizar expresiones regulares como /coding/, puedes buscar el patrón coding en otra cadena.

Esto es muy potente al buscar cadenas individuales, pero está limitado a un solo patrón. Puedes buscar múltiples patrones usando el operador alternation o OR: |.

Este operador coincide con los patrones antes o después de él. Por ejemplo, si deseas coincidir con las cadenas yes o no, la expresión regular que quieres es /yes|no/.

También puedes buscar más de dos patrones. Puedes hacer esto añadiendo más patrones con más operadores OR separándolos, como /yes|no|maybe/.

/*-------------------------------------------------ejericio 3------------------------------ */

//Completa la expresión regular petRegex para que coincida con las mascotas dog, cat, bird, o fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result3 = petRegex.test(petString);
console.log(result3);

/*-----------------------------------Ignora la capitalización al coincidir------------------------*/

/*Hasta ahora, has visto expresiones regulares para hacer coincidir cadenas literales. Pero a veces, tal vez quieras hacer coincidir las diferencias de capitalización.

La capitalización (o también llamada capitalización de letra) es la diferencia entre mayúsculas y minúsculas. Ejemplos de mayúsculas son A, B y C. Ejemplos de minúsculas son a, b y c.

Puedes coincidir ambos casos utilizando algo llamado bandera. Existen otras banderas, pero aquí te centrarás en la que ignora la capitalización de las letras, la bandera i. 
Puedes usarla añadiéndola a la expresión regular. Un ejemplo de uso de esta bandera es /ignorecase/i. Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase.*/

/*----------------------------------ejercicio 4------------------------------------------------*/

/*Escribe una expresión regular fccRegex para que coincida con freeCodeCamp sin importar su capitalización. Tu expresión regular no debe coincidir con ninguna abreviatura o variación con espacios.*/

/*-------------------------------------solución----------------------------------------------*/

let myStringNew = "freeCodeCamp";
let fccRegex = /freeCoDEcamp/i; // Cambia esta línea
let resultNew = fccRegex.test(myStringNew);

console.log(resultNew);

let pruNumString = "12a3acad22223lsak3aa11aa"
let searchTrueOrFalseCoincidence = /[1]+2/;
let prubNumString = searchTrueOrFalseCoincidence.test(pruNumString);
console.log(prubNumString);


let searchCoincidence = /(3+)|(2{3})/g;
let resultCoincidenceNumString =pruNumString.match(searchCoincidence);

console.log(resultCoincidenceNumString);

/*-------------------------------------------Extrae coincidencias-----------------------------*/
/*Hasta ahora, sólo has estado comprobando si un patrón existe o no dentro de una cadena. También puedes extraer las coincidencias encontradas con el método .match().

Para utilizar el método .match(), aplica el método a una cadena y pasa la expresión regular dentro de los paréntesis.

Este es un ejemplo:*/

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));
console.log("Hello, World!".match(/Hello/));
/*PD: si queremos extraer la palabra específica aunque no tenga sentido o su index, debemos
escribir la siguiente sintaxis: como match devuelve un array, 
si queremos obtener la palabra que estamos buscando para el ejemplo anterior sería:
ourStr.match(ourRegex)[0], en la posición 0 siempre se almacenará la palabra que se busca. 
Si queremos operar o utilizar el número del index escribimos: ourStr.match(ourRegex).index, esto nos devolverá el número del index en donde se encuentra la expresión que estamos buscando.
Si queremos obtener toda la expresión completa, escribimos lo siguiente:
outStr.match(ourRegex).input, esto nos retornará la expresión completa.

*/

/*Aquí el primer match devolverá ["Hello"] y el segundo devolverá ["expressions"].

Ten en cuenta que la sintaxis .match es lo "opuesto" al método .test que has estado utilizando hasta ahora:*/

//'string'.match(/regex/);
///regex/.test('string');

/*------------------------------------ejercicio 5-----------------------------------*/

//Aplica el método .match() para extraer la cadena coding.

/*-----------------------------------solución------------------------------------*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Cambia esta línea
let resultnw = extractStr.match(codingRegex); // Cambia esta línea
console.log(resultnw);

/*-----------------Encuentra más que la primera coincidencia-----------*/
//Hasta ahora, sólo has podido extraer o buscar un patrón una vez.

let testStr4 = "Repeat, Repeat, Repeat";
let ourRegex4 = /Repeat/;
testStr.match(ourRegex4);
//Aquí match devolverá ["Repeat"].

//Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

//Y aquí match devuelve el valor ["Repeat", "Repeat", "Repeat"]

/*---------------------ejercicio 6-------------------------*/

/*Utilizando la expresión regular starRegex, encuentra y extrae ambas palabras Twinkle de la cadena twinkleStar.

Nota
En tu expresión regular puedes utilizar múltiples banderas, como /search/gi*/

/*----------------------solución---------------------*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Cambia esta línea
let result5 = twinkleStar.match(starRegex); // Cambia esta línea
console.log(result5);

//en este caso, en la variable "starRegex", se usó la bandera i, que permite ignorar mayúsculas y la bandera g que nos permite obtener múltiples patrones

/*----------------------------Haz coincidir cualquier cosa-----------------------------------*/
/*A veces no conoces (o no necesitas conocer) los caracteres exactos en tus patrones. Pensar en todas las palabras que coincidan, digamos, con una ortografía errónea llevaría mucho tiempo. 
Afortunadamente, puedes ahorrar tiempo utilizando el carácter de comodín: .

El carácter de comodín "." coincidirá con cualquier carácter único. El comodín también es llamado dot y period. 
Puedes utilizar el carácter de comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si quieres hacer coincidir hug, huh, hut, y hum, 
puedes usar la la expresión regular /hu./ para que coincida con las cuatro palabras. */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr)); 
console.log(huRegex.test(hugStr)); 
//ambas llamadas devolverán true.

/*---------------------------------Ejercicio 7----------------------------------------*/
/*Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. Tu expresión regular debe usar el carácter de comodín.*/

/*--------------------------------Solución-----------------------------------------*/
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Cambia esta línea
let result6 = unRegex.test(exampleStr);

console.log(result6);


/*------------Haz coincidir un sólo carácter con múltiples posibilidades----*/
/* Aprendiste cómo hacer coincidir los patrones literales (/literal/) y el carácter de comodín (/./). Estos son los extremos de las expresiones regulares, donde uno encuentra coincidencias exactas y el otro coincide de todo. Hay opciones que representan un equilibrio entre los dos extremos.

Puedes buscar un patrón literal con cierta flexibilidad utilizando las clases de caracteres. Las clases de caracteres te permiten definir un grupo de caracteres que deseas coincidir colocándolos dentro de corchetes ([ y ]).

Por ejemplo, si quieres hacer coincidir bag, big, y bug pero no bog. Puedes crear la expresión regular /b[aiu]g/ para hacer esto. [aiu] es la clase de caracteres que solo coincidirá con los caracteres a, i, o u.
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/g;
console.log(bigStr.match(bgRegex)); 
console.log(bagStr.match(bgRegex)); 
console.log(bugStr.match(bgRegex)); 
console.log(bogStr.match(bgRegex)); 

/*En orden, las cuatro llamadas de match devolverán los valores ["big"], ["bag"], ["bug"], and null.*/

/*------------------------------Ejercicio 8----------------------*/
/*Usa una clase de caracteres con las vocales (a, e, i, o, u) en tu expresión regular vowelRegex para encontrar todas las vocales en la cadena quoteSample.

Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas. */
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Cambia esta línea
let result8 = quoteSample.match(vowelRegex); // Cambia esta línea
console.log(result8);


/*-----------------------Haz coincidir las letras del alfabeto----------------*/
/*
Has visto cómo puedes usar los conjuntos de caracteres para especificar un grupo de caracteres a coincidir, pero eso requiere escribir mucho cuando necesitas coincidir con un amplio rango de caracteres (por ejemplo, cada letra en el alfabeto). Afortunadamente, hay una funcionalidad incorporada que hace esto corto y sencillo.

Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando un carácter de guion: -.

Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías [a-e].
*/

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex9 = /[a-e]at/;
console.log(catStr.match(bgRegex9)); 
console.log(batStr.match(bgRegex9)); 
console.log(matStr.match(bgRegex9)); 

//En orden, las tres llamadas a match devolverán los valores ["cat"], ["bat"] y null.

/*---------------------------Ejercicio 9------------------*/

/*Haz coincidir todas las letras en la cadena quoteSample.

Nota: Asegúrate de hacer coincidir tanto las letras mayúsculas como minúsculas.*/

/*--------------------------solución--------------------*/

let quoteSample9 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Cambia esta línea
let result9 = quoteSample9.match(alphabetRegex); // Cambia esta línea
console.log(result9);

/*-----------------------Haz coincidir los números y las letras del alfabeto--------------*/

/*Usar el guión (-) para coincidir con un rango de caracteres no está limitado a letras. También funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/ coincide con cualquier número entre 0 y 5, incluyendo 0 y 5.

Además, es posible combinar un rango de letras y números en un único conjunto de caracteres.*/

let jennyStr = "Jenny8675309";
let myRegex10e = /[a-z0-9]/ig;
jennyStr.match(myRegex10e);

/*--------------------------------------ejercicio 10--------------------------------*/
/*Crea una sola expresión regular que coincida con un rango de letras entre h y s, y un rango de números entre 2 y 6. Recuerda incluir las banderas apropiadas en la expresión regular. */

/*------------------------------------solución----------------------------------*/
let quoteSample10 = "Blueberry 3.141592653s are delicious.";
let myRegex10 = /[h-s2-6]/ig; // Cambia esta línea
let result10 = quoteSample10.match(myRegex10);// Cambia esta línea
console.log(result10);
//esta es la forma como se transforma en un array los números y letras encontrados en una cade de texto, las específicaciones dentro de corchetes[] son muy importantes para extraer con match las coindicencias y operar con ellas en caso de que así de requiera.

/*--------------------Haz coincidir caracteres individuales no especificados-----------*/

/*
Hasta ahora, has creado un conjunto de caracteres que deseas coincidir, pero también podrías crear un conjunto de caracteres que no desees coincidir. Este tipo de conjuntos de caracteres se llaman conjuntos de caracteres negados.

Para crear un conjunto de caracteres negados colocas un carácter de intercalación (^) después del corchete de apertura y antes de los caracteres que no quieres coincidir.

Por ejemplo, /[^aeiou]/gi coincide con todos los caracteres que no son una vocal. Ten en cuenta que caracteres como ., !, [, @, / y el espacio en blanco coinciden; el conjunto de caracteres de vocal negados sólo excluye los caracteres de vocal.
*/

/*-----------------------------ejercicio 11------------------------------------------*/

/*Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. Recuerda incluir las banderas apropiadas en la expresión regular.
*/

/*-----------------------------------solución----------------------------------*/

let quoteSample11 = "3 blind mice.";
let myRegex11 = /[^aeiou0-9]/ig; // Cambia esta línea
let result11 = quoteSample11.match(myRegex11); // Cambia esta línea
console.log(result11);

/*----------------Haz coincidir caracteres que aparecen una o más veces-----------*/

/*
A veces, es necesario coincidir con un carácter (o grupo de caracteres) que aparezca una o más veces seguidas. Esto significa que aparece al menos una vez, y puede repetirse.

Puedes usar el carácter + para comprobar si es así. Recuerda, el carácter o patrón debe estar presente consecutivamente. Es decir, el carácter tiene que repetirse uno tras otro.

Por ejemplo, /a+/g encontraría una coincidencia en abc y regresaría ["a"]. Debido al +, también encontraría una sola coincidencia en aabc y regresaría ["aa"].

Si en su lugar estuvieras comprobando la cadena abab, se encontrarían dos coincidencias y regresaría ["a", "a"] porque los caracteres a no están en fila; hay una b entre ellos. Finalmente, dado que no hay una a en la cadena bcd, no se encontraría una coincidencia.
*/

/*-------------------------------------ejercicio 12---------------------------*/
/*
Quieres encontrar coincidencias cuando la letra s ocurre una o más veces en Mississippi. Escribe una expresión regular que utilice el signo +.
*/

/*------------------------------------solución--------------------------------*/
let difficultSpelling = "Mississippi";
let myRegex12 = /(s+)/g; // Cambia esta línea
let result12 = difficultSpelling.match(myRegex12);

console.log(result12);

//en el caso anterior, no necesitamos todas las "s" de la cadena de texto, por ello, no usamos los corchetes, sino los paréntesis, seguido de simbolo "+" para encontrar los patrones en este caso solicitados por el ejercicio.

/*--------------------Haz coincidir caracteres que aparecen cero o más veces--------------*/
/*
El último desafío utilizó el signo más + para buscar caracteres que aparecen una o más veces. También hay una opción para hacer coincidir caracteres que aparecen cero o más veces.

El carácter que hace esto es el asterisco o la estrella: *.
*/

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex)); 
console.log(oPhrase.match(goRegex));

/*-----------------------------------Ejercicio 13-------------------------*/

/*Para este desafío, chewieQuote ha sido inicializada entre bastidores con la cadena Aaaaaaaaaaaaaaaarrrgh!. Crea una expresión regular chewieRegex que utilice el carácter * para encontrar el carácter A mayúscula seguido inmediatamente por cero o más caracteres a minúscula en chewieQuote. Tu expresión regular no necesita banderas o clases de caracteres, y no debe coincidir con ninguna de las otras comillas.*/

/*--------------------------------solución------------------------------*/
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result13 = chewieQuote.match(chewieRegex);

console.log(result13);


/*-------------------Encuentra caracteres con una coincidencia perezosa--------*/

/*
En las expresiones regulares, una "coincidencia codiciosa" encuentra la parte más larga posible de una cadena que se ajusta al patrón de la expresión regular y la devuelve como una coincidencia. La alternativa es llamada "coincidencia perezosa", la cual encuentra la parte más pequeña posible de la cadena que satisface el patrón de la expresión regular.

Puedes aplicar la expresión regular /t[a-z]*i/ a la cadena "titanic". Esta expresión regular es básicamente un patrón que comienza con t, termina con i, y tiene algunas letras intermedias.

Las expresiones regulares son por defecto codiciosas, por lo que la coincidencia devolvería ["titani"]. Encuentra la sub-cadena más grande posible que se ajusta al patrón.

Sin embargo, puedes usar el carácter ? para cambiarla a una coincidencia perezosa. "titanic" al coincidir con la expresión regular ajustada de /t[a-z]*?i/ devuelve ["ti"].

Nota: Se debe evitar analizar HTML con expresiones regulares, pero coincidir patrones con una cadena HTML utilizando expresiones regulares está completamente bien.
*/

/*---------------------------Ejercicio 14-----------------------------*/
/*
Corrige la expresión regular /<.*>/ para que devuelva la etiqueta HTML <h1> y no el texto "<h1>Winter is coming</h1>". Recuerda que el comodín . en una expresión regular coincide con cualquier carácter.
*/
/*----------------------------solución-------------------------------*/
let text = "<h1>Winter is coming</h1>";
let myRegex14 = /<.*?>/g; // Cambia esta línea
let result14 = text.match(myRegex14);
console.log(result14);

//con el "." estoy  indicando cualquier carácter, con el * indico encontrar cualquier tipo de carácter que se encuentre adentro de esta expresión <> y con ? uso la coincidencia perezosa, la cual busca la cadena más pequeña posible en este caso h1 y la retorna.

/*--------------------Encuentra uno o más criminales en una cacería-----------------------*/
/*
Es hora de hacer una pausa y probar tus nuevas habilidades para escribir expresiones regulares. Un grupo de criminales se han escapado de la cárcel, pero no sabes cuántos. Sin embargo, sabes que permanecen unidos cuando están alrededor de otras personas. Eres responsable de encontrar a todos los criminales a la vez.

Este es un ejemplo para revisar cómo hacer esto:

La expresión regular /z+/ coincide con la letra z cuando aparece una o más veces seguidas. Encontrará coincidencias en las siguientes cadenas:
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

Pero no encuentra coincidencias en las siguientes cadenas, ya que no hay letras z:

""
"ABC"
"abcabc"
*/
/*--------------------------------------------ejercicio 15-------------------------------*/
/*Escribe una expresión regular codiciosa que encuentre uno o más criminales dentro de un grupo de personas. Un criminal está representado por la letra mayúscula C.*/

let nobody = "";
let personAndCriminal = "ABC";
let personsWithoutCriminals = "abcabc";

let reCriminals = /C+/g;

let result15a = nobody.match(reCriminals);
let result15b = personAndCriminal.match(reCriminals);
let result15c = personsWithoutCriminals.match(reCriminals);
console.log(result15a);
console.log(result15b);
console.log(result15c);

//la anterior expresión encuentra el carácter o si existen CC consecutivos, mostrará siempre la primera coincidencia que satisfaga la condición.


/*-----------------------------Haz coincidir patrones de cadena de inicio-----------------*/
/*Los desafíos anteriores demostraron que las expresiones regulares pueden ser utilizadas para buscar una serie de coincidencias. También se utilizan para buscar patrones en posiciones específicas en cadenas.

En un desafío anterior, usaste el carácter caret (^) dentro de un conjunto de caracteres para crear un conjunto de caracteres en la forma [^thingsThatWillNotBeMatched]. Fuera de un conjunto de caracteres, el caret es utilizado para buscar patrones al principio de las cadenas.*/

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); 
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); 

//La primera llamada test devolverá true, mientras que la segunda retornara false.

/*-------------------------------------Ejercicio 16---------------------------------*/

/*Usa el carácter caret en una expresión para buscar Cal solo al principio de la cadena rickyAndCal. */
/*-------------------------------------solución-----------------------------------*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Cambia esta línea
let result16 = calRegex.test(rickyAndCal);
console.log(result16);
//La funcionalidad de "^" el símbolo carret cambia, si la usamos sin corchetes es para encontrar coincidencias al inicio de nuestra cadena y si lo usamos con corchetes [] es para que no encuentre las expresiones que indiquemos en los corchetes.

/*-------------------------------Haz coincidir patrones de cadena final-------------*/

/*
En el último desafío, aprendiste a usar el carácter de intercalación para buscar patrones al inicio de las cadenas. También hay una manera de buscar patrones al final de las cadenas.

Puedes buscar el final de las cadenas usando el carácter del signo de dólar $ al final de la expresión regular.
*/
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding)); 

//La primera llamada a test devuelve true, mientras que la segunda retorna false.

/*-------------------------------ejercicio 17------------------------*/
/*Usa el carácter de ancla ($) para coincidir la cadena caboose al final de la cadena caboose.*/
/*-------------------------------solución--------------------------*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Cambia esta línea
let result17 = lastRegex.test(caboose);
console.log(result17);

/*----------------------------coincide todas las letras y números------------*/
/*
Usando clases de caracteres, pudiste buscar todas las letras del alfabeto con [a-z]. Este tipo de clase de caracteres es tan común que existe un atajo para él, aunque también incluye algunos caracteres adicionales.

La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es \w. Este atajo equivale a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas más números. Ten en cuenta que esta clase de caracteres también incluye el carácter de guión bajo (_).
*/
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); 
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

/*Las cuatro llamadas a test devolverán true.

Estos atajos de clases de caracteres también son conocidos como clases de caracteres abreviados.
*/
/*----------------------------Ejercicio 18--------------------*/
/*
Utiliza la clase de caracteres abreviada \w para contar el número de caracteres alfanuméricos en varias citas y cadenas.
*/
/*--------------------------solución-------------------------*/
let quoteSample18 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Cambia esta línea
let result18 = quoteSample18.match(alphabetRegexV2).length;
console.log(result18);
//en este caso agregamos la bandera g para encontrar todos los carácteres, porque de otra forma solamente retornaría la primera coincidencia. Para el ejercicio del teléfono se puede hacer algo interesante, un condicional con un if, si los números son 11, el primer carácter de la cadena debería ser 1.

/*-----------------------Haz coincidir todo menos letras y números---------------*/
/*
Has aprendido que puedes usar un atajo para emparejar alfanuméricos [A-Za-z0-9_] usando \w. Un patrón natural que tal vez quieras buscar es lo contrario a la alfanumérica.

Puedes buscar lo contrario de \w con \W. Ten en cuenta, el patrón contrario usa letra mayúscula. Este atajo es lo mismo que [^A-Za-z0-9_].
*/

let shortHand19 = /\W/g;
let numbers19 = "42%";
let sentence = "Coding!";
console.log(numbers19.match(shortHand19));
console.log(sentence.match(shortHand19));

//El primer match devuelve el valor ["%"] y el segundo devuelve ["!"], si queremos usar sólo el símbolo lo único que hacemos es agregar la bandera g, "/\W/g" de esta forma nos regresará el o los carácteres específicos contenidos en la cadena de texto a analizar.

/*-------------------------------------ejercicio 19-----------------------------*/
//Usa la clase de caracteres abreviados \W para contar el número de caracteres no alfanuméricos en varias comillas y cadenas.
/*-------------------------------------solución--------------------------------*/
let quoteSample19 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Cambia esta línea
let nonAlphabetRegexPrub = /(^\W)/g;
let result19 = quoteSample19.match(nonAlphabetRegex).length;
console.log(result19);

console.log(nonAlphabetRegexPrub.test(quoteSample19));

//es necesario explicar que en el ejercicio anterior se incluyen los espacios y el punto, se recuerda de nuevo el uso de la bandera g, que es la que nos devuelve la repetición y retorna los carácteres, a no ser que se agregue a la expresión en la parte final ".length" porque con esta adición retornará cantidad de coincidencias.
/*-----------------------------------Coincide con todos los números--------------*/
/*
Has aprendido atajos para patrones de cadenas comunes como los alfanuméricos. Otro patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con una d minúscula. Esto es igual a la clase de caracteres [0-9], la cual busca un solo carácter de cualquier número entre cero y nueve.
*/

/*------------------------------------ejercicio 20----------------------------*/
/*
Usa la clase de caracteres abreviada \d para contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan.
*/
/*-------------------------------------solución-----------------------------*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta línea
let result20 = movieName.match(numRegex).length;
console.log(result20);

/*----------------------Coincide con todos los caracteres no numéricos---------*/
/*
El último desafío mostró cómo buscar dígitos usando el atajo \d con una d minúscula. También puedes buscar caracteres que no sean dígitos usando un atajo similar que utilice una D mayúscula en su lugar.

El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de caracteres [^0-9], el cual busca un único carácter que no sea un número entre cero y nueve.
*/
/*-------------------------------ejercicio 21-------------------------------*/
/*
Usa la clase de caracteres abreviada \D para contar cuántos caracteres que no sean dígitos hay en los títulos de las películas. 
*/
let movieName21 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta línea
let result21 = movieName21.match(noNumRegex);

console.log(result21);

/*-------------------Restringe posibles nombres de usuario--------------*/
/*
Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en tus sitios favoritos.

Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

1.Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

2.Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

3.Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

4.Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.
*/

/*--------------------------------------Ejercicio 22-----------------------*/
/*
Cambia la expresión regular userCheck para que se ajuste a las restricciones indicadas anteriormente.
Tu expresión regular debe coincidir con la cadena JACK
Esperando:Tu expresión regular no debe coincidir con la cadena J
Esperando:Tu expresión regular debe coincidir con la cadena Jo
Esperando:Tu expresión regular debe coincidir con la cadena Oceans11
Esperando:Tu expresión regular debe coincidir con la cadena RegexGuru
Esperando:Tu expresión regular no debe coincidir con la cadena 007
Esperando:Tu expresión regular no debe coincidir con la cadena 9
Esperando:Tu expresión regular no debe coincidir con la cadena A1
Esperando:Tu expresión regular no debe coincidir con la cadena BadUs3rnam3
Esperando:Tu expresión regular debe coincidir con la cadena Z97
Esperando:Tu expresión regular no debe coincidir con la cadena c57bT3
Esperando:Tu expresión regular debe coincidir con la cadena AB1
Esperando:Tu expresión regular no debe coincidir con la cadena J%4
*/

/*-----------------------------------solución-------------------------------*/
let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2}[A-Za-z]*\d*$|^[A-Za-z]{1}[A-Za-z]*\d{2}$\d*/g; // Cambia esta línea
let result22 = userCheck.test(username);
console.log(username.match(userCheck));
console.log(result22);

/*En el ejercicio de arriba tenemos 2 expresiones regulares que están anidadas con el OR "|" la primera "^[A-Za-z]{2}[A-Za-z]*\d*$" nos indica que: el nombre de usuario debe iniciar con al menos dos letras ^[A-Za-z]{2}, la expresión "[A-Za-z]*" nos indica que se puede continuar con letras casi que sin limite sean mayúsculas o minúsculas, y para finalizar, la expresión "\d*$" nos indica que se pueden agregar una cantidad de números sin límites al final de la sucesión de las letras, es decir que el nombre de usuario no puede iniciar por números.

la segunda "^[A-Za-z]{1}[A-Za-z]*\d{2}$\d*", nos indica con esto ^[A-Za-z]{1} , que el nombre de usuario debe comenzar con al menos una letra, seguido de la secuencia de letras [A-Za-z]* o en de dos números \d{2}$ al final de haber iniciado el nombre de usuario con una letra, y después de eso una cantidad casi que ilimitada de números \d*, no se debe olvidar que afuera del regex se debe agregar la bandera global /g para que todo pueda funcionar.
*/

/*----------------------------------------------Haz coincidir espacios en blanco-----------------------------------*/
/*
Los desafíos por el momento han cubierto las letras que coinciden con el alfabeto y los números. También puedes hacer que coincidan los espacios en blanco o los espacios entre las letras.

Puedes buscar los espacios en blanco usando \s que es una s minúscula. Este patrón no solo coincide con los espacios en blanco, también con los caracteres de retorno de carro, tabulaciones, alimentación de formulario y saltos de línea. Puedes pensar que es similar a las clases de caracteres [ \r\t\f\n\v].
*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;    // /^\s*\w*/g; --> devuelve la primera palabra
console.log(whiteSpace.match(spaceRegex));
//Esta llamada a match debe devolver [" ", " "].

/*-----------------------------------------------ejercicio 23-----------------------------------*/

//Cambia la expresión regular countWhiteSpace para buscar múltiples caracteres de espacio en blanco en una cadena.
/*-------------------------------------------------solución-------------------------------------*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Cambia esta línea
let result23 = sample.match(countWhiteSpace);
console.log(result23);

/*----------------------------------Haz coincidir caracteres que no sean espacios en blanco--------------*/
/*
Aprendiste a buscar espacios en blanco usando \s, con una s en minúscula. También puedes buscar todo excepto los espacios en blanco.

Busca caracteres que no sean espacios en blanco usando \S, la cual es una s mayúscula. Este patrón no coincidirá con los caracteres de espacios en blanco, retorno de carro, tabulaciones, alimentación de formulario y saltos de línea. Puedes pensar que es similar a la clase de caracteres [^ \r\t\f\n\v].
*/
let whiteSpace24 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
console.log(whiteSpace24.match(nonSpaceRegex));

//El valor devuelto por el método .length sería 32.
/*-------------------------------------------ejercicio 24------------------------------------------------*/
/*
Cambia la expresión regular countNonWhiteSpace para buscar varios caracteres que no sean espacios en blanco en una cadena.
*/
/*-------------------------------------------solución--------------------------------------*/
let sample24 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result24 = sample24.match(countNonWhiteSpace).length;
console.log(result24);

let prubSample = "555 555 5555"

let resultWithoutSpace= prubSample.match(countNonWhiteSpace).length
console.log(resultWithoutSpace);

//con lo anterior se eliminan los espacios y obtenemos cada uno de los números, tenemos que implementar en la expresión sin caracteres especiales o encontrar la forma de aplicar algunas excepciones y podemos finalizar el ejercicio del check del teléfono.

/*------------------------------------Especifica el menor y mayor número de coincidencias-----------*/

/*Recuerda que se utiliza el signo más "+" para buscar uno o más caracteres y el asterisco "*" para buscar cero o más caracteres. Esto es conveniente, pero a veces quieres coincidir con cierta gama de patrones.

Puedes especificar el número inferior y superior de patrones utilizando especificadores de cantidad. Para los especificadores de cantidad utilizamos llaves ({ y }). Pon dos números entre las llaves - para el número inferior y superior de patrones.

Por ejemplo, para que coincida con la letra a si aparece entre 3 y 5 veces en la cadena ah, la expresión regular debe ser /a{3,5}h/.*/
let A4 = "aaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4)); 
console.log(multipleA.test(A2)); 
//La primera llamada a test devuelve true, mientras que la segunda devuelve false.

/*------------------------------------------------------Ejercicio 25--------------------------------*/
/*Modifica la expresión regular ohRegex para que coincida con toda la frase Oh no solo cuando tenga de 3 a 6 letras h.*/
/*------------------------------------------------------Solución----------------------------------*/
let ohStr = "Ohhhhhh no";
let ohRegex = /^Oh{3,6}\s[no]*/g; // Cambia esta línea
let result25 = ohRegex.test(ohStr);
let resultMatch25 = ohStr.match(ohRegex)
console.log(resultMatch25);
console.log(result25);

/* se agrega a la expresión \s el espacio y la coincidencia [no]* seguido de un asterísco porque en otro sentido sólo retornará el primer elemento encontrado que sería n, por ello agregamos a fuera de los corchetes[no] el asterísco*/
/*------------------------------------------Especifica solo el menor número de coincidencias-----------------------*/
/*
Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad utilizando llaves. A veces sólo se quiere especificar el número inferior de patrones sin tener un límite superior.

Para especificar sólo el número inferior de patrones, mantén el primer número seguido de una coma.

Por ejemplo, para hacer coincidir solo con la cadena hah cuando la letra a aparezca al menos 3 veces, la expresión regular sería /ha{3,}h/.
*/
let A46 = "haaaah";
let A26 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA26 = /ha{3,}h/;
console.log(multipleA.test(A46)); 
console.log(multipleA.test(A26)); 
console.log(multipleA.test(A100));
/*----------------------------------------------------Ejercicio 26---------------------------*/
/*Modifica la expresión regular haRegex para coincidir con la palabra Hazzah solo cuando ésta tiene cuatro o más letras z.
 */

/*---------------------------------------------------Solución----------------------------------*/
let haStr = "Hazzzzzah";
let haRegex = /Haz{4,}ah/; // Cambia esta línea
let result26 = haRegex.test(haStr);
console.log(result26);

//con la sintaxis de haRegex, no importa cuantas z se agreguen a la cadena de texto haStr, siempre y cuando sean mayor a 4 se cumplirán las condiciones, de 4 hasta una cantidad lógicamente considerable.

/*---------------------------------------Especifica el número exacto de coincidencias---------*/
/*Puedes especificar el número inferior y superior de patrones mediante especificadores de cantidad utilizando llaves. A veces solo quieres un número específico de coincidencias.

Para especificar un cierto número de patrones, simplemente pon ese número entre corchetes.

Por ejemplo, para que coincida con la palabra hah solo con la letra a 3 veces, tu expresión regular sera /ha{3}h/.*/

let A427 = "haaaah";
let A27 = "haaah";
let A10027 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A427));
console.log(multipleHA.test(A27)); 
console.log(multipleHA.test(A10027));

//En orden, las tres llamadas a test devuelven false, true y false.

/*------------------------------------------------------Ejercicio 27--------------------------------------*/
/*Modifica la expresión regular timRegex para hacer coincidir con la palabra Timber solo cuando esta tiene cuatro letras m. */
/*------------------------------------------------------Solución-----------------------------------------*/
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Cambia esta línea
let result27 = timRegex.test(timStr);
console.log(result27);

/*--------------------------------------------------Comprueba todos o ninguno---------------------------------*/
/*A veces los patrones que quieres buscar pueden tener partes que pueden o no existir. Sin embargo, podría ser importante buscarlos de todos maneras.

Puedes especificar la posible existencia de un elemento con un signo de interrogación, ?. Esto comprueba cero o uno de los elementos precedentes. Puedes pensar que este símbolo dice que el elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias en inglés americano y británico y puedes usar el signo de interrogación para coincidir con ambas ortografías. */

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british)); 
//Ambos usos del método test devolverán true.
/*----------------------------------------------------------Ejercicio 28-----------------------------------------*/
/*Cambia la expresión regular favRegex para que coincida tanto la versión del inglés americano (favorite) como la versión del inglés británico de la palabra (favourite).*/
/*--------------------------------------------------------Solución-----------------------------------------------*/
let favWord = "favorite";
let favRegex = /favou?rite/; // Cambia esta línea
let result28 = favRegex.test(favWord);
console.log(result28);

/*------------------------------------------------------Lookahead positivo y negativo-----------------------------*/

/*
Los lookaheads son patrones que le indican a JavaScript que busque por anticipado en tu cadena para verificar patrones más adelante. Esto puede ser útil cuando deseas buscar varios patrones sobre la misma cadena.

Hay dos tipos de lookaheads: lookahead positivo y lookahead negativo.

Un lookahead positivo buscará para asegurarse de que el elemento en el patrón de búsqueda este allí, pero en realidad no lo coincidirá. Un lookahead positivo se usa como (?=...) donde el ... es la parte requerida que no coincide.

Por otro lado, un lookahead negativo buscará para asegurarse de que el elemento en el patrón de búsqueda no este allí. Un lookahead negativo se usa como (?!...) donde el ... es el patrón que no quieres que esté allí. El resto del patrón se devuelve si la parte de lookahead negativo no está presente.

Los lookaheads son un poco confusos, pero algunos ejemplos ayudarán.
*/
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/g; //lookahead positivo, la "u" es igual a "u" por ende dará true
let qRegex = /q(?!u)/g; //lookahead negativo, en este caso la "u" es diferente de la "t" por ende da true
console.log(quRegex.test(quit)); 
console.log(qRegex.test(noquit));
console.log(quit.match(quRegex)); 
console.log(noquit.match(qRegex));
/*Un uso más práctico de lookaheads es comprobar dos o más patrones en una cadena. Aquí hay un verificador de contraseñas (ingenuamente) simple que busca entre 3 y 6 caracteres y al menos un número:*/

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));


/*-------------------------------------------------ejercicio 29------------------------------*/
/*Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.*/
/*------------------------------------------------Solución--------------------------------*/
let sampleWord = "22222";
let pwRegex = /(?=\w{5})(?=\D*\d{2})(?!\d)/; // Cambia esta línea
let result29 = pwRegex.test(sampleWord);
console.log(result29);
//En la expresión anterior en pwRegex, indicamos con el primer lookaHead positivo (?=\w{5}) que la contraseña debe ser mayor a 5 carácteres, con el segundo lookaHead positivo (?=\D*\d{2}) estamos indicando que pueden ser más de 5 caracteres o menos, que no sean números, pero que a su vez, al menos esten dos números consecutivos y el último lookAHead (?!\d) nos negará que se pueda crear una contraseña de solo números.

/*--------------------------------Comprueba agrupaciones mixtas de caracteres---------------------------------------*/
/*
A veces queremos comprobar grupos de caracteres utilizando una expresión regular y para conseguirlo usamos paréntesis ().

Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresión regular: /P(engu|umpk)in/g

Luego, comprueba si los grupos de cadena deseados están en la cadena de prueba usando el método test().
*/
let testStr30 = "Pumpkin";
let testRegex30 = /P(engu|umpk)in/;
console.log(testRegex30.test(testStr30)); 

//El método test aquí devolverá true.

/*-----------------------------------------Ejercicio 30--------------------------------------------------------*/
/*
Corrige la expresión regular para que compruebe los nombres de Franklin Roosevelt o Eleanor Roosevelt de una manera sensible a mayúsculas y minúsculas y haciendo concesiones para los segundos nombres.

Luego, corrige el código para que la expresión regular que has creado se compruebe con myString y devuelva true o false dependiendo de si la expresión regular coincide.
*/
let myString30 = "Eleanor Roosevelt";
let myRegex30 = /(Eleanor\s?|Franklin\s?)\w*\W*\sRoosevelt/g; // Cambia esta línea
let result30 = myRegex30.test(myString30); // Cambia esta línea
// Después de pasar el desafío experimenta con myString y observa cómo funciona la agrupación
console.log(myString30.match(myRegex30)); 
console.log(result30);

//en el desafío anterior, en la expresión ponemos los espacios \s? como opcionales, para que pueda coincidir nuestra expresión, se pueden agregar segundos nombres poniendo un "." si se quiere

/*--------------------------------Reutiliza patrones usando grupos de captura------------------*/

//Digamos que quieres hacer coincidir una palabra que aparece varias veces como la siguiente.

let repeatStr = "row row row your boat";

/*Podrías usar /row row row/, pero ¿qué pasa si no conoces la palabra específica que se repite? Los grupos de captura pueden utilizarse para encontrar subcadenas repetidas.

Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular a capturar. En este caso, el objetivo es capturar una palabra formada por caracteres alfanuméricos, por lo que el grupo de captura será \w+ encerrado entre paréntesis: /(\w+)/.

La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresión regular utilizando una barra invertida y el número del grupo de captura (por ejemplo, \1). Los grupos de captura se numeran automáticamente por la posición de sus paréntesis de apertura (de izquierda a derecha), empezando por el 1.

El siguiente ejemplo encuentra cualquier palabra que aparezca tres veces separada por un espacio:
 */

let repeatRegex31 = /(\w+) \1 \1/;
console.log(repeatRegex31.test(repeatStr));  // Returns true
console.log(repeatStr.match(repeatRegex31)); // Returns ["row row row", "row"]
//en la expresión (\w+) se captura el caracter y los retornamos llamando los subsiguientes \1 \1 con los debidos espacios para que pueda funcionar cada \1 representa la variable temporal en donde se almacena la cadena de caracteres a buscar en (\w+)

/*El uso del método .match() en una cadena devolverá un arreglo con la subcadena coincidente, junto con sus grupos capturados.*/


/*-----------------------------------Ejercicio 31--------------------------------------*/

/*Utiliza los grupos de captura en reRegex para que coincida con una cadena que conste sólo del mismo número repetido exactamente tres veces separado por espacios.*/
let repeatNum = "122 122 122";
let reRegex = /^(\d+) \1 \1$/g; // Cambia esta línea
let result31 = reRegex.test(repeatNum);
console.log(result31);
console.log(repeatNum.match(reRegex));

//nunca sabemos como detener los strings, por ello siempre se debe usar "^" al inicio de la expresión y $ al final para fijar la cadena de caracteres, nunca olvidar

/*---------------------Usa grupos de captura para buscar y reemplazar------------------*/
/*
La búsqueda es útil. Sin embargo, puedes hacer que la búsqueda sea aún más poderosa si también cambias (o reemplazas) el texto con el que coincide.

Puedes buscar y reemplazar texto en una cadena usando .replace() en una cadena. Las entradas para .replace() son primero el patrón de expresiones regulares que deseas buscar. El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer algo.
*/
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
console.log(wrongText.replace(silverRegex, "blue"));

/*La llamada replace devolverá la cadena The sky is blue..

También puedes acceder a grupos de captura en la cadena de reemplazo con signos de dólar. ($). 
*/

let changeOrder = "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
console.log(changeOrder);

/*--------------------------------------------------Ejercicio 32---------------------------------------*/
/*
Escribe una expresión regular fixRegex utilizando tres grupos de captura que buscarán cada palabra en la cadena one two three. Luego actualiza la variable replaceText para reemplazar one two three con la cadena three two one y asigna el resultado a la variable result. Asegúrate de utilizar grupos de captura en la cadena de reemplazo utilizando la sintaxis del signo de dólar ($).
*/

let str32 = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Cambia esta línea
let replaceText = "$3 $2 $1"; // Cambia esta línea
let result32 = str32.replace(fixRegex, replaceText);
console.log(result32);

/*De la forma anterior a la función replace que recibe 2 parámetros o los valores, de forma más organizada primero los almacenamos en variables para no introducir en la función .replace los valores directamente, primero se crear el regex con los grupos de captura teniendo en cuenta los espacios y posteriormente se llaman las variables las cuales son incrementales de izquierda a derecha*/

/*-------------Elimina espacio en blanco del inicio y final----------------*/
/*
A veces no se quieren caracteres en espacios en blanco alrededor de las cadenas, pero están ahí. El proceso típico de las cadenas de texto es eliminar el espacio en blanco al inicio y al final del mismo.
*/

/*-------------------------------------------------Ejercicio 33----------------------------------*/
/*
Escribe una expresión regular y usa los métodos de cadena apropiados para eliminar espacios en blanco al principio y al final de las cadenas.

Nota: El método String.prototype.trim() funcionará aquí, pero necesitarás completar este desafío usando expresiones regulares.
*/
let hello = "  Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Cambia esta línea
let result33 = hello.replace(wsRegex, ""); //
console.log(wsRegex.test(hello));
console.log(hello.match(wsRegex));
console.log(result33);

/*En el ejercicio anterior, con la expresión ^\s+ estamos señalando el espacio del inicio de la cadena de texto, luego seguimos con la expresión or | para indicar que \s+$ el ultimo espacio encontrando todas las similitudes con "/g" serán reemplazados por "", ningún espacio */
