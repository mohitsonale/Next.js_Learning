import { Suspense } from "react";
import Datacard from "./Datacard";


const Datafetchservercomp=async(props)=>{
    
    const searchParams=await props.searchParams;
    const username=searchParams.name



    if(!username){
        return(
            <>
            <h1 className="text-red-500 text-center w-[50vw] m-auto bg-white rounded-lg text-4xl mt-50">Please enter the username</h1>
            </>
        )
    }

    if(username===""){
        return(
            <>
            <h1 className="text-pink-500 text-4xl w-[5-vw] bg-white rounded-lg text-center">Please enter the username don't use ""</h1>
            </>
        )
    }




   

    return(
        <>
        <div className="grid grid-cols-2  gap-5"> 
            
         <div className="mt-70">
         
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores exercitationem sit commodi, sequi accusamus facere totam! Neque natus, deserunt laboriosam fuga impedit beatae eum vel!</p>
        
         </div>

         <Suspense fallback={<h1 className="text-red-500 text-center w-[50vw] m-auto bg-white rounded-lg text-4xl mt-50">Loading...</h1>}>
            <Datacard username={username} />

         </Suspense>
        </div>
        </>
    )
}

export default Datafetchservercomp;