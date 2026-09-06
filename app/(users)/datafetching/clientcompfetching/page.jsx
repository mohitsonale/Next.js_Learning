"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Datafetchclientcomp=()=>{

    const [userinfo,Setuserinfo]=useState({});
    
    const searchParams=useSearchParams();
    const username=searchParams.get("name");

    

    if(!username){
        return(
            <>
            <h1 className="text-red-500 text-center w-[50vw] m-auto bg-white rounded-lg text-4xl mt-50">Please enter the username</h1>
            </>
        )
    }

    

    useEffect(()=>{

       async function getvalues(){

        const res=await fetch(`https://api.genderize.io/?name=${username}`);
        const data=await res.json();
        console.log(data);
        Setuserinfo(data);

        }

        getvalues();
    },[])


     if(!userinfo.name){
        return null;
     }


    return(
        <>
        <h1>Datafetching in servercomponent-
            {
                userinfo.gender=="male" ? <span className="text-blue-500">{userinfo.name}</span>
                : <span className="text-pink-500">{userinfo.name}</span>
            }
            
        </h1>
        </>
    )
}

export default Datafetchclientcomp;