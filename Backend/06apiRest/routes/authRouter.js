const express = require("express");
const jwt=require('jsonwebtoken')

const router = express.Router();

const secret="MySecret"
const payload={
    sub:1,
    role:"customer"
}


router.post("/auth",(req,res,next)=>{
    try{

    }
    catch(error){
        next(error)
    }
})

const payload=jwt.sign(payload,secret)