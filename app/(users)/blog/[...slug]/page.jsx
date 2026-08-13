
async function blog(props){

    const {slug}=await props.params;
    console.log(slug)

    return(
        <>

        <h1>E-Commerce</h1>
        
        </>
    )
}

export default blog;