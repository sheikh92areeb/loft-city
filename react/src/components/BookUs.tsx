import { assets, bookUsListData } from "../assets/assets"

const BookUs = () => {
  return (
    <div className="flex max-sm:flex-col-reverse sm:items-center justify-between gap-4 px-8 md:px-16 lg:px-24 py-4">
      <div>
        <h3 className="text-2xl mb-8">Why book with us:</h3>
        <ul className="list-disc ps-4 md:ps-8">
            {bookUsListData.map((item, index) => (
                <li key={index} className="mb-1 text-sm md:text-lg">{item}</li>            
            ))}
        </ul>
      </div>
      <div>
        <img src={assets.bookUs} alt="Book Us Image" className="w-full sm:w-120 h-60" />
      </div>
    </div>
  )
}

export default BookUs