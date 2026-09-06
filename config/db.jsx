import {Pool} from "pg";

export const db=new Pool({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"12132218",
    database:"Employee"
})