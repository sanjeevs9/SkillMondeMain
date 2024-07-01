import { useState } from "react"
import desk from "../../public/desk.png"
import React from "react";
import emailjs from "@emailjs/browser"
import { error, success } from "./Toast";

const service=import.meta.env.VITE_YOUR_SERVICE_ID;
const template=import.meta.env.VITE_YOUR_TEMPLATE_ID;
const publicKey =import.meta.env.VITE_YOUR_PUBLIC_KEY;


export default function ContactUs(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const[wait,setwait]=useState(false);

    async function handle(){
        if(wait){
            return;
        }
        setwait(true);
        try{
          await  emailjs.send(`${service}`,`${template}`,{
                from_name:name,
                message:message,
                reply_to:email
            },{publicKey:publicKey})
        }catch(er){
            error("Something Went Wrong Please try again later")
            setwait(false);
        }finally{
            success("Email Sent")
            setwait(false);
        }
    }
    return(
        <>
        <div className="p-5 flex flex-col gap-10">
        <div className="flex justify-center font-semibold text-2xl sm:text-3xl lg:pr-5 xl:pr-7">
                Contact Us
            </div>
            <div className="flex flex-col md:flex-row h-[20rem] md:h-full   items-center  w-full md:gap-7 justify-center">
                <div className="hidden md:flex md:w-5/12 lg:w-4/12 xl:w-4/12 h-[23rem] lg:h-[26rem] xl:h-[30rem]   md:rounded-l-3xl">
                    <img className="object-cover     md:rounded-l-3xl" src={desk}/>
                </div>
                <div className="flex w-full  h-full  md:w-1/2  items-center justify-center md:p-10">
                    <div className="flex flex-col gap-6 w-4/5 md:w-full max-w-[28rem]">
                        <input className="outline-none border-[1px] border-black rounded-lg placeholder:text-sm placeholder:pl-1 p-2 " placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>
                        <input className="outline-none border-[1px] border-black rounded-lg placeholder:text-sm placeholder:pl-1 p-2 " type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                        <textarea className="outline-none border-[1px] border-black rounded-lg placeholder:text-sm   pl-3 pt-2  resize-none " rows="5" placeholder="Message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                        <div className="flex justify-end">
                            <button onClick={handle} className={`bg-black text-white p-2 pl-8 pr-8 text-sm rounded-lg`}>{wait?
                            <div>
                            <span className="">
                            Sending...
                            </span>
                            </div>
                            :"Send"    
                        }</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}