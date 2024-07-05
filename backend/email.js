const express =require("express");

const router=express.Router();
const db=require("./db")

router.post("/", (req,res)=>{
    const data=req.body;
    try{
        const find=`SELECT * from email WHERE email = "${data.email}"`;
        const val=[data.email];
    
        db.query(find,val,(err, result)=>{
           
            if(err){
                return console.log(err);
            }
            if(result.length>0){
                return res.status(409).json({
                    message:"You are already signed up for the service"
                })
            }

            const insert=`INSERT INTO email (email, ip_address) VALUES (?,?)`;
            const values=[data.email,data.ipAddress];
            
            db.query(insert,values,(err,result)=>{
             if(err){
              return   res.status(500).json({message:"something went wrong"})
             }
            return  res.status(201).json({message:"You are Signed up for the service"})
            })
        });
    }catch(err){
        console.error(err); 
       return  res.status(500).json({message: "something went wrong"});
    }

   
   
})

module.exports=router