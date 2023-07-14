/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
    return string;
 }
 
 function suma(x, y) {
    return x + y;
 }
 
 function resta(x, y) {
    return  x - y;
 }
 
 function divide(x, y) {
    return x / y;
 }
 
 function multiplica(x, y) {
    return x * y;
 }
 
 function obtenerResto(x, y) {
    return x % y;
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

 console.log(devolverString("Hello este es giubert tratando de aprender programacion"));
 console.log(suma(5,10))
 console.log(resta(10,5))
 console.log(divide(8,5))
 console.log(multiplica(3,9))
 console.log(obtenerResto(345,7))
