// Constantes no puede cambiar de valor
// Debe ser inicializada inmediatamente
const IMPUESTO1 = 15.35;
console.log( IMPUESTO1 );

// No se pueden asignar otros valores a las constantes
IMPUESTO1 = 19.8;
console.log( IMPUESTO1 );

// Se puede declarar una constante del mismo nombre solo si son en marcos de trabajos diferentes
const IMPUESTO2 = 15.35;
if ( true ){
  const IMPUESTO2 = 19.8;
  console.log( IMPUESTO2 );
} 
console.log( IMPUESTO2 );

// Se pueden definir objetos como constantes
const persona = {
  nombre: "Jhonatan", 
  apellido: "Guerrero", 
  edad: 24
}
console.log(persona);

// Pero aun cuando es una constante, si puede cambiarse los atributos
persona.edad = 28;
console.log(persona);

// No se puede es reinicializar TODO el objeto
persona = {
  nombre: "Anny", 
  apellido: "Sánchez", 
  edad: 21
}
console.log(persona);

