Taller de Nivelación Curso Desarrollo Web Frontend

MÓDULO  SOBRE  LÓGICA,  LÓGICA  DE  PROGRAMACIÓN  Y  PROGRAMACIÓN  CON JAVASCRIPT 

 Preguntas teóricas 

1. ¿Qué es la lógica en el contexto de la programación? Y explicar por qué es importante en el desarrollo web Frontend.

La lógica es la base de todo el conocimiento en el contexto de la programación, es la habilidad de pensar y expresar las soluciones a un problema de manera clara y estructurada. La lógica de programación es fundamental porque permite organizar y desarrollar de manera coherente y secuencialmente las instrucciones para lograr un determinado objetivo, como por ejemplo tornar visible la implementación de un programa o software. 

En el desarrollo web Frontend, la lógica de programación es muy importante para garantizar que la interfaz de usuario funcione de manera eficiente y cumpla con los requisitos del usuario. Para todo lo anterior, se debe hacer un buen uso de las herramientas y lenguajes, a partir de la organización secuencial de las tareas e instrucciones.

2. Definir  el  concepto  de  “algoritmo”  y  proporcionar  un  ejemplo  sencillo  de  un  algoritmo relacionado con la lógica de programación. 

Un algoritmo es un conjunto de acciones o pasos finitos ordenados que se utilizan para resolver un problema, obtener un resultado o hacer una tarea específica. Es la representación concreta y detallada de la solución planteada desde la lógica de programación que se refleja en forma de pasos lógicos.

Recuerdo que uno de los ejemplos que trabajamos en clase sobre un algoritmo pueden ser los pasos para hacer el desayuno:
- Entrar en la cocina
- Prender la luz 
- Abrir la nevera
- Sacar las arepas de la nevera
- Abrir el paquete de arepas 
- Poner la parrilla en el fogón
- Sacar una arepa del empaque
- Ponerla la arepa en la parrilla 
- Prender el fogón
Entre otras acciones… 

3. ¿Qué son estructuras de control en la programación? ¿Cuáles son los tipos de estructuras de control y las estructuras más comunes de cada tipo? Describir al menos dos tipos de estructura de control, explicar por qué son importantes y proporcionar ejemplos de cada uno de cómo se utilizan en el desarrollo web Frontend.

Las estructuras de control en programación se refieren a la forma en que las instrucciones en el código están organizadas y ejecutadas, dependiendo de ciertas condiciones. Estas estructuras permiten tomar decisiones, repetir bloques de código y realizar otras acciones que afectan la secuencia de ejecución del programa. Hay dos tipos principales: las secuenciales, que se ejecutan en un orden específico, y las condicionales, que incluyen decisiones basadas en condiciones.

Dentro de las estructuras secuenciales, se encuentran las condicionales simples (como el "IF") que ejecutan acciones si una condición es verdadera. También, están las condicionales múltiples (como "IF", "ELSE IF", "ELSE") que, además de evaluar condiciones, ejecutan acciones específicas si las condiciones no se cumplen. Es decir, permiten definir múltiples escenarios y acciones a ejecutar en función de esas condiciones.

En el desarrollo Frontend, estas estructuras son esenciales para manejar la interacción del usuario. Por ejemplo, si un usuario presiona un botón, se ejecuta una acción específica; si la entrada del usuario no es válida, se pueden rechazar ciertas operaciones. En conclusión, las estructuras de control son herramientas fundamentales para gestionar de manera efectiva la interacción del usuario y lograr los objetivos deseados en las páginas web.

4. Describir cómo se declaraban variables y constantes en JavaScript antes de la introducción de ECMAScript 6 (ES6). Explicar cómo ES6 mejoró la declaración de variables y constantes, y mencionar los problemas que esta mejora resuelve en el desarrollo web Frontend.

Antes de la versión ECMAScript 6, las variables en JavaScript se declaraban con la palabra clave "var", seguida por el nombre de la variable. Estas variables tenían un alcance tanto global como local, limitándose a todo el ámbito (global) o dentro de una función específica (local). Sin embargo, con la actualización, se introdujo una nueva forma de declarar variables que permite un control más preciso sobre su alcance.
La introducción de "let" permite definir variables cuyos valores pueden cambiar más adelante, y estas variables solo existirán dentro de la porción específica de código que las contiene. Por otro lado, "const" se utiliza para declarar objetos y variables cuyos valores no cambiarán a lo largo del código.

Mejoras en el desarrollo Front-end:
- Con let, se introdujo un alcance de bloque más predecible, evitando problemas relacionados con el alcance de función de las variables var.
- La introducción de const ayuda a declarar valores constantes de manera más explícita, evitando accidentalmente la reasignación de estos valores.
- El uso de let y const mejora la legibilidad del código y hace que sea más fácil entenderlo y mantenerlo.

