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
  }
  
})
module.exports=mongoose.model("WorldList",WordSchema)
