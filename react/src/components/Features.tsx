import { IoWifi } from "react-icons/io5";
import { BsLamp } from "react-icons/bs";
import { CiParking1 } from "react-icons/ci";
import { SlPlane } from "react-icons/sl";
import { GiBroom } from "react-icons/gi";

const featuresData = [
  { icon: <IoWifi />, feature: "Free WiFi" },
  { icon: <BsLamp />, feature: "Fully Furnished" },
  { icon: <CiParking1 />, feature: "Free Parking" },
  { icon: <SlPlane />, feature: "Airport Transfers" },
  { icon: <GiBroom />, feature: "Cleaning Services" },
]



const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 px-8 md:px-16 lg:px-24 py-4">
      {featuresData.map((feature, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-4 mb-4">
          <span className="text-4xl font-light">{feature.icon}</span>
          <p className="text-lg">{feature.feature}</p>
        </div>        
      ))}
    </div>
  )
}

export default Features
