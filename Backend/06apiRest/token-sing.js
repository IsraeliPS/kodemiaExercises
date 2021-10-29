const jwt=require('jsonwebtoken')

const secret="MySecret"
const payload={
    sub:1,
    role:"customer"
}
const payload=jwt.sign(payload,secret)