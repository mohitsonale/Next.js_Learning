"use client";
import {use} from "react"; 

const singlepagepost=(props)=>{

    const user= use(props.params);

    return(
        <div>
            <h1>username={user.username},postId={user.postId}</h1>
        </div>
    )
}

export default singlepagepost;