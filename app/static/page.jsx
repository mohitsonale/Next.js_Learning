import { db } from "@/config/db"

async function Static(){

    const result=await db.query("select * from employee");
    const employee = result.rows;
    console.log(employee);
    return(
        <div>

        <h1>hii fullstack developer</h1>
       
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
export default Static;