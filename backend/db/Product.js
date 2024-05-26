const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    uniqueId:Number,
    title:String,
    name:String,
    email: String,
    phonenumber : Number,
    isGraduate:Boolean,
    
});

module.exports=mongoose.model("User",productSchema); 