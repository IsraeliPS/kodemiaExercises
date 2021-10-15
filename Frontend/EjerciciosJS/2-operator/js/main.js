// Ejercicio 1
function ejercicio1(){
    let num_uno=parseInt(prompt("Ingresa el primer número"))
    let num_dos=parseInt(prompt("Ingresa el segundo número"))
    let suma=num_uno + num_dos
    let resta =num_uno - num_dos
    let div=num_uno / num_dos
    let mult=num_uno * num_dos
    let modulo=num_uno % num_dos

    console.log("El resultado de la suma de " + num_uno + " y "+ num_dos + " es: " +suma)
    console.log("El resultado de la resta de " + num_uno + " y "+ num_dos + " es: " +resta)
    console.log("El resultado de la división de " + num_uno + " y "+ num_dos + " es: " +div)
    console.log("El resultado de la multiplicación de " + num_uno + " y "+ num_dos + " es: " +mult)
    console.log("El resultado del modulo de " + num_uno + " y "+ num_dos + " es: " +modulo)
}

//Ejercicio 2
function ejercicio2(){
    let num_uno=parseInt(prompt("Ingresa el primer número"))
    let num_dos=parseInt(prompt("Ingresa el segundo número"))
    if (num_uno>num_dos)
        console.log(num_uno + " es mayor que "+ num_dos)
    else if (num_uno<num_dos)
        console.log(num_dos + " es mayor que "+ num_uno)
    else
        console.log(num_dos + " y "+ num_uno + " son iguales")
}

//Ejercicio 3
function ejercicio3(){
    let letra_uno=prompt("Ingresa la primera letra")
    let letra_dos=prompt("Ingresa la segunda letra")

    console.log("La primera letra fue "+ letra_uno)
    console.log("La segunda letra fue "+ letra_dos)

    if (letra_uno < letra_dos)
        console.log(letra_uno + " aparece primero en el abecedario que "+ letra_dos)
    else 
        console.log(letra_dos + " aparece primero en el abecedario que "+ letra_uno)
}

//Ejercicio 4
function ejercicio4(){
    let num_uno=parseInt(prompt("Ingresa el primer número"))
    let num_dos=parseInt(prompt("Ingresa el segundo número"))

    let suma=num_uno + num_dos
    let div=num_uno / num_dos
    let mult=num_uno * num_dos

    if (num_uno>num_dos)
        console.log("Se dividio "+num_uno +" entre "+num_dos+" y el resultado es: "+ div)
    else if (num_uno<num_dos)
        console.log("Se sumo "+num_uno +" y "+num_dos+" y el resultado es: "+ suma)
    else
        console.log("Se multiplico "+num_uno +" y "+num_dos+" y el resultado es: "+ mult)
}

// Ejercicio 5
function ejercicio5(){
    let num_uno=parseInt(prompt("Ingresa un número"))

    console.log("El número es: "+num_uno)
    if ((num_uno>1) && (num_uno <100))
        if ((num_uno % 2)==0)
            console.log("El número dado es Par")
        else
            console.log("El número dado es Impar")
}

//Ejercicio 6
function ejercicio6(){
    let num_uno=parseInt(prompt("Ingresa el primer número"))
    let num_dos=parseInt(prompt("Ingresa el segundo número"))

    if (num_uno>num_dos){
        console.log(num_uno + " es el mayor")
        console.log(num_dos + " es el menor")
    }
    else if (num_uno<num_dos){
        console.log(num_dos + " es el mayor")
        console.log(num_uno + " es el menor")
    }
    else
        console.log(num_dos + " y "+ num_uno + " son iguales")
}

//Ejercicio 7
function ejercicio7(){
    let nombre=prompt("Ingresa tu nombre")
    let peso=parseInt(prompt("Ingresa tu peso en kg"))
    //Formula
    //Peso en la luna = peso en la Tierra/gravedad en la tierra x gravedad en la luna
    //Peso en la Luna = 70kg / 9.8 m/s² x 1.622 m/s² = 11 Kg
    //Peso en Marte = 70kg / 9.8 m/s² x 3.711 m/s² = 26 Kg
    //Peso en Jupiter = 70kg / 9.8 m/s² x 24.79 m/s² = 177 Kg
    let luna = Math.trunc((peso / 9.8)*1.622)
    let marte= Math.trunc((peso / 9.8)*3.711)
    let jupiter =Math.trunc((peso / 9.8)*24.79)
    console.log("Hola "+ nombre)
    console.log("Tu peso en la Tierra es: "+peso+ " kg")
    console.log("Tu peso en la Luna es de: "+ luna+ " kg")
    console.log("Tu peso en la Marte es de: "+ marte+ " kg")
    console.log("Tu peso en la Jupiter es de: "+ jupiter+ " kg")
}

// //Ejercicio 8
function ejercicio8(){
    let cal=parseInt(prompt("Ingresa la calificación del examen (0-100)"))
    console.log("La calificación es: "+cal)
    if (cal>=90 && cal<=100)
            console.log("La calificacion es: A")
    else if (cal>=80 && cal<90)
            console.log("La calificacion es: B")
    else if (cal>=70 && cal<80)
            console.log("La calificacion es: C")
    else if (cal>=60 && cal<70)
            console.log("La calificacion es: D")
    else if (cal>=50 && cal<60)
            console.log("La calificacion es: E")
    else if (cal<50)
            console.log("La calificacion es: F")
    else if (cal<1 || cal >100)
        console.log("No se ingreso una calificacion valida")
}
