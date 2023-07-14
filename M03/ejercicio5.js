/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   if (num > 0) 
      return "es Positivo"
   else if (num < 0)
     return "es Negativo"
   else 
     return "El número es 0"
 }
 
 function agregarSimboloExclamacion(str) {
   if (typeof str === "string" && str.length > 0)
      return str + "!"
   else
      return "El valor no es un string o esta vacío"
 }
 
 function combinarNombres(nombre, apellido) {
   if (typeof nombre,apellido === "string" && nombre.length,apellido.length > 0)
      return nombre + " " + apellido
   else
      return "El valor no es un string o esta vacío"
 }
 
 function obtenerSaludo(nombre) {
   if (typeof nombre === "string" && nombre.length > 0)
      return "Hola " + nombre
   else
      return "El valor no es un string o esta vacío"
 }

 function obtenerAreaRectangulo(alto, ancho) {
   if (alto > 0 && ancho > 0)
      return alto * ancho 
}
 
 function retornarPerimetro(lado) {
   if (lado > 0)
      return lado * 4
   else
     return "El valor no es un número positivo o esta vacío"
 }
 
 function areaDelTriangulo(base, altura) {
   if(base > 0 && altura > 0)
      return (base * altura) / 2
   else
      return "El valor no es un número positivo o esta vacío"
 }
 
 function deEuroAdolar(euro) {
   if (euro > 0)
      return euro * 1.2
   else
      return "El valor no es un número positivo o esta vacío"
 }
 
 function esVocal(letra) {
   letra = letra.toLowerCase()
   if (letra === 'a' || letra=== 'e' || letra=== 'i' || letra=== 'o' || letra==='u')
      return "Es vocal"
   else
      return "No es vocal"
 }
 
 /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
 module.exports = {
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
    esVocal,
 };

 console.log(esPositivo(0))
 console.log(agregarSimboloExclamacion(12345))
 console.log(combinarNombres("Martin", "García"))
 console.log(obtenerSaludo("Josefa"))
 console.log(obtenerAreaRectangulo(12, 33))
 console.log(retornarPerimetro(5))
 console.log(areaDelTriangulo(13,17))
 console.log(deEuroAdolar(158))
 console.log(esVocal("j"))
 
