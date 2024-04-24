const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection = mongoose.model("collection",newSchema)

const newSchema2=new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    relation:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    contact2:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    address2:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    }
})
const collection2 = mongoose.model("Member",newSchema2)

module.exports=collection