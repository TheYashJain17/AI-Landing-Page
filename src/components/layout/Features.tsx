import React from 'react'

import { FeaturesProps, FeatureTabsProps } from '@/types/interfaces';

import {

    GrDashboard, 
    FaRegChartBar,
    GoNorthStar,
    VscChecklist,
    PiTargetBold,
    HiMiniBellAlert,
    FaWandMagicSparkles,
    PiCursorClickBold,
    LuNotepadText,
}
from "../../../public/assets/FeatureSection/icons";

const FeaturesData: FeaturesProps[] = [

    {
        heading: "User-Friendly Dashboard",
        content: "Perform complex SEO Audits And Optimizations With A Single Click."

    },

    {

        heading: "Visual Reports",
        content: "Visual Insights Into Your Application's Performance.",

    },

    {

        heading: "Smart Keyword Generator",
        content: "Automatic Suggestions And The Best Keywords To Target.",

    },

    {

        heading: "Content Evaluation",
        content: "Simple Corrections For Immediate Improvements.",

    },

    {

        heading: "SEO Goal Setting",
        content: "Helps You Set And Achieve SEO Goals With Guided Assistance.",

    },

    {
        heading: "Automated Alerts",
        content: "Automatic Notifications About Your SEO Health, Including Quick Fixes.",

    },

    {

        heading: "Link Optimization Wizard",
        content: "Guides You Through The Process Of Creating And Managing Links."

    },

    {

        heading: "One-Click Optimization",
        content: "Perform Complex SEO Audits And Optimizations With A Single Click.",

    },

    {

        heading: "Competitor reports",
        content: "Provides Insights Into Competitor's Keyword Strategies And Ranking.",

    }


]

const FeatureIcons = [GrDashboard, FaRegChartBar, GoNorthStar, VscChecklist, PiTargetBold, HiMiniBellAlert, FaWandMagicSparkles, PiCursorClickBold, LuNotepadText];

const FeatureTab: React.FC<FeatureTabsProps> = ({icon, heading, content}): React.JSX.Element => {

    return(

        <div className='flex items-center justify-center flex-col w-full gap-3 sm:gap-5'>

            <div className='flex items-center justify-center sm:justify-start flex-row w-full gap-1'>

                <div className='flex items-center justify-center sm:justify-start text-white text-center sm:text-left gap-2'>
                    {React.createElement(icon)}
                <span className='flex items-center justify-center text-wrap sm:justify-start text-white font-bold text-left w-full'>{heading}</span>
                </div>


            </div>
            <div className='flex items-center justify-center sm:justify-start w-full'>

                <span className='text-gray-400 text-wrap text-base text-center sm:text-left w-3/4'>{content}</span>

            </div>

        </div>

    )

}

const Features = () => {
  return (
    <div className='flex items-center justify-center w-full bg-gradient-to-r from-[#190D2E] to-[#020103]'>

    <div className='flex items-center justify-center flex-col py-10 gap-10 mx-2 lg:mx-10 w-full lg-w-[80%]'>

        <div className='flex items-center justify-center sm:justify-start w-full 2xl:w-[97%]'>

            <span className='text-2xl w-full sm:text-4xl xl:text-6xl text-white text-center sm:text-left font-medium sm:w-2/4 lg:w-1/4'>Elevate Your SEO Efforts</span>

        </div>

           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>

            {

                FeaturesData?.map((featureData , index) => {

                    return(

                        <FeatureTab
                        
                            key={index}
                            heading={featureData?.heading}
                            content={featureData?.content}
                            icon={FeatureIcons[index]}

                        />

                    )

                })

            }

               


           </div>

    </div>

    </div>
  )
}

export default Features



