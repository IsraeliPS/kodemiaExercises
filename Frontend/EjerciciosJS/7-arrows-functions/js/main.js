/*
const arrayKoders=[
    "Fanny Alvarez",
    "Elias Herrera",
    "Kraken Pérez Salinas",
    "Clau Rodriguez",
    "Jorge campos"
]

function suma(a,b){
    return a+b
}

let resultSuma=suma(3,5)

console.log(resultSuma)

let addition=function (){
    return 10+6
}

console.log(addition())

let resta =(a,b)=>{
    return a-b
}
console.log(resta(13,2))

const splitKoders=(array)=>{
    let splittedNames=[]
    for (let i=0;i<array.length;i++){
        splittedNames.push(array[i].split(" "))
    }
    return splittedNames
}

// console.log(someArray)

function printKoders(array){
    for(let i=0;i<array.length;i++){
        console.log(`${array[i]}`)
    }
}

let someArray=splitKoders(arrayKoders)
printKoders(someArray)

console.log("*****************************************")

printKoders(splitKoders(arrayKoders))

const findNumber=(array)=> Math.floor(Math.random()*array.length)


const printName=(arrayKoders,number)=>{
    console.log(arrayKoders[number])
}

for (let x=0;x<arrayKoders.length;x++){
    printName(arrayKoders,findNumber(arrayKoders))
}
console.log(arrayKoders)
*/
// Ejercicio1: Dado un string de palabras, devolver la palabra más larga.

function ejercicio1(){
    const larger=(words)=>{
        let splited=words.split(" ")
        let mostLarge=0, newWord=""
        for (let x=0;x<splited.length;x++)
        {
            if (splited[x].length>mostLarge){
                mostLarge=splited[x].length
                newWord=splited[x]
            }
        }
        return newWord
    }

    let chain=prompt("Ingresa una cadena de texto")
    let mostLarge=larger(chain)
    console.log(cadena)
    console.log("********************************")
    console.log(`La palabra más larga es: ${mostLarge}`)
}

// Ejercicio 2: Crear un programa que permita detectar si una frase finaliza con punto.
function ejercicio2(){
    const analyze=(chain)=>{
        let lastWord=cadena.length
        let dot=chain[lastWord-1]
        if (dot!=".")
            return "La frase no termina con un punto"
        else
            return "La frase si termina con un punto"
    }

    let cadena=prompt("Ingresa una cadena de texto")
    let dot=analyze(cadena)
    console.log(`La frase inicial es: ${cadena}`)
    console.log(dot)
}

//Ejercicio 3: Crear un programa que permita al usuario retornar el numero de coincideas de una palabra en una frase que el mismo usuario introduzca
function ejercicio3(){
    const repeat=(phrase,word)=>{
        let numberWords=phrase.split(" ")
        let cont=0 
        
        for (let one of numberWords){
            if (one==word){
                cont++
            }
        }
        return cont
    }

    let phrase=prompt("Ingresa una cadena de texto")
    let word=prompt("Ingresa una palabra a buscar en el texto anterior")

    let result= repeat(phrase,word)
    console.log(`Texto Original: ${phrase}`)
    console.log(`El texto original contenia ${result} veces la palabra ${word}`)
}

//Ejercicio 4: Crear un programa que permita al usuario extraer uns subcadena de una cadena dada.
function ejercicio4(){
    const getSubstring=(phraseComplete,oldSubstring,newSubstring)=>{
        let newPhrase=""
        for (let x=0;x<phraseComplete.length;x++){
            if (phraseComplete.substring(x,x+oldSubstring.length)==oldSubstring){
                newPhrase=phraseComplete.substring(0,x)+newSubstring+phraseComplete.substring(x+oldSubstring.length,phraseComplete.length)
            }
        }
        return newPhrase
    }

    let phraseComplete=prompt("Ingresa una cadena de texto")
    let oldSubstring=prompt("Ingresa una subcadena a reemplazar en el texto anterior")
    let newSubstring=prompt("Ingresa el texto que reemplazará la cadena anterior")

    console.log(`La cadena original: ${phraseComplete}`)
    console.log("La nueva cadena es: "+ getSubstring(phraseComplete,oldSubstring,newSubstring))

}

//Ejercicio 5: Crear un programa que permita comparar dos palabras dadas por el usuario y determine si son iguales o no.
function ejercicio5(){
    const compare=(text1,text2)=>{
        if (text2.length <text1.length)
            console.log(`La palabra ${text1} es más larga que ${text2}`)
        else if (text2.length >text1.length)
        console.log(`La palabra ${text2} es más larga que ${text1}`)
        else
            console.log(`Ambas palabras son iguales`)
    }
    let text1=prompt("Ingresa una palabra")
    let text2=prompt("Ingresa otra palabra")
    compare(text1,text2)
    
}

