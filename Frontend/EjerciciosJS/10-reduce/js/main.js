let numbersArray=[2,6,7,10,51]

const total=numbersArray.reduce((accum, number)=>{
    return accum+number
})
console.log(total)

const arrayFruit=[
    "banana",
    "fresa",
    "mango",
    "naranja",
    "banana",
    "fresa",
    "naranja",
    "banana",
    "fresa",
    "naranja",
    "mango",
    "pera",
    "pera"
]

const result=arrayFruit.reduce((accum,fruit)=>{
    let count=accum[fruit]?accum[fruit]+1:1
    
    return {
        ...accum,
        [fruit]:count
    }
},{})

console.log(result)

/*
Ejercicio 1:
- obtener los productos de tipo chips y drinks
- obtener todos los productos < a 50 y >=50
- obtener el inventario total en valor de todos los productos
- obtener el inventario total en valor de los productos tipo chips
- obtener el inventario total en valor de los productos tipo drinks
*/

const products = [
    {
        name: 'Coca lata 355ml',
        description: 'Coca lata 355ml',
        price: 11,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 1lt',
        description: 'Boing Mango 1lt',
        price: 18,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 3lt No Retornable',
        description: 'Coca-Cola 3lt No Retornable',
        price: 40,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 600ml',
        description: 'Coca-Cola 600ml',
        price: 14,
        type: 'drink'
    },
    {
        name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
        description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
        price: 27.5,
        type: 'chip'
    },
    {
        name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
        description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
        price: 25.5,
        type: 'chip'
    },
    {
        name: 'Botanas Chips Papas Jalapeño 100 g',
        description: 'Botanas Chips Papas Jalapeño 100 g',
        price: 29.7,
        type: 'chip'
    },
    {
        name: 'Botana Paketaxo Quexo 215 g',
        description: 'Botana Paketaxo Quexo 215 g',
        price: 52.8,
        type: 'chip'
    },
    {
        name: 'Botana Doritos Incógnita 64 g',
        description: 'Botana Doritos Incógnita 64 g',
        price: 18.15,
        type: 'chip'
    },
    {
        name: 'Botana Fritos Sal y Limón 57 g',
        description: 'Botana Fritos Sal y Limón 57 g',
        price: 15.4,
        type: 'chip'
    },
    {
        name: 'Botana Doritos Nacho 58 g',
        description: 'Botana Doritos Nacho 58 g',
        price: 17.6,
        type: 'chip'
    },
    {
        name: 'Botana Doritos Flamin Hot 62 g',
        description: 'Botana Doritos Flamin Hot 62 g',
        price: 17.6,
        type: 'chip'
    },
    {
        name: 'Botanas Chips Papas Fuego Limón 100 g',
        description: 'Botanas Chips Papas Fuego Limón 100 g',
        price: 29.7,
        type: 'chip'
    },
    {
        name: 'Papas Sabritas Original 42 g',
        description: 'Papas Sabritas Original 42 g',
        price: 17.6,
        type: 'chip'
    },
    {
        name: 'Papas Sabritas Adobadas 42 g',
        description: 'Papas Sabritas Adobadas 42 g',
        price: 16.5,
        type: 'chip'
    },
    {
        name: 'Cacahuates Hot Nuts Multintenso 50 g',
        description: 'Cacahuates Hot Nuts Multintenso 50 g',
        price: 11,
        type: 'chip'
    },
    {
        name: 'Botana Fritos Chorizo Chipotle 57 g',
        description: 'Botana Fritos Chorizo Chipotle 57 g',
        price: 15.95,
        type: 'chip'
    },
    {
        name: 'Botana Chips Sal de Mar Bolsa 170 g',
        description: 'Botana Chips Sal de Mar Bolsa 170 g',
        price: 49.5,
        type: 'chip'
    },
    {
        name: 'Botana Cheetos Poffs 100 g',
        description: 'Botana Cheetos Poffs 100 g',
        price: 34.1,
        type: 'chip'
    },
    {
        name: 'Papas Fritas Stax Cheddar 156 g',
        description: 'Papas Fritas Stax Cheddar 156 g',
        price: 47.85,
        type: 'chip'
    },
    {
        name: 'Papas Sabritas Original 240 g',
        description: 'Papas Sabritas Original 240 g',
        price: 75.35,
        type: 'chip'
    },
    {
        name: 'Botana Doritos Nacho 370 g',
        description: 'Botana Doritos Nacho 370 g',
        price: 82.5,
        type: 'chip'
    },
    {
        name: 'Chicharrón de Cerdo Sabritas 115 g',
        description: 'Chicharrón de Cerdo Sabritas 115 g',
        price: 55,
        type: 'chip'
    },
    {
        name: 'Botana Cheetos Torciditos 150 g',
        description: 'Botana Cheetos Torciditos 150 g',
        price: 34.1,
        type: 'chip'
    },
    {
        name: 'Papas Ruffles Queso 290 G',
        description: 'Papas Ruffles Queso 290 G',
        price: 71.5,
        type: 'chip'
    },
    {
        name: 'Dip Tostitos Queso Suave 255 g',
        description: 'Dip Tostitos Queso Suave 255 g',
        price: 69.3,
        type: 'chip'
    }
    ]
