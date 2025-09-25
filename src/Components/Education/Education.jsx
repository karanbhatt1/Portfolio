import React from 'react'
import { motion } from 'framer-motion'
import { Scrolling } from "../index"
import "../../Styles/vertical.css"

const Education = () => {
  return (
    <div id='Education' className='edu bg-black border-white/35 rounded-md border-solid border-2 container flex flex-col items-center p-2'>
       <motion.h1 
      className='fade-in mb-5 text-white text-5xl text-center'>Education And Certifications</motion.h1>
      <Scrolling/>
      </div>
  )
}

export default Education