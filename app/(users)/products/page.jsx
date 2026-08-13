import ProductList from "./ProductList";

const products=async({searchParams})=>{

    const searchParam=await searchParams;

    console.log("Outer",searchParam)

    const category=searchParam?.category || "all";
    const sort=searchParam.sort || "default";
    const page=searchParam.page || 1;

    return(
        <div>
            <ProductList />
            <h1>products={category},{sort},{page}</h1>
            
        </div>
    )

}

export default products;