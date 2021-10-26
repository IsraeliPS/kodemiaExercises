const express = require("express");
const faker = require("faker");

const router = express.Router();

router.get("/:id", (req, res) => {
  try {
    id = req.params.id;
    res.json({
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      department: faker.name.jobArea(),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res) => {
  const user = [];
  const { limit } = req.query;
  try {
    for (let index = 0; index < limit; index++) {
      user.push({
        avatar: faker.image.avatar(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        department: faker.name.jobArea(),
      });
    }

    if (limit) {
      res.json({
        users: user,
      });
    } else {
      res.json({
        ok: false,
        message: "El limite y la pagina son obligatorios",
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
      message: "User Create successfuly",
      payload: {
        body,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, telephone } = req.body;
  try {
    res.json({
      ok: true,
      message: `User ${name} Login Successfuly`,
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
      message: `User ${id} deleted successfuly`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
