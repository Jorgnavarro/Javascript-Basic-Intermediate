/*----------------------------------Desestructurando objetos-------------------------------*/

/*Usa sintaxis de desestructuración para extraer valores de objetos
La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los valores directamente desde un objeto.

Considera el siguiente código ES5:*/

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

/*name tendría una cadena con valor John Doe, y age tendría el número 34.

Aquí hay una sentencia de asignación equivalente usando la sintaxis de desestructuración de ES6:

const { name, age } = user;
De nuevo, name tendrá una cadena con valor John Doe, y age tendrá el número 34.

Aquí, las variables name y age serán creadas y se asignarán los valores respectivos a partir del objeto user. Puedes observar que esto es mucho más limpio.

Puedes extraer tantos o pocos valores del objeto como desees.*/

/*------------------------------ejercicio-------------------------------*/

/*Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables today y tomorrow con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.*/

/*-------------------------solución-----------------------------------*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  const {today, tomorrow} = HIGH_TEMPERATURES;
  // Cambia solo el código encima de esta línea
  let prub = today;
  console.log(prub); //acá pódemos sacar directamente el valor de today afuera del objeto y operar con él, sin necesidad de usar una notación con puntos.


  /*---------------------Usa sintaxis de desestructuración para asignar variables desde objetos-----------*/
/*La desestructuración te permite asignar un nuevo nombre de variable al extraer valores. Puedes hacer esto al poner el nuevo nombre después de dos puntos al asignar el valor.

Usando el mismo objeto del ejemplo anterior:*/

const user3 = { name: 'John Doe', age: 34 };
/*Así es como puedes dar nuevos nombres de variables en la asignación:*/

const { name: userName, age: userAge } = user3;
/*Puedes leerlo como "obtén el valor de user.name y asígnalo a una nueva variable llamada userName" y así sucesivamente. El valor de userName sería la cadena John Doe, y el valor de userAge sería el número 34.*/

/*-------------------------------------ejercicio---------------------------------------*/

/*Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables highToday y highTomorrow con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.*/

/*-----------------------------------------Solución--------------------------*/
const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES2;
  
  // Cambia solo el código encima de esta línea


  /*También se puede usar la sintaxis de desestructuración para asignar variables desde objetos anidados*/

/*Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores desde objetos anidados.

Usando un objeto similar a los ejemplos anteriores:*/

const user2 = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
/*Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:*/

const { johnDoe: { age2, email }} = user2;
/*Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:*/

const { johnDoe: { age: userAge2, email: userEmail }} = user2;

/*-----------------------------------ejercicio--------------------------*/

/*Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables lowToday y highToday con los valores de today.low y today.high del objeto LOCAL_FORECAST.*/

/*-------------------------------solución---------------------------*/

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const{today: {low: lowToday, high: highToday2}} = LOCAL_FORECAST;
// Only change code above this line
//la de abajo es la forma antigua de asignar las variables a las propiedades de un objeto.
/*const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;*/

                /*Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función*/
  /*En algunos casos, se puede desestructurar el objeto en un propio argumento de función.
  
  Considera el siguiente código:*/
  
  const profileUpdate1 = (profileData) => {
    const { name, age, nationality, location } = profileData;
  
  }
  /*Esto desestructura efectivamente el objeto enviado a la función. Esto también se puede hacer en el lugar:*/
  
  const profileUpdate = ({ name, age, nationality, location }) => {
  
  }

  /*Cuando profileData es pasado a la función anterior, los valores son desestructurados desde el parámetro de función para su uso dentro de la función.*/
  
  /*-----------------------ejercicio-----------------------*/
  
  /*Utiliza la sintaxis de desestructuración dentro del argumento de la función half para enviar solo max y min dentro de la función.*/




  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Cambia solo el código debajo de esta línea
  //se crea una funció que solo opera con dos elementos del objeto stats
  const half = ({max, min}) => (min+max)/2; 

 console.log(half(stats)); 

//en la línea 146 se pasa el objeto y se desestructura para operar con los únicos valores que se requiren y así hacer más eficiente nuestro código

// Cambia solo el código encima de esta línea




