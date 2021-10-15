let mentorArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    // {
    //     name: "Israelí Pérez",
    //     scores: [
    //         {
    //             signature:  "HTML",
    //             score: 9
    //         },
    //         {
    //             signature:  "CSS",
    //             score: 9
    //         },
    //         {
    //             signature:  "JS",
    //             score: 9
    //         },
    //     ]
    // }
]

let table=document.createElement('table')


// head
let head=document.createElement('thead')
let filaHead=document.createElement('tr')

let header=[
    "Mentor",
    "HTML",
    "CSS",
    "JS",
    "Promedio"
]

header.forEach(cell=>{
    let th=document.createElement("th")
    let text=document.createTextNode(cell)
    th.appendChild(text)
    filaHead.appendChild(th)
})
head.appendChild(filaHead)
table.appendChild(head)

// Body
let body=document.createElement('tbody')

let promedioGral=0,cont=0
mentorArray.forEach(mentor=>{
    let filaBody=document.createElement('tr')
    
    let tdMentor=document.createElement("td")
    let text=document.createTextNode(mentor.name)
    tdMentor.appendChild(text)
    filaBody.appendChild(tdMentor)
    
    let suma=0
    mentor.scores.forEach(valor=>{
        let td=document.createElement("td")
        let cal=document.createTextNode(valor.score)
        suma+=valor.score
        td.appendChild(cal)
        filaBody.appendChild(td)
    })
    promedioGral+=(suma/3)
    let promedio=suma/3
    let tdPromedio=document.createElement("td")
    let valPromedio=document.createTextNode(promedio.toFixed(2))
    tdPromedio.appendChild(valPromedio)
    filaBody.appendChild(tdPromedio)
    
    body.appendChild(filaBody)
    cont++
})
table.appendChild(body)

// Footer
let footer=document.createElement('tfoot')
let filaFoot=document.createElement('tr')

let th=document.createElement("th")
let textGeneral=document.createTextNode("Promedio General: ")
let promGral=promedioGral/cont
let textPromGeneral=document.createTextNode(promGral.toFixed(2))

th.appendChild(textGeneral)
th.appendChild(textPromGeneral)
filaFoot.appendChild(th)

footer.appendChild(filaFoot)
table.appendChild(footer)


document.body.appendChild(table)