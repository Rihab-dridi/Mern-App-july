const mongoose=require('mongoose')
const schema=mongoose.Schema;

const contactSchema=schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:Number,
    dateCreation:{
        type:Date,
        default:Date.now()
    }
    
})
module.exports=Contacts=mongoose.model('contact',contactSchema)

//create the schema 
//create a model 
//export the model  