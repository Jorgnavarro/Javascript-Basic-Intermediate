//Reemplaza bucles usando recursión
// La recursión es el concepto que una función puede expresarse en términos de sí misma. Para ayudar a comprender esto, comienza pensando en la siguiente tarea: multiplica los primeros n elementos de un arreglo para crear el producto de esos elementos. Usando un bucle for, puedes hacer esto:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
// Sin embargo, nota que multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Esto significa que puedes reescribir multiply en términos de sí misma y que nunca necesites hacer uso de un bucle.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
// La versión recursiva de multiply se desglosa así. En el caso base, donde n <= 0, devuelve 1. Para valores más grandes de n, se llama a sí misma, pero con n - 1. Esa llamada de función se evalúa de la misma manera, llamando a multiply otra vez hasta que n <= 0. En este punto, todas las funciones pueden devolver y la multiply original devuelve la respuesta.

// Nota: Las funciones recursivas deben tener un caso base cuando devuelven sin tener que llamar a la función de nuevo (en este ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar de ejecutarse.

// Escribe una función recursiva, sum(arr, n), que devuelve la suma de los primeros elementos n de un arreglo arr.

/* ejercicio con solución */

function sum(arr, n) {
    // Cambia solo el código debajo de esta línea
    if(n == 0){
        return 0;
    }else{
      return sum(arr, n - 1) + arr[n - 1]
    }
  
    // Cambia solo el código encima de esta línea
  }


/*Usando funciones recursivas, en este caso devolveremos un array en forma ascendente y luego en forma 
descendete de diferentes formas */

/*Utiliza recursión para crear una cuenta regresiva
En un reto anterior, aprendiste a utilizar la recursividad para sustituir un bucle for. Ahora, echemos un vistazo a una función más compleja que devuelve un arreglo de enteros consecutivos empezando con 1 hasta el número pasado a la función.

Como se menciona en el desafío anterior, habrá un caso base. El caso base le dice a la función recursiva cuando no necesita llamarse a sí misma. Es un caso simple donde el valor de retorno ya se conoce. También habrá una llamada recursiva la cual ejecuta la función original con argumentos diferentes. Si la función se escribe correctamente, eventualmente el caso base será alcanzado.

Por ejemplo, digamos que quieres escribir una función recursiva que devuelva un arreglo conteniendo los números 1 hasta n. Esta función necesitará aceptar un argumento, n que representa el número final. Entonces necesitará llamarse a sí misma con valores progresivamente más pequeños de n hasta que alcance 1. Podrías escribir la función de la siguiente manera:*/

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
/*El valor [1, 2, 3, 4, 5] se mostrará en la consola.

Al principio, esto parece contraintuitivo ya que el valor de n disminuye, pero los valores en el arreglo final se están incrementando. Esto sucede porque la inserción ocurre al último, después de la llamada recursiva. En el punto donde n es empujado en el arreglo, countup(n - 1) ya ha sido evaluada y devuelto [1, 2, ..., n - 1].

Hemos definido una función llamada countdown con un parámetro (n). La función debe usar recursión para devolver un arreglo conteniendo los n enteros hasta 1 basado en el parámetro n. Si la función es llamada con un número menor a 1, la función debe devolver un arreglo vacío. Por ejemplo, llamar esta función con n = 5 debe devolver el arreglo [5, 4, 3, 2, 1]. Tu función debe usar recursión llamándose a sí misma y no debe usar bucles de ningún tipo.*/


/*----------------------Varias soluciones------------------*/
/*aplicando la propiedad unshift para invertir el orden de insercción en el array */
function countdown(n){

  if(n<1){
    return [];
  }else{
    const counterArray = countdown(n-1); 
    counterArray.unshift(n);
    return counterArray;
  }
  }
  console.log(countdown(10))

  /* usando la propiedad splice() */

  function countdown2(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown2(n - 1);
      arr.splice(0, 0, n);
      return arr;
    }
  }
  /* usando un if ternario con la propiedad concat() */
function countdown3(n){
    return n < 1 ? [] : [n].concat(countdown3(n - 1));
}

/*usando if ternario y la desesctruturación para ordenar el array como queremos*/

function countdown4(n){
  return n < 1 ? [] : [n, ...countdown4(n - 1)];
}
//con los puntos suspensivos de arriba indicamos que el primer elemento es nuestra n y que los consecuentes deben ser, las iteraciones.

console.log(countdown4(5));

function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return [];
  }else{
    const arr = rangeOfNumbers(startNum,  endNum - 1);
    arr.push(endNum)
    return arr;
  }
};

console.log(rangeOfNumbers(10, 20));

/*La anterior solución se aplicó usando un número inicial startNum e iterando con el número final end */