/*------------------------------------Programación funcional-------------------------
La programación funcional es otro enfoque común en el desarrollo de software. En programación funcional, el código está organizado en funciones más pequeñas y básicas que se pueden combinar para construir programas de mayor complejidad.

En este curso, aprenderás los conceptos básicos de programación funcional incluyendo funciones puras, cómo evitar mutaciones, y cómo escribir código más limpio con métodos como .map() y .filter().
*/


/*----------------------------------------------Aprende sobre programación funcional-------------------------------------
La programación funcional es un estilo de programación donde las soluciones son simples, funciones aisladas, sin ningún efecto secundario fuera del ámbito de la función: INPUT -> PROCESS -> OUTPUT

La programación funcional se refiere a:

Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios

Funciones puras: una misma entrada siempre da la misma salida

Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función son cuidadosamente controlados
--------------------------Excercise 01-------------------
A los miembros de freeCodeCamp les encanta el té.

En el editor de código, las funciones prepareTea y getTea ya están definidas. Llama a la función getTea para obtener 40 tazas de té para el equipo y guárdalas en la variable tea4TeamFCC.
---------------Requirements
La variable tea4TeamFCC debe contener 40 tazas de té para el equipo.
La variable tea4TeamFCC debe contener tazas de té verde.
*/

// Función que retorna una cadena de texto representando una taza de té verde
const prepareTea = () => 'greenTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4TeamFCC = getTea(40);
// Cambia solo el código encima de esta línea
console.log(getTea(40));

/*------------------------------------Comprende la terminología de la programación funcional------------------------------
El equipo de FCC tuvo un cambio de humor y ahora quiere dos tipos de té: té verde y té negro. Hecho general: Los cambios del estado de ánimo de los clientes son bastante concurrentes.

Con esa información, tendremos que volver a visitar la función getTea del último desafío para manejar varias solicitudes de té. 
Podemos modificar getTea para aceptar una función como parámetro y así poder cambiar el tipo de té que prepara. Esto hace que getTea sea más flexible y le da al programador más control cuando las solicitudes del cliente cambian.

Pero primero, cubramos alguna terminología de la programación funcional:

Callbacks son las funciones que se deslizan o pasan a otra función para decidir la invocación de esa función. Es posible que las hayas visto pasar a otros métodos, por ejemplo en filter, 
la función callback le dice a JavaScript los criterios para filtrar un arreglo.

Las funciones que pueden ser asignadas a una variable, pasadas a otra función o devueltas desde otra función como cualquier otro valor normal, se llaman funciones de primera clase. En JavaScript, todas las funciones son funciones de primera clase.

Las funciones que toman una función como argumento, o devuelven una función como valor de retorno, se denominan funciones higher order.

Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o devolvieron se pueden llamar lambda.

----------------------Excercise 02------------------------
Prepara 27 tazas de té verde (green tea) y 13 tazas de té negro (black tea) y almacénalas en las variables tea4GreenTeamFCC y tea4BlackTeamFCC, respectivamente. 
Ten en cuenta que la función getTea ha sido modificada por lo que ahora recibe una función como primer argumento.

Nota: Los datos (el número de tazas de té) son suministrados como el último argumento. Discutiremos más sobre esto en lecciones posteriores.
------------------Requirements
La variable tea4GreenTeamFCC debe contener 27 tazas de té verde para el equipo.
La variable tea4GreenTeamFCC debe contener tazas de té verde.
La variable tea4BlackTeamFCC debe contener 13 tazas de té negro.
La variable tea4BlackTeamFCC debe contener tazas de té negro.
*/
// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4GreenTeamFCC = getTea2(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 13);
// Cambia solo el código encima de esta línea

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

/*--------------------------------------------Comprende los peligros de usar el código imperativo--------------------------------
La programación funcional es un buen hábito. Mantiene tu código fácil de manejar y evita que tengas errores incómodos. Pero antes de llegar allí, veamos un enfoque imperativo de la programación para resaltar dónde pueden tener problemas.

En inglés (y muchos otros idiomas), la tensión imperativa se utiliza para dar órdenes. De forma similar, un estilo imperativo en la programación es aquel que le da a la computadora un conjunto de sentencias para llevar a cabo una tarea.

A menudo las sentencias cambian el estado del programa, como actualizar variables globales. Un ejemplo clásico es escribir un bucle for que dé instrucciones exactas para iterar sobre los índices de un arreglo.

Por el contrario, la programación funcional es una forma de programación declarativa. Le dice al ordenador lo que quiere hacer llamando a un método o función.

JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes para que no necesites escribir cómo debe ejecutar el equipo. Por ejemplo, 
en el lugar de usar el bucle for mencionado anteriormente se podría llamar al método map que maneja los detalles de iteración sobre una matriz. Esto ayuda a evitar errores semánticos, 
como los "Off By One Errors" que fueron cubiertos en la sección Depuración.

Considere el escenario: está navegando por la web en su navegador y quiere rastrear las pestañas que ha abierto. Intentemos modelar esto con un código simple orientado a objetos.

Un objeto ventana está formado por pestañas y normalmente tienes más de una abierta. Los títulos de cada sitio abierto en cada ventana se mantienen en un arreglo. 
Después de trabajar en el navegador (abriendo nuevas pestañas, combinando ventanas y cerrando pestañas), deseas imprimir las pestañas que todavía están abiertas. 
Las pestañas cerradas se eliminan de la matriz y las nuevas pestañas (por simplicidad) se añaden al final de la misma.

El editor de código muestra una implementación de esta funcionalidad con funciones para tabOpen(), tabClose() y join(). El array tabs es parte del objeto ventana que almacena el nombre de las páginas abiertas.

-------------------------------Excercise 03------------------------------
Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, provocando un comportamiento incorrecto. La lista final de pestañas abiertas, 
guardadas en finalTabs.tabsdeberia ser ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']pero la lista producida por el código es un poco diferente.

Cambia Window.prototype.tabClose para que elimine la pestaña correcta.
--------------------Requirements
finalTabs.tabsdeberia ser['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
*/

//tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
    this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
};

