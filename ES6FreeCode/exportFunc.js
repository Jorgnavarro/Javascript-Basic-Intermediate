/*-------------------Utiliza la exportación para compartir un bloque de código----------------------*/

/*Imagina un archivo llamado math_functions.js que contiene varias funciones relacionadas con operaciones matemáticas. Uno de ellos se almacena en una variable, add, que toma dos números y devuelve su suma. Quieres utilizar esta función en varios archivos JavaScript diferentes. Para compartirlo con estos otros archivos, primero debes usar export (exportarlo).*/

// export const add = (x, y) => {
//     return x + y;
// }
//Lo anterior es una forma común de exportar una sola función, pero puedes lograr lo mismo como esto:

// const add = (x, y) => {
//     return x + y;
// }

// export { add }; // mejor forma de exportar

/*Cuando exportas una variable o función, puedes importarla en otro archivo y usarla sin tener que volver a escribir el código. Puedes exportar diferentes cosas al repartir el primer ejemplo para cada una de ellas si quieres exportar o al colocarlas en la declaración de exportación del segundo ejemplo. Por ejemplo:*/

//export { add, subtract };

/*-------------------------------------Ejercicio---------------------------*/
//Hay dos funciones relacionadas con cadenas en el editor. Exporta ambos utilizando el método que elijas.
/*-----------------------------------Solución-----------------------------*/
const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export{ uppercaseString, lowercaseString };

