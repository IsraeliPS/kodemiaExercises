/*
Ejercicio 1
Deducir:
input: "kodemia"
output: "aimedok"
*/
function ejercicio1(){
    let cadenaEntrada=prompt("Ingresa una cadena de texto")
    cadenaEntrada=cadenaVacia(cadenaEntrada)
    let nombreInvertido=invertirCadena(cadenaEntrada)

    console.log(`El texto inicial fue: ${cadenaEntrada}`)
    console.log(`El texto final es: ${nombreInvertido}`)
    console.log(``)

    function invertirCadena (cadena){
        let nuevaCadena = "";
        for (let x = cadena.length - 1; x >= 0; x--) {
        nuevaCadena += cadena[x];
        }
        return nuevaCadena
    }
}

/*
Ejercicio 2
input: "a very large string"
output: "A VeRy lArGe sTrInG" 
input: "abcdefg"
output: "AbCdEfG"
*/

function ejercicio2(){
    let cadenaEntrada=prompt("Ingresa una cadena de Texto")
    cadenaEntrada=cadenaVacia(cadenaEntrada)
    let textoFinal=convertirLetras(cadenaEntrada)

    console.log(`El texto inicial fue: ${cadenaEntrada}`)
    console.log(`El texto resultante es: ${textoFinal}`)

    function convertirLetras(entradaDatos){
        let nuevaCadena = "";
        let bandera=0
        for (let x=0;x<=entradaDatos.length-1;x++){
            if (bandera==0){
                nuevaCadena+=entradaDatos[x].toUpperCase()
                bandera=1
            }
            else{
                nuevaCadena+=entradaDatos[x].toLowerCase()
                bandera=0
            }
        }
        return nuevaCadena
    }
}
/*
Ejercicio 3
Crear una funcion que me indique si un string comienza con
    -una vocal
    -consonante
    -numero
    -caracter especial
*/
function ejercicio3(){
    let cadenaEntrada=prompt("Ingresa una cadena de Texto")
    cadenaEntrada=cadenaVacia(cadenaEntrada)
    let inicioCadena=comienzaString(cadenaEntrada)

    console.log(`El texto ingresado es: ${cadenaEntrada}`)
    console.log(`${inicioCadena}`)

    function comienzaString(cadena){
        let caracterInicial=cadena[0].toLowerCase()
        let numero=caracterInicial.match(/[0-9]/gi)
        let caracterEspecial=caracterInicial.match(/[ ¿¡'!?/*-+@#$%&/()=]/gi)
        let vocales=caracterInicial.match(/[aeiou]/gi)
        let consonante=caracterInicial.match(/[bcdfghjklmnopqrstvwxyz]/gi)

        if (caracterInicial){
            if (numero) //es lo mismo que if (numero!=null)
                return "El texto comienza con un número"
            else if (caracterEspecial)
                return "El texto comienza con un caracter especial"
            else if (vocales)
                return "El texto comienza con una vocal"
            else if (consonante)
                return "El texto comienza con una consonante"
        }
    }
}

    //Esta funcion solo evita que se agregue una cadena vacia
    //o solo un espacio para que se vea la funcionalidad de los ejercicios
    function cadenaVacia(cadenaEntrada){
        if (cadenaEntrada.length==0)
            return "La cadena estaba vacia, así que le agregue texto"    
        else if (cadenaEntrada==" ")
            return " La cadena solo tenía un espacio, así que le agregue más texto"
        else
            return cadenaEntrada
    }
