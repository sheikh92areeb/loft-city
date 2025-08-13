import type { FC } from "react"
import type { LocationsProps } from "../assets/interfaces"

const LocationCard: FC<LocationsProps> = ({locationName, description, image, flexRev}) => {
  return (
    <div className={`${flexRev ? "bg-white md:flex-row-reverse" : "bg-gray-100 md:flex-row"} flex-col flex justify-between gap-4 px-8 md:px-16 lg:px-24 py-2 mb-5`}>
        <div className="flex-1/2 py-6 px-4">
            {locationName && <h3 className="text-2xl mb-8">{locationName}</h3> }            
            <p className="text-lg">{description}</p>
        </div>
        <div className="flex-1/2">
            <img src={image} alt="Location Image" className="w-full h-80" />
        </div>
    </div>
  )
}

export default LocationCard
