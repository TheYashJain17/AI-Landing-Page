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


export interface TeamTabProps{

  icon: string,

}


export interface FeaturesProps{

  heading: string,
  content: string,

}
export interface FeatureTabsProps{

  icon: React.ComponentType,
  heading: string,
  content: string

}


export interface PricingDetails{

  name: string,
  price: number,
  benefits: string[],

}

export interface PriceDetailsProps{

  PricingDetails: PricingDetails,
  index: number,

}