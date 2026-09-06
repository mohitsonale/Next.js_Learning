const Datacard=async({username})=>{

    await new Promise((resolve)=>{
        setTimeout(()=>{
         resolve();
        },3000);
    });

    const res=await fetch(`https://api.genderize.io/?name=${username}`)
    const data=await res.json();
    const dataprobability=data.probability*100
    console.log(data);
    return(
        <div className="mt-70">
            <h1>Datafetching in servercomponent-{data.name},{dataprobability}</h1>
        </div>
    )
}

export default Datacard;