function ejercicio1(){
//- obtener los productos de tipo chips y drinks
const productsOrdered=arrayProducts=>{
    let products=arrayProducts.reduce((accum,product)=>{
        const { type }=product
        return !accum[type]
        ?{...accum,[type]:[product]}
        :{...accum,[type]:[...accum[type],product]}
    },{})
    return products

    
}
console.log(productsOrdered(products))

// - obtener todos los productos < a 50 y >=50
    const getProducts=(isMayor, arrayProducts)=>{
        return  arrayProducts.filter((product)=>isMayor?product.price>=50:product.price<50)
    }
    console.log(getProducts(true,products))
    console.log(getProducts(false,products))
    
// - obtener el inventario total en valor de todos los productos
const totalInventaryProducts=products.reduce((accum,product)=>accum+product.price,0)

console.log(`El inventario total es: ${totalInventaryProducts}`)
// - obtener el inventario total en valor de los productos tipo chips
const totalDrink=products.reduce((accum,product)=>{
    return product.type==="drink"?accum+product.price:accum
},0)

console.log(totalDrink)
// - obtener el inventario total en valor de los productos tipo drinks
const getTotalByType=(type,arrayProducts)=>{
    return arrayProducts.reduce((accum,product)=>{
        return product.type===type?accum+=product.price:accum
    })
}
}


/*
Ejercicio 2:
importe total de los productos comprados
nombre del producto |   cantidad    |   importe


total                               |   xxxxxx
*/

    const cartShoppings = [
        {
            name: 'Dip Tostitos Queso Suave 255 g',
            description: 'Dip Tostitos Queso Suave 255 g',
            price: 69.3,
            type: 'chip'
        },
        {
            name: 'Dip Tostitos Queso Suave 255 g',
            description: 'Dip Tostitos Queso Suave 255 g',
            price: 69.3,
            type: 'chip'
        },
        {
            name: 'Boing Mango 500ml',
            description: 'Boing Mango 500ml',
            price: 10,
            type: 'drink'
        },
        {
            name: 'Boing Mango 500ml',
            description: 'Boing Mango 500ml',
            price: 10,
            type: 'drink'
        }
    ]
    
