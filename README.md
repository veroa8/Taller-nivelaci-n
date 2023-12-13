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

MÓDULO SOBRE HTML, CSS Y RESPONSIVE DESIGN

1.  ¿Qué significa HTML y cuál es su función en el desarrollo web?

Código qué es usado para estructurar todos los contenidos de una página web. 

2.  ¿Cuál es la estructura básica de un documento HTML? Describir las etiquetas 
esenciales.

La organización elemental de una página web incluye las siguientes etiquetas:
<!DOCTYPE html>: Notifica al navegador que el documento sigue el estándar HTML5.
<html>: Marca el inicio de la página web.
<head>: Señala la cabecera y alberga detalles descriptivos del sitio, así como los metadatos del documento.
<body>: Engloba todos los elementos perceptibles en la página.
<footer></footer>: Empleadas para especificar la sección de conclusión o pie de página en un documento.


3.   ¿Qué es CSS y cuál es su propósito en el desarrollo web?

CSS (Cascading Style Sheets) es un lenguaje de estilo en cascada utilizado para diseñar y presentar visualmente un documento escrito en HTML.

¿Qué implica?
Estas pautas se relacionan con la manera en que se presenta una página web en la pantalla cuando el usuario utiliza un navegador o explorador gráfico.
Regulan aspectos como el color, el fondo, el tipo de fuente, la apariencia de los bordes, los márgenes, la alineación y el espaciado entre caracteres, entre otros aspectos visuales.


4.  ¿Qué son selectores CSS, cuáles son los principales tipos de selectores y porqué es importante entender la especificidad en el contexto de las hojas de estilo en cascada (CSS)? Describir al menos tres tipos de selectores CSS y cómo la especificidad afecta a la aplicación de estilos en un proyecto de desarrollo web Frontend. Proporcionar ejemplos de situaciones en las que se utiliza la especificidad de selectores para resolver conflictos de estilos.

Los selectores CSS son patrones utilizados para seleccionar y estilizar elementos HTML en una página web. Permiten aplicar reglas de estilo a diferentes partes del documento.

 Tipos Principales de Selectores:
