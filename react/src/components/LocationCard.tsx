import { assets } from "../assets/assets"


const LocationCard = () => {
  return (
    <div className="bg-gray-100 flex justify-between gap-4 px-8 md:px-16 lg:px-24 py-4">
        <div className="flex-1/2 py-6 px-4">
            <h3 className="text-2xl mb-8">Why book with us:</h3>
            <p className="text-lg">Loft City is One of the best Vacation Rental Company. Which provide you the best Holidays Packages on your Desire Place. Travel with us for better experience of Exploring the World and Enjoying the Holidays. we have the great places for you, So come and make plane with us of your Vacation.</p>
        </div>
        <div className="flex-1/2">
            <img src={assets.bookUs} alt="Book Us Image" className="w-full h-70" />
        </div>
    </div>
  )
}

export default LocationCard
