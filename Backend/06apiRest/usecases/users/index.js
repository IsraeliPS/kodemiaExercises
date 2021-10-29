const User = require("../../models/users").model;
const hashPassword = require("../../lib/crypt");


const create = async (dataUser) => {
  const { firstname,lastname,username,password } = dataUser;
  try {
    const hash = await hashPassword(password);
    
    const user = new User({ firstname,lastname,username,password:hash });
    console.log("imprimiendo user",user)
    const savedUser = await user.save();

    console.log("saved user",savedUser)
    return savedUser;
  } catch (error) {
    console.error("error en userCase",error);
  }
};

const get = async () => {
  const allProduct = await User.find({}).exec();

  return allProduct;
};

const getByUser = async (user) => {
  const userName = await User.find(user).exec();
  return userName;
};


module.exports={create,get,getByUser}