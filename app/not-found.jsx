import Link from "next/link";

function Notfound(){
    return (
        <>
        <h1>Not found page</h1>
        <p>404 ERROR</p>
        <Link href="/">Go Home</Link>
        </>
    )
}

export default Notfound;