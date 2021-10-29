const jwt=require('jsonwebtoken')
const config=require("dotenv").config();


// const createJWT=(pass)=>{

// }
const payload=jwt.sign(payload,process.env.SECRET_CHAIN)

/* 
    obtner los datos del ususario
    verficar que el usuario y la contraseña sean validos
    si son validos retornar un jwt 
    el payload del jwt debe contener el id del usuario en el atributo sub:

    post /login
    {
        username:"username"
        password="pass123"
    }

*/