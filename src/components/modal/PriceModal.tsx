import { PriceDetailsProps } from '@/types/interfaces'
import React from 'react'

import { FaCheck } from 'react-icons/fa'

import { motion } from "framer-motion";

import { Link } from 'react-scroll';



const PriceModal: React.FC<PriceDetailsProps> = ({ PricingDetails, index }): React.JSX.Element => {


    return (

        <motion.div
            initial={index == 0 ? { x: -60, opacity: 0 } : index == 1 ? { y: 60, opacity: 0 } : { x: 60, opacity: 0 }}

            whileInView={

                index == 0 ?

                    {
                        x: 0,
                        opacity: 1,
                        transition: {

                            type: "tween",
                            bounce: 0.8,
                            duration: 1.2
                        }
                    }
                    :

                    index == 1 ?

                        {
                            y: 0,
                            opacity: 1,
                            transition: {

                                type: "tween",
                                bounce: 0.8,
                                duration: 1.2

                            }
                        }
                        :

                        {
                            x: 0,
                            opacity: 1,
                            transition: {

                                type: "tween",
                                bounce: 0.8,
                                duration: 1.2

                            }
                        }



            }
            viewport={{ amount: 0.8 }}
            className={`${PricingDetails?.name == "Pro" ? "shadow-custom-shadow shadow-[#8C45FF]" : ""} h-[500px] max-w-[300px] p-5 w-full border border-gray-500 rounded-lg border-opacity-35 flex justify-between gap-5 flex-col bg-transparent mx-2`}
            style={{
                backgroundImage: 'url(/assets/PricingSection/ModalBG.png)',
                backgroundPosition: "center",
                objectFit: "cover"

            }}

        >


            <div className='flex justify-start gap-5 flex-col'>



                <div className='flex justify-start flex-col gap-1'>

                    <span className='text-2xl text-white font-medium'>{PricingDetails?.name}</span>
                    <span className='text-base text-gray-400'>${PricingDetails?.price}/mo</span>

                </div>

                <div className='flex items-center justify-center'>

                    <span className='h-[1px] px-5 w-11/12 bg-slate-500 opacity-40'></span>

                </div>


                <div className='flex justify-start flex-col'>

                    {

                        PricingDetails?.benefits?.map((benefit: string, index: number) => (

                            <div key={index} className='flex justify-start flex-row gap-2'>

                                <span className='mt-1 text-white'><FaCheck /></span>

                                <span className='mb-2 text-base text-white'>{benefit}</span>

                            </div>

                        ))

                    }



                </div>

            </div>

            <Link to='contactus' smooth={true} duration={2500}>
                <button className={`flex items-center justify-center cursor-pointer text-white font-medium h-[2.5rem] w-full rounded-xl border-2 border-gray-400 bg-[#282729] hover:bg-[#8C45FF] transition ease-in-out duration-500`}>Join Waitlist</button>
            </Link>


        </motion.div>


    )
}

export default PriceModal