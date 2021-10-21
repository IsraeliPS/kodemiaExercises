const fs=require("fs");

const readFile=(path,callback)=>{
    fs.readFile(path, (err, data)=> {
        if (err) return console.error(err);
        else{
            if (callback)
                callback()
        }
        console.log(data.toString());
    })
}

const createFile=(path,content,callback)=>{
    fs.writeFile(path,content, (err) => {
        if (err) return console.error(err)
        else{
            if (callback)
                callback()
        }
    })
}

const deleteFile=(path,callback)=>{
    fs.unlink(path, (err) => {
        if (err) return console.error("No se pudo eliminar", err);
        else{
            if(callback)
                callback()
        }
    })
}

const createFolder=(path,callback)=>{
    fs.mkdir(path,(err)=>{
        if (err) return console.error("No se pudo eliminar", err);
        else{
            if(callback)
                callback()
        }
    })
}

const deleteFolder=(path,callback)=>{
    fs.rmdir(path,(err)=>{
        if (err) return console.error("No se pudo eliminar", err);
        else{
            if(callback)
                callback()
        }
    })
}

const openFolder=(path,callback)=>{
    fs.opendir(path,(err)=>{
        if (err) return console.error("No abrir el folder", err);
        else{
            if(callback)
                callback()
        }
    })
}
let archivo="prueba3.txt"
let contenido="este es el contenido del archivo"
let directory=__dirname
let folder=`${directory}/folder`
let prueba=`${folder}/${archivo}`

// let path=`${directory}/${archivo}`
// deleteFolder(folder)
// deleteFile(path)

createFolder(folder,()=>{
    console.log("Se creo el folder")
    openFolder(folder,()=>{
        console.log("Se abrio el folder correctamente")
        createFile(prueba,contenido,()=>{
            console.log(`Se creo el archivo ${archivo}`)
            readFile(prueba)
        })
    })
})