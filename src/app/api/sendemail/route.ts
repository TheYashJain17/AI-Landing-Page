import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

export const POST = async(req: NextRequest, res: NextResponse) => {

    try {
        
        if(req.method === "POST"){
            
            const {userEmail} = await req?.json();
            
            console.log("The user mail i am getting from the user is", userEmail)


            const transporter = nodemailer.createTransport({

                service: "gmail",
                port: 465,
                secure: true,
                auth:{

                    user: `${process?.env?.NEXT_PUBLIC_EMAIL_ID}`,
                    pass: `${process?.env?.NEXT_PUBLIC_EMAIL_PASSWORD}`,

                }

            })

            const mailOptions = {

                from: "yashjain07.yj@gmail.com",
                to: userEmail,
                subject: "Project1",
                text: "You Have Been Added To Waitlist Successfully",

            }

            transporter?.sendMail(mailOptions, (error, messageInfo) => {

                if(error){

                    console.log("The Error is", error);

                }else{

                    if(messageInfo){

                        console.log("Email Has Been Sent Successfully");

                    }

                }

            })

            return Response.json({

                status: "Success",
                data: {

                    message: "Email Has Been Sent Successfully",

                }

            })

        }

    } catch (error) {

        console.log(error);
        
    }

}