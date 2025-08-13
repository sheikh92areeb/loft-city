import type { FC } from "react"
import { FaUser } from "react-icons/fa"
import { LiaStarSolid } from "react-icons/lia"
import type { ReviewsData } from "../assets/interfaces"

const ReviewsCard: FC<ReviewsData> = ({ review, name, star }) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-gray-800 duration-500">
        <div className="icon w-10 h-10 text-gray-700 border rounded-full flex items-center justify-center mb-2"><FaUser size="20px" /></div>
        <div className="stars flex gap-1 mb-4">
            {Array(5).fill(5).map((_, index) => (
                <LiaStarSolid key={index} color={ (index + 1) <= star ? "#FFD700" : ""} />
            ))}            
        </div>
        <div className="msg text-center">{review}</div>
        <div className="name text-gray-700">{name}</div>
    </div>              
  )
}

export default ReviewsCard
