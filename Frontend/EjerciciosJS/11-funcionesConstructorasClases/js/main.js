const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Mauro', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]

function Koder(name, lastName, birthday, generation, bootcamp, scores) {
    this.name = name
    this.lastname = lastName
    this.birthday = birthday
    this.generation = generation
    this.bootcamp = bootcamp
    this.scores = scores
    
}

Koder.prototype.calcularEdad=function(){
    let hoy = new Date();
    let cumpleanos = new Date(this.birthday);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

Koder.prototype.calcularPromedio=function(){
    const promedio=this.scores.reduce((accum,array)=>{
    return accum+array.score
    },0)
    return promedio/3
}

kodersCollection.forEach(koders=>{
    const {name,lastName,birthday,generation,bootcamp,scores}=koders
    koders=new Koder(name,lastName,birthday,generation,bootcamp,scores)
    console.log(koders)
    console.log(koders.calcularEdad())
    console.log(koders.calcularPromedio())
})

const ventas={
    nombre="", 
    description="",
    precioCosto=0,
    clasificacion="",
    porcentajeGanancia=0,
    precioVenta=0,
    preciosAnteriores=[],
    ventas=0,
    caducidad=""
}
function Product(nombre, description, precioCosto,clasificacion,porcentajeGanancia,
                precioVenta,preciosAnteriores,ventas,caducidad){
    this.nombre=nombre
    this.description=description
    this.precioCosto=precioCosto
    this.clasificacion=clasificacion
    this.porcentajeGanancia=porcentajeGanancia
    this.precioVenta=precioVenta
    this.preciosAnteriores=preciosAnteriores
    this.ventas=ventas
    this.caducidad=caducidad
}
/*
Práctica:
Generar una colección de Objetos de tipo Product que tenga las siguientes propiedades:
    nombre
    description
    precio de costo
    clasificación
    porcentaje de Ganancia
    precio de venta
    precios de los ultimos 6 meses en una colección [23,12,45,56,12,10]
    Cantidad vendidas en la ultima semana
    Fecha de Caducidad
    
💫 De igual forma es necesario realizar lo siguientes calculos por cada Producto:
- Calcular el precio de Venta y asignarlo a su correspondiente propiedad
- Obtener los diás restantes para que caduque el producto
- Obtener el promedio de precio de los ultimos 6 meses
💫 Una vez obtenido la colleción de Productos obtener lo siguiente:
- Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana
- Los productos que tengan menor a 10 cantidades vendidas en la ultima semana
- Los productos que se encuentren a menos de 15 días proximas a caducar
Happy Koding 🚀
*/






/*
Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
- Prototipo de tipo koder
Obtener la edad a partir de la fecha de nacimiento
Obtener promedio de sus scores
Colección de Koder que pertenezcan a JavaScript
Colección de Koder que pertenezcan a Python
*/