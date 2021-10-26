const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/:id", (req, res) => {
  id = req.params.id;
  res.json({
    id,
    name: "Product 1",
    price: 1000,
  });
});

router.get("/", (req, res) => {
  const products = [];
  const { limit } = req.query;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  if (limit) {
    res.json({
      payload: products,
    });
  } else {
    res.json({
      ok: false,
      message: "El limite y la pagina son obligatorios",
    });
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    ok: true,
    message: "Created successfully",
    payload: {
      body,
    },
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  res.json({
    ok: true,
    message: `Product ${id} Update successfuly`,
    payload: {
      name,
      price,
    },
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  //logica para eliminar
  res.status(202).json({
    ok: true,
    message: `Product ${id} deleted successfuly`,
  });
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
