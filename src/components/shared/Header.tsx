"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'

import Sidebar from './Sidebar'
import { Link } from "react-scroll"

const Header = (): React.JSX.Element => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className='bg-black h-[10vh] flex items-center justify-center px-8'>

            <div className='flex items-center justify-between md:justify-around flex-row w-full'>

                <div>

                    <Image

                        height={50}
                        width={50}
                        src="/assets/Header/Logo.png"
                        alt='Logo'

                    />

                </div>

                <div className='md:max-w-[30rem] lg:max-w-[38rem] w-full md:px-4 md:mx-4 items-center justify-center hidden md:flex'>

                    <ul className='flex items-center justify-center w-full border border-gray-500 rounded-full h-10 p-2 md:gap-5 lg:gap-14'>

                        <li className='text-gray-300 font-medium text-sm lg:text-base cursor-pointer'><Link className='cursor-pointer' to={"team"} smooth={true} duration={3500}>Partners</Link></li>
                        <li className='text-gray-300 font-medium text-sm lg:text-base cursor-pointer'><Link className='cursor-pointer' to={"client"} smooth={true} duration={3500}>Clients</Link></li>
                        <li className='text-gray-300 font-medium text-sm lg:text-base cursor-pointer'><Link className='cursor-pointer' to={"pricing"} smooth={true} duration={3500}>Our Plans</Link></li>
                        <li className='text-gray-300 font-medium text-sm lg:text-base cursor-pointer'><Link className='cursor-pointer' to={"contactus"} smooth={true} duration={3500}>Contact Us</Link></li>

                    </ul>

                </div>


                <div className='flex items-center justify-center gap-4'>

                    <Link to='contactus' smooth={true} duration={3500}>
                        <Button>Join Waitlist</Button>
                    </Link>

                    <div className='flex items-center justify-center mb-2 md:hidden'>

                        <span className='text-white text-5xl' onClick={() => setIsOpen(!isOpen)}>&#9776;</span>

                    </div>


                </div>

                {

                    isOpen &&

                    (<div className='block md:hidden'>

                        <Sidebar

                            isOpen={isOpen}
                            setIsOpen={setIsOpen}

                        />

                    </div>)

                }




            </div>

        </header>
    )
}

export default Header