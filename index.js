const express=require ("express");


const app=express()
app.use(express.json())


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true } ,()=>{
  console.log("Connected to DB");
})


app.listen(5000,()=>console.log("Server started on Port 5000"))