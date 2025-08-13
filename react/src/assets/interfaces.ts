import type { ReactElement } from "react"

export interface InfoProps {
    heading: string,
    body: string
}

export interface NavLinkItem {
  path: string
  linkname: string
}

export interface NavLinksProps {
  links: Readonly<NavLinkItem[]>
  liClass?: string
  onClick?: () => void // for closing mobile menu on click
}

export interface FeaturesItems {
    icon: ReactElement,
    feature: string
}

export interface ReviewsData {
  review: string,
  name: string,
  star: number
}

export interface QuickLinkItem {
  path: string
  linkname: string
}

export interface ServiceData {
    serviceCat: string,
    serviceList: string[]
}

export interface LocationsData {
  id: number,
  locationName?: string,
  description: string,
  image: string,
  flexRev: boolean,
}

export interface LocationsProps {
  locationName?: string,
  description: string,
  image: string,
  flexRev: boolean,
}
