function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mySidebar").style.overflow="show";
    // document.getElementById("main-sidebar").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = 0
    // document.getElementById("mySidebar").style.overflow="hidden";
    // document.getElementById("mySidebar").style.marginLeft= 0;
    // document.getElementById("main-sidebar").style.marginLeft= 0;
}

// https://proyecto-devto-default-rtdb.firebaseio.com/


function getData(){
    let postObject
    $.ajax({
        method:"GET",
        url:"http://localhost:8000/posts/",
        success:response=>{
            postObject=response
        },
        error:error=>{
            console.log(error)
        },
        async:false
    })
    return postObject
}

function createNode(typeElement, text){
    let node = document.createElement(typeElement)
    node.textContent = text
    return node
}

function deletePost(idPost){
    $.ajax({
        method:"DELETE",
        url:`https://proyecto-devto-default-rtdb.firebaseio.com/Posts/posts/${idPost}.json`,
        data:idPost,
        success:(response)=>{
            // console.log("El registro fue eliminado correctamente")
            console.log(response)
            
        },
        error:(error)=>{
            console.log(error)
        },
        async:false
    })
    printPost()
}

function convertArray(postObject){
    let arrayPost=[]
    let data=postObject.payload
    for (let x of data){
        let tags =x.tags.split(",")
        x.tags=tags
        arrayPost = [...arrayPost,x]
    }
    // for (const key in postObject.payload) {
    //     let postData = postObject[key]
    //     console.log(postData)
    //     postData = { ...postData, id:key}
    //     arrayPost = [...arrayPost, postData]
    // }
    return arrayPost
}

function printPost(){
    let data=convertArray(getData()),cont=0
    let tBody = document.getElementById("list-posts")
    
    while (tBody.lastElementChild){
        tBody.removeChild(tBody.lastElementChild)
    }
    
    data.forEach(post=>{
        let {id,userName,image,title,tags,dateCreation,textContainer}=post
        let likes=0,coments=0

        let divRow=document.createElement("div")
        divRow.classList.add("row")

            let divCard=document.createElement("div")
            divCard.classList.add("card", "my-2")
                if (cont==0){
                    let imgCard=document.createElement("img")
                    imgCard.classList.add("card-img-top", "col-12", "p-2")
                    imgCard.src=image
                    imgCard.alt="principal_Image"
                    divCard.appendChild(imgCard)
                }
                let divUser=document.createElement("div")
                divUser.classList.add("container","p-2", "my-2")

                    let divRowUser=document.createElement("div")
                    divRowUser.classList.add("row")

                        let imgAvatar=document.createElement("img")
                        imgAvatar.classList.add("col-2", "rounded-pill")
                        imgAvatar.src=image
                        imgAvatar.alt="avatar"

                        let divUserName=document.createElement("div")
                        divUserName.classList.add("col-8")

                            let h5User=createNode("h5",userName)
                            h5User.classList.add("card-title")

                            let h6Data=createNode("h6",dateCreation)
                            h6Data.classList.add("card-subtitle", "mb-2", "text-muted")

                        divUserName.appendChild(h5User)
                        divUserName.appendChild(h6Data)

                    divRowUser.appendChild(imgAvatar)
                    divRowUser.appendChild(divUserName)
                divUser.appendChild(divRowUser)

                let divTitle=document.createElement("div")
                divTitle.classList.add("container")

                    let divRowTitle=document.createElement("div")
                    divRowTitle.classList.add("row")

                        let h3Title=document.createElement("h3")
                        h3Title.classList.add("col-12")

                            let aTitle=createNode("a",title)
                            aTitle.onclick=()=>{saveData(post,"index_post.html")}
                            
                            h3Title.appendChild(aTitle)
                        tags.forEach(item=>{
                            let name=createNode("span",`#${item}`)
                            name.classList.add("col-3", "text-center")
                            divRowTitle.appendChild(name)
                        })

                    divRowTitle.appendChild(h3Title)

                    let divRowReactions=document.createElement("div")
                    divRowReactions.classList.add("row")

                        let divReactions=document.createElement("div")
                        divReactions.classList.add("col-6","d-flex","flex-row","justify-content-around")

                            let spanHeart=document.createElement("span")

                                const SVG_NS = 'http://www.w3.org/2000/svg'
                                let heart=document.createElementNS(SVG_NS,"svg")
                                heart.setAttributeNS(null,"width","16")
                                heart.setAttributeNS(null,"height","16")
                                heart.setAttributeNS(null, "viewBox", "0 0 16 16")
                                heart.setAttributeNS(null,"fill","currentColor")
                                heart.classList.add("bi", "bi-heart")
                                

                                    let trazado = document.createElementNS(SVG_NS, 'path')
                                    trazado.setAttributeNS(null, "d", "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z")
                                    trazado.setAttributeNS(null,"id","trazado")
                                heart.appendChild(trazado)

                            spanHeart.appendChild(heart)
                            let pHeart=createNode("p",`${likes} likes`)
                        divReactions.appendChild(spanHeart)
                        divReactions.appendChild(pHeart)

                            let spanChat=document.createElement("span")
                            
                                let chat=document.createElementNS(SVG_NS,"svg")
                                chat.setAttributeNS(null,"width","16")
                                chat.setAttributeNS(null,"height","16")
                                chat.setAttributeNS(null, "viewBox", "0 0 16 16")
                                chat.setAttributeNS(null,"fill","currentColor")
                                chat.classList.add("bi", "bi-chat-right")

                                let trazadochat = document.createElementNS(SVG_NS, 'path')
                                    trazadochat.setAttributeNS(null, "d", "M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z")
                                    trazadochat.setAttributeNS(null,"id","trazado")
                                chat.appendChild(trazadochat)

                            spanChat.appendChild(chat)
                            let pChat=createNode("p",`${coments} coments`)
                        divReactions.appendChild(spanChat)
                        divReactions.appendChild(pChat)
                        
                    divRowReactions.appendChild(divReactions)
                        let divButton=document.createElement("div")
                        divButton.classList.add("col-6", "d-flex","flex-row","justify-content-around")
                            
                            let aUpdate=document.createElement("a")
                                let buttonUpdate=createNode("button","Modificar")
                                buttonUpdate.classList.add("btn","btn-warning")
                                
                                buttonUpdate.onclick=()=>{saveData(post,"newPost.html")}

                            aUpdate.appendChild(buttonUpdate)
                        divButton.appendChild(aUpdate)

                            let buttonDelete=createNode("button","Eliminar")
                            buttonDelete.classList.add("btn","btn-danger")
                            buttonDelete.onclick=()=>deletePost(id)

                            divButton.appendChild(buttonDelete)
                            
                    divRowReactions.appendChild(divButton)
                divTitle.appendChild(divRowTitle)
                divTitle.appendChild(divRowReactions)
            
            divCard.appendChild(divUser)
            divCard.appendChild(divTitle)
            
        divRow.appendChild(divCard)
        tBody.appendChild(divRow)
        cont++
        
    })
}

function saveData(objectPost,goLocation){
    localStorage.clear()
    localStorage.setItem("post",JSON.stringify(objectPost))
    location.href=goLocation
}

function createPost(postObject){
    let resp

    $.ajax({
        method:"POST",
        url:"https://proyecto-devto-default-rtdb.firebaseio.com/Posts/posts.json",
        data:JSON.stringify(postObject),
        success:(response)=>{
            resp=response
            console.log(response)
        },
        error:(error)=>{
            console.log(error)
        },
        async:false
    })
    return resp
}

printPost()