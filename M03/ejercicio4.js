/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
    return Math.pow(num, 2);
 }
 
 function elevarAlCubo(num) {
    return Math.pow(num, 3);
 }
 
 function elevar(num, exponent) {
    return Math.pow(num, exponent);
 }
 
 function redondearNumero(num) {
    return Math.round(num);
 }
 
 function redondearHaciaArriba(num) {
    return Math.ceil(num);
 }
 
 function numeroRandom() {
    return Math.random();
 }
 
 /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
 module.exports = {
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
 };

 console.log(elevarAlCuadrado(5));
 console.log(elevarAlCubo(5));
 console.log(elevar(5,5));
 console.log(redondearNumero(15,874));
 console.log(redondearHaciaArriba(16,345));
 console.log(numeroRandom());
 