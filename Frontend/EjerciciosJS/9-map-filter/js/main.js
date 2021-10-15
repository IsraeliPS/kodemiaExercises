
    let numbersArray=[2,6,7,10,5]

    let doubleNumbers=numbersArray.map((number,index)=> number*2)

    console.log(doubleNumbers)

    let numerosPares=numbersArray.filter((number)=> number%2===0)

    console.log(numerosPares)


let data = [1,2,2,4,8,5,3,7,6,1,2,5,9,'33','33'];

let result = data.filter((item,index)=>{
    return data.indexOf(item) === index;
})
console.log(result);

const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

/*
Ejercicio 1:
*/
function ejercicio1(){
    let arraySongs=[]

    /*const songsData = [
        {
            name: "¿Dónde jugarán los niños?",
            band: "Maná",
            releaseYear: "1992",
            statistics: {
                likes: 20000,
                reproductions: 8000
            },
        },
        {
            name: "La muralla verde",
            band: "Enanitos Verdes",
            releaseYear: "1986",
            statistics: {
                likes: 21000,
                reproductions: 19000
            },
        },
        {
            name: "Te Ví En Un Tren",
            band: "Enanitos Verdes",
            releaseYear: "1987",
            statistics: {
                likes: 20000,
                reproductions: 23490
            },
        },
        {
            name: "Mariposa Traicionera",
            band: "Maná",
            releaseYear: "2002",
            statistics: {
                likes: 12000,
                reproductions: 25690
            },
        },
        {
            name: "Rayando el Sol",
            band: "Maná",
            releaseYear: "1990",
            statistics: {
                likes: 12000,
                reproductions: 18000
            },
        },
        {
            name: "La celula que explota",
            band: "Jaguares",
            releaseYear: "1999",
            statistics: {
                likes: 12000,
                reproductions: 23421
            },
        },
        {
            name: "No dejes que...",
            band: "Jaguares",
            releaseYear: "1999",
            statistics: {
                likes: 12345,
                reproductions: 10000
            },
        }
    ]*/
    
    const noRepeatBand=(songsArray)=>{
        let newSongsData= songsArray.map(bands=>bands.band)
        let result = newSongsData.filter((item,index)=>{
            return newSongsData.indexOf(item) === index;
        })
        return result
    }
        
    arraySongs=(noRepeatBand(songsData))
    // console.log(``)
    const songsByBand=(bandName)=>{
        let arrayBand=songsData.filter(song=>{
                return song.band===bandName
        })
        return arrayBand
    }

    const reproductions=(songsData,criterio)=>{
        let reproduction=[],max=0,nomMax,bandMax

        songsData.forEach(song=>{
            if (song.statistics[criterio]>max){
                max=song.statistics[criterio]
                nomMax=song.name
                bandMax=song.band
            }
        })
        reproduction.push(bandMax, nomMax, max)
        return reproduction
    }

    console.log("*******************************BANDAS****************************************")
    console.log(noRepeatBand(songsData))
    console.log("*******************************CANCIONES DE JAGUARES****************************************")
    console.log(songsByBand("Jaguares"))
    console.log("*******************************CANCIONES DE MANÁ****************************************")
    console.log(songsByBand("Maná"))
    console.log("*******************************CANCIONES DE ENANITOS VERDES****************************************")
    console.log(songsByBand("Enanitos Verdes"))
    console.log("***********************************************************************")
    let play=reproductions(songsData,"reproductions")
    console.log(`La canción con más reproduciones es ${play[1]} de ${play[0]} tiene ${play[2]} reproducciones`)
    let good=reproductions(songsData,"likes")
    console.log(`La canción con más likes es ${good[1]} de ${good[0]} tiene ${good[2]} likes`)
}
/*
- Agrupar el nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/

function ejercicio2(){
    console.log("*************************Ejercicio 1****************************")
    songsData.forEach(song=>{
        console.log(`La cancion ${song.name} es de ${song.band}`)
    })

    console.log("*************************Ejercicio 2****************************")
    criterio="de"
    const canciones=songsData.filter(song=>song.name.toLowerCase().includes(criterio.toLowerCase()))

    console.log(canciones)
}