/*****************************************Usa sintaxis de clases para definir una función constructora-----------------*/
/*ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave class.

En ES5, se puede crear un objeto definiendo una función constructor y usando la palabra clave new para instanciar el objeto.

En ES6, una declaración class tiene un método constructor que se invoca con la palabra clave new. Si el método constructor no se define explícitamente, entonces se define implícitamente sin argumentos.*/

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
/*Debe tenerse en cuenta que la palabra clave class declara una nueva función, a la cual se añade un constructor. Este constructor se invoca cuando new es llamado para crear un nuevo objeto.

Nota: UpperCamelCase debe ser utilizado por convención para nombres de clase en ES6, como SpaceShuttle usado anteriormente.

El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Aprenderás más sobre ello en la sección de Programación Orientada a Objetos de la Certificación en Algoritmos de JavaScript y Estructuras de Datos.*/

/*----------------------------ejercicio------------------------*/

/*La clase Vegetable te permite crear un objeto vegetal con una propiedad name que es pasada al constructor.*/

/*-------------------------solución------------------------- */
// Cambia solo el código debajo de esta línea
class Vegetable{
    constructor(name){
    this.name = name;
    }
}

  // Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'


