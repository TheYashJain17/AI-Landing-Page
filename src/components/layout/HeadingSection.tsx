"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-scroll'

const HeadingSection = (): React.JSX.Element => {
  return (
    <div className='flex items-center justify-center flex-col gap-4'>

      <div className='border border-gray-400 rounded-full flex items-center justify-center flex-row h-10 min-w-[310px] gap-4'>

        <span className='border border-black rounded-xl text-black w-12 flex items-center justify-center h-5 text-[12px] bg-[#9855FF]'>

          NEW

        </span>
        <span className='text-[#9855FF] font-semibold'>

          Latest integration just arrived

        </span>

      </div>
      <div className='flex items-center justify-center text-center flex-col px-2'>

        <span className='text-5xl sm:text-7xl font-bold text-white'>Boost Your</span>
        <span className='text-5xl sm:text-7xl font-bold bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent pb-2 sm:pb-5 text-center'>Rankings With AI.</span>

      </div>
      <div className='flex items-center justify-center max-w-[500px]'>

        <span className='text-center md:px-2 px-5 text-base md:text-xl text-white'>

          Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.

        </span>

      </div>
      <div className='flex items-center justify-center'>

        <Link to='pricing' smooth={true} duration={3500}>
          <Button>Start For Free</Button>
        </Link>

      </div>

    </div>
  )
}

export default HeadingSection