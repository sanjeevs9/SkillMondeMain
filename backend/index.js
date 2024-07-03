const express =require("express");
const cors=require("cors");
const router = require("./email");

const app=express();
app.use(cors());
app.use(express.json());

const PORT=3000;
app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
})
app.use("/email",router)


app.listen(`${PORT}`,()=>{
    console.log("connected to PORT"+PORT);
})