const singleprofile=async(props)=>{

    const user=await props.params

    return(
        <div>
            <h1>user={user.username}</h1>
        </div>
    )
}

export default singleprofile;