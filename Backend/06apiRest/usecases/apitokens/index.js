const ApiToken = require("../../models/apitokens");
const bcrypt=require("bcrypt");

const get = async () => {
  const tokens = await ApiToken.find({}).exec();

  return tokens;
};

const getById = async (tokenId) => {
  const token = await ApiToken.findById(tokenId).exec();
  return token;
};

const create = async (password) => {
  const hash =await hashPassword(password)
  const token = new ApiToken.model({ token: hash });
  const savedToken = await token.save();

  return savedToken;
};

const hashPassword=async(password)=>{
  const hash=await bcrypt.hash(password,10)
  return hash
}

module.exports = {get, getById, create, hashPassword}