//Cuando unes dos ventanas en una
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// Cuando abres una nueva pestaña al final
Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
    return this;
};

// Cuando cierras una pestaña
Window.prototype.tabClose = function(index) {
// Cambia solo el código debajo de esta línea

const tabsBeforeIndex = this.tabs.splice(0, index); // Obtiene las pestañas antes de la pestaña
console.log(tabsBeforeIndex);
const tabsAfterIndex = this.tabs.splice(1); // Obtiene las pestañas después de la pestaña
console.log(tabsAfterIndex);

this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos

// Cambia solo el código encima de esta línea

    return this;
};

// Vamos a crear tres ventanas del navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento

// Ahora completa la apertura de la pestaña, cierre, y otras operaciones
const finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);




/*Another solution-------------------
usando slice(). Esto no crea efectos secundarios y debe preferirse a splice().

Esta parte del código:

const tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
const tabsAfterIndex = this.tabs.splice(index + 1); // get the tabs after the tab
debe ser reemplazado con:

const tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
const tabsAfterIndex = this.tabs.slice(index + 1); // get the tabs after the tab

Palabra de precaución
splice() siempre debe usarse con cuidado ya que modifica los contenidos en los que está trabajando. Para obtener documentación y diferencias entre empalme y corte, consulte:
*/

/*---------------------------------Evitar efectos secundarios utilizando programación funcional------------------------------
Si aún no te has dado cuenta, el problema en el desafío anterior estaba en la llamada splicede la función tabClose(). 
Desafortunadamente, splicemodifica el arreglo original a la que se llama, por lo que la segunda llamada a ella utilizo un arreglo modificado, y dio resultados inesperados.

Este es un pequeño ejemplo de un patrón mucho mayor: se llama una función en una variable, arreglo o un objeto, y la función modifica la variable o algo en el objeto.

Uno de los principios fundamentales de la programación funcional es no cambiar las cosas. Los cambios conducen a errores. Es más fácil evitar errores sabiendo que las funciones no cambian nada, incluyendo los argumentos de la función o cualquier variable global.

El ejemplo anterior no tenía operaciones complicadas, pero el método splicemodificó el arreglo original y dio como resultado un error.

Recuerda que en la programación funcional, cambiar o alterar cosas se denomina mutación , y el resultado es conocido como efecto secundario . Una función, idealmente, debe ser una función pura , lo que significa que no provoca ningún efecto secundario.

Intentemos dominar esta disciplina y no alterar ninguna variable u objeto en nuestro código.

----------------------------Excercise 04------------------
Completa el código de la función incrementerpara que devuelva el valor de la variable global fixedValueincrementada en uno.
-------------Requirements
Tu función incrementerno debe cambiar el valor de fixedValue(que es 4).
La función incrementerdebe devolver el valor de fixedValuemás uno.
La función incrementerdebe devolver un valor basado en el valor de la variable global fixedValue.
*/

// La variable global
let fixedValue = 4;

function incrementer() {
  // Cambia solo el código debajo de esta línea
return fixedValue + 1;
  // Cambia solo el código encima de esta línea
}

/*----------------------------------Pasa argumentos para evitar la dependencia externa en una funcion------------------------
El último reto fue un paso más cerca de los principios de la programación funcional, pero todavía falta algo.

No alteramos el valor global de la variable, pero la función incrementer no funcionaría sin que la variable global fixedValue estuviera allí.

Otro principio de programación funcional es declarar siempre sus dependencias de forma limpia. Esto significa si una función depende de que una variable u objeto esté presente, después pasa esa variable u objeto directamente a la función como argumento.

Este principio tiene varias consecuencias positivas. La función es más fácil de probar, se sabe exactamente lo que necesita, y no surgió nada más en su programa.

Esto puede darte más confianza cuando cambias, eliminas o agregas código nuevo. Sabrás lo que se puede o no se puede cambiar y, puedes ver dónde están las posibles trampas.

Finalmente, la función siempre produciría el mismo resultado para el mismo conjunto de entradas, sin importar qué parte del código la ejecuta.

----------------------------Excercise 05-----------------------
Escribe la función incrementer para que reciba un argumento, y luego devuelva un resultado después de aumentar el valor en uno.

-------------------Requirements
Tu función incrementerno debe cambiar el valor de fixedValue(que es 4).
Tu función incrementerdebe recibir un argumento.
La función incrementerdebe devolver el valor de fixedValuemás uno.
*/

// La variable global
let fixedValue5 = 4;

incrementer(fixedValue5);

// Cambia solo el código debajo de esta línea
function incrementer(param) {

    return param + 1;

  // Cambia solo el código encima de esta línea
}

/*------------------------------------Refactoriza variables globales por fuera de funciones-----------------------------------
Hasta ahora, hemos visto dos principios distintos para la programación funcional:

No alteres una variable u objeto: crea nuevas variables y objetos y devuélvelos, si es necesario, desde una función. Pista: usar algo como const newArr = arrVar, 
donde arrVar es un arreglo, simplemente creará una referencia a la variable existente y no una copia. Así que cambiaría un valor en newArr cambiaría el valor en arrVar.

Declara parámetros de función: cualquier cálculo dentro de una función depende sólo de los argumentos pasados ​​a la función y no en ningún objeto o variable global.

Añadir uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando trabajamos con arreglos u objetos más complejos.
-----------------------Excercise 06-------------------
Reescribe el código para que el arreglo global bookList no sea cambiado dentro de ninguna de las funciones. 
La función add debe agregar el bookName dado al final del arreglo pasado a este y devolver un nuevo arreglo (lista). La función remove debe eliminar el bookName dado del arreglo pasado a este.

Nota: ambas funciones deben devolver un arreglo y cualquier nuevo parámetro debe ser agregado antes del parámetro bookName.
-----------------Requirements
bookList no debe cambiar y aun ser igual a ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
add(bookList, "A Brief History of Time")debe devolver ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
remove(bookList, "On The Electrodynamics of Moving Bodies")debe devolver ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");debe ser igual a ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
*/

// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function addBook(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
  // Cambia el código encima de esta línea
}
console.log(addBook(bookList, "Las respuestas de Emilio"));

// Cambia el código debajo de esta línea
function remove(arr, bookName) {
const newArr = [...arr];
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    newArr.splice(book_index, 1);
    return newArr;
    // Cambia el código encima de esta línea
    }
}
console.log(remove(bookList, "Philosophiæ Naturalis Principia Mathematica"));

/*-------------Another solution
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

This function should add a book to the list and return the list 
New parameters should come before bookName

function add(list, bookName) {
    return [...list, bookName];
}

This function should remove a book from the list and return the list 
    New parameters should come before the bookName one

function remove(list, bookName) {
    return list.filter(book => book !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

*/

/*-------------------------------------Usa el método "map" para extraer datos de un arreglo-----------------------------------
Hasta ahora hemos aprendido a utilizar funciones puras para evitar efectos secundarios en un programa. Además, hemos aprendido el valor de tener una función que solo depende de sus argumentos de entrada.

Este es solo el principio. Como su nombre indica, la programación funcional se centra en una teoría de funciones.

Tendría sentido pasarlos como argumentos a otras funciones y devolver una función de otra función. 
Las funciones se consideran first class objects en JavaScript, lo que significa que pueden ser usados como cualquier otro objeto. 
Pueden guardarse en variables, almacenarse en un objeto o pasarse como argumentos de función.

Empecemos con algunas funciones de arreglos simples, que son métodos en el prototipo de objetos del arreglo. En este ejercicio estamos utilizando Array.prototype.map() o más específicamente map.

El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la función callback en cada elemento. Esto lo hace sin mutar el arreglo original.

Cuando se utiliza la función callback, se pasan tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es el arreglo al que se llamó el método map.

A continuación se muestra un ejemplo con el método map en el arreglo users para devolver un nuevo arreglo que contiene solo los nombres de los usuarios como elementos. Para que sea más fácil, el ejemplo solo utiliza el primer argumento del callback.
*/

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
const names = users.map(user =>
  //para poder usar la sintaxis de abajo se tiene que envolver en paréntesis ({}) después del arrow symbol, porque retornamos varios objetos dentro de un array. Al usar solo user.name estabamos devolviendo solo los valores en un nuevo array.
  //["name"]:user["name"],
 // ["age"]:user["age"]
  user.name
  //name : user["name"]
  //age: user["age"]
);
console.log(names);


/*-------------------------Excercise 07------------------------------
El arreglo watchList contiene objetos con información sobre varias películas. Usa map en watchList para asignar un nuevo arreglo de objetos a la variable ratings. 
Cada película en el nuevo arreglo debe tener solo una tecla title con el nombre de la película, y una tecla rating con la calificación IMDB. 
El código en el editor utiliza actualmente un bucle for para hacer esto, por lo que debes reemplazar la funcionalidad del bucle con tu expresión map.
-------------------Requirements
La variable watchList no debe cambiar.
Tu código no debe usar un bucle for.
Tu código debe usar el método map.
ratings debe ser igual a [{"title": "Inception", "rating": "8.8"}, {"title": "Interstellar", "rating": "8.6"}, {"title": "The Dark Knight", "rating": "9.0"},{"title": "Batman Begins", "rating": "8.3"}, {"title": "Avatar", "rating": "7.9"}].


------------Excercise original with for bucle------
const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
}

// Cambia solo el código encima de esta línea

console.log(JSON.stringify(ratings));
*/
// La variable global
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Cambia solo el código debajo de esta línea


let newArr = []
let modifiedArr = watchList.map(function(element){
  if(element.imdbRating > 8.5)
  newArr.push({title: element.Title, rating: element.imdbRating});
  return newArr;
})
console.log(modifiedArr);

//Another way
const ratings2 = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

console.log(ratings2);

/*Another solution
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
*/

const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
}

// Cambia solo el código encima de esta línea

console.log(JSON.stringify(ratings));


/*-------------------------------------Implementa map en un prototipo-------------------------
Como has visto anteriormente, al aplicar Array.prototype.map(), o simplemente map(), el método map devuelve un arreglo de la misma longitud que el arreglo dentro del que fue llamado. Esto tampoco altera el arreglo original, siempre y cuando su función callback no lo haga.

En otras palabras, map es una función pura, y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

Puedes aprender mucho sobre el método map si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().

-----------------------Excercise 08---------------------
Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap usando this.

----------Requirements
[23, 65, 98, 5, 13].myMap(item => item * 2) debe ser igual a: [46, 130, 196, 10, 26].
["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())debe devolver ["NAOMI", "QUINCY", "CAMPERBOT"].
[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]) debería devolver [1, 2, 5, 2, 1].
Tu código no debe usar el método map.
*/
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
    for(let i = 0; i< this.length; i++){
      newArray.push(callback(this[i], i, this));
    }
  // Cambia solo el código encima de esta línea
  return newArray;
};

/*El ejercicio de arriba emulamos una propiedad ".map" con un for, se debe entender que retorna un array, pero que recibe 3 argumentos, el elemento en sí "this[i]", su index "i" y el array que queremos trabajar "this", y nos retorna un nuevo array. Esto se hizo para comprender de una mejor forma la propiedad map. 
Cuando se trabaja con Array.prototype, se puede llamar al interior de la función, usando el this, para hacer referencia a la misma función.
*/
let letter = "a";
console.log([23, 65, 98, 5, 13].myMap(item => item * 2));

//Ejemplo de lo que se puede hacer usando .map modificando la función callback, prácticamente se pueden modificar cada elemento del array si así se requiere. 
console.log([23, 65, 98, 5, 13].map(function(item){
  if(item>27){
  return "a " + item
  }else{
    return item + " b"
  } 
} ));

/*Another solution with foreach
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((element, index, originalArr) =>
    newArray.push(callback(element, index, originalArr))
  );
  // Only change code above this line
  return newArray;
};
*/


