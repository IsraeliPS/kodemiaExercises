const jwt=require("jsonwebtoken")

const secret="MySecret"
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzNTQ2OTg3OH0.AePrtb3i21cnX7mKnfkBA507MXjsgMOqbUMEiKC5KCA"

const payload =jwt.verify(token,secret);
console.log(payload)
