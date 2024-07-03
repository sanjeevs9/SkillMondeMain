const express =require("express");

const router=express.Router();
const db=require("./db")

router.post("/",(req,res)=>{
    const data=req.body;
    console.log(data)
    const insert=`INSERT INTO email (email, ip_address) VALUES (?,?)`;
    const values=[data.email,data.ipAddress];
    
    db.query(insert,values,(err,result)=>{
     if(err){
        console.log(err)
        res.status(500).json({message:"somthing went wrong"})
     }
     res.status(201).json({message:"done"})
    })
   
   
})

module.exports=router