/*--------------------------------Usa el método de "filter" para extraer datos de un arreglo--------------------------------------
Otra función útil de los arreglos es Array.prototype.filter() o simplemente filter().

filter Llama a una función sobre cada elemento del arreglo y devuelve un nuevo arreglo, 
conteniendo solo los elementos para los cuales la función devolvió un valor de verdadero - Es decir, un valor que devuelve true si paso al constructor Boolean(). 
En otras palabras, filtra el arreglo, basándose en la función que se le pasa. Al igual que map, hace esto sin necesidad de modificar el arreglo original.

La función callback acepta tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es el arreglo sobre el que se llamó al método filter.

A continuación se muestra un ejemplo en el que se utiliza el método filter en el arreglo users para devolver un nuevo arreglo que contiene sólo a los usuarios menores de 30 años. 
Para que sea más fácil, el ejemplo solo utiliza el primer argumento de la función callback.

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); 

La consola muestra el valor [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].
----------------------------Excercise 09---------------------
La variable watchList contiene un arreglo de objetos con información sobre varias películas. 
Utiliza una combinación de filter y map en watchList para asignar un nuevo arreglo de objetos con solo title y rating claves. 
El nuevo arreglo solo debe incluir objetos donde imdbRating es mayor o igual a 8.0. Ten en cuenta que los valores rating se guardan como cadenas en el objeto y puedes necesitar convertirlos en números para realizar operaciones matemáticas en ellos.
------------------------Requirements
La variable watchList no debe cambiar.
Tu código debe usar el método filter.
El código no debe utilizar el bucle for.
filteredList debe ser igual a [{"title": "Inception", "rating": "8.8"}, {"title": "Interstellar", "rating": "8.6"}, {"title": "The Dark Knight", "rating": "9.0"}, {"title": "Batman Begins", "rating": "8.3"}].
*/

// Cambia solo el código debajo de esta línea

const filteredList = watchList.map(item => ({
  title: item["Title"],
  rating: parseFloat(item["imdbRating"])
})).filter(item => item.rating >= 8.0);
//se hace un parseo del float almacenado en el objeto como string, en este caso el rating
// Cambia solo el código encima de esta línea

console.log(filteredList);

/*
De la forma anterior es como agregamos un filter a nuestro map para realizar una búsqueda más especifica, en este caso que se muestren todas las películas con un rating mayor o igual a 8.0

------Anothers solutions
const filteredList = watchList
  .filter(movie => {
    return true it will keep the item
    return false it will reject the item
    return parseFloat(movie.imdbRating) >= 8.0;
  })
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  });

en el caso de arriba no importa el orden del filter, se puede usar antes o después, pero en la línea 606 se parsea el rating para poder usarlo como número y no como string, en este caso es un float.


-----------------Another solution

const filteredList = watchList
  .filter(({ imdbRating }) => imdbRating >= 8.0)
  .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));

console.log(filteredList);

En la forma de arriba es como se edita el map y también el filter, usando después del paréntesis las llaves {}, en el caso del map, 
después de renombrar cómo aparecerán las propiedades en el primer paréntesis, después del arrow => indicamos el orden de los valores.

*/

