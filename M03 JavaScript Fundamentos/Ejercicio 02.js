/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
return string
}
console.log (devolverString ("hola"))
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultado = x + y
return resultado
}
console.log (suma(4, 2))

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultado = x - y
return resultado
}
console.log (resta(4,3))

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
return x / y
}


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
return x * y 
}


function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:}
return x % y
  }
  

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
