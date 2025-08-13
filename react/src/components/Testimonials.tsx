import { reviewsData } from "../assets/assets"
import ReviewsCard from "./ReviewsCard"

const Testimonials = () => {
  return (
    <div className="bg-gray-100 px-8 md:px-16 lg:px-24 py-6">
      <h3 className="text-2xl mb-8">People say the nicest things…</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviewsData.map((review, index) => (
          <ReviewsCard key={index} review={review.review} name={review.name} star={review.star} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