//Ejercicio 6: Crear un programa que permita a una cadena de texto muestra el caracter '-' ebtre cada caracter de la cadena.
function ejercicio6(){
    const replace=(phrase)=>{
        let newString=""
        for(let x=0;x<phrase.length;x++){
            if(phrase[x]==" ")
                newString+=phrase[x]
            else 
                newString+=phrase[x]+"-"
        }
        return newString
    }

    let phrase=prompt("Ingresa una cadena de texto")
        
    let result= replace(phrase)
    console.log(`Texto Original: ${phrase}`)
    console.log(`La nueva cadena: ${result}`)
}

//ejercicio 7: Sabiendo que una cadena de texto contiene parentesis. Crear un programa qye me devuelva la cadena que se encuetra entre los parentesis.
function ejercicio7(){
    const replace=(phrase)=>{
        let newWord=""

        newWord=phrase.replace(/[()]/g,"")
        return newWord
    }
    
    let phrase=prompt("Ingresa una cadena de texto")
    let result= replace(phrase)
    console.log(`Texto Original: ${phrase}`)
    console.log(`La nueva cadena: ${result}`)
}


//Ejercicio 8: Realizar un programa que muestre una piramide del 1 al 10 de las siguiente formas:

// Forma 1:

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Forma 2:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1
function ejercicio8(){
    let down=()=>{
        for (let x=1;x<10;x++){
            let cont=""
            for (let y=1;y<=x;y++){
                cont+=x
            }
            console.log(cont)
        }
    }
    let up=()=>{
        for (let x=9;x>0;x--){
            let cont=""
            for (let y=1;y<=x;y++){
                cont+=x
            }
            console.log(cont)
        }
    }
    down()
    console.log("**********")
    up()
}

//Ejercicio 9: Solicitar al usuario un nombre por medio del promt e ingresarlo a una coleccion , validando que no se repita ningun nombre.
function ejercicio9(){
    const validQuantity=(quantityKoders, message)=>{
        while(quantityKoders <= 0 ||isNaN(quantityKoders) ){
            console.log("El número ingresado es erroneo, intente nuevamente")
            quantityKoders = prompt(message)
        }
    }

    const compareNames=(quantityNames,names)=>{
        let string
        for (let x=0;x<quantityNames;x++){
            if(x==0)
                names.push(prompt(`Ingresa el nombre ${x+1}`))
            else{
                let y=0
                string=prompt(`Ingresa el nombre ${x+1}`)
                while(y<names.length){
                    if (string==names[y]){
                        console.log("El nombre ingresado ya se encuentra en la base, favor de ingresar otro")
                        string=prompt(`Ingresa el nombre ${x+1}`)
                        y=0
                    }else
                        y++
                }
                console.log(names)
                names.push(string)
            } 
        }
    }

    const showAll=(names)=>{
        let quantityKoders=names.length
        for(let index=0; index<quantityKoders;index++){
            console.log(`Nombre ${index+1}: ${names[index]}`)
        }
    }

    const namesGroup=()=>{
        let names=[]
        let quantityNames = prompt("¿Cuántos nombres quieres guardar?")
        validQuantity(quantityNames, "¿Cuántos nombres quieres guardar?")
        
        compareNames(quantityNames,names)
        
        console.log("Todos los nombres se ingresaron correctamente ...")
        showAll(names)
    }
    
    namesGroup()
}

//Ejercicio 10: Dado una coleccion de numeros. obtener el elemento Mayor, Menor, el Promedio y la Suma de los elementos.
function ejercicio10(){
    let numbers=[]
    const validNumber=(quantityNumbers, message)=>{
        while(quantityNumbers <= 0 ||isNaN(quantityNumbers) ){
            console.log("El número ingresado es erroneo, intente nuevamente")
            quantityNumbers = prompt(message)
        }
        return quantityNumbers
    }

    const showAllNums=()=>{
        let quantity=numbers.length
        for(let index=0; index<quantity;index++){
            console.log(`Número ${index+1}: ${numbers[index]}`)
        }
    }

    const numbersGroup=()=>{
        let quantityNumbers = prompt("¿Cuántos numeros deseas agregar?")
        quantityNumbers=validNumber(quantityNumbers, "¿Cuántos numeros deseas agregar?")
        
        let mayor,menor,suma,promedio
        for (let x=0;x<quantityNumbers;x++){
            num=validNumber(prompt(`Ingresa el número ${x+1}`), `Ingresa el número ${x+1}`)
            if(x==0){
                mayor=num
                menor=num
                suma=parseInt(num)
            }else
                suma+=parseInt(num)

            if(num>mayor)mayor=num
            if(num<menor)menor=num
            
            numbers.push(num)
        }
        promedio=suma/quantityNumbers
        console.log(`La suma de los números es: ${suma}`)
        console.log(`El número mayor es: ${mayor}`)
        console.log(`El número menor es: ${menor}`)
        console.log(`El promedio de los números es: ${promedio}`)
        showAllNums()
    }

    numbersGroup()
}

