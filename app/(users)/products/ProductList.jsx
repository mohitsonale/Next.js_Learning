"use client"

import { useSearchParams } from "next/navigation";

const ProductList=()=>{

    const searchParams=useSearchParams();

    const pages=searchParams.getAll("page");
    const category=searchParams.get("category");

    console.log("page:",pages);
    console.log("category:",category);
    console.log("inner",searchParams)

    return(
        <>
        <h1>client-{category},{pages}</h1>
        </>
    )
}

export default ProductList;