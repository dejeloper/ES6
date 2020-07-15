// Se crea un array de funciones que imprimen i, pero como se definió con var, entonces 
// Al final siempre será el mismo contexto
var funciones = [];

for (var i = 0; i < 10; i++) { 
  funciones.push( function() { console.log(i); }); 
}
// Si no se define nada más i siempre imprime 10. Si se da otro valor, imprimirá el nuevo valor
i = 100;

funciones.forEach( function(func) {  
  func();
});

// Si lo que se quiere es generar un ciclo dentro de funciones heredando el contenido de las funciones
// Solo basta crear el array con let para que cada vez que se itere la creación de la función,
// se defina el contenido por cada ciclo
let funciones2 = [];

for (let i = 0; i < 10; i++) { 
  funciones2.push( function() { console.log(i); }); 
}

funciones2.forEach( function(func) {  
  func();
});