/*------------Implementa el método filter en un prototipo
Puedes aprender mucho sobre el método filter si implementas tu propia versión. Se recomienda utilizar un bucle for o Array.prototype.forEach().

------------------Excercise 10
Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). No debes utilizar el método incorporado filter. Se puede acceder a la instancia Array en el método myFilter usando this.
-------------------Requirements
[23, 65, 98, 5, 13].myFilter(item => item % 2) debe ser igual a [23, 65, 5, 13].
["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi") deber devolver ["naomi"].
[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index) debe devolver [1, 2, 5].
Tu código no debe usar el método filter.
*/
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
for(let i = 0; i< this.length; i++){
    if(callback(this[i], i, this) == true){
        newArray.push(this[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

console.log([1, 1, 2, 5, 2, "hola", "hola"].myFilter((element, index, array) =>
array.indexOf(element) === index));

/*En el ejercicio de arriba se utilizaron los condicionales llamando a la función, en este caso callback(this[i], i, this) === true, indicando que si se cumplía la condición de la función externa que se hiciera el push al nuevo array y lo retornara, pero hubo un problema con la lógica del módulo, así que tocó indicar || en caso de que fuese 1 se hiciera el push al array con el siguiente caso "[23, 65, 98, 5, 13].myFilter(item => item % 2) debe ser igual a [23, 65, 5, 13]", este último problema se resolvió cambiando la comparación esctricta por la normal, es decir callback(this[i], i, this) == true, con esto se cumplen todas las condiciones de los requirements, es importante entender la diferencia entre el map y el filter.

En el map(), se da por sentada la modificación de los elementos del array, por tanto sólo se deben pushear, porque los elementos son retornados con las modificaciones. Pero en el método filter(), los elementos deben ser probados uno a uno y sólo se retornan los que cumplan la condición del filtro indicado en la función externa.

---------------------Anothers solutions
----with Boolean extern and stric comparation ===
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};
----- with for of----
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (const [index, elem] of this.entries()) {
    if (callback(elem, index, this)) newArray.push(elem);
  }
  // Only change code above this line
  return newArray;
};

*/

/*-----------------Devolver parte de un arreglo mediante el método slice-------------
El método slice devuelve una copia de ciertos elementos de un arreglo. Puede tomar dos argumentos, el primero da el índice de dónde comenzar el corte, el segundo es el índice de dónde terminar el corte (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio del arreglo hasta el final, la cual es una manera fácil de hacer una copia de todo el arreglo. El método slice no muta el arreglo original, pero devuelve uno nuevo.

Por ejemplo:
*/
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
//newArray tendría el valor de ["Dog", "Tiger"].
/*---------------------Excercise 11
Utiliza el método slice en la función sliceArray para retornar parte del arreglo anim dados los índices beginSlice y endSlice. La función debe devolver un arreglo.
--------------Requirements
Tu código debe usar el método slice.
La variable inputAnim no debe cambiar.
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) debe devolver ["Dog", "Tiger"].
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) debe devolver ["Cat"].
sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) debe devolver ["Dog", "Tiger", "Zebra"].
*/

function sliceArray(anim, beginSlice, endSlice) {
  // Cambia solo el código debajo de esta línea
  return anim.slice(beginSlice,endSlice)
  // Cambia solo el código encima de esta línea
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));


/*------------Remueve elementos de un arreglo usando slice en lugar de splice-------------
Un patrón común al trabajar con arreglos es cuando deseas eliminar elementos y conservar el resto del arreglo. JavaScript ofrece el método splice para esto, que toma argumentos para el índice de dónde comenzar a eliminar elementos, luego la cantidad de elementos para eliminar. Si no se proporciona el segundo argumento, el valor predeterminado es eliminar elementos hasta el final. Sin embargo, el método splice muta el arreglo original en el que se llama. Por ejemplo:
*/
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(cities.splice(3, 1));

/*Aquí splice devluelve la "string" London y la elimina del arreglo cities. cities tendrá el valor de ["Chicago", "Delhi", "Islamabad", "Berlin"].

Como vimos en el último desafío, el método slice no muta el arreglo original, pero devuelve uno nuevo que puede ser guardado en una variable. Recuerda que el método slice recibe dos argumentos para indicar el comienzo y el final del segmento (el final es no inclusivo) y retorna estos elementos en un nuevo arreglo. Usar el método slice en lugar de splice ayuda a prevenir cualquier efecto colateral de mutar un arreglo.
-------------Excercise 12-----------
Reescribe la función nonMutatingSplice usando slice en lugar de splice. Debe limitar el arreglo proporcionado cities a una longitud de 3 y devolver un nuevo arreglo con solo los primeros tres elementos.

No modifiques el arreglo original proporcionado en la función.

-----------Requirements
Tu código debe usar el método slice.
Tu código no debe usar el método splice.
El arreglo inputCities no debe ser cambiado.
nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) debe devolver ["Chicago", "Delhi", "Islamabad"].
*/

function nonMutatingSplice(cities) {
  // Cambia solo el código debajo de esta línea
  return cities.slice(0, 3);
  // Cambia solo el código encima de esta línea
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));

//se retornan los 3 primeros elementos, se recuerda que el último parámetro es no inclusivo por ende debe ir un número más del index del arreglo.

/*------------------------Combina dos arreglos utilizando el método "concat"--------------------------
Concatenation significa unir elementos de extremo a extremo. JavaScript ofrece el método concat para cadenas y arreglos, que funciona de la misma manera. Para arreglos, el método es llamado desde un arreglo, un segundo arrelgo es proporcionado como argumento de concat, este se añadirá al final del primer arreglo. Devuelve un nuevo arreglo, sin mutar ninguno de los arreglos originales. Aquí hay un ejemplo:
*/

let fusionArr = [1, 2, 3].concat([4, 5, 6]);
console.log(fusionArr);

/*------------------------Excercise 13----------------
Usa el método concat en la función nonMutatingConcat para concatenar attach al final de original. La función deber devolver el arreglo concatenado.
--------------------Requirements
Tu código debe usar el método concat.
El arreglo first no debe cambiar.
El arreglo second no debe cambiar.
nonMutatingConcat([1, 2, 3], [4, 5]) debe devolver [1, 2, 3, 4, 5].
*/

function nonMutatingConcat(original, attach) {
  // Cambia solo el código debajo de esta línea
  return original.concat(attach)

  // Cambia solo el código encima de esta línea
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));

/*---------------------------Agrega elementos al final de un arreglo utilizando concat en lugar de push---------------------------
La programación funcional consiste en crear y utilizar funciones no mutantes.

En el reto anterior se introdujo el método concat como una forma de unir varios arreglos en uno nuevo sin alterar los arreglos originales. Compara concat con el método push. push añade elementos al final del propio arreglo sobre el que es invocado, alterando dicho arreglo. Aquí hay un ejemplo:

const arr = [1, 2, 3];
arr.push(4, 5, 6);

arr habría sido modificado a [1, 2, 3, 4, 5, 6], hecho que no cumple con los principios de la programación funcional.

concat ofrece una manera de unir nuevos elementos al final del arreglo sin ningún efecto colateral.

-------------------------Excercise 14-------------------
Cambia la función nonMutatingPush de manera que utilice concat para unir newItem al final de original sin alterar los arreglos original o newItem. La función debe devolver un arreglo.
--------------------Requiriments
El código debe utilizar el método concat.
El código no debe utilizar el método push.
El arreglo first no debe modificarse.
El arreglo second no debe modificarse.
nonMutatingPush([1, 2, 3], [4, 5]) debe devolver [1, 2, 3, 4, 5].
*/
function nonMutatingPush(original, newItem) {
  // Cambia solo el código debajo de esta línea
  return original.concat(newItem);

  // Cambia solo el código encima de esta línea
}

const first13 = [1, 2, 3];
const second13 = [4, 5];
nonMutatingPush(first, second);

/*-------------------------------------------Utiliza el método "reduce" para analizar datos-------------------------------
Array.prototype.reduce() o simplemente reduce() es la operación más común de todas para arreglos en JavaScript. Se puede resolver casi cualquier problema de procesamiento de arreglos utilizando el método reduce.

El método reduce permite formas más generales de procesamiento de arreglos y es posible mostrar que tanto filter como map pueden derivarse como aplicaciones especiales de reduce. El método reduce itera sobre cada elemento del arreglo y devuelve un solo valor (por ejemplo una cadena, número, objeto, arreglo). Esto se consigue mediante una función callback que se llama en cada iteración.

La función callback acepta cuatro argumentos. El primer argumento se conoce como acumulador, que recibe el valor retornado de la función callback de la iteración anterior, el segundo es el elemento actual que se está procesando, el tercero es el índice de ese elemento y el cuarto es el arreglo sobre el que se llama a la función reduce.

Además de la función callback, reduce tiene un parámetro adicional que toma un valor inicial para el acumulador. Si este segundo parámetro no se utiliza, entonces la primera iteración se omite y la segunda se pasa por el primer elemento del arreglo como acumulador.

Mira a continuación un ejemplo con reduce en el arreglo users para devolver la suma de todas las edades de los usuarios. Para hacerlo más fácil, el ejemplo sólo utiliza el primer y segundo argumento.
*/
const users15 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users15.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

/*La consola mostrará el valor 64.

En otro ejemplo, se puede observar cómo un objeto puede ser devuelto con los nombres de los usuarios como propiedades con las edades como valores.
*/

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

/*--------------------------Excercise 15-------------------------
La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan. Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) sobre ellos para extraer lo que necesitas. Puede que necesites crear otras variables y devolver la calificación media con la función getRating. Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación matemática.
--------------------Requirements
La variable watchList no debe cambiar.
Tu código debe utilizar el método reduce.
getRating(watchList) debe ser igual a 8.675.
Tu código no debe usar un bucle for.
Tu código debe devolver el resultado correcto después de modificar el objeto watchList.
*/
function getRating(watchList) {
  // Cambia solo el código debajo de esta línea
  let newArr = [...watchList]
  let averageRating = newArr.filter(movie => movie.Director === "Christopher Nolan").reduce((avg, movie, i, list) =>{
  //con el filter almacenamos todos los elementos que cumplan con la condición de tener como director a Christopher, luego sobre ellos aplicamos un reducer, no olvidar que el reducer cuando se usa con todos los parámetros(4) tiene un contador que vendría siendo el primer argumento, seguido del elemento, el index y el array, sucesivamente.
  
  let parseoRating = parseFloat(movie.imdbRating);
  //acá estamos parseando de String a float el imdbRating de las películas
  console.log(movie.imdbRating);
  return avg + parseoRating/list.length
  // en el return el acumulador avg, le sumamos los ratings y luego obtenemos el promedio
  }, 0)
  //se debe iniciar en 0, el acumulador por fuera de las llaves.
  // Cambia solo el código encima de esta línea
  return averageRating;
}

console.log(getRating(watchList));

/*------------Anothers solutions with filter, map y reducer
function getRating(watchList){
  // Add your code below this line
  const averageRating = watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Add your code above this line
  return averageRating;
}

console.log(getRating(watchList));

-------------------------Another solution only with reduce
function getRating(watchList) {
  // Add your code below this line
  const nolanData = watchList
    .reduce((data, { Director: director, imdbRating: rating }) => {
      if (director === 'Christopher Nolan') {
        data.count++;
        data.sum += Number(rating);
      }
      return data;
    }, { sum: 0, count: 0 });
  const averageRating = nolanData.sum / nolanData.count;
  // Add your code above this line
  return averageRating;
}

console.log(getRating(watchList));
*/

/*----------Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo-------------
Ahora que has superado algunos desafíos usando funciones de orden superior como map(), filter(), y reduce(), ahora puedes aplicarlos para resolver un desafío más complejo.
-------------------------Excercise 16------------------
Completa el código para la función squareList usando cualquier combinación de map(), filter(), y reduce(). La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo de números reales. Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].
Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach().
-----------------Requirements
squareList debe ser una función (function).
for, while, y forEach no deben ser usados.
map, filter, o reduce deben ser usados.
La función debe devolver un arreglo (array).
squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) debe devolver [16, 1764, 36].
squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) debe devolver [9, 100, 49].
*/
const squareList = arr => {
  // Cambia solo el código debajo de esta línea
  let plusNumbersE = arr.filter(numbers => numbers > 0 && numbers % 1 == 0).map((number) =>{
      return Math.pow(number,2)
  })
  return plusNumbersE;
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

let squarePrub = Math.pow(5,2)
console.log(squarePrub);

//Solution only with reducer and if ternario

const squareList2 = arr => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};

console.log(squareList2([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])); 

/*Se debe comprender el uso del reduce en la función de arriba, hay dos returns, y por fuera de reduce se retorna un array vacío si no se cumple la condición del if ternario. Pero las iteraciones se hacen teniendo en cuenta el número de elementos del array, cuando todo el ciclo se complete, retorna los valores en caso de que existan en un array.
*/

/*---------------------------Ordena un arreglo alfabéticamente con el método sort--------------------------
El método sort ordena los elementos de un arreglo de acuerdo a la función callback.
Por ejemplo:
*/
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

console.log(ascendingOrder([1, 5, 2, 3, 4]));

//Esto devolvería el valor de [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);

/*Por defecto, JavaScript ordena basándose en el valor "Unicode" de la cadena de caracteres, lo cual puede dar resultados inesperados. Por lo tanto, se recomienda proporcionar una función callback para especificar como se deben ordenar los elementos del arreglo. Cuando se proporciona dicha función callback, normalmente llamada compareFunction, los elementos del arreglo se ordenan de acuerdo al valor que devuelve la función compareFunction: Si compareFunction(a,b) devuelve un valor menor que 0 para dos elementos a y b, entonces a irá antes que b. Si compareFunction(a,b) devuelve un valor mayor a 0 para dos elementos a y b, entonces b irá antes que a. Si compareFunction(a,b) devuelve un valor igual a 0 para dos elementos a y b, entonces a y b se dejarán sin cambios.
-----------------------Excercise 17------------------
Utiliza el método sort en la función alphabeticalOrder para ordenar los elementos de arr en orden alfabético. La función debe devolver el arreglo ordenado.
-----------------Requirements
Tu código debe usar el método sort.
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) debe devolver ["a", "a", "c", "d", "g", "z"].
alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) debe devolver ["a", "h", "m", "m", "n", "x"].
alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) debe devolver ["a", "a", "a", "a", "t", "x"].
*/

function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Cambia solo el código encima de esta línea
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//Buscar la explicación del ejercicio 17

/*--------------Devuelve un arreglo ordenado sin cambiar el arreglo original------------
Un efecto secundario del método sort es que cambia el orden de los elementos en el arreglo original. En otras palabras, muta el arreglo en su sitio. Una forma de evitar esto es concatenar primero un arreglo vacío al que está siendo ordenado (recuerda que slice y concat devuelven un nuevo arreglo), luego ejecutar el método sort.
---------------Excercise 18------------
Utiliza el método sort en la función nonMutatingSort para ordenar los elementos de un arreglo en orden ascendente. La función debe devolver un nuevo arreglo y no mutar la variable globalArray.
--------------Requirements
Tu código debe usar el método sort.
La variable globalArray no debe cambiar.
nonMutatingSort(globalArray) debe devolver [2, 3, 5, 6, 9].
nonMutatingSort(globalArray) no debe ser programada manualmente.
La función debe devolver un nuevo arreglo, no el arreglo que se le pasa.
nonMutatingSort([1, 30, 4, 21, 100000]) debe devolver [1, 4, 21, 30, 100000].
nonMutatingSort([140000, 104, 99]) debe devolver [99, 104, 140000].
*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
  let newArr = []
  let copyArr = newArr.concat(arr)
  return copyArr.sort(function(a,b){
      return a - b;
  })

  // Cambia solo el código encima de esta línea
}
console.log(nonMutatingSort(globalArray)); 

/*En el ejercicioi 18, en la function nonMutatinSort, creamos un nuevo array y lo concatenamos para no modificar el array original, de esta forma lo estamos copiando, después procedemos a retornar en método sort aplicado a la copia del array, en la función callback del método indicamos cómo debe ser ordenado nuestro array y lo retornamos 

----------Another solution without create a new variable--------
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);

*/

/*-------------------------Divide una cadena en un arreglo utilizando el método "split"---------------------
El método split divide una cadena en un arreglo de cadenas. Se necesita un argumento para el delimitador, el cual puede ser un carácter para separar la cadena o una expresión regular. Por ejemplo, si el delimitador es un espacio, se obtiene un arreglo de palabras y si el delimitador es una cadena vacía, se obtiene un arreglo de cada carácter en la cadena.

Aquí hay dos ejemplos que dividen una cadena por espacios, luego otra por dígitos utilizando una expresión regular:
*/
const str = "Hello World";
const bySpace = str.split(" ");
console.log(bySpace);

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
console.log(byDigits);

/*bySpace tendrá el valor ["Hello", "World"] y byDigits tendrá el valor ["How", "are", "you", "today"].

Dado que las cadenas son inmutables, el método split facilita el trabajo con ellas.

------------------Excercise 19------------------
Utiliza el método split dentro de la función splitify para dividir str en un arreglo de palabras. La función debe devolver un arreglo. Ten en cuenta que las palabras no siempre están separadas por espacios y que el arreglo no debe contener signos de puntuación.
-----------------Requirements
Tu código debe usar el método split.
splitify("Hello World,I-am code") debe devolver ["Hello", "World", "I", "am", "code"].
splitify("Earth-is-our home") debe devolver ["Earth", "is", "our", "home"].
splitify("This.is.a-sentence") debe devolver ["This", "is", "a", "sentence"].
*/

function splitify(str) {
  // Cambia solo el código debajo de esta línea
  return str.split(/\W/)
  // Cambia solo el código encima de esta línea
}

console.log(splitify("This.is.a-sentence"));

// para resolver el ejercicio usamos la expresión regular sin simbolos y resuelve lo de los espacios en el split, transformando la cadena de texto en un array.

/*Combina un arreglo en una cadena utilizando el método "join"
El método join se utiliza para unir los elementos de un arreglo creando una cadena de texto. Se necesita un argumento para especificar el delimitador a utilizar para separar los elementos del arreglo en la cadena.

Aquí hay un ejemplo:
*/

const arr20 = ["Hello", "World"];
const str20 = arr20.join("").split("");
//str tendrá una cadena con valor Hello World.
console.log(str20);

//en la combinación de arriba, unimos dos palabras en un solo array y tomamos caracter por caracter para realizar múltiples operaciones con String, 
//por ejemplo si quisieramos retonar un array con las letras órdenadas de forma alfabética. 
//Pero primero debemos transformar el array con todas las letras en minúsculas, usamos un map
let arrLowerCase = str20.map(string => string.toLowerCase());

arrLowerCase.sort((function(a, b) {
  return a === b ? 0 : a < b ? -1 : 1;
}));
console.log(arrLowerCase.join(" "));

/*En este caso se puede entender la diferencia entre un string y un array, cuales métodos se pueden aplicar y cuales no, 
por ello siempre se debe procurar mutar la información de forma que podamos aplicar propiedades funcionales para nuestros requerimientos.
se tienen dos palabras separadas, se unen, se introducen en un array que las separa por caracteres, luego iteramos en el array con un map, 
y retornamos un array haciendo uso de sort que ordena el array de forma alfabética. Si agregammos el join(" ") al final retornamos solo la cadena de texto con las palabras en orden alfabético, si lo quitamos retornamos un array.
----------------------Excercise 20----------------
Utiliza el método join (entre otros) dentro de la función sentensify para hacer una oración a partir de las palabras en la cadena str. La función debe devolver una cadena. 
Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars. Para este desafío, no utilices el método replace.
------------------Requirements
Tu código debe usar el método join.
Tu código no debe utilizar el método replace.
sentensify("May-the-force-be-with-you") debe devolver una cadena.
sentensify("May-the-force-be-with-you") debe devolver la cadena May the force be with you.
sentensify("The.force.is.strong.with.this.one") debe devolver la cadena The force is strong with this one.
sentensify("There,has,been,an,awakening") debe devolver la cadena There has been an awakening.
*/

function sentensify(str) {
  // Cambia solo el código debajo de esta línea
    return str.split(/\W/).join(" ");
  // Cambia solo el código encima de esta línea
}
console.log(sentensify("May-the-force-be-with-you"));

/*Se aplica el split para eliminar los simbolos, luego el join para devolver una cadena de texto, debido a que sin el join se retorna un array.

----------------------------------Aplicar programación funcional para convertir cadenas a slugs de URL---------------------
Los últimos desafíos abarcaban una serie de métodos útiles para arreglos y cadenas, que siguen los principios de la programación funcional. 
También hemos aprendido acerca de reduce, que es un poderoso método utilizado para reducir los problemas a formas más simples. Desde el cálculo de promedios a la ordenación, 
cualquier operación con arreglos puede lograrse si lo aplicamos. Recuerda que map y filter son casos especiales de reduce.

Combinemos lo que hemos aprendido para resolver un problema práctico.

Muchos sitios de gestión de contenidos (CMS) tienen los títulos de una publicación añadidos como parte de la URL con el simple propósito de ser marcadores. 
Por ejemplo, si escribes una publicación titulada Stop Using Reduce, es probable que la url tenga parte de este titulo en ella (.../stop-using-reduce). Puede que ya hayas notado esto en el sitio de freeCodeCamp.

---------------------------Excercise 21---------------------------
Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL. Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace. Aquí están los requisitos:

La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas

El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-)

El resultado debe contener todas las letras minúsculas

El resultado no debe tener espacios
-------------Requirements
Tu código no debe utilizar el método replace para este desafío.
urlSlug("Winter Is Coming") debe devolver la cadena winter-is-coming.
urlSlug(" Winter Is  Coming") debe devolver la cadena winter-is-coming.
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") debe devolver la cadena a-mind-needs-books-like-a-sword-needs-a-whetstone.
urlSlug("Hold The Door") debe devolver la cadena hold-the-door.
*/
// Cambia solo el código debajo de esta línea
function urlSlug(title) {
let titleFormat = title.toLowerCase().trim().split(/\s+/).join("-")
return titleFormat;
}
// Cambia solo el código encima de esta línea
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

/*Nos demoramos mucho en resolver el problema porque no sabíamos como frenar la creación de guiones cade vez que se usaba un espacio, 
ló unico que se tenía que agregar en la expresión regular era el +, con esto indicamos que se cancela todo tipo de espacio y se reemplaza por un solo guión medio "-"

----------Another solution--------
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle);

Acá usamos el filter, para indicar que se deberá unir la candena por un espacio, y que esos espacios deben ser reemplazados por un guión, se simplifica el código, no importa cuanto espacio haya, se reemplazará por un solo guión siempre.
*/
/*---------------Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio---------
El método every funciona con arreglos para comprobar si every element pasa una prueba en particular. Devuelve un valor booleano - true si todos los valores cumplen los criterios, false si no.

Por ejemplo, el siguiente código comprobaría si cada elemento en el arreglo numbers es menor a 10:
*/
const numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
//El método every devolvería false aquí.
console.log(numbers.every(function(currentValue) { return currentValue < 10; }));

/*-------------------------Excercise 22-----------------
Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo. La función debe devolver un valor booleano.
----------------Requirements
Tu código debe usar el método every.
checkPositive([1, 2, 3, -4, 5]) debe devolver false.
checkPositive([1, 2, 3, 4, 5]) debe devolver true.
checkPositive([1, -2, 3, -4, 5]) debe devolver false.
*/
function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
    return arr.every(function(value){ return value > 0})
  // Cambia solo el código encima de esta línea
}

