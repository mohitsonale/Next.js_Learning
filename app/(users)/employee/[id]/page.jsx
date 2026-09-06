import {db} from "@/config/db"
import { notFound } from "next/navigation";

export async function generateStaticParams(){
    const result=await db.query("select emp_id from employee");
    const employee = result.rows;

    return(
        employee.map((emp)=>(

            {id:emp.emp_id.toString(),}
        
        ))
    )
}

async function employeeid(props){

    const params=await props.params;
    console.log(params);

    const result=await db.query(`select * from employee where emp_id=$1`,[params.id]);
    const employee = result.rows[0];
    console.log(employee)

    if(!employee){
        return notFound();
    }

    return(
        <>
        <h1>Employee Details</h1>
        <p>ID:{employee.emp_id}</p>
        <p>Employee Name:{employee.fname}</p>
        </>
    )
}

export default employeeid;