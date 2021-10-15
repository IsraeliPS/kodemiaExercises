// ejercicios de clase 
// let numberOne=5, numberTwo=3
// function sumaDeDosNumeros (numberOne, numberTwo){
//     let suma=numberOne+numberTwo
//     return suma
// }

// function evaluarSiEsMayor(numberOne,numberTwo){
//     let resultado=numberOne>numberTwo ?` El número ${numberOne} es mayor que ${numberTwo}`:` El número ${numberTwo} es mayor que ${numberOne}`
//     return resultado
// }

// let returnSuma=sumaDeDosNumeros(numberOne,numberTwo)
// let esMayor=evaluarSiEsMayor(numberOne,numberTwo)

// console.log(`El resultado de la Suma de 5 y 3 es: ${returnSuma}`)
// console.log(esMayor)


// Ejercicio 1
function ejercicio1(){
    let nombre=prompt("Ingresa tu Nombre")
    let apellidos=prompt("Ingresa tus Apellidos")
    let nombreCompleto=nombre.toLowerCase()+" "+apellidos.toUpperCase()
    console.log(nombreCompleto)
}

//Ejercicio 2
function ejercicio2(){
    let nombreCompleto=prompt("Ingresa tu Nombre Completo")
    let letras=nombreCompleto.length
    console.log(`Tu nombre ${nombreCompleto} tiene ${letras} letras`)
}

// Ejercicio 3:
function ejercicio3(){
    let nombreCompleto=prompt("Ingresa tu Nombre Completo")
    var numeroVocales = nombreCompleto.match(/[aeiou]/gi).length;
    console.log(`Tu nombre ${nombreCompleto} tiene ${numeroVocales} vocales`)
}

//Ejercicio 4:
function ejercicio4(){
    let texto="Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
    console.log(`Texto Original: ${texto}`)

    let numeroPalabras=texto.split(" ")
    let contador=0, nuevoTexto=""
    nuevoTexto=texto.replace(/estudiante/gi,'Koder');

    for (let palabra of numeroPalabras){
        if (palabra=="estudiante"){
            contador++
        }
    }
    console.log(`El texto original contenia ${contador} veces la palabra estudiante`)
    console.log(`Texto Modificado: ${nuevoTexto}`)
}

//Ejercicio 5:
function ejercicio5(){
    let texto1=prompt("Ingresa una cadena de texto")
    let texto2=prompt("Ingresa otra cadena de texto")
    console.log(`Cadena 1: ${texto1}`)
    console.log(`Cadena 2: ${texto2}`)
    if (texto2.length <texto1.length)
        console.log(`La cadena más larga es: ${texto1}`)
    else if (texto2.length >texto1.length)
        console.log(`La cadena más larga es: ${texto2}`)
    else
        console.log(`Ambas cadenas tienen la misma longitud`)
}
//Ejercicio 6:
function ejercicio6(){
    let texto=prompt("Ingresa dos palabras")
    let numeroPalabras=texto.split(" ")
    console.log(`Cadena original: ${texto}`)
    console.log(`Cadena 1: ${numeroPalabras[0]}`)
    console.log(`Cadena 2: ${numeroPalabras[1]}`)
    if (numeroPalabras[0].length <numeroPalabras[1].length)
        console.log(`La cadena más larga es: ${numeroPalabras[1]}`)
    else if (numeroPalabras[0].length >numeroPalabras[1].length)
        console.log(`La cadena más larga es: ${numeroPalabras[0]}`)
    else
        console.log(`Ambas cadenas tienen la misma longitud`)
}