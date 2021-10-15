
const createPerson=(PersonObject)=>{
    const xhr=new XMLHttpRequest()
    xhr.addEventListener("readystatechange",()=>{
        if (xhr.readyState==4){
            if (xhr.status==200){

            }
        }
    })
    xhr.open("POST", "https://api-13va-default-rtdb.firebaseio.com/.json")
    xhr.send(JSON.stringify(PersonObject))
}

const getPerson=()=>{
    let objectResponse
    const xhr=new XMLHttpRequest()
    xhr.addEventListener("readystatechange",()=>{
        if (xhr.readyState==4){
            if (xhr.status>= 200 && xhr.status <= 299) {
                objectResponse=JSON.parse(xhr.responseText)
                printTable(objectResponse)
            }else {
            console.log("Ocurrio un error: ", xhr.status, "Not Found")
            }
        }
    })
    xhr.open("GET", "https://api-13va-default-rtdb.firebaseio.com/.json")
    xhr.send()
}

const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    return node
}

const removePerson = (event) => {
    console.log("Eliminando... jeje")
    // Eliminar del array
    let positionPerson = event.target.dataset.PersonIndex
    PersonArray.splice(positionPerson, 1)
    console.log(PersonArray)
    printTable()
}

function printTable(data){
    let tBody = document.getElementById("list-Person")
    // while (tBody.lastElementChild){
    //     tBody.removeChild(tBody.lastElementChild)
    // }

    console.log(data)
    let index=0
    
    for (let object in data){
        
        for (let person of object){
            
            let {name,lastName}=person
            let tr = document.createElement("tr")
            let tdIndex = createNode("td", index + 1)
            let tdName = createNode("td", name)
            let tdLastName = createNode("td", lastName)
            let tdButton = document.createElement("td")
            let button = createNode("button", "Eliminar")
            button.classList.add("btn", "btn-danger")

            button.setAttribute("data-Person-index",index)

            button.addEventListener("click", removePerson)

            tdButton.appendChild(button)

            tr.appendChild(tdIndex)
            tr.appendChild(tdName)
            tr.appendChild(tdLastName)
            tr.appendChild(tdButton)

            tBody.appendChild(tr)
        }
        index++
    }
}
let nombre=document.getElementById("txtNombre")
let apellido=document.getElementById("txtApellido")
let newPerson={}
document.querySelector(".btn-agregar").addEventListener("click",(event)=>{
    let objectArray={}
    objectArray.name=nombre.value
    objectArray.lastName=apellido.value
    newPerson=objectArray
    createPerson(newPerson)
    printTable()
})


getPerson()