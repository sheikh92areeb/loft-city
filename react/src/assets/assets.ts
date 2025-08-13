import logo from './favicon.png'
import card1 from './card-1.jpg'
import card2 from './card-2.jpg'
import card3 from './card-3.jpg'
import card4 from './card-4.jpg'
import hero from './hero.jpg'
import bookUs from './book-us.jpg'
import title from './title.jpg'
import Map from './map.jpg'
import MissionDoloresPark from './mission-dolores-park.jpg'
import Castro from './the-castro.jpg'
import ChinaTown from './chinatown.jpg'
import Bridge from './bridge.jpg'
import Building from './building.jpg'
import type { 
    InfoProps, 
    LocationsData, 
    NavLinkItem, 
    QuickLinkItem,
    ReviewsData, 
    ServiceData 
} from './interfaces'

export const assets = {
    logo,    
    hero,
    bookUs,
    title,    
}

export const HomePageInfoPropsData: Readonly<InfoProps> = {
    heading: "Loft City - Urban Holiday Rentals in Karachi",
    body: "Loft City is One of the best Vacation Rental Company. Which provide you the best Holidays Packages on your Desire Place. Travel with us for better experience of Exploring the World and Enjoying the Holidays. we have the great places for you, So come and make plane with us of your Vacation."
}

export const navLinks: Readonly<NavLinkItem[]> = [
    { 
        path: '/', 
        linkname: 'Home' 
    },
    { 
        path: '/nearby', 
        linkname: 'Nearby Attractions' 
    },
    { 
        path: '/about', 
        linkname: 'About' 
    },
    { 
        path: '/contact', 
        linkname: 'Contact' 
    },
]

export const heroData: Readonly<InfoProps> = {
    heading: "\'Loft City,",
    body: '\"Feel at Home When Your\'re Away\"'
}

export const bookUsListData: Readonly<string[]> = [
    '500m to Union Square',
    '300m to Bart Station',
    '5 minutes walking to Muni',
    'Private parking in the same building',
    'Solarium and terrace on the roof',
]

export const reviewsData:ReviewsData[] = [
    { 
        review: "They are very Amazing, we enjoyed our Holidays a lot with them, we explored many things during tour and know about new things. I recommended you to travel with them.",
        name: "_Faizan_",
        star: 3
    },
    { 
        review: "We enjoyed our Holidays a lot with them, we explored many things during tour. their services were very nice. I recommended you to travel with them.",
        name: "_Ahmad_",
        star: 5
    },
    { 
        review: "They are very Amazing, we explored many things during tour. go with them and see the World. I recommended you to travel with them.",
        name: "_Maiz_Khan_",
        star: 4
    },
]

export const quickLinks: Readonly<QuickLinkItem[]> = [
    { 
        path: '/', 
        linkname: 'Home'
    },    
    {
        path: '/about', 
        linkname: 'About' 
    },
    { 
        path: '/contact', 
        linkname: 'Contact' 
    },
]

export const contactLinks: Readonly<[string, string, string]> = [
    'info@loftcity.com',
    'booking@loftcity.com',
    '+1 (345) 789 444'
]

export const serviceData: Readonly<ServiceData[]> = [
    {
        serviceCat: "Communication and entertainment:",
        serviceList: ["Free WiFi", "ADSL", "LCD TV in all the rooms" ,"International satellite TV", "Landline(*paid service)"]
    },
    {
        serviceCat: "Comfort and security:",
        serviceList: ["Air condition", "Safe", "Hairdryer", "Bed sheets"]
    },
    {
        serviceCat: "Kitchen",
        serviceList: ["Fridge", "Multifuctional oven with microwave", "Kettle & coffee maker", "Dishwasher", "Comprehensive set of cutlery,dishes,glasses"]
    }
]

export const locationData : Readonly<LocationsData[]> = [
    {
        id: 1,
        locationName: "",
        description: "Loft City is One of the best Vacation Rental Company. Which provide you the best Holidays Packages on your Desire Place. Travel with us for better experience of Exploring the World and Enjoying the Holidays. we have the great places for you, So come and make plane with us of your Vacation.",
        image: Map,
        flexRev: false
    },
    {
        id: 2,
        locationName: "Mission Dolores Park",
        description: "Mission Dolores Park is one of the best place of our vanues, here you can find all the facilities as home. like foods,enviroment & services, so please come and experience the place and our best services.",
        image: MissionDoloresPark,
        flexRev: true
    },
    {
        id: 3,
        locationName: "The Castro",
        description: "The Castro is the great place of our vanues, here you can get the complete facilities.like foods,enviroment & services such as home, so please come and experience the place and our best services.",
        image: Castro,
        flexRev: false
    },
    {
        id: 4,
        locationName: "China Town",
        description: "The best place China Town, you can get all the great service. so please come and experience the place and our best services.",
        image: ChinaTown,
        flexRev: true
    },
    {
        id: 5,
        locationName: "Golden Gate Bridge",
        description: "Golden Gate Bridge is the place to visit for seeing the beauty of nature, so please come and experience the place and our best services.",
        image: Bridge,
        flexRev: false
    },
]

export const contactPageData: Readonly<LocationsData> = {
    id:6,
    description: `At Loft City, your comfort and convenience are our top priorities. Whether you have a question about our rentals, need assistance with booking, or simply want to learn more about our services, we’re here to help. If you have any questions, please contact us by telephone or email and we'll get back to you as soon as possible. We look forward to hearing from you.`,
    image: Building,
    flexRev:false
}

export const aboutPageInfoPropsData: Readonly<InfoProps> = {
    heading: "There's a new way to stay in a city:live like a local.",
    body: "We provide fully furnished,high-end,affordable homes ranging from one bedroom to as large as eight bedrooms. You can rely on us to find you a perfect place to call home during your stay in city. Our goal is to provide you with an unforgettable living experience."
}

export const icons: Readonly<string[]> = [
    card1, 
    card2, 
    card3, 
    card4
]
