import HeadingSection from '@/components/layout/HeadingSection'
import MainSection from '@/components/layout/MainSection'
import Header from '@/components/shared/Header'

import React from 'react'

const page = () => {
  return (


      <div className='flex gap-20 justify-center flex-col'>

        <Header />

        <HeadingSection/>

        <MainSection/>

      </div>
       


  )
}

export default page