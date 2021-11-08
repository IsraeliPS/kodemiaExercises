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
      payload: userCreated
    });
    console.log("Usuario creado con exito");
  } catch (error) {
    next(error);
    console.error("createUser Router", error);
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

router.delete("/:id",async (req, res,next) => {
  const { id } = req.params;
  try {
    
    const userDel =await user.del(id);
    res.status(202).json({
      status: true,
      message: `User ${id} deleted successfuly`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