Selector de Tipo (Element Selector): Selecciona todos los elementos de un tipo específico (e.g., p para párrafos).
Selector de Clase (Class Selector): Selecciona elementos que tienen un atributo de clase específico (e.g., .mi-clase).
Selector de ID (ID Selector): Selecciona un elemento con un atributo de ID específico (e.g., #mi-id).
Selector Universal (*): Selecciona todos los elementos en el documento.
Selector de Atributo ([atributo]): Selecciona elementos con un atributo específico.

 Importancia de la Especificidad en CSS:
La especificidad determina qué estilo se aplica cuando hay conflictos entre reglas CSS. Es crucial entenderla para asegurar que los estilos se apliquen de manera predecible y controlada.


 Ejemplos de Especificidad:


Ejemplo 1:
#mi-id {color: red;}
.mi-clase {color: blue;}
En este caso, el color del texto será rojo porque el selector de ID tiene una especificidad más alta que el selector de clase.


Ejemplo 2:
p {color: green;}
.mi-clase {color: blue;}
En este caso, el color del texto será azul para los elementos con la clase "mi-clase" porque el selector de clase tiene una especificidad más alta que el selector de tipo.


Ejemplo 3:
body p {color: orange;}
.mi-clase {color: blue;}
Aquí, el color del texto será naranja para los párrafos dentro del body, ya que la especificidad del selector combinado es más alta que el selector de clase.
Entender la especificidad ayuda a resolver conflictos y a aplicar estilos de manera coherente en el desarrollo web Frontend.


5.  Explicar las diferencias entre los estilos en línea (inline), estilos internos (embedded) y estilos externos (external) en CSS. Indicar cuál de los tres estilos es el recomendado usar y por qué.

Estilos en Línea (Inline):
Los estilos en línea se aplican directamente a un elemento HTML mediante el atributo "style". Por ejemplo: <p style="color: red;">Texto en rojo</p>.

Ventajas:
Específico para un elemento.
Se puede aplicar de manera rápida y específica.
Desventajas:
Dificulta la reutilización de estilos.
Puede resultar difícil de mantener en páginas grandes.

Estilos Internos (Embedded):
Los estilos internos se encuentran dentro de la etiqueta <style> en la sección <head> del documento HTML. Por ejemplo:
<head>
  <style>
    p { color: blue; }
  </style>
</head>

Ventajas:
Permite aplicar estilos a múltiples elementos.
Ofrece cierto nivel de organización y mantenimiento.
Desventajas:
Aún puede volverse difícil de gestionar en proyectos más grandes.


Estilos Externos (External):
Los estilos externos se definen en un archivo separado con extensión ".css" y se enlazan con el documento HTML. Por ejemplo:
<head>
  <link rel="stylesheet" type="text/css" href="estilos.css">
</head>

Ventajas:
Mejora la modularidad y reutilización del código.
Facilita el mantenimiento y la actualización de estilos en todo el sitio.
Desventajas:
Puede haber una ligera demora en la carga al tener que descargar un archivo adicional.

Mejor opción:
Estilos Externos (External): Es comúnmente recomendado utilizar estilos externos siempre que sea posible. Esto se debe a que ofrecen una separación clara entre la estructura HTML y los estilos CSS, facilitando la mantenibilidad y escalabilidad del código. 


6.  ¿Qué es flexbox y cómo se utiliza para el diseño de páginas web?

Flexbox es un modelo de diseño en CSS que proporciona un diseño más eficiente y predecible en el diseño de páginas web, especialmente en la alineación y distribución de elementos en un contenedor, incluso cuando el tamaño de los elementos es desconocido o dinámico. Flexbox trabaja en un solo eje (fila o columna) o en ambos ejes simultáneamente, permitiendo crear diseños más flexibles y adaptables.


7. Explicar cómo se emplean las propiedades flexbox y explicar la función de las principales propiedades en la creación de diseños flexibles.

Propiedades Flexbox y sus Funciones Principales:
display (display: flex):
Función: Declara un contenedor como un contenedor flex, estableciendo así un contexto flexbox.


flex-direction (flex-direction: row | row-reverse | column | column-reverse):
Función: Define la dirección principal del contenedor flex, estableciendo si los elementos se colocan en una fila (por defecto), en una columna, o en direcciones inversas.


justify-content (justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly):
Función: Controla la alineación de los elementos a lo largo del eje principal del contenedor.


align-items (align-items: flex-start | flex-end | center | baseline | stretch):
Función: Alinea los elementos a lo largo del eje secundario del contenedor.



align-self (align-self: auto | flex-start | flex-end | center | baseline | stretch):
Función: Permite controlar la alineación de un elemento específico dentro del contenedor, anulando la propiedad align-items.


flex (flex: none | [flex-grow] [flex-shrink] [flex-basis]):
Función: Combina las propiedades flex-grow, flex-shrink, y flex-basis en una sola propiedad.
order (order: <integer>):

Función: Establece el orden de presentación de un elemento flex dentro del contenedor.
Estas propiedades de Flexbox son esenciales para crear diseños flexibles y adaptables en el desarrollo web. Permiten organizar y alinear los elementos de manera eficiente, facilitando la creación de interfaces responsivas y mejorando la consistencia en la presentación de contenidos en diferentes dispositivos y tamaños de pantalla.


8.   ¿Qué es CSS Grid Layout y en qué se diferencia de flexbox?

CSS Grid Layout es un modelo de diseño en CSS que permite la creación de estructuras bidimensionales, organizando elementos en filas y columnas. A diferencia de Flexbox, que trabaja en un solo eje a la vez, Grid Layout opera en dos dimensiones simultáneamente, ofreciendo mayor control sobre la disposición en filas y columnas. Grid es ideal para diseñar interfaces más complejas, como páginas completas, con alineación y distribución precisa de elementos en una cuadrícula. Mientras que Flexbox es excelente para estructuras unidimensionales, como barras de navegación o listas. En muchos casos, ambos modelos se utilizan de manera complementaria para lograr diseños web más flexibles y versátiles.

9. Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas de igual tamaño */
  grid-gap: 10px; /* Espaciado entre las celdas */
}


