import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/karanbhatt1')
        .then((res)=>res.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])

    return(
        <div className='flex flex-col rounded-full border-solid border-4 border-green-400 backdrop-blur-lg'>
            <img className=" h-full w-full rounded-full" src={data["avatar_url"]} alt="image" />
        </div>
    )
 
}

export default Github