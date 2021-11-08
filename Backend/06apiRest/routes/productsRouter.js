const express = require("express");

const {authHandler,permissionHandler} = require("../middlewares/authHandlers");
const product = require("../usecases/products");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await product.get();
    res.status(200).json({
      status: true,
      message: "Done",
      payload: { products },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const productData = await product.getById(id);
    res.status(200).json({
      ok: true,
      message: "Done",
      payload: productData,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/",async (req, res, next) => {
  try {
    const dataProduct = req.body;
    const productCreated = await product.create(dataProduct);
    res.status(201).json({
      ok: true,
      message: "Created successfully",
      payload: {
        product: productCreated,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const productUpdate = await product.update(id, productData);

    res.status(201).json({
      ok: true,
      message: `Product ${id} Update successfully`,
      payload: productUpdate,
    });
  } catch (error) {
    next(error);
    res.status(404).json({
      ok: false,
      message: `Product not found`,
    });
  }
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  try {
    
    const productDel = product.del(id);
    res.status(202).json({
      status: true,
      message: `Product ${id} deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

/* 
middleware comunes
(request, response, next)=>{
    data processing

    if (something){
        res.send('end')
    } else {
        next()
    }
}

middleware de error
(error, request, response, next)=>{
    data processing

    if (error){
        res.status(500).json({error})
    } else{
        next()
    }
}
*/
