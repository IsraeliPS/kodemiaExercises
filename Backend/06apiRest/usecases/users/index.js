const User = require("../../models/users").model;
const encrypt = require("../../lib/crypt");

const create = async (dataUser) => {
  const { firstname, lastname, username, password, email } = dataUser;
  const hash = await encrypt.hashPassword(password);

  const user = new User({ firstname, lastname, email, username, password: hash });
  const savedUser = await user.save();
  return savedUser;
};

const get = async () => {
  const allUser = await User.find({}).exec();

  return allUser;
};

const getById = async (idUser) => {
  const userById = await User.findById(idUser).exec();
  return userById;
};

const getByUser = async (user) => {
  return await User.findOne(user).exec();
};

const authenticate = async (user, password) => {
  const hash = user.password;

  return await encrypt.verifyPassword(password, hash);
};

module.exports = { create, get, getById, getByUser, authenticate};