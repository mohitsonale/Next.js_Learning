"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Notfound(){

    const router=useRouter();
    return (
        <>
        <h1>Not found page</h1>
        <p>404 ERROR</p>
        <div className="flex gap-4">
        <Link href="/">Go Home</Link>
        <button onClick={()=>router.back()}>
            Go Back
        </button>
        </div>
        </>
    )
}

export default Notfound;