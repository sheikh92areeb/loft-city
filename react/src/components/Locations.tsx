import { assets } from "../assets/assets"
import LocationCard from "./LocationCard"

interface LocationsData {
  id: number,
  locationName?: string,
  description: string,
  image: string,
  flexRev: boolean,
}

const locationData : LocationsData[] = [
  {
    id: 1,
    locationName: "",
    description: "Loft City is One of the best Vacation Rental Company. Which provide you the best Holidays Packages on your Desire Place. Travel with us for better experience of Exploring the World and Enjoying the Holidays. we have the great places for you, So come and make plane with us of your Vacation.",
    image: `${assets.Map}`,
    flexRev: false
  },
  {
    id: 2,
    locationName: "Mission Dolores Park",
    description: "Mission Dolores Park is one of the best place of our vanues, here you can find all the facilities as home. like foods,enviroment & services, so please come and experience the place and our best services.",
    image: `${assets.MissionDoloresPark}`,
    flexRev: true
  },
  {
    id: 3,
    locationName: "The Castro",
    description: "The Castro is the great place of our vanues, here you can get the complete facilities.like foods,enviroment & services such as home, so please come and experience the place and our best services.",
    image: `${assets.Castro}`,
    flexRev: false
  },
  {
    id: 4,
    locationName: "China Town",
    description: "The best place China Town, you can get all the great service. so please come and experience the place and our best services.",
    image: `${assets.ChinaTown}`,
    flexRev: true
  },
  {
    id: 5,
    locationName: "Golden Gate Bridge",
    description: "Golden Gate Bridge is the place to visit for seeing the beauty of nature, so please come and experience the place and our best services.",
    image: `${assets.Bridge}`,
    flexRev: false
  },
]

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
