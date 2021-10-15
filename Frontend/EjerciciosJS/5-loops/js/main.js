/*
Cada ejercicio funciona solo o en conjunto
solo se debe comentar el resto de los ejercicios y solo
dejar sin comentar el que se quiere probar y descomentar
las lineas comentadas de ese ejercicio
Ejercicios
*/

/*
Ejercicio 1:
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false
*/
/*
    Ejercicio 2:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/
function ejercicio1(){
    let numero2=prompt("Ingresa un número entre 1 y 10")
    let result2
    if (numero2 >0 && numero2<11 )
        for (let x=1; x<11;x++){
            result2=numero2*x;
            console.log(numero2," x ",x, " = ",result2)
        }
    else
        console.log("El número ingresado fue erroneo")
}
/*
Ejercicio 3:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/
function ejercicio2(){
    let numero3=prompt("Ingresa un número entre 10 y 100")
    if (numero3>9 && numero3<101 ){
        if (numero3==10)
            console.log("Debe ingresar un número mayor a 10 para que tenga pares")
        else{
            console.log(`Número ingresado: ${numero3}`)
            for (let x=10; x<numero3;x++){
                if (x%2==0){
                    console.log(x)
                }
            }
        }
    }
    else
        console.log("El número ingresado fue erroneo")
}

/*
Ejercicio 4:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/
function ejercicio3(){
    let numero4=prompt("Ingresa una cantidad")
    let result=0
    if (numero4>0){
        for (let x=0;x<numero4.length;x++){
            result+=parseInt(numero4[x])
        }
        console.log(`Cantidad Ingresada: ${numero4}`)
        console.log(`La suma de los digitos en la cantidad es: ${result}`)
    }
    else
        console.log("La cantidad debe ser mayor que 0")
}

/*
Ejercicio 5:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/
function ejercicio4(){
    let result5 = "" //por defecto undefined
    for(let x = 0; x <10 ; x++){
        result5 = result5 + "*"
        console.log(result5)
    }
}

/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
*/
function ejercicio5(){
    let multiplo3=0, multiplo5=0, suma=0
    for (let x=1; x<101;x++){
        multiplo3=x%3
        multiplo5=x%5
        if(multiplo3==0 || multiplo5==0){
            suma+=x
        }
    }
    console.log(`El resultado de la suma de los multiplos de 3 y 5 es: ${suma}`)
}

/*
Ejercicio 7:
Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders
output: helloKoders
*/
function ejercicio6(){
    let cadenaEntrada=prompt("Ingrese una cadena de texto").toLowerCase()
    let textoFinal=convertirLetras(cadenaEntrada)

    console.log(`El texto inicial fue: ${cadenaEntrada}`)
    console.log(`El texto resultante es: ${textoFinal}`)

    function convertirLetras(entradaDatos){
        let nuevaCadena = "";

        for (let x=0;x<=entradaDatos.length-1;x++){
            if (entradaDatos[x]==" "){
                nuevaCadena+=entradaDatos[x+1].toUpperCase()
                x++
            }   
            else
                nuevaCadena+=entradaDatos[x]
        }
        return nuevaCadena
    }
    console.log(``)
}

/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/
function ejercicio7(){
    let numeros=""
    let result=0
    for (let x=0;x<10;x++){
        numeros+=prompt(`Ingresa el número ${x+1}`)
        if (x>4){
            result+=parseInt(numeros[x])
        }
    }
    console.log(`${numeros}`)
    console.log(`La suma de los últimos 5 numeros es: ${result}`)
}