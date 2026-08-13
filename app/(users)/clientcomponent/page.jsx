"use client";

import {useState,useEffect} from "react";
import Counter from "./Counter";

function Clientcomponent(){

    const[postdata,Setpostdata]=useState([]);

    const URL="https://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{

        const fetchdata=async()=>{
            const res=await fetch(URL);
            const data=await res.json();
            Setpostdata(data);

            return data;
        }

        fetchdata();
    },[])

    return(
        <>
        <h1>Hello Client Component</h1>
        <button onClick={()=>alert("Hello Guys")} className="bg-pink-500 p-5 rounded-2xl cursor-pointer hover:scale-105  duration-500 transition-all" >Click me</button>

        <Counter />

        <ul className="grid grid-cols-3 gap-5">
           {

            postdata.map((index,key)=>{
                return(
                    <li key={key}>
                         {index.title}
                    </li>
                )
            })
           }
        </ul>
        
        </>
    )
}

export default Clientcomponent;