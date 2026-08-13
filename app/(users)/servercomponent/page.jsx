const Servercomponent=async()=>{

    const URL="https://jsonplaceholder.typicode.com/posts";

    const res=await fetch(URL);
    const data=await res.json();

    
    return(
        <>

        <ul className="grid grid-cols-3 gap-5">
            {
                data.map((index,key)=>{
                    return(
                        <li key={key}>
                            {index.title}
                        </li>

                    )
                })
            }
        </ul>
        </>
    )
}

export default Servercomponent;