import Image from 'next/image'
import React from 'react'

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = (): React.JSX.Element => {

  return (


    <div className='flex items-center justify-between flex-col lg:flex-row border border-gray-500 min-h-[30rem] lg:h-[30rem] h-full md:mx-5 xl:mx-0'>



      <div className='flex items-start justify-between flex-row lg:flex-col h-full w-full p-4 sm:p-8 lg:p-14'>

        <div className='flex items-center justify-center flex-row gap-2'>

          <Image

            src={"/assets/Header/Logo.png"}
            height={300}
            width={300}
            alt='icon'
            className='h-10 w-10 rounded-lg'

          />

          <span className='text-white text-sm sm:text-base'>AI StartUp Kit</span>

        </div>

        <div className='flex items-center justify-center flex-row gap-5 mt-2 lg:mt-0 lg:ml-1'>

          <FaInstagram size={30} color='purple' className='cursor-pointer'/>

          <FaTwitter size={30} color='white' className='cursor-pointer'/>

          <FaYoutube size={30} color='red' className='cursor-pointer'/>

        </div>


      </div>

      <div className='flex justify-center text-white h-full w-full flex-col lg:flex-row gap-10 p-6 sm:p-10 lg:p-16'>


        <div className='flex justify-start flex-row gap-4 lg:gap-16'>

          <ul className='flex justify-start flex-col gap-5'>

            <li className='text-white cursor-pointer'>Product</li>
            <li className='text-gray-400 cursor-pointer'>Features</li>
            <li className='text-gray-400 cursor-pointer'>Integration</li>
            <li className='text-gray-400 cursor-pointer'>Updates</li>
            <li className='text-gray-400 cursor-pointer'>FAQ</li>
            <li className='text-gray-400 cursor-pointer'>Pricing</li>

          </ul>

          <ul className='flex justify-start flex-col gap-5'>

            <li className='text-white cursor-pointer'>Company</li>
            <li className='text-gray-400 cursor-pointer'>About</li>
            <li className='text-gray-400 cursor-pointer'>Blog</li>
            <li className='text-gray-400 cursor-pointer'>Careers</li>
            <li className='text-gray-400 cursor-pointer'>Maifesto</li>
            <li className='text-gray-400 cursor-pointer'>Press</li>
            <li className='text-gray-400 cursor-pointer'>Contract</li>

          </ul>


        </div>



        <div className='flex justify-start flex-row gap-4 lg:gap-16'>

          <ul className='flex justify-start flex-col gap-5'>

            <li className='text-white cursor-pointer'>Resources</li>
            <li className='text-gray-400 cursor-pointer'>Examples</li>
            <li className='text-gray-400 cursor-pointer'>Community</li>
            <li className='text-gray-400 cursor-pointer'>Guides</li>
            <li className='text-gray-400 cursor-pointer'>Docs</li>
            <li className='text-gray-400 cursor-pointer'>Press</li>

          </ul>

          <ul className='flex justify-start flex-col gap-5'>

            <li className='text-white cursor-pointer'>Legal</li>
            <li className='text-gray-400 cursor-pointer'>Privacy</li>
            <li className='text-gray-400 cursor-pointer'>Terms</li>
            <li className='text-gray-400 cursor-pointer'>Security</li>


          </ul>

        </div>

      </div>


    </div>


  )
}

export default Footer