const Product = require("../../models/products").model;

const get = async () => {
  const allProduct = await Product.find({}).exec();

  return allProduct;
};

const getById = async (idProduct) => {
  const product = await Product.findById(idProduct).exec();
  return product;
};

const create = async (dataProduct) => {
  const product = new Product(dataProduct);
  const savedProduct = await product.save();
  return savedProduct;
};

const del = (idProduct) => {
  return Product.findByIdAndDelete(idProduct).exec();
};

const update = (idProduct, dataProduct) => {
  const { name, price } = dataProduct;
  return Product.findByIdAndUpdate(idProduct, { name, price }).exec();
};

module.exports = { get, getById, create, del, update };