//Ejercicio 11: Solicitar al usuario por medio de un promt una cadena de numeros separados por algun caracter y que cada numero se agregue a una collecion de numeros.
function ejercicio11(){
    //let cadena ="1%2#3$4%5$6%7#8$9%0&7/6$5%4&3"
    let cadena = prompt("Ingresa una cadena de números separados por algún caracter")
    let numeros=[]
    numeros.push(cadena.match(/[0-9]/gi))
    console.log(`${numeros}`)
}

//Ejercicio 12: Dado un array de números, determinar por cada elemento si es un multiplo de 4, 3, 5, 2.
function ejercicio12(){
    const validNumber=(quantityNumbers, message)=>{
        while(quantityNumbers <= 0 ||isNaN(quantityNumbers) ){
            console.log("El número ingresado es erroneo, intente nuevamente")
            quantityNumbers = prompt(message)
        }
        return quantityNumbers
    }

    let quantityNumbers = prompt("¿Cuántos numeros deseas agregar?")
    quantityNumbers=validNumber(quantityNumbers, "¿Cuántos numeros deseas agregar?")

    for (let x=0;x<quantityNumbers;x++){
        num=validNumber(prompt(`Ingresa el número ${x+1}`), `Ingresa el número ${x+1}`)
        console.log("*******************************************************************************************************")
        console.log(`El número ingresado fue: ${num}`)
        if (num%2==0)
            console.log(`El ${num} SI es multiplo de 2`)
        else
            console.log(`El ${num} NO es multiplo de 2`)
        if (num%3==0)
            console.log(`El ${num} SI es multiplo de 3`)
        else
            console.log(`El ${num} NO es multiplo de 3`)
        if (num%4==0)
            console.log(`El ${num} SI es multiplo de 4`)
        else
            console.log(`El ${num} NO es multiplo de 4`)
        if (num%5==0)
            console.log(`El ${num} Si es multiplo de 5`)
        else
            console.log(`El ${num} NO es multiplo de 5`)
    }
}

//Ejercicio 13: Crear un programa que dado un array de strings, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado.
function ejercicio13(){
    let cadena,newCadena=[],palabra=""
    cadena=(prompt("Ingresa una cadena de texto").split(" "))
    let limit=prompt("Ingresa el número a limitar de caracteres")
    
    for(let x=0;x<cadena.length;x++){
        if (cadena[x].length>limit){
            palabra=cadena[x]
            newCadena[x]=palabra.slice(0,limit)
        }else
            newCadena[x]=cadena[x]
    }
    console.log(`La cadena original es:${cadena}`)
    console.log(`La nueva cadena limitada a ${limit} es: ${newCadena}`)
}

//Ejercicio 14: Crear un programa que dados los datos de 3 lados de un triangulo con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno.
function ejercicio14(){
    let lado1,lado2, lado3,base,altura
    lado1=prompt("Ingresa el valor del primer lado del triangulo")
    lado2=prompt("Ingresa el valor del segundo lado del triangulo")
    lado3=prompt("Ingresa el valor del tercer lado del triangulo")
    base=prompt("Ingresa el valor de la base del triangulo")
    altura=prompt("Ingresa el valor de la altura del triangulo")

    const evaluate=()=>{
        if (lado1==lado2 && lado1==lado3 && lado2==lado3){
            console.log(`Todos los lados son iguales`)
            console.log(`El triangulo es Equilátero`)
        }
        else if (lado1==lado2 && lado1!=lado3 && lado2!=lado3){
            console.log(`Dos lados son iguales y uno diferente`)
            console.log(`El triangulo es Isósceles`)
        }
        else if (lado1!=lado2 && lado1==lado3 && lado2!=lado3){
            console.log(`Dos lados son iguales y uno diferente`)
            console.log(`El triangulo es Isósceles`)
        }
        else if (lado1!=lado2 && lado1!=lado3 && lado2==lado3){
            console.log(`Dos lados son iguales y uno diferente`)
            console.log(`El triangulo es Isósceles`)
        }
        else if (lado1!=lado2 && lado1!=lado3 && lado2!=lado3){
            console.log(`Todos los lados son diferentes`)
            console.log(`El triangulo es Escaleno`)
        }
        else 
            console.log("algo salio mal")
    }

    const area=()=> (base*altura)/2
    

    console.log(`El resultado del área del triangulo es: ${area()}`)
    evaluate()
}

//Ejercicio 15: Crear un programa que genere un string con "n" caracteres aleatorios, con la unica condicion de que no haya caracteres repetidos en el string.
function ejercicio15(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let result= ''
    let num=prompt("Ingresa el número de caracteres que deseas tenga la cadena")

    const compare=(car,characters)=>{
        let i = 0
        while (i < num) {
            if(car==result[i])
            {
                car=characters.charAt(Math.floor(Math.random() * characters.length))
                i=0
            }else
                i++
        }
        return car
    }

    
    for ( let i = 0; i < num; i++ ) {
        result += compare(characters.charAt(Math.floor(Math.random() * characters.length)),characters)
    }

    console.log(`La cadena resultante es: ${result}`)
}

