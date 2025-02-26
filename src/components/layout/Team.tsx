import Image from 'next/image'
import React from 'react'

import { TeamTabProps } from '@/types/interfaces'


const TeamIcons: string[] = [

  "/assets/TeamSection/Acme.png",
  "/assets/TeamSection/Echo.png",
  "/assets/TeamSection/Quantum.png",
  "/assets/TeamSection/Pulse.png",
  "/assets/TeamSection/Outside.png",
  "/assets/TeamSection/Apex.png",
  "/assets/TeamSection/Celestial.png",
  "/assets/TeamSection/Twice.png",

]

const TeamTab = ({icon}: TeamTabProps): React.JSX.Element => {

  return(

    <div className='flex items-center justify-center min-w-[5rem] w-full h-[5rem] border border-gray-800 rounded-lg'>

        <Image src={icon} alt='icon' height={150} width={130} className='min-h-[3rem] object-contain'/>

    </div>


  )

}

const TeamSection = (): React.JSX.Element => {

    return(

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 px-4 w-[70rem]'>

              {

                TeamIcons?.map((item:string, index:number) => (

                    <TeamTab key={index} icon={item}/>

                ))

              }
            

        </div>

    )

}

const Team = (): React.JSX.Element => {
  return (

    <div className='flex items-center justify-center flex-col gap-8 md:gap-16 w-full'>

      <div className='flex items-center justify-center px-2'>

          <span className='text-white text-sm md:text-xl'>Trusted By The World's Most Innovative Teams</span>

      </div>

    <div className='w-full flex items-center justify-center md:px-5'>

        <TeamSection/>

    </div>
    </div>
  )
}

export default Team