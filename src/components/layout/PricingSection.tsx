
"use client"

import React from 'react'
import PriceModal from '../modal/PriceModal'
import { PricingDetails } from '@/types/interfaces'


const pricingDetails: PricingDetails[] = [

    {

        name: "Regular",
        price: 29,
        benefits: [

            "Keyword Optimisation",
            "Automated Meta Tags",
            "SEO Monitoring",
            "Monthly Reports",

        ],

    },

    {

        name: "Pro",
        price: 79,
        benefits: [


            "Keyword Optimisation",
            "Automated Meta Tags",
            "SEO Monitoring",
            "Monthly Reports",
            "Content Suggestions",
            "Link Optimization",

        ],

    },

    {

        name: "Business",
        price: 149,
        benefits: [

            "Keyword Optimisation",
            "Automated Meta Tags",
            "SEO Monitoring",
            "Monthly Reports",
            "Content Suggestions",
            "Link Optimization",
            "MultiUser Access",
            "API Integration"

        ]

    }


]

const PricingSection = () => {
    return (

        <div className='flex items-center justify-center flex-col gap-10 px-5 '>

            <div className='flex items-center justify-center flex-col gap-10'>

                <span className='text-5xl md:text-6xl text-white font-medium'>Pricing</span>
                <span className='text-xl md:text-2xl text-white w-3/4 md:w-1/2 text-center font-normal'>Choose the right plan to meet your SEO needs and start optimizing today.</span>

            </div>

            <div className='flex items-center justify-evenly flex-col gap-7 md:flex-row md:gap-0 w-full'>

                {

                    pricingDetails?.map((priceDetails: PricingDetails, index: number) => (

                            <PriceModal key={index} PricingDetails={priceDetails} index={index}/>


                    ))

                }

            </div>


        </div>



    )
}

export default PricingSection



