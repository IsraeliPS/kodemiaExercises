const productsRouters = require("./productsRouter");
const categoriesRouters = require("./categoriesRouter");
const userRouters = require("./userRouter");

const apiRouter = (app) => {
  app.use("/products", productsRouters);
  app.use("/categories", categoriesRouters);
  app.use("/users", userRouters);
};

module.exports = apiRouter;