.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <!-- Repetir para más elementos -->
</div>


10.  ¿Qué significa el diseño responsivo en el contexto del desarrollo web?

El diseño responsivo en desarrollo web implica crear sitios que se ajusten y optimicen automáticamente según el dispositivo del usuario, como teléfonos móviles, tabletas o computadoras. Utiliza técnicas como consultas de medios y estructuras flexibles para adaptar la presentación y el diseño según el tamaño de la pantalla. El objetivo es proporcionar una experiencia de usuario consistente y efectiva en diversos dispositivos, evitando la necesidad de versiones separadas. El diseño responsivo mejora la accesibilidad y la usabilidad, asegurando que el contenido sea legible y funcional en cualquier contexto, lo que es esencial para la audiencia variada de dispositivos en la actualidad.


11.  Enumerar al menos tres técnicas o estrategias utilizadas para lograr el diseño responsivo en una página web.


Utilizan reglas CSS para aplicar estilos específicos según las características del dispositivo, como el ancho de la pantalla.


Emplear unidades relativas como porcentajes, ems o vw (viewport width) en lugar de unidades absolutas, permitiendo que los elementos se escalen proporcionalmente al tamaño de la pantalla del usuario.


Utilizar modelos de diseño flexibles como Flexbox o CSS Grid para crear estructuras que se adapten automáticamente a diferentes tamaños de pantalla, permitiendo una distribución dinámica de elementos.


MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM


1. ¿Qué es el DOM (Modelo de Objeto de Documento) en el contexto de la programación web?

El DOM (Modelo de Objeto de Documento) en programación web es una interfaz que representa un documento HTML o XML como una estructura de árbol de objetos. Cada nodo en este árbol representa partes del documento, como elementos, atributos y texto. El DOM facilita la manipulación dinámica de la estructura y contenido de una página web mediante programación. Los desarrolladores pueden acceder y modificar elementos, atributos y contenido, lo que permite la creación de aplicaciones web interactivas sin necesidad de recargar la página. En resumen, el DOM es esencial para la interactividad y la manipulación dinámica en el desarrollo web.


2. ¿Cuál es la diferencia entre el DOM y el HTML en una página web?

HTML es el código estático que define la estructura inicial de la página, mientras que el DOM es una representación dinámica de esa estructura que permite la manipulación y actualización en tiempo real mediante programación.


3. ¿Porqué es importante entender y manipular el DOM en el desarrollo web Frontend?

Comprender y manipular el DOM es esencial para desarrolladores frontend porque les permite crear experiencias web interactivas, dinámicas y eficientes que responden a las acciones del usuario y se integran con diversas tecnologías y servicios.


4. ¿Qué son los eventos del DOM y cuál es su función en una página web?

Los eventos del DOM son acciones del usuario o cambios en la página web, como clics, teclas presionadas o cargas de página. Su función es permitir la detección y respuesta a estas interacciones mediante scripts, facilitando la creación de páginas web interactivas y dinámicas.


5. Proporcionar ejemplos de eventos prácticos y comunes, como “click”, “submit” y “load o DOMContentLoad”.


Click:
document.getElementById('miBoton').addEventListener('click', function() {
    // Código a ejecutar cuando se hace clic en el elemento con id "miBoton"
});


Submit:
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Código a ejecutar cuando se envía el formulario con id "miFormulario"
    event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada
});


Load 

// Evento Load (se dispara cuando se completa la carga de la página)
window.addEventListener('load', function() {
    // Código a ejecutar después de que la página se haya cargado completamente
});

DOMContentLoaded:
// Evento DOMContentLoaded (se dispara cuando se ha construido el DOM, antes de cargar recursos externos)
document.addEventListener('DOMContentLoaded', function() {
    // Código a ejecutar cuando el DOM está listo
});


6. ¿Por qué es importante manejar eventos en la interacción usuario-web y cómo se
añaden controladores de eventos a los elementos del DOM?

