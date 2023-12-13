// Preguntas prácticas

//Modulo 1

/* 1. Escribir un programa con JavaScript que resuelva el siguiente problema: Dada una lista 
(o array) de números enteros, encontrar el número más grande de la lista y mostrarlo 
en consola. No se debe usar la función Math.max(), ni .forEach(). */
const numeros = [10, 5, 8, 20, 15, 3];
encontrarNumeroMayor(numeros);
// Función para encontrar el número más grande en una lista
function encontrarNumeroMayor(lista) {
   
    if (lista.length === 0) {
      console.log("La lista está vacía.");
      return;
    }
  
    // Variable para almacenar el número más grande
    let numeroMayor = lista[0];
  
    // Recorrer la lista para encontrar el número más grande
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > numeroMayor) {
        numeroMayor = lista[i];
      }
    }

    console.log("El número más grande es:", numeroMayor);
  }
  
