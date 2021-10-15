
function getData(){
    let personObject
    $.ajax({
        method:"GET",
        url:"https://api-13va-default-rtdb.firebaseio.com/kraken/mentors.json",
        success:response=>{
            personObject=response
        },
        error:error=>{
            console.log(error)
        },
        async:false
    })
    let arrayPerson=convertArray(personObject)
    
    
    return arrayPerson
}

function convertArray(personObject){
    let arrayPerson=[]
    for (const key in personObject) {
        let personData = personObject[key]
        personData = { ...personData, id:key}
        arrayPerson = [...arrayPerson, personData]
    }
    return arrayPerson
}

function createPerson(productObject){
    let resp

    $.ajax({
        method:"POST",
        url:"https://api-13va-default-rtdb.firebaseio.com/kraken/mentors.json",
        data:JSON.stringify(productObject),
        success:(response)=>{
            resp=response
            console.log(response)
        },
        error:(error)=>{
            console.log(error)
        },
        async:false
    })
    printCard()
    return resp
}

function updatePerson(idPerson,objectPerson){
    $.ajax({
        method:"PATCH",
        url:`https://api-13va-default-rtdb.firebaseio.com/kraken/mentors/${idPerson}.json`,
        data:JSON.stringify(objectPerson),
        success:(response)=>{
            console.log("Los datos fueron modificados correctamente")
        },
        error:(error)=>{
            console.log(error)
        },
        async:false
    })
}

function deletePerson(keyProduct){
    $.ajax({
        method:"DELETE",
        url:`https://api-13va-default-rtdb.firebaseio.com/kraken/mentors/${keyProduct}.json`,
        data:keyProduct,
        success:(response)=>{
            console.log("El registro fue eliminado correctamente")
            printCard()
        },
        error:(error)=>{
            console.log(error)
        },
        async:false
    })
}

function validar(){
    let objectData={name:"",phone:"",github:"",urlGithub:"",}
    $(".form-group .register").each(function(index){
        if (this.value){
            objectData[this.name]=this.value
            this.value=""
        }
        else{
            alert(`Todos los campos son requeridos`)
            objectData={}
        }
    })
    return objectData
}

function createNode(typeElement, text){
    let node = document.createElement(typeElement)
    node.textContent = text
    return node
}

function launchModal(data){
    let {name,phone,github,urlGithub,id}=data
    let inputsComplete=$(".form-group .modalPerson")
    
    inputsComplete.each(function(index){
        switch(this.name){
        case "id":
            this.value=id    
            break;
        case "name":
            this.value=name
            break;
        case "phone":
            this.value=phone
            break;
        case "github":
            this.value=github
            break;
        case "urlGithub":
            this.value=urlGithub
            break;
        }
    })
    
}

function printCard(){
    let data=getData(),cont=0
    
    let tBody = document.getElementById("list-names")
        
    while (tBody.lastElementChild){
        tBody.removeChild(tBody.lastElementChild)
    }

    data.forEach(person=>{
        // console.log(person)
        let {name,id,github,urlGithub,phone}=person

        
        let divContainer = document.createElement("div")
        divContainer.classList.add("card","m-2")

        let divRow = document.createElement("div")
        divRow.classList.add("card-body","d-flex","flex-column", "align-items-center",)

        let h5Name = createNode("h5", name)
        h5Name.classList.add("card-title")

        let h6Phone = createNode("h6", phone)
        h6Phone.classList.add("card-subtitle", "mb-2")
        
        let h6Github = createNode("h6", github)
        h6Github.classList.add("card-subtitle", "mb-2")

        let pUrlGithub = createNode("p", urlGithub)
        pUrlGithub.classList.add("card-text")

        let divButtons = document.createElement("div")
        divButtons.classList.add("d-flex","w-100", "justify-content-around")

        let buttonEdit = createNode("a", "Editar")
        buttonEdit.classList.add("btn", "btn-warning")
        buttonEdit.role="button"
        buttonEdit.setAttribute("data-bs-toggle","modal")
        buttonEdit.setAttribute("data-bs-target","#exampleModal")
        buttonEdit.onclick = () => launchModal(person)
        
        let buttonDelete = createNode("a", "Eliminar")
        buttonDelete.classList.add("btn", "btn-danger")
        buttonDelete.onclick = () => deletePerson(id)

        divButtons.appendChild(buttonEdit)
        divButtons.appendChild(buttonDelete)
        divRow.appendChild(h5Name)
        divRow.appendChild(h6Phone)
        divRow.appendChild(h6Github)
        divRow.appendChild(pUrlGithub)
        divRow.appendChild(divButtons)
        
        divContainer.appendChild(divRow)
        tBody.appendChild(divContainer)
        cont++
    })
}

function preUpdate(){
    let objectPerson={name:"",phone:"",github:"",urlGithub:""}
    let inputs=$(".form-group .modalPerson")
    let id=""
    inputs.each(function(index){
        switch(this.name){
        case "id":
            id=this.value
            break;
        case "name":
            objectPerson.name=this.value
            break;
        case "phone":
            objectPerson.phone=this.value
            break;
        case "github":
            objectPerson.github=this.value
            break;
        case "urlGithub":
            objectPerson.urlGithub=this.value
            break;
        }
    })
    updatePerson(id,objectPerson)
    printCard()
    $("#exampleModal").modal("hide")
}

$("#btnAgregar").click(()=>{
    let data=validar()
    data?createPerson(data):console.log("datos erroneos")
})

$("#updateData").click(()=>preUpdate())

printCard()