La gestión de eventos en la interacción usuario-web es esencial para crear experiencias interactivas y dinámicas. Permite a los desarrolladores responder a las acciones del usuario, como clics, teclas o envíos de formularios, mejorando la navegación y proporcionando retroalimentación instantánea. Esta capacidad de respuesta mejora la experiencia del usuario al hacer que la interfaz sea más intuitiva y agradable. Además, facilita la actualización dinámica de la página, evitando recargas completas y mejorando la eficiencia. La gestión de eventos también posibilita operaciones asincrónicas, como solicitudes al servidor, sin interrumpir la interacción del usuario.
Los controladores de eventos se añaden a los elementos del DOM mediante el método addEventListener en JavaScript.


7. Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript

getElementById:
Este método selecciona un elemento mediante su atributo "id". Dado que los "id" deben ser únicos en un documento, este método devuelve un único elemento.

getElementsByClassName:
Este método selecciona elementos por su atributo "class". Devuelve una colección de elementos, ya que varias instancias pueden tener la misma clase.
getElementsByTagName:
Este método selecciona elementos por su nombre de etiqueta (por ejemplo, "div", "p", "a"). También devuelve una colección de elementos.


8. ¿Cómo se crea un nuevo elemento HTML y se agrega al DOM utilizando JavaScript? 

Primero, utiliza document.createElement para crear el elemento:
var nuevoParrafo = document.createElement('p');

Luego configurar su contenido y atributos:
nuevoParrafo.textContent = 'Este es un nuevo párrafo';
nuevoParrafo.setAttribute('class', 'miClase');
Por último, agregar el nuevo elemento al DOM utilizando métodos como appendChild:
document.body.appendChild(nuevoParrafo);

También se puede agregar a un elemento existente por su identificador:
var contenedor = document.getElementById('miContenedor');
contenedor.appendChild(nuevoParrafo);


9. ¿Cuál es la importancia de la manipulación del DOM en la creación de aplicaciones web dinámicas e interactivas?

Proporciona a los desarrolladores la capacidad de modificar la estructura y el contenido de una página web en tiempo real mediante JavaScript. Esto permite respuestas interactivas a las acciones del usuario, como clics y desplazamientos, facilita la actualización dinámica del contenido sin recargar la página, y posibilita la validación de formularios en el lado del cliente. Además, la manipulación del DOM es crucial para implementar animaciones, transiciones y gestionar eventos, proporcionando una experiencia de usuario más rica y receptiva. En resumen, el DOM sirve como una interfaz para la interacción programática con elementos HTML, siendo fundamental para el desarrollo de aplicaciones web modernas y altamente funcionales.


10. Explicar brevemente los conceptos “event bubbling” y “event delegation” en el contexto de eventos del DOM.

el "event bubbling" describe cómo los eventos se propagan desde el elemento objetivo hacia arriba en la jerarquía de elementos, mientras que la "event delegation" implica asignar un único controlador a un ancestro común para manejar eventos en múltiples elementos de manera eficiente.


11.  ¿Por qué son relevantes los conceptos “event bubbling” y “event delegation” en la
gestión de eventos en páginas web con múltiples elementos interactivos?


Los conceptos de "event bubbling" y "event delegation" son cruciales en la gestión de eventos en páginas web con numerosos elementos interactivos. "Event bubbling" describe la propagación de eventos desde el elemento objetivo hacia arriba en la jerarquía de elementos, permitiendo una gestión eficiente y personalizada en diferentes niveles. "Event delegation" aprovecha este comportamiento al asignar un solo controlador a un ancestro común, simplificando el código y mejorando la eficiencia. Esto es esencial en páginas con muchos elementos, ya que reduce la complejidad, facilita la adaptación a cambios dinámicos en la interfaz y mejora el rendimiento general, ofreciendo un enfoque escalable y eficaz para la gestión de eventos en entornos web complejos.



MÓDULO SOBRE COMUNICACIÓN CON EL SERVIDOR (STORAGE, PROMESAS, ASINCRONÍAS Y PETICIONES HTTPS)

1. Definir brevemente el concepto de localStorage y sessionStorage

localStorage y sessionStorage son APIs de almacenamiento en el lado del cliente en JavaScript. Ambas permiten a las aplicaciones web almacenar datos en el navegador.

2. Describir las diferencias claves entre localStorage y sessionStorage.

