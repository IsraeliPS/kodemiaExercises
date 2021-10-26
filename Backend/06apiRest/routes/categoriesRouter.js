const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/:id", (req, res) => {
  id = req.params.id;
  try {
    res.json({
      id,
      categories: faker.commerce.department(),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res) => {
  const categoriesCatalog = [];
  const { limit } = req.query;
  try {
    for (let index = 0; index < limit; index++) {
      categoriesCatalog.push({
        categories: faker.commerce.department(),
      });
    }

    if (limit) {
      res.json({
        categories: categoriesCatalog,
      });
    } else {
      res.json({
        ok: false,
        message: "El limite es obligatorios",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  try {
    res.json({
      ok: true,
      message: "Category added successfuly",
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { category } = req.body;

  try {
    res.json({
      ok: true,
      message: `Category ${id} Update successfuly`,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  try {
    //logica para eliminar
    res.status(202).json({
      ok: true,
      message: `Category ${id} deleted successfuly`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
