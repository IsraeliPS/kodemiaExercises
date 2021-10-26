const userAuthHandler = (req, res, next) => {
  const { auth } = req.body;
  
    if (auth) {
        next()
    } else {
      res.status(401).json({
        ok:false,
        message:"Unauthorized",
        // message: err.message,
        // stack: err.stack,
      });
    }
/*
{
    "id":1,
    "cant":7,
}*/
};

const productExistHandler=(req,res,next)=>{
  const {cant}=req.body
  if (cant<5){
    next()
  } else{
    res.status(409).json({
      ok:false,
      message:"insufficient stock"
    })
  }
/*
{
    "id":1,
    "cant":7,
    "auth":true
}
*/
}

const categoryExistHandler=(req,res,next)=>{
  const {category}=req.body
  if (category){
    next()
  } else{
    res.status(409).json({
      ok:false,
      message:"not existent category "
    })
  }
}
/*
{
    "id":1,
    "cant":4,
    "auth":true,
    "category":true
}
*/

module.exports =  {userAuthHandler, productExistHandler,categoryExistHandler};
