import { locationData } from "../assets/assets"
import LocationCard from "./LocationCard"

const Locations = () => {
  return (
    <div className="py-5">
      {locationData.map(({id, locationName, description, image, flexRev}) => (
        <LocationCard  key={id} locationName={locationName} description={description} image={image} flexRev={flexRev} />
      ))}
    </div>
  )
}

export default Locations
