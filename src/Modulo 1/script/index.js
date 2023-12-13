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
  
//2.Escribir una función en JavaScript que tome dos números como argumentos y devuelva su suma. Luego, escribir la misma función utilizando una función flecha (arrow function) y comparar ambas declaraciones. Llamar a ambas funciones con valores de ejemplo y mostrar los resultados en la consola del navegador

const num1 = 8;
const num2 = 13;
function sumarNumeros(num1, num2) {
  return num1 + num2;
}
const resultTradicionalFunction = sumarNumeros(num1, num2);
console.log("Resultado usando función tradicional:", resultTradicionalFunction);

// Función flecha

const sumarNumerosArrow = (num1, num2) => num1 + num2;
const resultArrowFunction = sumarNumerosArrow(num1, num2);
console.log("Resultado usando función flecha:", resultArrowFunction);

//3.Escribir una función en JavaScript que reciba un array de números como argumento y utilizar la función de array para calcular la suma de todos los números pares en el array.Luego, llamar a la función con un array de ejemplo y mostrar el resultado en la consola del navegador
const numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumaNumerosPares(array) {
  const numerosPares = array.filter(numero => numero % 2 === 0);
  const suma = numerosPares.reduce((acumulador, numero) => acumulador + numero, 0);

  return suma;
}

const resultado = sumaNumerosPares(numerosEjemplo);
console.log("La suma de los números pares es:", resultado);

// PREGUNTAS PRÁCTICAS MODULO 3

// 1. Escribir una función en JavaScript que tome un botón en el DOM y, al hacer click en él, cambie el color de fondo de un elemento específico en la página. Luego, agregar el botón y el elemento objetivo en el DOM y asociar la función al evento “click”.


const togglerBtn = document.getElementById("toggle-btn");
const span = document.querySelector(".span-color");
let flag = false;

const changeColor = (colorFlag) => {
    if(colorFlag) span.style.backgroundColor = "rgba(116, 139, 240, 0.911)"
    else span.style.backgroundColor = "rgba(124, 218, 213, 0.911)"
}

togglerBtn.addEventListener("click", () => {
    flag = !flag;
    changeColor(flag)
})

// 2. Crear una lista no ordenada de elementos (por ejemplo, elementos de lista) en el DOM. Implementar la delegación de eventos (event delegation) para que, al hacer clic en cualquier elemento de la lista, se muestre un mensaje en la consola que indique qué elemento de la lista se ha hecho clic.


const list = document.getElementById("list");

list.addEventListener("click", (e) => {
    console.log(e.target.attributes["name"].value);
})

// 3. Agregar un formulario a tu página web con un campo de entrada y un botón "Enviar". Implementar una función que sea llamada al enviar el formulario y que valide el campo de entrada (por ejemplo, si está vacío), muestre un mensaje de error accesible si es necesario y en caso de que el formulario esté correctamente diligenciado muestre en consola un objeto con el dato que ha ingresado el usuario en el campo de entrada y un alert con el siguiente mensaje: “Formulario correctamente diligenciado”.

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let text = document.getElementById("text").value;
    if(text == '') alert("¡Error, Diligencie el campo!");
    else {
        const object = {
            data: text
        };
        console.log("Este es el objeto con el dato:", object);
        alert("Formulario correctamente diligenciado");
    }
})