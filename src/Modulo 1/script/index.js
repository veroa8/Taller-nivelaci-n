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
/* segundo punto */
document.getElementById('miLista').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('Elemento clicado:', e.target.textContent);
  }
});
/* Tercer punto */
document.getElementById('miFormulario').addEventListener('submit', function(e) {
  e.preventDefault(); // Evitar que el formulario se envíe automáticamente

  var campoEntradaValue = document.getElementById('campoEntrada').value;

  if (!campoEntradaValue.trim()) {
    alert('Error: El campo de entrada no puede estar vacío.');
  } else {
    console.log('Dato ingresado:', campoEntradaValue);
    alert('Formulario correctamente diligenciado');
  }
});

// PREGUNTAS PRÁCTICAS MODULO 4

// 1. En una sección de la página web construida en los módulos anteriores, permitir a un usuario almacenar y recuperar datos utilizando localStorage y sessionStorage. Demostrar cómo se puede guardar y recuperar datos de estas áreas de almacenamiento del navegador.

const saveContainer = document.getElementById('save-info');
const getContainer = document.getElementById('get-info');

saveContainer.addEventListener('click', (e) => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if(name == '' || age == '') alert("¡Diligencia los campos!");
    else {
        const data = {
            name: name,
            age: age
        }
    
        if(e.target.attributes.name.value == 'saveInLS') localStorage.setItem('data', JSON.stringify(data));
        else sessionStorage.setItem('data', JSON.stringify(data));
    }
})

getContainer.addEventListener('click', (e) => {
    const storagedData = document.getElementById('storagedData');

    if(e.target.attributes.name.value == 'getFromLS') storagedData.innerHTML = localStorage.getItem('data');
    else storagedData.innerHTML = sessionStorage.getItem('data');
})

// 2. Escribir una función que utilice una promesa para simular una operación asincrónica, como, por ejemplo, una solicitud de datos. Luego, mostrar los resultados de la promesa en una sección en la página web.

    function operacionAsincronica() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const exito = true; 
          if (exito) {
            resolve('Operación completada con éxito');
          } else {
            reject('Error en la operación');
          }
        }, 2000); 
      });
    }
function showResp(resultados) {
  const resultSection = document.getElementById("resultSection");
  resultSection.innerHTML = `<p>${resultados}</p>`;
}

    operacionAsincronica()
      .then(resultado => console.log('Resultado:', resultado))
      .catch(error => console.error('Error:', error));

      // 3.	Crear una API falsa con JSON Server y realizar una solicitud GET y POST con Fetch o Axios y mostrar los resultados en una sección de la página web.

    /*   document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('userForm');
        const userList = document.getElementById('users');
      
        form.addEventListener('submit', (event) => {
          event.preventDefault();
      
          const name = document.getElementById('nameInput').value;
      
          checkAndAddUser(name, userList);
        });
      
        displayUserList(userList);
      });
      
      function checkAndAddUser(name, userList) {
        axios.get('http://localhost:3000/gatos')
          .then((response) => {
            const users = response.data; 
      
            if (Array.isArray(users)) {
              const existingUser = users.find(user => user.name === name);
      
              if (existingUser) {
                console.log(`El usuario "${name}" ya existe.`);
      
                document.getElementById('errorMessage').textContent = `El usuario "${name}" ya existe.`;
              } else {
                const newUser = {
                  name: name 
                };
                const newUserId = generateUniqueId(users);
                newUser.id = newUserId;
      
                axios.post('http://localhost:3000/gatos', newUser)
                  .then(() => {
                    console.log('Nuevo usuario creado');
      
                    displayUserList(userList);
                  })
                  .catch((error) => {
                    console.error('Error en POST:', error);
                  });
              }
            } else {
              console.error('La respuesta no contiene una lista válida de usuarios.');
            }
          })
          .catch((error) => {
            console.error('Error en GET:', error);
          });
      }
      
      
      function displayUserList(userList) {
        axios.get('http://localhost:3000/gatos')
          .then((response) => {
            const users = response.data;
      
            userList.innerHTML = ''; 
      
            if (Array.isArray(users)) {
              users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
              });
            } else {
              console.error('La respuesta no contiene una lista válida de usuarios.');
            }
          })
          .catch((error) => {
            console.error('Error en GET:', error);
          });
      }
      
      function generateUniqueId(users) {
        if (users.length === 0) {
          return 1; 
        }
      
        let maxId = 0;
        users.forEach(user => {
          if (user.id > maxId) {
            maxId = user.id;
          }
        });
        return maxId + 1;
      } */
      document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('userForm');
        const userList = document.getElementById('users');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('nameInput').value;

            checkAndAddUser(name, userList);
        });

        displayUserList(userList);
    });

    function checkAndAddUser(name, userList) {
        axios.get('http://localhost:3000/gatos')
            .then((response) => {
                const users = response.data;

                if (Array.isArray(users)) {
                    const existingUser = users.find(user => user.name === name);

                    if (existingUser) {
                        console.log(`El gato "${name}" ya existe.`);

                        document.getElementById('errorMessage').textContent = `El gato "${name}" ya existe.`;
                    } else {
                        const newUser = {
                            name: name
                        };
                        const newUserId = generateUniqueId(users);
                        newUser.id = newUserId;

                        axios.post('http://localhost:3000/gatos', newUser)
                            .then(() => {
                                console.log('Nuevo gato creado');

                                displayUserList(userList);
                            })
                            .catch((error) => {
                                console.error('Error en POST:', error);
                            });
                    }
                } else {
                    console.error('La respuesta no contiene una lista válida de gatos.');
                }
            })
            .catch((error) => {
                console.error('Error en GET:', error);
            });
    }

    function displayUserList(userList) {
        axios.get('http://localhost:3000/gatos')
            .then((response) => {
                const users = response.data;

                userList.innerHTML = '';

                if (Array.isArray(users)) {
                    users.forEach(user => {
                        const listItem = document.createElement('li');
                        listItem.textContent = user.name;
                        userList.appendChild(listItem);
                    });
                } else {
                    console.error('La respuesta no contiene una lista válida de gatos.');
                }
            })
            .catch((error) => {
                console.error('Error en GET:', error);
            });
    }

    function generateUniqueId(users) {
        if (users.length === 0) {
            return 1;
        }

        let maxId = 0;
        users.forEach(user => {
            if (user.id > maxId) {
                maxId = user.id;
            }
        });
        return maxId + 1;
    }