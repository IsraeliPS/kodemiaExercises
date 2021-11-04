const express = require("express");
const user = require("../usecases/users");
const jwt = require("../lib/jwt");
const bcrypt=require("bcrypt");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const dataUser = req.body;
    const userCreated = await user.create(dataUser);
    res.status(201).json({
      status: true,
      message: "User Create successfuly",
      payload: {
        User: userCreated,
      },
    });
    console.log("Usuario creado con exito");
  } catch (error) {
    next(error);
    console.error("createUser Router", error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    const userByName = await user.getByUser({ username });
    const { _id } = userByName;
    const passHash = userByName.password;
    
    const isMatch = await bcrypt.compare(password, passHash);
    if (isMatch) {
      const token = await jwt.createJWT(_id);
      res.status(201).json({
        status: true,
        message: "Token Generate",
        payload: {
          token: token,
        },
      });
    } else {
      res.status(404).json({
        status: false,
        message: `User not found`,
      });
    }

    // console.log("regresa el usuario",userByName)
    //
  } catch (error) {
    next(error);
    console.error("generate token Router", error);
  }
});

router.get("/:id", async(req, res,next) => {
  try {
    const {id} = req.params;
    const userById=await user.getById(id)
    res.status(200).json({
      status: true,
      message: "Done",
      payload: userById,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res,next) => {
  try{
    const users=await user.get();
    res.status(200).json({
      status: true,
      message: "Done",
      payload: { users },
    })

  }catch(err){
    next (err)
  }
  
});

router.patch("/:id", async(req, res,next) => {
  try {
    const { id } = req.params;
    const userData= req.body;
    const userUpdate=await user.update(id,userData);

    res.status(201).json({
      status: true,
      message: `User update Successfuly`,
      payload: userUpdate
    });
  } catch (error) {
    next(error);
    res.status(404).json({
      status: false,
      message: `User not found`,
    });
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