function ejercicio2(){
    const result=cartShoppings.reduce((accum,prod)=>{
        let count=accum[prod.name]?accum[prod.name]+1:1
        // console.log(prod.price)
        let sum=accum[prod.name]?accum[prod.price]+prod.price:prod.price
        console.log(sum)
        
        return {
            ...accum,
            [prod.name]:count,
            importe:sum
        }
    },{})

    console.log(result)
}

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que votaron
- la edad promedio de todos los votantes
- un array con aquellos votantes que votaron y que son menores a 30 años
- la edad promedio de los no votantes
- el porcentaje de votantes vs no votante
- el procentaje de mujeres que votaron
- el porcentaje de los hombres que votaron
*/
function ejercicio3(){
    let arrayPersons = [
        {
            name: "Alice", age: 25, voted: true, gender: "mujer"
        },
        {
            name: "Jenifer", age: 26, voted: false, gender: "mujer"
        },
        {
            name: "Bruno", age: 48, voted: false, gender: "hombre"
        },
        {
            name: "Jon", age: 22, voted: true, gender: "hombre"
        },
        {
            name: "Brian", age: 20, voted: false, gender: "hombre"
        },
        {
            name: "Luis", age: 38, voted: true, gender: "hombre"
        },
        {
            name: "David", age: 29, voted: true, gender: "hombre"
        },
        {
            name: "Ximena", age: 40, voted: false, gender: "mujer"
        },
        {
            name: "Paulet", age: 37, voted: false, gender: "mujer"
        },
        {
            name: "Albert", age: 45, voted: true, gender: "hombre"
        },
        {
            name: "Mike", age: 22, voted: false, gender: "hombre"
        },
        {
            name: "Tami", age: 35, voted: true, gender: "hombre"
        },
        {
            name: "Mari", age: 28, voted: true, gender: "mujer"
        },
        {
            name: "Mireya", age: 18, voted: true, gender: "mujer"
        },
        {
            name: "Tamara", age: 18, voted: true, gender: "mujer"
        },
    ]
    const ciudadanosVotando=arrayVoted=>{
        let ciudadano=arrayVoted.reduce((accum,votaron)=>{
            let {voted}=votaron
            return voted ? [...accum,votaron] : accum
        },[])
        return ciudadano
    }

    const edadPromedio=arrayVoted=>{
        let ciudadano=arrayVoted.reduce((accum,edad)=>{
            let {age}=edad
            return accum+age
        },0)
            let promedio=ciudadano/arrayVoted.length
        return promedio
    }

    const ciudadanosMenores30=arrayVoted=>{
        let ciudadano=arrayVoted.reduce((accum,votaron)=>{
            let {voted,age}=votaron
            return voted && age<=30? [...accum,votaron] : accum
        },[])
        return ciudadano
    }

    const edadPromedioNoVotantes=arrayVoted=>{
        let sum=0, edad=0
        let ciudadano=arrayVoted.reduce((accum,votaron)=>{
            let {voted,age}=votaron
            return !voted ? [edad+=age,sum+=1] : accum
        },[])
        let promedio=ciudadano[0]/ciudadano[1]
        console.log(`Promedio no votantes: ${ciudadano[0]}`)
        console.log(`Número no votantes: ${ciudadano[1]}`)
        return promedio
        // console.log(ciudadano)
    }

    const porcentajeVotantesYNoVotantes=arrayVoted=>{
        let ciudadano=arrayVoted.reduce((accum,votaron)=>{
            let {voted}=votaron
            return !accum[voted]
                    ? {...accum,[voted]:[votaron] }
                    : {...accum,[voted]:[...accum[voted],votaron]}
        },{})
        return ciudadano
    }

    const hombresMujeres=arrayVoted=>{
        let sexo=arrayVoted.reduce((accum,genero)=>{
            let {gender}=genero
            return !accum[gender]
                    ? {...accum,[gender]:[genero] }
                    : {...accum,[gender]:[...accum[gender],genero]}
        },{})
        return sexo
    }

    console.log(`******************************Personas que votaron**************************`)
    console.log(ciudadanosVotando(arrayPersons))

    console.log(`******************************Edad Promedio**************************`)
    console.log(edadPromedio(arrayPersons))

    console.log(`******************************Personas que votaron menores de 30**************************`)
    console.log(ciudadanosMenores30(arrayPersons))

    console.log(`******************************Edad Promedio NO Votantes**************************`)
    console.log(edadPromedioNoVotantes(arrayPersons))

    console.log(`******************************Porcentaje de Votantes y NO Votantes**************************`)
    let valores=porcentajeVotantesYNoVotantes(arrayPersons)
    console.log(valores)

    console.log(`******************************Porcentaje de Hombres y Mujeres**************************`)
    let sexos=hombresMujeres(arrayPersons)
    console.log(sexos)
}