const mongoose=require("mongoose")
// Creating a schema
const WordSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  meaning:{
    type:String,
    required:true
  },
 explanition:{
    type:String,
    required:true
  },
  time : { type : Date, default: Date.now }
  
})
module.exports=mongoose.model("WorldList",WordSchema)