5. ¿Cómo se declaran las funciones en JavaScript y cuál es la diferencia entre una declaración de función, una expresión de función y una función de flecha (arrow function)? Proporcionar ejemplos de cada una.

Existen tres formas para declarar funciones en JavaScript:

Declaración de función: se utiliza la palabra function seguida por el nombre de la función y la lista de parámetros, luego se abren llaves y se pone el cuerpo de la función. Ejm:
function resta(a, b) {
    return a - b;
}

Expresión de Función: la expresión de función implica asignar una función anónima a una variable. La función se puede utilizar como cualquier otro valor y se necesita declararla antes de llamarla. Ejm:
const resta = function(a, b) {
    return a - b;
};

Función Flecha (Arrow Function): las funciones de flecha introducidas en ECMAScript 6 ofrecen una sintaxis más concisa y también tienen diferencias en cuanto al comportamiento. Por ejemplo, son ideales para funciones anónimas y tienen una sintaxis más corta cuando la función realiza una única operación.
const resta = (a, b) => {
    return a - b;
};

6.  ¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en el contexto de estas razones.

Las funciones son esenciales en el desarrollo web frontend para facilitar la reutilización de código, manejar eventos de interfaz de usuario y gestionar operaciones asíncronas. 

En el primero, permiten la reutilización eficiente de código al encapsular lógica específica, fomentando así la modularidad y evitando la duplicación de código. Por ejemplo, una función de validación puede ser utilizada en varios lugares para verificar formularios. Segundo, las funciones son fundamentales para manejar eventos de interfaz de usuario, como clics de botones. Al definir funciones de manejo de eventos, podemos determinar la acción que se debe realizar cuando ocurre un evento, como realizar una operación específica al hacer clic en un botón. Tercero, las funciones son esenciales en situaciones asincrónicas, como la carga de datos desde un servidor. El uso de funciones y callbacks permite gestionar eficazmente operaciones asíncronas asegurando un flujo controlado de ejecución.

En este contexto, las funciones flecha ofrecen diversas ventajas. Su sintaxis más concisa y la capacidad de heredar el valor del ámbito circundante las hacen útiles, especialmente al manejar eventos o trabajar con funciones asíncronas. Por ejemplo, al utilizar funciones flecha para manejar eventos o crear promesas, el código puede volverse más legible y mantener un estilo más claro.

7. ¿Cuál es la diferencia entre parámetro y argumento?

 Un parámetro es un nombre de variable que se utiliza en la declaración de una función para representar el valor que la función espera recibir, mientras que el argumento es el valor real que se proporciona a un parámetro cuando se llama a la función. La diferencia clave radica en que los parámetros son parte de la función (definición), mientras que los argumentos son los valores que se pasan a esos parámetros cuando la función se utiliza.

8. Definir el concepto de Callback y proporcionar un ejemplo práctico.


Callback se refiere a una función que se pasa como argumento a otra función (una función dentro de una función). La idea es que la función receptora ejecutará el callback en algún momento durante su ejecución. Este enfoque permite la flexibilidad y la personalización al permitir que una parte del código sea proporcionada por el usuario o por el programa principal.  

Se ejecuta después de que la función contenedora ha completado la operación principal. y a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación asíncrona. 

Ejm:
function ejemploTaller(datos, callback) {
    console.log("Realizando alguna operación en el taller con los datos: " + datos);
    callback(datos);
}
function miCallback(datos) {
    console.log("Callback ejecutado en el taller con los datos: " + datos);
}
ejemploTaller("herramientas y materiales", miCallback);
En este caso, "callback" se refiere al nombre de una función que se pasa como argumento a otra función. 

9. ¿Qué es el hoisting en JavaScript y cómo afecta a las variables y funciones? Proporcionar ejemplos de hoisting en declaraciones de variables y funciones.

El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones son movidas (o "elevadas") al principio de su ámbito de ejecución durante la fase de compilación.  Es fundamental destacar que únicamente se hace hoisting a la declaración, más no la inicialización.

Ejemplo de hoisting con variables:
console.log(número); Respuesta: undefined
var número= 5;
console.log(número); Respuesta: 5
Ejemplo de hoisting con funciones:
hFuncion(); Respuesta: "Hola, soy una función."
function hFuncion() {
    console.log("Hola, soy una función.");
}

10. Definir brevemente el concepto de objeto en JavaScript y cuál es la visión general sobre este concepto. Indicar, también, cómo se declaran estas estructuras de datos.

 El concepto de objeto en JavaScript se relaciona con objetos en el mundo real. Estos objetos son entidades que tienen características y propiedades. También permiten almacenar y organizar información y son contenedores flexibles que pueden contener datos primitivos, otros objetos e incluso funciones. Al declarar un objeto en JavaScript, se utiliza la sintaxis de llaves {} y dentro de ellas se establece una relación de "llave: valor". La llave representa una propiedad o característica del objeto, mientras que el valor es la definición o descripción de esa propiedad.

