import Image from 'next/image'
import React from 'react'

const MainSection = (): React.JSX.Element => {
  return (
    <div className='flex items-center justify-center h-full'>

        <Image

            src={"/assets/MainSection/main.png"}
            alt='main'
            height={10000}
            width={10000}
            className='w-full h-full max-w-[1300px] px-5 xl:px-0 object-contain shadow-custom-shadow'

        />


     </div>
  )
}

export default MainSection