// Colección de discos
// Está creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección se organiza como un objeto que contiene múltiples álbumes que también son objetos. Cada álbum se representa en la colección con un id único como nombre de la propiedad. Dentro de cada objeto álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.

// La función updateRecords toma 4 argumentos representados por los siguientes parámetros de función:

// records - un objeto que contiene varios álbumes individuales
// id - un número que representa un álbum específico en el objeto records
// prop - una cadena que representa el nombre de la propiedad del álbum a actualizar
// value - una cadena que contiene la información utilizada para actualizar la propiedad del álbum
// Completa la función utilizando las reglas siguientes para modificar el objeto pasado a la función.

// Tu función debe devolver siempre el objeto records completo.
// Si value es una cadena vacía, elimina la propiedad prop dada del álbum.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, add the value to the end of the album's tracks array. You need to create this array first if the album does not have a tracks property.
// Nota: Para las pruebas se utiliza una copia del objeto recordCollection. No debes modificar directamente el objeto recordCollection.


//---------------------------------Solución----------------------------/

// Configuración
const recordCollection = {
    2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
    artist: 'Robert Palmer',
    tracks: []
    },
    5439: {
    albumTitle: 'ABBA Gold'
    }
  };
  console.log(recordCollection[2548])
  // Cambia solo el código debajo de esta línea
  function updateRecords(records, id, prop, value) {
    const album = records[id];
    if(value === ""){
        delete album[prop]
    }else if(prop !== "tracks"){
        album[prop] = value;
    }else{
        album["tracks"] = album["tracks"] || [];
        album["tracks"].push(value);
    }
    return records;
  }


  //agregando nuevos tracks al array del objeto
  console.log(recordCollection[2548]["tracks"].push("Prueba", "Otro album"));
  console.log(recordCollection[2548]);
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log(updateRecords(recordCollection, 2468, "tracks", "hola"));
  console.log(recordCollection[5439])
  console.log(recordCollection[2468]);

/* otro ejercicio con objetos */

// Configuración
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];


function lookUpProfile(name, prop) {
    // Cambia solo el código debajo de esta línea
    for(let i = 0; i<contacts.length; i++){
        if(contacts[i].firstName == name){
            if(prop in contacts[i]){
            return contacts[i][prop]
            }else{
                return "No such property"
            }
        }
    }
    return "No such contact";
}



    // Cambia solo el código encima de esta línea
  
console.log(lookUpProfile("Kristian", "likes")); 
  
console.log(contacts[0]["firstName"]);

