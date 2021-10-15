let btnDecrementar=document.getElementById("btn-restar")
let btnIncrementar=document.getElementById("btn-sumar")
let counter=document.getElementById("counter")
let number=0

btnDecrementar.addEventListener("click",()=>{
    number--
    counter.textContent=number
})

btnIncrementar.addEventListener("click",()=>{
    number++
    counter.textContent=number
})

// let buttons=document.querySelectorAll(".btn-test")

// buttons.addEventListener("click",(btn)=>{
//     btn.addEventListener("click",(event)=>{
//         let id=event.target.id
//         id==="btn-restar"?number--:number++
//         counter.textContent=number
//     })
// })

let kodersArray = [
    {
        name: "Emi",
        lastName:  "de León"
    },
    {
        name: "Clau", 
        lastName: "Rodriguez"
    },
    {
        name: "Fanny", 
        lastName: "Alvarez"
    }
]

const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    return node
}

const removeKoder = (event) => {
    console.log("Eliminando... jeje")
    // Eliminar del array
    let positionKoder = event.target.dataset.koderIndex
    kodersArray.splice(positionKoder, 1)
    console.log(kodersArray)
    printTable()
}

function printTable(){
    let tBody = document.getElementById("list-koders")
    while (tBody.lastElementChild){
        tBody.removeChild(tBody.lastElementChild)
    }

    kodersArray.forEach((koder, index) => {
        let {name, lastName} = koder
        let tr = document.createElement("tr")

        let tdIndex = createNode("td", index + 1)
        let tdName = createNode("td", name)
        let tdLastName = createNode("td", lastName)
        let tdButton = document.createElement("td")

        let button = createNode("button", "Eliminar")
        button.classList.add("btn", "btn-danger")

        button.setAttribute("data-koder-index",index)

        button.addEventListener("click", removeKoder)

        tdButton.appendChild(button)

        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdButton)

        tBody.appendChild(tr)
    })
}
let nombre=document.getElementById("txtNombre")
let apellido=document.getElementById("txtApellido")
document.querySelector(".btn-agregar").addEventListener("click",(event)=>{
    let objectArray={}
    objectArray.name=nombre.value
    objectArray.lastName=apellido.value
    kodersArray.push(objectArray)
    console.log(kodersArray)
    printTable()
})

printTable()

