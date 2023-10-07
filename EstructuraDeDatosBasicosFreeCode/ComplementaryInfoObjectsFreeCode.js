// los objetos contienen propiedades y métodos
//agregando métodos

const persona = {
    name: "Jorge",
    lastName: "Navarro",
    Phone: "3013373510",
    email: "jorgluisnavarro@gmail.com",
    age: 30,
    //agregando una función
    nombreCompleto: function(){
        return this.name + " " +this.lastName;
        //al estar al interior de un objeto podemos utilizar la notación this. para hacer referencia a sus mismos atributos o propiedades.
    }
}

console.log(persona.age); 

//Acá llamamos a la función que creamos de nombre completo en el objeto persona, se usa el punto y se tienen que implementar los paréntesis que hacen referencia a la función.

console.log(persona.nombreCompleto());

//otra sintaxis

let person = new Object ();

person.rol = "Admin";
person.especialitation = "Full Stack";
person.company = "Google";

//acceder a las propiedades de los objetos

console.log(person["rol"]);

//for in para recorrer propiedades del objeto
//primera forma recorriendo todas las propiedades
for(nombrePropiedad in person){
    console.log(nombrePropiedad); // de esta forma solo obtengo la propiedad
    console.log(person[nombrePropiedad]); //de esta forma obtengo sólo los valores de la propiedad
}


//Segunda forma, recorriendo propiedad específica.
isCorrectMember = function (object){
for( nombrePropiedad in object){
    if(object[nombrePropiedad] === "Admin"){
        return "The member is authorized"
    }else{
        return "The member dont have enough permission"
    }
}
}
console.log(isCorrectMember(person)); 

//agregar o eliminar propiedades
person.country = "Colombia";
person.countrie = "Kolumbien";
console.log(person);

//eliminar una propiedad

delete person.countrie;

console.log(person);


//formas de imprimir un objeto cuando estamos trabajando en un navegador web

//1era forma concatenando cada valor de cada propiedad

console.log(person.rol + ', ' + person.especialitation +', '+person.especialitation + ', ' + person.company);

//2da forma recorriendo con el for in, como lo hicimos en la línea 37

//utilizando la propiedad Object.values, esta propiedad nos solicita un arreglo vacío que devolverá con todos los valores del objeto.

let newArrObject = Object.values(person);

console.log(newArrObject);

let newArrObjectString = JSON.stringify(person);

console.log(newArrObjectString);

//método get and set

const newperson = {
    name: "Bo",
    lastName: "Cruz Snake",
    language: "es",
    get lang(){
        return this.language.toUpperCase();
    },
    set lang(lang){
        this.language = lang.toUpperCase();
    },
    get saludo(){
        return "Bienvenido " + this.name + " " + this.lastName;
    }
}

//Al implementar el método get en la función saludo, podemos invocarlo de la siguiente forma

console.log(newperson.saludo);

//aunque sea una función con el get agregado no necesitamos agregar los paréntesis los que nos ahorra código y se ve mucho mejor la sintaxis
console.log(newperson.lang);
//para usar el método set se escribe la sintanxis como en la línea 94, se pasa por parámetro el nombre de la función que tenga el get y luego se iguala a ese parámetro y se agrega la propiedad de mayúscula, que así es como se solicita en nuestro caso, para implementarlo, hacemos lo siguiente:

newperson.lang = "Deush"; // se pasa por parámetro el value en la función lang y luego se transforma en mayúscula.

console.log(newperson.lang);

//Método constructor, nos van a facilitar la creación de objetos de una forma más fácil, ahorrando líneas de código
//Un constructor es un recurso especial con el cual trabajamos los objetos en JS. Para usar la función constructor, usamos la palabra reservada new.
//función construtor de tipo persona
//si agregamos métodos acá aplicarán para todos los objetos
function PersonPrototype(name, lastName, rol, specialty, company){
    this.name = name;
    this.lastName = lastName;
    this.rol = rol;
    this.Specialty = specialty;
    this.company = company;
    this.fullName = function(){
        return this.name + " " + this.lastName;
    }
}
//se crea la instancia, se almacena en una variable, después del simbolo de asignación se indica que la instancia pertenece a constructor PersonPrototype y en los paréntesis se introducen los valores, los cuales deben corresponder con los parámetros introducidos en la función constructor.
let newWorker = new PersonPrototype("Jorge", "Navarro", "Front-End", "Full Stack", "VASPP");
console.log(newWorker);
let newWorker2 = new PersonPrototype("Luis", "Peñate", "Back-End","Back-End Developer", "Google");
console.log(newWorker2);
//hemos creado 2 instancias, newWorker y newWorker2, es decir dos objetos derivados de la función constructor PersonPrototype()

//cambiando valores de las propiedades de los objetos instanciados

newWorker2.lastName = "Bhome";
console.log(newWorker2); //confirmación del cambio
//creando método fullName en la línea 123, se crea la función dentro del constructor, concatenando el nombre y el apellido
console.log(newWorker.fullName());
console.log(newWorker2.fullName());

//otra sintaxis para modificar o agregar sea propiedades o valores en los objetos
newWorker2["name"] = "Anastasia";
console.log(newWorker2.fullName());

//usando Prototype; esto sirve para agregar propiedades a los objetos sin necesidad de usar el constructor.

PersonPrototype.prototype.income = 50000;//este es un valor por default pero se asigna a todos los objetos instanciados, para poder mostrar su salida por pantalla se debe hacer la configuración respectiva
//se modifica el valor default de la nueva propiedad income
newWorker.income = "800000"
console.log(newWorker.income);
console.log(newWorker2.income); 

//Otra forma de iterar en un objeto, escribimos el nombre del objeto[propiedad] seguido de los corchetes con la propiedad existente, el valor lo almacenamos en una variable como en el ejemplo de abajo, si existe la coicidencia con la propiedad, devuelve el valor, sino existe la propiedad retorna undefined.
function phoneticLookup(val) {
    let result = "";

    const lookup = {
        alpha : "Adams",
        bravo : "Boston",
        charlie : "Chicago",
        delta : "Denver",
        echo : "Easy",
        foxtrot : "Frank"
    }
    result = lookup[val];
    // Cambia solo el código encima de esta línea
    return result;
}

console.log(phoneticLookup("charlie")); 

//forma de buscar en los objetos con estructuras de datos más complejas

// Accede a objetos anidados
// Se puede acceder a las sub propiedades de objetos encadenando la notación de puntos o corchetes.
//Recordar que podemos usar combinaciones de corchetes y puntos cuando las propiedades tienen más de un nombre
// Aquí hay un objeto anidado:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
console.log(ourStorage.cabinet["top drawer"].folder2); 

// sería la cadena secrets y ourStorage.desk.drawer sería la cadena stapler.


//-----------------------------------objetos anidados FreecodeCamp------------------------------------

// Accede a arreglos anidados
// Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como así también arreglos anidados. De manera similar a como se accede a los objetos anidados, la notación de corchetes de arreglos puede ser encadenada para acceder a arreglos anidados.

// En el siguiente ejemplo, vemos cómo se accede a un arreglo anidado:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] 
//sería la cadena Fluffy, y ourPets[1].names[0] sería la cadena Spot.

