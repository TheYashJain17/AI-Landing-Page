"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import sendEmail from '@/utilities/sendEmail'

const EmailSection = (): React.JSX.Element => {

    const [userMail, setUserMail] = useState<string>("");

    useEffect(() => {

        console.log("User email is", userMail);

    }, [userMail])



    return (
        <div className='flex items-center justify-center w-full'>

            <div
                className='flex items-center justify-center flex-col gap-8 border border-gray-500 w-full sm:w-[75%] h-[500px] bg-transparent rounded-sm'
                style={{
                    backgroundImage: "url(/assets/EmailSection/EmailSection.png)",
                    backgroundPosition: "center",
                    objectFit: "cover"
                }}
            >

                <div className='w-full md:w-[30%] flex items-center justify-center'>

                    <span className='text-white text-3xl sm:text-6xl font-normal text-center'>AI-driven SEO for everyone.</span>

                </div>
                <div className='flex items-center justify-center gap-2 text-white flex-col md:flex-row'>

                    <div>

                        <Input className='text-sm' placeholder='Your Email' value={userMail} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserMail(e.target.value)} />

                    </div>

                    <Button onClick={() => {
                        sendEmail(userMail);
                        setTimeout(() => {
                            setUserMail("");
                        }, 1000)
                            

                    }}>Join Waitlist</Button>


                </div>
                <div className='flex items-center justify-center flex-col md:flex-row'>

                    <span className='text-base text-gray-500 mx-1 '>No credit card required</span>
                    <span className='text-base text-gray-500 mx-1 mb-2 hidden md:block'>.</span>
                    <span className='text-base text-gray-500 mx-1 '>7-days free trial</span>


                </div>

            </div>
        </div>

    )
}

export default EmailSection