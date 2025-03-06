import Image from 'next/image'
import React from 'react'

const ClientSection = (): React.JSX.Element => {
    return (

        <div>

            <div className='flex items-center justify-center flex-col gap-3 w-full'>


                <div className='flex items-center justify-center'>

                    <span className='text-white text-4xl md:text-6xl font-medium'>Our Clients</span>

                </div>
                <div className='flex items-center justify-center text-wrap'>

                    <span className='text-white text-center text-xl md:text-2xl w-full md:w-1/2 mx-2'>Hear firsthand how our solutions have boosted online success for users like you.</span>

                </div>
            </div>


            <div className='w-full hidden sm:flex items-center justify-center relative '>

                <div className='max-w-[1200px] w-full relative h-full'>

                    <Image

                        src={"/assets/ClientSection/Client.png"}
                        alt="Privacy Policy"
                        height={500}
                        width={500}
                        loading='lazy'
                        className='object-contain w-full'

                    />


                </div>

                <div className='flex items-end justify-center text-white flex-col absolute inset-0 w-full'>

                    <div className='sm:w-[50%]'>

                        <div className='w-[320px] md:w-[350px]'>

                            <span className='text-center md:text-left text-base sm:text-xl md:text-2xl text-wrap'>&quot;This product has completely transformed how I manage my projects and deadlines&quot;</span>

                            <div className='flex justify-start flex-col mt-3 md:mt-5 gap-2'>

                                <span className='flex items-center justify-start text-sm sm:text-base text-gray-300'>Talia Taylor</span>


                                <span className='flex items-center justify-start text-sm sm:text-base text-gray-400'>Digital Marketing Director @ Quantum</span>

                            </div>


                        </div>

                    </div>

                </div>
            </div>



            <div className='w-full flex sm:hidden items-center justify-center flex-col'>

                <div className='max-w-[400px] w-full h-full'>

                    <Image

                        src={"/assets/ClientSection/Client1.png"}
                        alt="Privacy Policy"
                        height={500}
                        width={500}
                        loading='lazy'
                        className='object-contain w-full'

                    />


                </div>

                <div className='flex items-center justify-center text-white flex-col w-full'>


                            <span className='text-center md:text-left text-xl md:text-2xl text-wrap w-2/3'>&quot;This product has completely transformed how I manage my projects and deadlines&quot;</span>

                            <div className='flex justify-center flex-col mt-3 md:mt-5 gap-2'>

                                <span className='flex items-center justify-center text-base text-gray-300'>Talia Taylor</span>


                                <span className='flex items-center justify-center text-base text-gray-400'>Digital Marketing Director @ Quantum</span>

                            </div>


                        </div>

                    </div>


        </div>
    )
}

export default ClientSection



