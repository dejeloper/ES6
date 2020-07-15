
// Imprime undefined porque aun no has sido asignado un valor
console.log(mensaje);
var mensaje = "Hola Mundo";

// Genera error porque ES6 obliga a que se defina antes de usar una variable
console.log(mensaje2);
let mensaje2 = "Hola Mundo";

// Genera error porque están en contextos diferentes (Aunque no entre al contexto)
if ( 1 === 3 ){
  let mensaje3 = "Hola Mundo";
}
console.log(mensaje3);

// Genera error porque están en contextos diferentes (Aunque no entre al contexto)
if ( 1 === 1 ){
  let mensaje4 = "Hola Mundo";
}
console.log(mensaje4);

// Si se define en el mismo contexto, se puede trabajar como una variable normal
let mensaje5 = "";
if ( 1 === 1 ){
  mensaje5 = "Hola Mundo";
}
console.log(mensaje4);

// No existe la doble declaración
let mensaje6 = "123";
let mensaje6 = "Hola";
console.log(mensaje6);

// Aun cuando se re-definan, son variables diferentes por el marco de trabajo
let mensaje7 = "Hola";
if ( true ){
  let mensaje7 = "Qué tal?";
}
console.log(mensaje7);