localStorage: Almacena datos de manera persistente incluso después de cerrar y volver a abrir el navegador. Los datos persisten a través de sesiones y solo se eliminan manualmente o si el usuario borra los datos del navegador.


sessionStorage: Almacena datos de manera temporal durante la duración de una sesión del navegador. Los datos se borran automáticamente al cerrar la ventana o pestaña del navegador, lo que lo hace adecuado para información que solo es relevante durante una visita específica.


3. ¿Por qué son útiles para almacenar datos en el navegador y cuál es su límite de capacidad?

localStorage y sessionStorage son útiles para almacenar datos en el navegador, mejorando la eficiencia y la experiencia del usuario en aplicaciones web. Permiten retener información localmente, reduciendo la necesidad de consultas frecuentes al servidor y personalizando la experiencia del usuario. localStorage almacena datos de manera persistente entre sesiones, mientras que sessionStorage mantiene datos durante la duración de una sesión del navegador.

El límite de capacidad para ambos es de aproximadamente 5 MB por dominio, aunque puede variar según el navegador y la configuración del usuario. Aunque ofrecen ventajas en términos de rendimiento y personalización, es esencial tener en cuenta las limitaciones de seguridad y privacidad, y evitar almacenar datos sensibles en el lado del cliente. Además, los usuarios pueden eliminar estos datos en cualquier momento, lo que limita su idoneidad para información crítica.


4. ¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web?

Las promesas en JavaScript son un patrón de manejo asíncrono que permite gestionar operaciones que llevan tiempo, como solicitudes a servidores o lecturas de archivos, de manera más efectiva. Una promesa representa un valor eventualmente disponible o un error, y tiene tres estados: pendiente, cumplida o rechazada.
Se utilizan en el desarrollo web para gestionar operaciones asíncronas de manera más legible y mantenible. Al emplear promesas, se evita la anidación excesiva de funciones (callback hell), facilitando la comprensión del código asíncrono. Además, las promesas ofrecen un manejo centralizado de errores, mejorando la capacidad de depuración. Con la introducción de async/await en JavaScript, el uso de promesas se ha vuelto aún más elegante, proporcionando un código asíncrono más claro y fácil de seguir.


5. Explica el concepto de asincronía en programación y cómo las promesas ayudan a manejar operaciones asincrónicas.

La asincronía en programación implica la ejecución de tareas sin bloquear el hilo principal, permitiendo que otras operaciones continúen mientras se completan tareas que pueden llevar tiempo. Esto es crucial para mejorar la eficiencia y la capacidad de respuesta en aplicaciones web.

Las promesas en JavaScript son un patrón que facilita la gestión de operaciones asíncronas. Representan un valor futuro, ya sea una resolución exitosa o un rechazo. Las promesas ayudan a manejar la asincronía al permitir un flujo de control más claro con métodos como .then() para manejar casos exitosos y .catch() para gestionar errores. Además, las promesas son compatibles con async/await, simplificando aún más el código asíncrono al hacerlo parecer síncrono, mejorando la legibilidad y mantenibilidad del código.


6. Proporciona un ejemplo de cómo se utiliza una promesa para realizar una operación asincrónica, como una solicitud de red.

function hacerSolicitud() {
  return new Promise((resolve, reject) => {
    // Simulando una solicitud a una API con fetch
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        // Resuelve la promesa con los datos obtenidos
        resolve(data);
      })
      .catch(error => {
        // Rechaza la promesa con el error
        reject(error);
      });
  });
}


// Uso de la promesa
hacerSolicitud()
  .then(resultado => {
    console.log('Datos obtenidos:', resultado);
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });


7. ¿Qué es JSON Server y cómo se utiliza en el desarrollo web?

JSON Server es una herramienta que permite crear rápidamente una API RESTful basada en un archivo JSON. Esta herramienta es útil durante el desarrollo web para simular un servidor real y proporcionar datos de prueba sin la necesidad de configurar un servidor completo.

8. ¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend?

