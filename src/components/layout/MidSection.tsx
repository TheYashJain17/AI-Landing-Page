"use client"

import Image from 'next/image'
import React from 'react'

import {motion} from "framer-motion";

const MidSection = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-2 px-5'>

            <div className='flex items-center justify-center text-wrap mb-8 lg:w-2/3'>

                <span className='text-white text-2xl font-semibold md:text-4xl md:font-bold text-center w-2/3'>Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</span>

            </div>

            <div className='flex items-center justify-center flex-col'>

            <div className='flex items-center justify-center flex-col lg:flex-row gap-3 w-full'>

            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}>

            <Image src={"/assets/MidSection/Ring.png"} alt='Ring' width={200} height={200} className='object-contain md:w-[24rem] h-[20rem] md:h-auto w-full'/>

        </motion.div>

        <motion.div
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.8}}
        >
                
                <Image src={"/assets/MidSection/UserFriendly.png"} alt='UserFriendly' width={500} height={500} className='object-fill lg:w-[53rem] h-[20rem] lg:h-auto w-full'/>


        </motion.div>


            </div>
            <div className='flex items-center justify-center flex-col lg:flex-row gap-3 w-full'>

              <motion.div
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.8}}
              
              >

                <Image src={"/assets/MidSection/VisualsReports.png"} alt='VisualReport' width={500} height={500} className='object-fill lg:w-[53rem] h-[20rem] lg:h-auto w-full'/>

              </motion.div>

              <motion.div
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.8}}
              
              >

                <Image src={"/assets/MidSection/Cone.png"} alt='cone' width={200} height={200} className='object-contain w-full md:w-[24rem] h-[20rem] md:h-auto'/>

              </motion.div>


            </div>
            </div>

    </div>
  )
}


export default MidSection