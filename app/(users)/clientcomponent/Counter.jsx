import {useState} from "react";

function Counter(){

    const[counter,Setcounter]=useState(0);

    return(
        <>
        <button onClick={()=>Setcounter(counter+1)} className="bg-purple-500 p-5 rounded-2xl">ADD+ {counter}</button>
        </>
    )
}

export default Counter;