Simular una API REST falsa con JSON Server en el desarrollo frontend es invaluable para acelerar el proceso de desarrollo. Permite a los desarrolladores frontend trabajar de manera independiente, prototipar rápidamente interfaces de usuario y realizar pruebas sin depender de un backend completamente desarrollado. Facilita el aislamiento de responsabilidades entre frontend y backend, permitiendo que ambos equipos avancen simultáneamente. Además, proporciona un entorno de desarrollo local eficiente para probar y educar a los desarrolladores sobre la interacción con APIs REST antes de que el backend esté listo. Esta herramienta agiliza el flujo de trabajo, mejora la colaboración entre equipos y facilita la construcción de aplicaciones frontend robustas.


9. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y las palabras claves async/await?

Sintaxis:
.then().catch(): Utiliza una cadena de llamadas de métodos, donde cada .then() maneja la resolución exitosa y .catch() maneja los errores.
async/await: Utiliza palabras clave async para definir funciones asíncronas y await para esperar la resolución de promesas. Esto proporciona un estilo de código más sincrónico y legible.
Manejo de Errores:
.then().catch(): El manejo de errores se realiza con el método .catch() al final de la cadena de .then(). Cualquier error en cualquier punto de la cadena será capturado por el .catch() más cercano.
async/await: Los errores se manejan utilizando bloques try/catch. Esto permite un manejo de errores más similar al estilo de programación síncrona.
Encadenamiento de Promesas:
.then().catch(): El encadenamiento de operaciones se realiza llamando a .then() sucesivamente. Esto puede llevar a la creación de una cadena larga y anidada de .then().
async/await: El encadenamiento se realiza de manera más clara y directa, utilizando await dentro de funciones async, lo que mejora la legibilidad del código.
Retorno de Valor:
.then().catch(): Requiere el uso de múltiples métodos para manejar tanto la resolución como el rechazo de la promesa.
async/await: Permite un retorno directo de valores resueltos, simplificando la lógica y evitando el uso explícito de .then().

10. Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar solicitudes (GET, POST, PUT, PATCH y DELETE) a través de ella.


Instalación:
npm install -g json-server


Crea un archivo db.json:
// db.json
{
  "usuarios": [
    { "id": 1, "nombre": "Usuario1" },
    { "id": 2, "nombre": "Usuario2" }
  ]
}


Inicia JSON Server:
json-server --watch db.json


GET (Obtener todos los usuarios):
curl http://localhost:3000/usuarios
POST (Agregar un nuevo usuario):
curl -X POST -H "Content-Type: application/json" -d '{"nombre": "NuevoUsuario"}' http://localhost:3000/usuarios
PUT (Actualizar un usuario):
curl -X PUT -H "Content-Type: application/json" -d '{"nombre": "UsuarioModificado"}' http://localhost:3000/usuarios/1
PATCH (Actualizar parcialmente un usuario):
curl -X PATCH -H "Content-Type: application/json" -d '{"nombre": "NuevoNombre"}' http://localhost:3000/usuarios/1
DELETE (Eliminar un usuario):
curl -X DELETE http://localhost:3000/usuarios/1


11. Describe las diferencias entre Fetch y Axios como métodos para realizar solicitudes HTTP en JavaScript.

Fetch y Axios son métodos para realizar solicitudes HTTP en JavaScript, pero difieren en sintaxis y funcionalidades. Fetch es una función nativa del navegador que utiliza promesas, mientras que Axios es una biblioteca externa que proporciona una interfaz más intuitiva y consistente en todos los navegadores. Axios facilita el manejo de errores, permite cancelar solicitudes y ofrece una sintaxis más clara para enviar datos. Fetch, aunque ampliamente compatible, requiere más configuración para manejar errores y enviar datos en formatos específicos. En resumen, Fetch es liviano y nativo, mientras que Axios es una elección popular por su versatilidad y facilidad de uso en aplicaciones JavaScript modernas.

12. ¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas?

