/*
Ejercicio 1:
crear una funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombres completos de koders como se haya indicado, y
que imprima el nombre del koder y su numero asignado.

Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado
- imprimir la lista de koders en orden alfabetico descendiente
- Crear una nueva lista que contenga los nombres de los koders
    con la siguiente estructura
[
"koder 1: Emi de Leon (E. D. L.)"
"koder 2: Elias Herrera (E. H.)"
"koder 3: Armando Rios (A. R.)"
]
- Permitir agregar un koder en alguna posicion deseada, 
por ejemplo: "Fanny Alvarez, lugar 3"
*/
function ejercicio1(){
    let exit = 0, option=0
    const names = []
    do{
        showDots("Menu Principal")
        console.log("1.- Agregar un grupo de koders")
        console.log("2.- Agregar un solo koder")
        console.log("3.- Agregar un koder en indice determinado")
        console.log("4.- Ordenar Ascendente")
        console.log("5.- Ordenar Descendente")
        console.log("6.- Mostrar todos los koders")
        console.log("7.- Mostrar un solo Koder")
        console.log("8.- Lista con iniciales")
        console.log("9.- Salir")
        option=prompt("Seleccione una opcion del menú")
        if(option <= 0 || option>9 || isNaN(option)){
            console.log("El número seleccionado es invalido, favor de seleccionar nuevamente")
            option=10
        }else{
            switch(parseInt(option)){
                case 1:{
                    showDots("Varios Ingresos")
                    kodersGroup(names)
                    break;
                }
                case 2:{
                    showDots("Un solo ingreso")
                    oneKoder(names)
                    break;
                }
                case 3:{
                    showDots("Un ingreso con indice")
                    oneKoderIndex(names)
                    break;
                }
                case 4:{
                    showDots("Orden Ascendente")
                    sortAsc(names)
                    break;
                }
                case 5:{
                    showDots("Orden Descendente")
                    sortDesc(names)
                    break;
                }
                case 6:{
                    showDots("Mostrar Todos")
                    callShowAll(names)
                    break;
                }
                case 7:{
                    showDots("Mostrar Uno")
                    showOne(names)
                    break;
                }
                case 8:{
                    showDots("Mostrar Iniciales")
                    oneLetter(names)
                    break;
                }
                case 9:
                    showDots("*")
                    console.log("Terminando Proceso...")
                    break;
            }
        }
    }while (option!=9)
}

function kodersGroup(names){
    let quantityKoders = prompt("Cuanto Koder quieres guardar?")
    validQuantity(quantityKoders, "Cuanto Koder quieres guardar?")

    for(let index=0; index<quantityKoders;index++){
        names.push(prompt(`Escribe el nombre ${index+1}`))
    }
    console.log("Todos los nombres se ingresaron correctamente ...")
    console.log(" ")
}

function oneKoder(names){
    let koder= prompt("Ingresa el nombre del Koder a almacenar")

    stringEmpty(koder, "Ingresa el nombre del Koder a almacenar")
    names.push(koder)
    console.log(`Se añadio a ${koder} en la posición ${names.length-1}`)
    console.log(" ")
}

function oneKoderIndex(names){
    let koder= prompt("Ingresa el nombre del Koder a almacenar")
    stringEmpty(koder, "Ingresa el nombre del Koder a almacenar")

    let index=prompt("Ingresa el número de indice donde se colocará")
    validQuantity(index,"Ingresa el número de indice donde se colocará")

    names.splice(index-1, 0,koder)
    console.log(`Se añadio a ${koder} en la posición ${index-1}`)
    console.log(" ")
}

function sortAsc(names){
    names.sort()
    console.log(`La lista de koders Ascendente es:`)
    showAll(names)
    console.log(" ")
}

function sortDesc(names){
    names.sort().reverse()
    console.log(`La lista de koders descendente es:`)
    showAll(names)
    console.log(" ")
}

function callShowAll(names){
    console.log("Todos los koders son: ")
    showAll(names)
}

function showAll(names){
    let quantityKoders=names.length
    for(let index=0; index<quantityKoders;index++){
        console.log(`Koder ${index+1}: ${names[index]}`)
    }
    console.log(" ")
}

function showOne(names){
    let specificKoder= prompt("Ingresa el número del koder a conocer el nombre")
    validQuantity(specificKoder, "Ingresa el número del koder a conocer el nombre")
    console.log(`En el indice ${specificKoder} se encuentra el koder: ${names[specificKoder-1]}`)
    console.log(" ")
}

function oneLetter(names){
    let secondList=[], cadena=""
    let quantityKoders=names.length
    
    names.forEach(element => {
        
        for (let x=0;x<element.length;x++)
        {
            if (x==0){
                cadena=""
                cadena+=element[x]+". "
            }
            else if (element[x]==" ")
                cadena+=element[x]+element[x+1]+". "
        }
        secondList.push(cadena.toUpperCase())
    });
    
    for(let index=0; index<quantityKoders;index++){
        console.log(`Koder ${index+1}: ${names[index]} : ${secondList[index]}`)
    }
    console.log(" ")
}

function showDots(place){
    console.log(`**************************${place}*********************`)
}


function validQuantity(quantityKoders, message){
    while(quantityKoders <= 0 ||isNaN(quantityKoders) ){
        console.log("El numero ingresado es erroneo, intente nuevamente")
        quantityKoders = prompt(message)
    }
}

function stringEmpty(cadena, message){
    if (cadena.length==0 || cadena==" "){
        console.log("No se recibió el nombre, favor de ingresarlo nuevamente")
        cadena=prompt(message)
        stringEmpty(cadena)
    }
    else
        return cadena
}
