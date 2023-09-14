/*Prevenir la mutación del objeto
Como se vio en el desafío anterior, la declaración const por sí sola no protege la información de la mutación. Para asegurar que tu información no cambie, JavaScript provee una función Object.freeze para prevenir la mutación de datos.

Cualquier intento de cambiar el objeto será rechazado, lanzando un error si el script se ejecuta en modo estricto (strict mode).*/

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
/*Las asignaciones obj.review y obj.newProp provocarán errores, porque nuestro editor se ejecuta en modo estricto por defecto, y la consola mostrará el valor { name: "FreeCodeCamp", review: "Awesome" }.*/

/*------------------------------------------------------ejercicio--------------------------------------------- */
/*En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, añadir o borrar propiedades.*/

/*---------------------------------------------------Solución----------------------------------------------*/
//en la línea 27, se aplica la propiedad para congelar el obj MATH_CONSTANTS, así no puede ser modificada por el try/catch de las líneas siguentes.

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Cambia solo el código debajo de esta línea
    Object.freeze(MATH_CONSTANTS)
    // Cambia solo el código encima de esta línea
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();