console.log(checkPositive([1, 2, 3, -4, 5])); 


/*---------------Usa el método "some" para comprobar si algún elemento en un arreglo cumple un criterio------------------
El método some funciona con arreglos para comprobar si algún elemento pasa una prueba en particular. Devuelve un valor booleano true si alguno de los valores cumple el criterio, false si no.

Por ejemplo, el siguiente código comprobará si algún elemento en el arreglo numbers es menor que 10:
*/

console.log(numbers.some(function(currentValue) {
  return currentValue < 10;
}));

/*El método some devolverá true.

-------------------Excercise 23-----------------
Utiliza el método some dentro de la función checkPositive para comprobar si algún elemento en arr es positivo. La función debe devolver un valor booleano.
----------------Requeriments
Tu código debe usar el método some.
checkPositive([1, 2, 3, -4, 5]) debe devolver true.
checkPositive([1, 2, 3, 4, 5]) debe devolver true.
checkPositive([-1, -2, -3, -4, -5]) debe devolver false.
*/

function checkPositive2(arr) {
  // Cambia solo el código debajo de esta línea
    return arr.some(function(value){ return value > 0})
  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);

//some a diferencia de every, muestra que si hay un elemento que cumple la condición devuelve true

/*--------------------Introducción a la currificación y a la aplicación de funciones parciales-------------------
La aridad de una función es el número de argumentos que requiere. Currificar una función significa convertir una función de N aridades a N funciones de 1 aridad.

En otras palabras, reestructura una función, por lo que toma un argumento, luego devolverá otra función que toma el siguiente argumento, y así sucesivamente.

A continuación un ejemplo:
*/
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried2 = x => y => x + y

