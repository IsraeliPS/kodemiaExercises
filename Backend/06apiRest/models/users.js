const mongoose=require ('mongoose');
const {Schema}=mongoose.Schema;

const schema=new Schema({
    user:{
            firstname:{
                type:String,
                required:false,
                trim:true,
                maxlength:20,
                minlength:1,
            },
            lastname:{
                type:String,
                required:false,
                trim:true,
                maxlength:20,
                minlength:1,
            },
            username:{
                type:String,
                trim:true,
                maxlength:50,
                minlength:1,
                requerired:true,
                unique:true,
            },
            password:{
                type:String,
                minlength:1,
                requerired:true,
            }
        }
});

module.exports={
    model:mongoose.model('User',schema),
    schema
};