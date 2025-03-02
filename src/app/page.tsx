import ClientSection from '@/components/layout/ClientSection'
import EmailSection from '@/components/layout/EmailSection'
import Features from '@/components/layout/Features'
import HeadingSection from '@/components/layout/HeadingSection'
import MainSection from '@/components/layout/MainSection'
import MidSection from '@/components/layout/MidSection'
import PricingSection from '@/components/layout/PricingSection'
import Team from '@/components/layout/Team'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import ScrollerWrapper from '@/components/shared/ScrollerWrapper'
import React from 'react'

const page = () => {
  return (

    <ScrollerWrapper>


      <div className='flex gap-20 justify-center flex-col'>

        <Header />

        <HeadingSection />

        <MainSection />

        <section id='team'>

          <Team />

        </section>

        <MidSection />

        <Features />

        <section id='client'>

          <ClientSection />

        </section>


        <section id='pricing'>

          <PricingSection />

        </section>

        <section id='contactus'>

          <EmailSection />

        </section>

        <Footer />

      </div>

    </ScrollerWrapper>

  )
}

export default page