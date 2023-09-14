/*--------------------------Crea cadenas usando plantillas literales-------------------*/

/*Una nueva característica de ES6 es la plantilla literal. Este es un tipo especial de cadena que facilita la creación de cadenas complejas.

Las plantillas literales te permiten crear cadenas multilínea y usar características de interpolación, para crearlas.

Fíjese en el código debajo:*/

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
/*La consola mostrará las cadenas Hello, my name is Zodiac Hasbro! y I am 56 years old..

Muchas cosas han ocurrido allí. En primer lugar, el ejemplo utiliza backticks (`), no comillas (' o "), para envolver la cadena. En segundo lugar, observe que la cadena es multi-línea tanto en el código como cuando se imprime en pantalla. Esto guarda la inserción \n dentro de las cadenas. La sintaxis ${variable} utilizada anteriormente es un marcador de posición. Básicamente, ya no tendrás que utilizar concatenación con el operador +. Para añadir variables a las cadenas, basta con colocar la variable en una plantilla de cadena y envolverla con ${ y }. Del mismo modo, puedes incluir otras expresiones en tu literal de cadena, por ejemplo ${a + b}. Esta nueva forma de crear cadenas te da mayor flexibilidad para crear cadenas robustas. (se sacan backticks con alt + 96)*/

/*--------------------------------------------Ejercicio------------------------------------------*/

/*Usa la sintaxis de plantilla literal con comillas invertidas para crear un arreglo de cadenas de elemento lista (li). El texto de cada elemento de lista debe ser uno de los elementos del arreglo de la propiedad failure en el objeto result y tener un atributo class con el valor text-warning. La función makeList debe devolver el arreglo de cadenas de elemento lista.

Utiliza un método de iteración (cualquier tipo de bucle) para obtener el resultado deseado (mostrado a continuación).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

/*-------------------------------------------------Solución-------------------------------------------*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Cambia solo el código debajo de esta línea
    const failureItems = [];
    for(let i = 0; i<arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Cambia solo el código encima de esta línea
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(makeList(result.failure))

//en el ejercicio de arriba recorremos un array en una posición específica y pusheamos los items de esa posición en otro array que posteriormente sacamos por pantalla y que tiene sintaxis de HTML.