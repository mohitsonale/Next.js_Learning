import { db } from "@/config/db"
export const dynamic='force-dynamic';
import { cache } from "react";

async function Dynamic(){

    const employee=await getallemployee();
  
    console.log("Dynamic Page");
    return(
        <div>
            <h1>Dynamic page</h1>
       

        <Employeelist employee={employee} />
        </div>

        

    )
}
export default Dynamic;

async function Employeelist(){

    const employee=await getallemployee();
  
    return(
        <div>
           
       
        <ul>

        {
            employee.map((item,index)=>{
                return(
                   
                        <li key={index}>{item.fname}</li>
                    
                    
                )
            })
        }
        
        </ul>
      
        </div>

        

    )


}

const getallemployee=cache(async()=>{
    const result=await db.query("select * from employee");
    const employee = result.rows;
    return employee;
})