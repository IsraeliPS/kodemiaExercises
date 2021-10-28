const mongoose=require('mongoose');
const {Schema}=mongoose.Schema;

const schema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
    }
})

module.exports={
    model:mongoose.model('Category',schema),
    schema
};