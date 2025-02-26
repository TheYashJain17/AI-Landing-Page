import HeadingSection from '@/components/layout/HeadingSection'
import MainSection from '@/components/layout/MainSection'
import MidSection from '@/components/layout/MidSection'
import Team from '@/components/layout/Team'
import Header from '@/components/shared/Header'

import React from 'react'

const page = () => {
  return (


      <div className='flex gap-20 justify-center flex-col'>

        <Header />

        <HeadingSection/>

        <MainSection/>

        <Team/>

        <MidSection/>

      </div>
       


  )
}

export default page