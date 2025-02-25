import React from "react"

export interface SidebarProps {

    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children?: React.ReactNode,

}

export interface NavItemListProps{

  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,

}

export interface NavLinksProps{

    title: string,
    href: string,

}

