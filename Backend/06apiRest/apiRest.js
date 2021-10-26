const express = require("express");
const apiRouter = require("./routes");
const { logErrors, errorHandler } = require("./middlewares/errorHandlers");
const {userAuthHandler,productExistHandler,categoryExistHandler}=require("./middlewares/authHandlers.js")
// const { use } = require("./routes/productsRouter");
const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Koders!");
});

app.use(userAuthHandler);
app.use(productExistHandler);
app.use(categoryExistHandler);

apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
