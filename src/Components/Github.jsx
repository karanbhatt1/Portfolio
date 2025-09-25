import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
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
        <motion.div 
        whileHover={{scale:1.1}} 
        transition={
        {type: "spring",      // spring effect (bouncy)
        stiffness: 300,      // kitna tight hai spring
        damping: 10   
        }      // kam damping = zyada bounce
        }
        className='prof self-center rounded-full border-solid border-4 border-green-400 backdrop-blur-lg'>
            <img className="rounded-full" src={data["avatar_url"]} alt="image" />
        </motion.div>
    )
 
}

export default Github