import ClientSection from '@/components/layout/ClientSection'
import EmailSection from '@/components/layout/EmailSection'
import Features from '@/components/layout/Features'
import Footer from '@/components/layout/Footer'
import HeadingSection from '@/components/layout/HeadingSection'
import MainSection from '@/components/layout/MainSection'
import MidSection from '@/components/layout/MidSection'
import PricingSection from '@/components/layout/PricingSection'
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

        <Features/>

        <ClientSection/>

        <PricingSection/>

        <EmailSection/>

        <Footer/>

      </div>
       


  )
}

export default page