Las peticiones HTTP son fundamentales en aplicaciones web modernas porque permiten la comunicación eficiente entre el navegador y el servidor. Estas solicitudes posibilitan la transferencia de datos de forma asíncrona, mejorando la capacidad de respuesta y permitiendo la creación de experiencias de usuario dinámicas. Las aplicaciones modernas dependen de peticiones HTTP para cargar datos de manera dinámica, interactuar con APIs y microservicios, y enviar información al servidor sin recargar la página. Además, el uso de protocolos seguros como HTTPS garantiza la privacidad y la integridad de los datos transmitidos, contribuyendo a la seguridad de las aplicaciones. Considerar las peticiones HTTP es esencial para el desarrollo de aplicaciones escalables, eficientes y capaces de proporcionar una experiencia de usuario moderna e interactiva.

13. Proporciona ejemplos de cómo se utilizan Fetch y Axios para realizar solicitudes GET y POST.

Ejemplo con Fetch (GET):
// Solicitar datos mediante GET con Fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log('Datos obtenidos con Fetch (GET):', data))
  .catch(error => console.error('Error en la solicitud:', error));

Ejemplo con Fetch (POST):
// Enviar datos mediante POST con Fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Nuevo Post',
    body: 'Contenido del nuevo post',
    userId: 1,
  }),
})
  .then(response => response.json())
  .then(data => console.log('Datos obtenidos con Fetch (POST):', data))
  .catch(error => console.error('Error en la solicitud:', error));

Ejemplo con Axios (GET):
// Solicitar datos mediante GET con Axios
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log('Datos obtenidos con Axios (GET):', response.data))
  .catch(error => console.error('Error en la solicitud:', error));

Ejemplo con Axios (POST):
// Enviar datos mediante POST con Axios
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Nuevo Post',
  body: 'Contenido del nuevo post',
  userId: 1,
})
  .then(response => console.log('Datos obtenidos con Axios (POST):', response.data))
  .catch(error => console.error('Error en la solicitud:', error));


14. Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo web.

El manejo de errores al trabajar con promesas en el desarrollo web es esencial para construir aplicaciones robustas y fiables. Permite identificar, informar y abordar problemas de manera efectiva, contribuyendo a una experiencia del usuario mejorada. La gestión adecuada de errores facilita la depuración, asegura la seguridad al prevenir vulnerabilidades y promueve la consistencia en el código. Además, es crucial para el mantenimiento a largo plazo y la escalabilidad, ya que ayuda a mantener la estabilidad del sistema a medida que evoluciona la aplicación. Proporcionar mensajes de error claros y significativos no solo facilita la corrección de problemas durante el desarrollo, sino que también mejora la usabilidad y la satisfacción del usuario final. En resumen, el manejo de errores en promesas es un componente clave para construir aplicaciones web exitosas y confiables.


15. Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch.

En las promesas, los errores se manejan principalmente utilizando el método .catch(). Después de una cadena de .then(), se puede encadenar .catch() al final para capturar cualquier error que ocurra en la ejecución de las operaciones asíncronas. Esto proporciona una forma estructurada de gestionar los casos de rechazo de la promesa. Además, es posible encadenar múltiples .then() para manejar diferentes casos de éxito, y si en algún momento se produce un error, el control pasa directamente a la sección de .catch(). Este enfoque facilita la detección y manejo de errores, mejorando la robustez y la depuración en el desarrollo web. El uso de funciones separadas en lugar de funciones anónimas dentro de .then() y .catch() puede hacer el código más legible y modular.

16. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y la estructura try/catch?

Las diferencias clave entre los métodos de las promesas .then().catch() y la estructura try/catch radican en su aplicabilidad y manejo de errores. .then().catch() se utiliza específicamente para manejar errores en operaciones asíncronas basadas en promesas, donde cada .then() maneja el éxito y .catch() captura errores en la cadena de promesas. Por otro lado, try/catch es apropiado para manejar errores en bloques de código síncrono y es más general, ya que puede capturar errores en cualquier parte del bloque try. La elección entre ellos depende del contexto: las promesas son ideales para operaciones asíncronas, mientras que try/catch es más versátil y se utiliza en contextos síncronos.


17.  Proporciona un ejemplo de cómo se puede manejar un error en una promesa al realizar una solicitud de red.

const url = 'https://api.example.com/data';


fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud de red: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    // Manejar los datos exitosos
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    // Manejar el error de la solicitud de red
    console.error('Error en la solicitud de red:', error);
  });
