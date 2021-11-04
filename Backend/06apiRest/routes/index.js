const productsRouters = require("./productsRouter");
const categoriesRouters = require("./categoriesRouter");
const userRouters = require("./userRouter");
const authRouters = require("./authRouter");

const apiRouter = (app) => {
  app.use("/products", productsRouters);
  app.use("/categories", categoriesRouters);
  app.use("/users", userRouters);
  app.use("/auth", authRouters);
};

module.exports = apiRouter;