Recuerdo mucho un ejemplo que vimos en clase que era el de una taza. Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc.

11. ¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en 
un objeto?

Las propiedades son características o atributos asociados a un objeto. Las propiedades describen las características del objeto y son representadas por pares de clave y valor dentro del objeto. 

Tanto propiedades como métodos son parte integral de la estructura de un objeto en programación orientada a objetos, pero mientras que las propiedades son datos almacenados en el objeto, los métodos son funciones asociadas al objeto que realizan acciones específicas. 

12. Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.

Hay dos formas de acceder a las propiedades de un objeto: utilizando el punto (.) y utilizando los corchetes ([]). La notación de punto es más común, legible y preferible cuando la clave es un identificador válido y conocido de antemano. Por otro lado, la notación de corchetes es útil cuando la clave contiene espacios, caracteres especiales, o cuando se necesita acceder dinámicamente a una propiedad a través de una expresión o variable.

13. ¿Existe alguna forma de recorrer las propiedades de un objeto? En caso negativo, explicar por qué no es posible y en caso positivo proporcionar un ejemplo. Mencionar una situación en la cual sea muy útil recorrer las propiedades de un objeto.

En JavaScript es posible recorrer las propiedades de un objeto. Se pueden utilizar diversos métodos para lograr esto, y uno de los más comunes es el bucle for...in. Este bucle itera sobre todas las propiedades enumerables de un objeto y permite realizar acciones específicas para cada propiedad.

Una situación común en la que es útil recorrer las propiedades de un objeto es cuando se necesita realizar operaciones sobre todas las propiedades de un objeto dinámicamente. Por ejemplo, se podría querer generar una cadena de texto formateada basada en las propiedades del objeto, realizar ciertas validaciones o filtrar propiedades específicas. El bucle for...in proporciona una manera eficiente de abordar tales escenarios y trabajar de manera dinámica con las propiedades de un objeto.

Otro de los métodos que más hemos utilizado en el curso es el ForEach, donde también es necesario extraer un arreglo o lista con las propiedades del objeto usando algunos métodos de Javascript: "Object.keys()" o "Object.entries()". Ejm:
const persona = {
    nombre: "Vero",
    edad: 24,
    ciudad: "Medellín"
};

Object.keys(persona).forEach(propiedad => {
    console.log(propiedad + ": " + persona[propiedad]);
});

14. ¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden almacenar?

Los objetos son bastante útiles en la programación web debido a su capacidad para representar y organizar datos de manera estructurada.Pueden almacenar números, cadenas de texto, booleanos, otros objetos, propiedades y métodos.

15. ¿Qué es un array en JavaScript y por qué son esenciales?

Los arrays son un conjunto de datos ordenados por posiciones y asociados en una sola variable. Los datos pueden ser de cualquier tipo. Los arrays son esenciales en programación porque proporcionan una estructura eficiente y flexible para manejar conjuntos de datos. Permite realizar operaciones en cada elemento del array o realizar acciones específicas para cada elemento. También son fáciles de manipular, puesto que permiten agregar, eliminar y modificar elementos dinámicamente durante la ejecución del programa.

16. ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo.

Se puede acceder a un elemento dentro de un array utilizando el índice correspondiente al lugar que ocupa el elemento en el array. Los índices de un array comienzan desde cero, por lo que el primer elemento tiene un índice de 0, el segundo tiene un índice de 1, y así sucesivamente. Para acceder a un elemento específico simplemente ponemos [indice] luego del nombre del array array[indice].

 Ejm:
let hobbies = ["leer", "cantar", "nadar", "escalar"];
console.log(hobbies[0]); // Respuesta: "leer"
console.log(hobbies[1]); // Respuesta: "cantar"
console.log(hobbies[2]); // Respuesta: "nadar"
console.log(hobbies[3]); // Respuesta: "escalar"

17. Mencionar al menos tres funciones de arrays y describir su utilidad en la programación web.

. forEach (): permite recorrer un array. Es útil cuando se necesita realizar una operación en cada elemento sin crear un nuevo array con los resultados.
. map (): permite aplicar cambios a cada elemento de un array. 
. push (): permite añadir un elemento al final de un Array. Es útil para agregar nuevos elementos a un array existente.

18.  Proporcionar un ejemplo de cómo se utiliza una función de array para transformar y filtrar datos en un array.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cuadrados = numeros.map(function(numero) {
    return numero * numero;
});
let pares = cuadrados.filter(function(resultado) {
    return resultado % 2 === 0;
});
console.log(cuadrados); // Resultado: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(pares);     // Resultado: [4, 16, 36, 64, 100]