console.log(curried2(1)(2)); 

/*curried(1)(2) devolverá 3.

Esto es útil en tu programa si no puedes proporcionar todos los argumentos a una función al mismo tiempo. Puedes guardar la llamada a cada función dentro de una variable, 
la cual mantendrá la referencia de la función devuelta que toma el siguiente argumento cuando este disponible. Aquí hay un ejemplo utilizando la función currificada del ejemplo anterior:
*/
const funcForY = curried(1);
console.log(funcForY(2)); // 3
/*Similarmente, la aplicación de una función parcial puede describirse como aplicar algunos argumentos a la función al mismo tiempo y devolviendo una función que se aplica a más argumentos. A continuación un ejemplo:
*/
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);

console.log(partialFn(10));// 13


/*------------------------------------Excercise 24--------------------------
Completa el cuerpo de la función add para que use currificación para añadir parámetros x, y, y z.
------------Requirements
add(10)(20)(30) debe devolver 60.
add(1)(2)(3) debe devolver 6.
add(11)(22)(33) debe devolver 66.
Tu código deber incluir una declaración final que devuelva x + y + z.
*/

function add(x) {
  // Cambia solo el código debajo de esta línea
  return function(y){
    return function(z){
      return x + y + z;
    }
  }

  // Cambia solo el código encima de esta línea
}

console.log(add(10)(20)(30));

/*Another solution with arrow function
const add = x => y => z => x + y + z
*/

const add2 = x => y => z => x + y + z;
console.log(add2(10)(20)(30));
