import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { X } from 'lucide-react'
import { Link } from "react-scroll"
import { NavItemListProps, NavLinksProps, SidebarProps } from '@/types/interfaces'




const Navlinks: NavLinksProps[] = [

    {

        title: "Partners",
        href: "team"

    },

    {

        title: "Clients",
        href: "client"

    },

    {

        title: "Our Plans",
        href: "pricing"

    },

    {

        title: "Contact Us",
        href: "contactus"

    }


]

const NavItemList: React.FC<NavItemListProps> = ({ setIsOpen }): React.JSX.Element => {

    return (

        <div className='w-full mt-5'>

            <div className='flex items-center justify-center sm:justify-start w-full flex-col space-y-2 text-white'>

                {

                    Navlinks.map((item, index) => (

                        <Link

                            key={index}
                            to={item.href}
                            smooth={true}
                            duration={3500}
                            className='w-full sm:px-7 text-base sm:text-xl text-center sm:text-left'
                            onClick={() => setIsOpen(false)}

                        >
                            {item.title}

                        </Link>

                    )
                    )

                }

            </div>

        </div>

    )

}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }): React.JSX.Element => {
    return (
        <div>

            <Sheet

                open={isOpen}
                onOpenChange={setIsOpen}

            >
                <SheetTrigger asChild>Open</SheetTrigger>
                <SheetContent className='bg-black'>
                    <SheetTitle className='text-white flex items-center justify-start'>

                        <X onClick={() => setIsOpen(false)} />

                    </SheetTitle>
                    <SheetDescription className='flex items-center justify-center sm:justify-start mt-5'>

                        <NavItemList setIsOpen={setIsOpen} />

                    </SheetDescription>

                </SheetContent>
            </Sheet>


        </div>
    )
}

export default Sidebar