"use server"

import { db } from "@/config/db";
import {redirect} from "next/navigation";

const contactAction=async(previousState,formData)=>{

    // console.log(formData.get("name"));

    // const name=formData.get("name"); 
    // const email=formData.get("email");
    // const message=formData.get("message");

    try{
    const {name,email,message}=Object.fromEntries(formData.entries());

    console.log(name,email,message);

    await db.query(`insert into contacts(name,email,message) values($1,$2,$3)`,[name,email,message]);

    // return {success:true,message:"Your message has been sent successfully!"};

    redirect("/")

    }
    catch(err){
        if(err.message=="NEXT_REDIRECT"){
            throw err;
        }
        return {success:false,message:err.message};
    }

}

export default contactAction;