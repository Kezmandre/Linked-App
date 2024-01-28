import React from 'react'
import {motion} from "framer-motion"

const Reveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, scale:0, x:500}}
    whileInView={{opacity:1, scale:1, x:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    
    >{children}</motion.div>
  )
}

export default Reveal