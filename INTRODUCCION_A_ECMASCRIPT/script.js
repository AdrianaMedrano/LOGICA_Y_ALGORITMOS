/*Instrucciones:

1. Declara una función flecha llamada calculateArea que reciba dos parámetros (width y height) y retorne el área de un rectángulo.

2. Usa let para declarar una variable base que represente el ancho (width) y const para una constante multiplier que tendrá el valor 2.

3. Llama a la función calculateArea y muestra el resultado en la consola.
*/

//Implementación con ES6:
const calculateArea = (width, height) => {
  let base = width;       // Declara base con let
  const multiplier = 2;   // Declara multiplier como constante
  return base * height * multiplier; 
};

console.log(calculateArea(1, 10));  // Cambia los valores para probar diferentes áreas