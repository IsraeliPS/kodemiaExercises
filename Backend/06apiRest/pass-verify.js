const bcrypt=require("bcrypt")

const verifyPassword=async()=>{
    console.log("si entro")
    const password="password23"
    const hash="$2b$10$x73acSVJhV1VrbQgJx0Q0eUTu3DlgB2lzfXXJsf1naIIxL8KC2dwW"
    const isMatch=await bcrypt.compare(password,hash)

    console.log("is Match", isMatch)
}
verifyPassword()